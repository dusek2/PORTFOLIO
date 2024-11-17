'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Message"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/dusek2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/dusek2</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kdusek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/kdusek</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}