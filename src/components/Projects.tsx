import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cloud Resume – Serverless Visitor Counter",
    description: "A serverless web application that displays my resume and tracks visitor count using AWS Lambda, DynamoDB, API Gateway, and S3. Built with React and hosted on AWS.",
    tags: ["React", "AWS Lambda", "DynamoDB", "API Gateway", "S3"],
    github: "https://github.com/vicGrey/Cloud_Resume",
    demo: "http://victor-okoroafor-resume.s3-website-us-east-1.amazonaws.com", // Your live URL
  },
  {
    title: "Coming Soon",
    description: "Another exciting cloud project is in the works. Check back later for updates.",
    tags: ["In Progress"],
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    description: "I'm constantly building new things. Stay tuned for more cloud solutions.",
    tags: ["In Progress"],
    github: "#",
    demo: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of cloud infrastructure and application projects showcasing my technical skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-card rounded-xl border border-border/50 p-6 glow-card hover:border-primary/50 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs font-medium bg-secondary/50 hover:bg-secondary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
