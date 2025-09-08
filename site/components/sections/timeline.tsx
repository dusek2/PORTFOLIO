'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Youtube, GraduationCap, BookOpen, Briefcase, Code, Rocket } from 'lucide-react';

const timelineData = [
  {
    year: '2017-2022',
    title: 'YouTube Creator',
    description: '230k followers, 35M+ views',
    icon: Youtube,
    color: 'text-red-500',
  },
  {
    year: '2020-2024',
    title: 'UNLV CS Degree',
    description: '3.95 GPA',
    icon: GraduationCap,
    color: 'text-blue-500',
  },
  {
    year: '2022-2023',
    title: 'Programming Tutor',
    description: 'Impact metrics & technologies',
    icon: BookOpen,
    color: 'text-green-500',
  },
  {
    year: '2023-2024',
    title: 'Software Internship',
    description: 'Technical achievements',
    icon: Briefcase,
    color: 'text-purple-500',
  },
  {
    year: '2024-Present',
    title: 'Software Engineer',
    description: 'C++, Python, ML',
    icon: Code,
    color: 'text-yellow-500',
  },
  {
    year: '2024-Present',
    title: 'REVEL Co-Founder/CTO',
    description: 'Robot Ready™ certification',
    icon: Rocket,
    color: 'text-orange-500',
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
        <div className="grid gap-4 relative">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-r from-background to-background/50 backdrop-blur-sm">
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <motion.div 
                      className={`p-3 rounded-full bg-background shadow-lg ${item.color} relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.15 + 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <Icon className="w-6 h-6 relative z-10" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        whileHover={{ color: "hsl(var(--primary))" }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.year}
                      </motion.p>
                      <motion.h3 
                        className="font-semibold text-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
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