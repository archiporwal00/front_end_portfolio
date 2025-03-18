
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Krashak Setu Web Portal",
    subtitle: "SIH 2024 (project)",
    description:
      "Developed a feature-rich web portal using React.js, Node.js, Express.js, and Firebase for real-time updates and authentication. Implemented AI-based crop prediction models, a recommendation system, and RESTful APIs for order management. Optimized database performance with MongoDB/MySQL and ensured secure, scalable, and user-centric solutions.",
    tags: ["React.js", "Node.js", "Express.js", "Firebase", "MongoDB", "MySQL"],
  },
  {
    title: "LEARNSPHERE",
    subtitle: "project",
    description:
      "Developed an AI-powered Teacher Assistant to automate assignment grading and provide personalized feedback to students. The solution reduces teachers' workload, enhances feedback quality, and enables personalized learning experiences.",
    tags: ["AI", "Education Tech", "Automation", "User Experience"],
  },
  {
    title: "Self-portfolio",
    description: "Personal portfolio website showcasing skills and projects.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-lift flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-primary text-sm">{project.subtitle}</p>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="gap-2 w-full" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> View Project
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
