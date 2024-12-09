'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import axios from 'axios';

interface MessageContent {
  type: string;
  text?: {
    value: string;
    annotations: any[];
  };
}

interface Message {
  id: string;
  role: string;
  content: MessageContent[];
}

export function HeroSection() {
  const [chatInput, setChatInput] = useState<string>('');
  const [chatResponse, setChatResponse] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const assistantId = process.env.NEXT_PUBLIC_ASSISTANT_ID as string;
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY as string;

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setIsSubmitting(true);
    setChatResponse('');

    try {
      // Create a thread and run the assistant in one request
      const runResponse = await axios.post(
        'https://api.openai.com/v1/threads/runs',
        {
          assistant_id: assistantId,
          thread: {
            messages: [
              {
                role: 'user',
                content: chatInput,
              },
            ],
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          },
        }
      );

      const runId = runResponse.data.id;
      const threadId = runResponse.data.thread_id;

      // Poll the run status until it's completed or failed
      let runStatus = runResponse.data.status;
      while (runStatus !== 'completed' && runStatus !== 'failed' && runStatus !== 'incomplete') {
        await new Promise((r) => setTimeout(r, 1000));
        const runCheck = await axios.get(
          `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'OpenAI-Beta': 'assistants=v2'
            },
          }
        );
        runStatus = runCheck.data.status;
      }

      if (runStatus === 'completed') {
        // Once completed, fetch messages to get the assistant response
        const messagesResponse = await axios.get(
          `https://api.openai.com/v1/threads/${threadId}/messages`,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'OpenAI-Beta': 'assistants=v2'
            },
          }
        );

        const messages: Message[] = messagesResponse.data.data;
        // Find the last assistant message
        const assistantMessage = [...messages].reverse().find((msg) => msg.role === 'assistant');
        if (assistantMessage && assistantMessage.content && assistantMessage.content.length > 0) {
          const assistantText = assistantMessage.content
            .filter((c) => c.type === 'text')
            .map((c) => c.text?.value)
            .join(' ');
          setChatResponse(assistantText || 'No response content.');
        } else {
          setChatResponse('No assistant response found.');
        }
      } else {
        setChatResponse('The run did not complete successfully.');
      }
    } catch (error: any) {
      console.error('Assistants API Error:', error);
      setChatResponse('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Content Creator turned
            <span className="text-primary"> Software Engineer</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            From engaging 230k+ followers to engineering robust solutions.
            Passionate about creating impactful technology that makes a difference.
          </p>
          {/* Chat Input */}
          <form onSubmit={handleChatSubmit} className="mt-6 space-y-4">
            <label htmlFor="chat-input" className="block text-md font-medium text-gray-700">
              Ask Me Anything
            </label>
            <input
              type="text"
              id="chat-input"
              placeholder="Type your question here..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Thinking...' : 'Ask Kamil'}
            </Button>
          </form>
          {chatResponse && (
            <div className="mt-4 p-4 border border-gray-300 rounded">
              <h4 className="font-semibold">Response:</h4>
              <p>{chatResponse}</p>
            </div>
          )}
          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <Button asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/dusek2" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/kdusek/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-primary/10">
            <Image
              src="https://github.com/dusek2/PORTFOLIO/blob/main/site/assets/IMG_7097.JPG?raw=true"
              alt="Kamil Dusejovsky"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
