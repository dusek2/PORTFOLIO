'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
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
          <div className="flex gap-4">
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