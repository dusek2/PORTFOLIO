'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Cryptocurrency Price Prediction',
    description: 'Machine learning model for predicting cryptocurrency prices using over a decade of historical data.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60',
    tags: ['Python', 'PyTorch', 'Machine Learning', 'Data Analysis'],
    details: [
      'Implemented LSTM neural networks for temporal analysis',
      'Processed 10+ years of historical crypto data',
      'Achieved improved prediction accuracy vs baselines',
      'Built data visualization dashboard'
    ],
    github: 'https://github.com/dusek2/cryptoPriceAI',
    period: 'Jan 2024 - Present'
  },
  {
    title: 'LifeQuest',
    description: 'Gamified personal development web application with goal tracking and interactive features.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'AWS', 'Express'],
    details: [
      'Led team of 9 developers',
      'Implemented RESTful APIs and authentication',
      'Deployed on AWS using EC2 and S3',
      'Built interactive dashboards'
    ],
    github: 'https://github.com/dusek2/LifeQuest',
    period: 'Jan 2024 - Present'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-background/90 p-2 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button asChild variant="default">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" /> View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}