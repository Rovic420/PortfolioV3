"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, Eye, Star, GitFork, Calendar } from "lucide-react"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "TimeKeeping Management System",
      description:
        "A timekeeping management system built using Java and SQL to streamline employee work hours, attendance tracking, and reporting.",
      longDescription:
        "Built with Java and SQL, this project can handles thousands of employees daily.",
      image: "/tmkS.png?height=400&width=600",
      technologies: ["Java", "SQL", "JDBC"],
      category: "fullstack",
      liveUrl: "https://github.com/Rovic420/TIMEKEEPINGMANAGEMENTSYSTEM",
      githubUrl: "https://github.com/Rovic420/TIMEKEEPINGMANAGEMENTSYSTEM",
      featured: true,
      stats: { stars: 420, forks: 69, date: "2024" },
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "My Portfolio V1",
      description:
        "An anime-inspired portfolio built with HTML, CSS, and JavaScript to showcase my skills and personal interests.",
      longDescription:
        "Presents ideas and features with custom JavaScript effects in an anime-style",
      image: "/mp1.png?height=400&width=600",
      technologies: ["HTML", "CSS", "Javascript"],
      category: "frontend",
      liveUrl: "https://sugoi-portfolio.vercel.app/",
      githubUrl: "https://github.com/Rovic420/SugoiPortfolio",
      featured: true,
      stats: { stars: 420, forks: 69, date: "2025" },
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: 3,
      title: "Java & Python Code Collection",
      description:
        "A compilation of Java and Python code snippets created during practice, stored on GitHub to showcase my progress and learning.",
      longDescription:
        "A growing set of Java and Python code from my practice, stored on GitHub to show what I’ve learned.",
      image: "/jcc.png?height=400&width=600",
      technologies: ["Java", "Python"],
      category: "mobile",
      liveUrl: "https://github.com/Rovic420/JAVA-PYTHON-PROJECTS",
      githubUrl: "https://github.com/Rovic420/JAVA-PYTHON-PROJECTS",
      featured: true,
      stats: { stars: 420, forks: 69, date: "2025" },
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-transparent to-gray-50/50 dark:to-dark-900/50"
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
            <span className="text-sm font-medium">🚀 Featured Work</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">My</span>
            <br />
            <span className="text-gradient">Projects</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 mx-auto rounded-full mb-8"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="card p-0 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Project Stats */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                    <Star size={12} />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                    <GitFork size={12} />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{project.stats.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 leading-relaxed">
                  {project.longDescription.length > 80
                    ? project.longDescription.substring(0, 80) + "..."
                    : project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    <Eye size={14} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 text-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
