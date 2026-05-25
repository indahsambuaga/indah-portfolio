import { motion } from "framer-motion"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects() {

  return (

    <section id="projects"      className="
      relative
      py-32
      px-6
      md:px-12

      overflow-hidden

      bg-[var(--color-bg-primary)]
      "
    >

      {/* BACKGROUND BLURS */}

      <motion.div

        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        top-[20%]
        right-[-120px]

        w-[320px]
        h-[320px]

        rounded-full

        bg-[var(--color-accent-green)]

        opacity-10
        blur-[120px]
        "
      />

      <motion.div

        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        bottom-[0]
        left-[-120px]

        w-[320px]
        h-[320px]

        rounded-full

        bg-[var(--color-accent-taupe)]

        opacity-10
        blur-[120px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}

        <motion.div

          initial={{
            opacity: 0,
            y: 80,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}

          viewport={{ once: true }}

          className="text-center mb-24"
        >

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-sm

            text-[var(--color-text-muted)]

            mb-5
            "
          >
            SELECTED WORK
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl

            font-bold
            tracking-tight

            text-[var(--color-text-primary)]
            "
          >
            Projects Experience
          </h2>

        </motion.div>

        {/* GRID */}

        <motion.div

          initial="hidden"

          whileInView="visible"

          viewport={{ once: true }}

          variants={{

            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },

          }}

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3

          gap-8
          "
        >

          {projects.map((project) => (

            <motion.div

              key={project.title}

              variants={{

                hidden: {
                  opacity: 0,
                  y: 100,
                  scale: 0.92,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },

              }}

              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >

              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Projects