import { motion } from "framer-motion"

function Skills() {

  const skillCategories = [

    {
      title: "Machine Learning",
      skills: [
        "Deep Learning (CNN, Transfer Learning)",
        "Image Classification",
        "Model Optimization",
        "Knowledge Distillation",
        "Quantization",
        "Model Evaluation",
        "Data Preprocessing & Augmentation",
        "Class Imbalance Handling",
      ],
    },

    {
      title: "Tools & Frameworks",
      skills: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "Git",
        "GitHub",
        "Jupyter Notebook",
      ],
    },

    {
      title: "Software Engineering",
      skills: [
        "React.js",
        "Next.js",
        "Laravel",
        "REST API Integration",
        "Frontend Development",
        "Backend Development",
        "Git & GitHub",
      ],
    },

    {
      title: "Data & Experimentation",
      skills: [
        "EDA",
        "Model Training & Validation",
        "Cross-validation",
        "Hyperparameter Tuning",
        "Performance Optimization",
      ],
    },

    {
      title: "Soft Skills",
      skills: [
        "Leadership",
        "Communication",
        "Teamwork & Collaboration",
        "Problem-Solving",
        "Time Management",
      ],
    },

    {
      title: "Languages",
      skills: [
        "Bahasa Indonesia",
        "English",
      ],
    },

  ]

  return (

    <section id="skills"      className="
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
        top-[10%]
        left-[-100px]

        w-[300px]
        h-[300px]

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
        right-[-100px]

        w-[300px]
        h-[300px]

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
            EXPERTISE
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
            Technical Skills
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
                staggerChildren: 0.12,
              },
            },

          }}

          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >

          {skillCategories.map((category) => (

            <motion.div

              key={category.title}

              variants={{

                hidden: {
                  opacity: 0,
                  y: 80,
                  scale: 0.95,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },

              }}

              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}

              whileHover={{
                y: -10,
              }}

              className="
              bg-[rgba(237,232,222,0.55)]
              backdrop-blur-xl

              border
              border-[var(--color-accent-sand)]

              rounded-[32px]
              p-8

              hover:shadow-2xl

              transition-all
              duration-500
              "
            >

              {/* TITLE */}

              <h3
                className="
                text-2xl
                font-bold

                mb-8

                tracking-tight

                text-[var(--color-text-primary)]
                "
              >
                {category.title}
              </h3>

              {/* SKILLS */}

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, index) => (

                  <motion.span

                    key={skill}

                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}

                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}

                    transition={{
                      delay: index * 0.03,
                      duration: 0.3,
                    }}

                    whileHover={{
                      scale: 1.06,
                    }}

                    className="
                    px-4
                    py-2

                    rounded-xl

                    bg-[var(--color-bg-primary)]

                    border
                    border-[var(--color-accent-sand)]

                    text-[var(--color-text-secondary)]
                    text-sm
                    font-medium

                    hover:bg-[var(--color-accent-green)]
                    hover:text-white

                    transition-all
                    duration-300
                    "
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Skills