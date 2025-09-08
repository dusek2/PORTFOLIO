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
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
                  <motion.div 
                    className="aspect-[4/1] relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="object-contain w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <motion.div 
                      className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg border"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: index * 0.2 + 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <motion.h3 
                            className="text-xl font-bold"
                            whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p 
                            className="text-sm text-muted-foreground mt-1"
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.period}
                          </motion.p>
                        </div>
                      </div>
                      <motion.p 
                        className="mt-2 text-muted-foreground"
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <motion.ul 
                          className="list-disc list-inside space-y-1 text-sm text-muted-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                        >
                          {project.details.map((detail, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + 0.7 + i * 0.1 }}
                              whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.2 + 0.9 + tagIndex * 0.1 }}
                              whileHover={{ 
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="cursor-pointer hover:bg-primary/10 transition-colors duration-200"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                        <motion.div 
                          className="flex gap-4 pt-4"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 + 1.0 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button asChild variant="default" className="relative overflow-hidden group">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                                  initial={{ x: "-100%" }}
                                  whileHover={{ x: "100%" }}
                                  transition={{ duration: 0.6 }}
                                />
                                <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                                <span className="relative z-10">Visit Website</span>
                              </a>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}