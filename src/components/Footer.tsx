import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Eye } from "lucide-react";
import { useState, useEffect } from "react"; // 1. IMPORT HOOKS

const Footer = () => {
  // 2. CREATE STATE TO HOLD THE COUNT
  const [visitorCount, setVisitorCount] = useState("0");

  // 3. FETCH THE COUNT FROM YOUR AWS API
  useEffect(() => {
    const fetchCount = async () => {
      try {
        // 🚨 REPLACE THIS URL WITH YOUR ACTUAL API GATEWAY URL
        const apiUrl = "https://eucks8g9r5.execute-api.us-east-1.amazonaws.com/prod/counter";
        const response = await fetch(apiUrl);
        const data = await response.json();
        setVisitorCount(data.count); // Update state with the real count
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        // Optional: Keep the display as "0" or show an error state
      }
    };
    fetchCount();
  }, []); // Empty array means this runs once when component mounts

  return (
    <footer className="py-12 bg-card/50 border-t border-border/50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Social Links (unchanged) */}
          <div className="flex gap-4">
           <div className="flex gap-4">
            <a
              href="https://github.com/vicGrey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-okoroafor-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:victor.okoroafor.cloud@gmail.com"
              className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
</div>
          </div>

          {/* 4. UPDATE THE COUNTER DISPLAY TO USE STATE */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Visitors: <span className="text-foreground font-semibold">{visitorCount}</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Victor Okoroafor. Built with React & AWS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;