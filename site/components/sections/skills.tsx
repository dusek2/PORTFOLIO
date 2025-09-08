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
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="p-6 h-full border-2 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm overflow-hidden relative group">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-4 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      <motion.div 
                        className="p-3 rounded-lg bg-primary/10 relative overflow-hidden"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.15 + 0.3,
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
                      <motion.h3 
                        className="font-semibold text-lg"
                        whileHover={{ 
                          scale: 1.05,
                          color: "hsl(var(--primary))",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill.category}
                      </motion.h3>
                    </motion.div>
                    <motion.ul 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          className="text-sm text-muted-foreground cursor-pointer relative group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: index * 0.15 + 0.5 + itemIndex * 0.05,
                            duration: 0.3
                          }}
                          whileHover={{ 
                            x: 8,
                            color: "hsl(var(--primary))",
                            transition: { duration: 0.2 }
                          }}
                        >
                          <motion.span
                            className="relative z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item}
                          </motion.span>
                          <motion.div
                            className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.li>
                      ))}
                    </motion.ul>
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