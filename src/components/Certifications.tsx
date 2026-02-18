import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials validating my cloud expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* CCP Certification */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-card rounded-2xl border border-border/50 p-8 glow-card hover:border-primary/50 transition-colors group"
          >
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30">
                  <Award className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-muted-foreground mb-4">
                  Foundational certification demonstrating cloud fluency and core AWS knowledge.
                </p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Issued: 9th October, 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Valid through: 12th February, 2029
                  </span>
                </div>
              </div>

              <a
                href="/victor_ccp_cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="View Credential"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* SAA Certification */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-card rounded-2xl border border-border/50 p-8 glow-card hover:border-primary/50 transition-colors group"
          >
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30">
                  <Award className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  AWS Certified Solutions Architect – Associate
                </h3>
                <p className="text-muted-foreground mb-4">
                  Advanced certification validating expertise in designing scalable, cost‑efficient, and fault‑tolerant systems on AWS.
                </p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Issued: 12th February, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Valid through: 12th February, 2029
                  </span>
                </div>
              </div>

              <a
                href="/victor_saa_cert.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                aria-label="View Credential"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Optional: Additional certifications placeholder */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground mt-8 text-sm"
          >
            More certifications coming soon...
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;