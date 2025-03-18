
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  FileCode2,
  Layout,
  Server,
  Settings,
} from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "React", "HTML", "Tailwind CSS", "OOPs"],
    icon: Code2,
  },
  {
    category: "Database Management",
    items: ["MySQL"],
    icon: Database,
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
    icon: FileCode2,
  },
  {
    category: "CS Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    icon: Settings,
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">
            What I Work With
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-lift"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
