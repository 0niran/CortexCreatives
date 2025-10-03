"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ComingSoon() {
  const services = [
    "Web & Mobile Design",
    "Product Development",
    "Brand Strategy",
    "Digital Marketing"
  ];

  return (
    <div className="h-screen bg-white text-black relative overflow-hidden font-inter flex flex-col">
      {/* SEO-optimized semantic HTML */}
      <h1 className="sr-only">Cortex Creative - IT Consulting & Digital Solutions | Web Design, Mobile Design, Product Development, Brand Strategy</h1>
      {/* Minimal accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Minimal geometric animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Rotating circles - outline only */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full border border-black/8"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        <motion.div
          className="absolute top-[50%] right-[8%] w-[250px] h-[250px] rounded-full border border-black/10"
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[25%] w-[200px] h-[200px] rounded-full border border-black/9"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />

        {/* Floating squares */}
        <motion.div
          className="absolute top-[35%] right-[30%] w-20 h-20 border border-black/12"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-[35%] right-[20%] w-16 h-16 border border-black/10 rounded-lg"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Thin lines with movement */}
        <motion.div
          className="absolute top-[25%] left-[15%] w-40 h-px bg-black/15"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-[30%] right-[25%] w-32 h-px bg-black/12"
          animate={{
            scaleX: [1, 1.6, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Small accent dots */}
        <motion.div
          className="absolute top-[20%] left-[40%] w-3 h-3 rounded-full bg-black/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-[25%] left-[15%] w-2.5 h-2.5 rounded-full bg-black/18"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div
          className="absolute top-[60%] right-[35%] w-3 h-3 rounded-full bg-black/16"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.35, 0.75, 0.35],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 md:p-6 lg:p-8 flex-shrink-0 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-4 md:h-5 relative w-32 md:w-40"
          >
            <Image
              src="/Cortex Creative-logo/vector/default-monochrome-black.svg"
              alt="Cortex Creative - IT Consulting & Digital Solutions"
              fill
              priority
              className="object-contain object-left"
            />
          </motion.div>
          <motion.a
            href="mailto:hello@cortexcreative.ca"
            className="text-xs md:text-sm font-medium hover:opacity-60 transition-opacity"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            hello@cortexcreative.ca
          </motion.a>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center px-4 md:px-6 lg:px-8 min-h-0 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">Launching Soon</span>
              </motion.div>

              {/* Hero Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-[-0.02em] font-space-grotesk"
              >
                Design that
                <br />
                drives results
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-black/60 leading-relaxed max-w-xl font-light"
              >
                We create exceptional digital experiences through strategic design,
                thoughtful development, and data-driven insights.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="mailto:hello@cortexcreative.ca"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Services & Stats */}
            <div className="space-y-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40 mb-4">
                  Our Expertise
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="group relative"
                    >
                      <span className="text-sm md:text-base font-medium text-black/70 group-hover:text-black transition-colors cursor-default">
                        {service}
                      </span>
                      <motion.div
                        className="absolute -bottom-0.5 left-0 h-px bg-black"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-black/10"
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "15+", label: "Clients" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold mb-1 tracking-tight font-space-grotesk">
                      {stat.value}
                    </div>
                    <div className="text-xs text-black/50 uppercase tracking-[0.15em] font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="p-4 md:p-6 lg:p-8 flex-shrink-0 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-black/40">
          <div>© 2025 Cortex Creative. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="mailto:hello@cortexcreative.ca" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
