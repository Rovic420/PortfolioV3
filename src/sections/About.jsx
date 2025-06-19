"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Palette, Smartphone, Zap, Award, Users, Coffee } from "lucide-react"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code2, label: "Projects Delivered", value: "1+", color: "text-blue-500" },
    { icon: Users, label: "Happy Clients", value: "5+", color: "text-green-500" },
    { icon: Award, label: "Awards Won", value: "0", color: "text-yellow-500" },
    { icon: Coffee, label: "Coffee Consumed", value: "5000+", color: "text-orange-500" },
  ]

  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "End-to-end web application development using modern technologies like React, Node.js, and cloud services.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and better user experience across all devices.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-gray-50/50 dark:to-dark-900/50">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass mb-6"
          >
            <Zap size={16} className="mr-2 text-primary-600" />
            <span className="text-sm font-medium">About Me</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tech Savvy</span>
            <br />
            <span className="text-gray-900 dark:text-white">& Creative Thinker</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section - ADJUSTED SIZE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src="/James.webp?height=500&width=400"
                  alt="RD pogi"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-80 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl opacity-60 blur-xl"
            />

            {/* Experience Badge */}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Creating Smart & Scalable Web Solutions
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I’m an aspiring IT specialist and Graphic Designer. 
                  I create digital solutions that help people and focus on making easy and smart user experiences.
                </p>

                <p>
                 I use React, Node.js, TypeScript, 
                 and Cloud Services to create simple and effective digital solutions, 
                 combining strong technical skills with creative thinking.
                </p>

                <p>
                  In my free time, I try out new technologies, take part in open-source projects, 
                  and guide others who are also learning to code.
                </p>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Python",
                "Tailwind CSS",
                "MySQL",
                "Git",
                "Java",
                "Canva",
                "Figma",
                "Next.js",
                "React Native",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map(({ icon: Icon, label, value, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glass p-8 text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`${color} group-hover:scale-110 transition-transform duration-300`} size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do Best</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card p-8 group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
