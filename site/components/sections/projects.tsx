'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Rocket, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'REVEL',
    description: 'Co-Founder/CTO at REVEL - Making Real-World Products Robot-Ready™. Leading architecture and delivery of Robot Ready certification system.',
    icon: Rocket,
    image: '/assets/revel.jpeg',
    tags: ['Robotics', 'System Architecture', 'Startups', 'Technical Leadership'],
    details: [
      'Lead architecture and delivery of Robot Ready™ certification system',
      'Work across teams to align pilots, packs, and certification',
      'Drive steady release cadence and ensure partner programs run securely',
      'Build trust through clear systems, fast execution, and privacy-first workflows'
    ],
    github: 'https://revelstudios.io/',
    period: 'Aug 2024 - Present'
  },
  {
    title: 'BALANC',
    description: 'Technical Co-Founder of BALANC - Virtual fitness platform that unifies coaching, scheduling, video, and payments.',
    icon: Activity,
    image: '/assets/Logo_text_Simple.jpg',
    tags: ['Fitness Tech', 'Web Development', 'Startups', 'Technical Architecture'],
    details: [
      'Led technology strategy and delivery of virtual fitness platform',
      'Built secure, scalable MVP using third-party platforms and integrations',
      'Drove partner pilots with trainers and wellness brands',
      'Validated early market fit and positioned BALANC in digital fitness'
    ],
    github: 'https://thebalanc.com/',
    period: 'Apr 2023 - Apr 2025'
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
        <h2 className="text-3xl font-bold text-center mb-8">Companies & Ventures</h2>
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
                  <div className="aspect-[4/1] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full transition-transform hover:scale-105 bg-gray-50"
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
                            <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
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