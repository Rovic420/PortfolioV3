"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, icon: "🔷", color: "from-blue-600 to-blue-700" },
        { name: "Next.js", level: 88, icon: "▲", color: "from-gray-700 to-gray-900" },
        { name: "Vue.js", level: 82, icon: "💚", color: "from-green-500 to-emerald-500" },
        { name: "Tailwind CSS", level: 95, icon: "🎨", color: "from-cyan-500 to-blue-500" },
        { name: "Framer Motion", level: 85, icon: "🎭", color: "from-purple-500 to-pink-500" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92, icon: "🟢", color: "from-green-600 to-green-700" },
        { name: "Python", level: 88, icon: "🐍", color: "from-yellow-500 to-orange-500" },
        { name: "Express.js", level: 90, icon: "🚀", color: "from-gray-700 to-gray-800" },
        { name: "PostgreSQL", level: 85, icon: "🐘", color: "from-blue-700 to-indigo-700" },
        { name: "MongoDB", level: 87, icon: "🍃", color: "from-green-700 to-emerald-700" },
        { name: "GraphQL", level: 83, icon: "📊", color: "from-pink-500 to-rose-500" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", level: 85, icon: "🐳", color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 80, icon: "☁️", color: "from-orange-400 to-yellow-500" },
        { name: "Git", level: 95, icon: "📚", color: "from-orange-500 to-red-500" },
        { name: "Kubernetes", level: 75, icon: "⚙️", color: "from-blue-600 to-purple-600" },
        { name: "Jest", level: 88, icon: "🧪", color: "from-red-500 to-pink-500" },
        { name: "Figma", level: 90, icon: "🎨", color: "from-purple-500 to-indigo-500" },
      ],
    },
    mobile: {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 88, icon: "📱", color: "from-blue-500 to-purple-500" },
        { name: "Flutter", level: 82, icon: "🦋", color: "from-blue-400 to-cyan-400" },
        { name: "iOS (Swift)", level: 75, icon: "🍎", color: "from-gray-600 to-gray-800" },
        { name: "Android (Kotlin)", level: 78, icon: "🤖", color: "from-green-500 to-blue-500" },
        { name: "Expo", level: 85, icon: "⚡", color: "from-purple-600 to-pink-600" },
        { name: "Firebase", level: 90, icon: "🔥", color: "from-yellow-500 to-orange-600" },
      ],
    },
  }

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "GraphQL", icon: "📊", category: "API" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Flutter", icon: "🦋", category: "Mobile" },
  ]

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-gray-50/50 to-transparent dark:from-dark-900/50 dark:to-transparent"
    >
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
            <span className="text-sm font-medium">💻 Skills & Technologies</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">My Technical</span>
            <br />
            <span className="text-gradient">Arsenal</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital
            experiences
          </p>
        </motion.div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="card-glass p-2 sm:p-3 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">{tech.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-md"
                    : "glass hover:bg-white/20 dark:hover:bg-white/10"
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="card p-4 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Continuous Learning & Growth
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AWS Certified",
                subtitle: "Solutions Architect",
                icon: "🏆",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Google Cloud",
                subtitle: "Professional Developer",
                icon: "☁️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Meta Certified",
                subtitle: "React Developer",
                icon: "⚛️",
                gradient: "from-blue-600 to-purple-600",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-glass p-8 text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${cert.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{cert.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
