import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const FadeIn = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
}: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: ReactNode;
}

export const StaggerItem = ({ children }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
