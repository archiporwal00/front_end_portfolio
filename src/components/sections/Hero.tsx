
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary inline-block mb-4">
          Available for Opportunities
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Archi Porwal
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto">
          Frontend Developer crafting beautiful & performant web experiences
        </p>
        
        <div className="flex gap-4 justify-center mt-8">
          <Button asChild>
            <a href="mailto:porwalarchi00@gmail.com" className="gap-2">
              Contact Me <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowRight className="w-6 h-6 rotate-90" />
      </motion.div>
    </section>
  );
};
