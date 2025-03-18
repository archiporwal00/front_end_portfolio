
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Grass Solution (P) Ltd.",
    position: "Frontend Development Internship",
    duration: "May'24-June'24",
    description:
      "Developed HTML, React, and JavaScript responsive web projects. Worked in groups to optimize and debug front-end code. Acquired and utilized fundamental front-end technologies.",
  },
];

export const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary font-medium mb-2 block">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-lift"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <Badge variant="outline">{exp.duration}</Badge>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
