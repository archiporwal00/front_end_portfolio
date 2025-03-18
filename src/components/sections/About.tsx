
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <span className="text-primary font-medium mb-2 block">About Me</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Summary</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Passionate Frontend Developer with experience in React.js, Next.js, Tailwind CSS, and modern web technologies. Specialized in building responsive, interactive, and user-friendly web applications with a keen eye for UI/UX design. Adept at integrating APIs, optimizing performance, and delivering seamless user experiences. Always eager to learn, adapt, and contribute to innovative projects that enhance online experiences.
        </p>
      </motion.div>
    </section>
  );
};
