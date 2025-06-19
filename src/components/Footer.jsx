"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Coffee, Zap, Users } from "lucide-react"

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Rovic420", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rovicdeloy2", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Mail, href: "mailto:Deloy371@pm.me", label: "Email", color: "hover:text-red-500" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const stats = [
    { icon: Code, label: "Lines of Code", value: "500K+", color: "text-blue-400" },
    { icon: Coffee, label: "Coffee Cups", value: "2000+", color: "text-orange-400" },
    { icon: Zap, label: "Projects", value: "2+", color: "text-yellow-400" },
    { icon: Users, label: "Happy Clients", value: "5+", color: "text-green-400" },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-dark-950 dark:to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom py-8 sm:py-12 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                <Code className="text-white" size={16} />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gradient">Rovic Deloy</span>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              I create clean, interactive, and visually appealing websites with a mix of design and code. Let’s build something amazing together.
            </p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm">Available for new projects</span>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`p-2.5 sm:p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 text-gray-400 ${color}`}
                  aria-label={label}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.button
                    onClick={() => {
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 font-medium text-sm sm:text-base"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 py-6 sm:py-8 border-t border-white/10"
        >
          {stats.map(({ icon: Icon, label, value, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 mb-2 group-hover:bg-white/20 transition-colors duration-300`}
              >
                <Icon className={color} size={20} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-400 text-xs sm:text-sm">© {currentYear} Rovic Deloy. All rights reserved.</p>
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-xs sm:text-sm flex items-center space-x-2">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart size={14} className="text-red-500" />
              </motion.span>
              <span>and lots of</span>
              <Coffee size={14} className="text-orange-500" />
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 sm:p-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl hover:shadow-lg transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
