'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  Code2,
  Database,
  Layout,
  Cloud,
  Terminal,
  GitBranch,
  Brain,
  Globe,
  Cpu,
} from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: ['C++', 'Python', 'JavaScript', 'x86 Assembly', 'MIPS Assembly'],
  },
  {
    category: 'Machine Learning & AI',
    icon: Brain,
    items: ['PyTorch', 'Neural Networks', 'Deep Learning', 'Facial Recognition', 'Machine Learning'],
  },
  {
    category: 'Web Development',
    icon: Layout,
    items: ['React.js', 'Node.js', 'ASP.NET', 'WordPress', 'API Documentation'],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    items: ['AWS', 'VMware vSphere', 'Nutanix', 'Server Management', 'Cloud Computing'],
  },
  {
    category: 'Systems & Tools',
    icon: Cpu,
    items: ['Linux', 'Kali Linux', 'Bash', 'Embedded Systems', 'Enterprise Software'],
  },
  {
    category: 'Languages',
    icon: Globe,
    items: ['Czech (Native)', 'English (Fluent)', 'Spanish'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}