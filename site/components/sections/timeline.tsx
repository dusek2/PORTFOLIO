'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Youtube, GraduationCap, BookOpen, Briefcase, Code } from 'lucide-react';

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
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-background ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.year}</p>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}