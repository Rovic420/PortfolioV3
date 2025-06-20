"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="mb-6 sm:mb-8 md:mb-12 relative"
          >
            <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1 sm:p-2">
                  <img
                    src="/SHARINGAN.png?height=200&width=200"
                    alt="Rovic Deloy"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center"
              >
                <Sparkles size={8} className="sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs sm:text-sm font-medium">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-500 rounded-full mr-2"
              />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, i'm Rovic
            </span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20"
          >
            <TypeAnimation
              sequence={[
                "Junior Front-End Developer",
                2000,
                "Graphic Designer",
                2000,
                "Web Developer",
                2000,
                "Tech Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0"
          >
            I build awesome digital stuff using the latest tech and smooth design. 
            I use React, Node.js, and modern tools to turn your ideas into reality
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 lg:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Mail size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Let's Work Together</span>
              </span>
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50 inline-flex items-center justify-center gap-2 sm:gap-3"
            >
              <Download size={16} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12 md:mb-16"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Rovic420",
                label: "GitHub",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              { icon: Linkedin, href: "linkedin.com/in/rovicdeloy2", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:Deloy371@pm.me", label: "Email", color: "hover:text-red-500" },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 sm:p-3 md:p-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-600 dark:text-gray-400 ${color} group`}
                aria-label={label}
              >
                <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            onClick={scrollToAbout}
            className="group"
            aria-label="Scroll to about section"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Scroll to explore
              </span>
              <ArrowDown
                size={18}
                className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
