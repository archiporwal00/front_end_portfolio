
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    school: "Poornima University, Jaipur",
    degree: "B.tech (cse)",
    duration: "2022-2026",
    score: "7.98gpa",
  },
  {
    school: "Stanford International School",
    level: "Senior Secondary",
    score: "76%",
  },
  {
    school: "Stanford International School",
    level: "Secondary",
    score: "67%",
  },
];

export const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary font-medium mb-2 block">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school + edu.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-lift"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-primary">
                    {edu.degree || edu.level}
                  </p>
                </div>
                <div className="space-y-2">
                  {edu.duration && (
                    <Badge variant="outline">{edu.duration}</Badge>
                  )}
                  <Badge>{edu.score}</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
