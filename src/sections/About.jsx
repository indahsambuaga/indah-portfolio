import profile from "../assets/profile.jpg"
import { motion } from "framer-motion"

function About() {

  return (

    <section id="about"      
    className="
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

      <div
        className="
        relative
        z-10

        max-w-7xl
        mx-auto
        "
      >

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
            ABOUT
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
            About Me
          </h2>

        </motion.div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-20
          items-center
          "
        >

          {/* IMAGE */}

          <motion.div

            initial={{
              opacity: 0,
              x: -120,
              rotate: -3,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}

            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}

            viewport={{ once: true }}

            className="flex justify-center"
          >

            <motion.div

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              transition={{
                duration: 0.5,
              }}

              className="
              relative

              rounded-[36px]
              overflow-hidden

              bg-[rgba(237,232,222,0.55)]
              backdrop-blur-xl

              border
              border-[var(--color-accent-sand)]

              p-3

              shadow-2xl
              "
            >

              <img
                src={profile}
                alt="profile"

                className="
                w-[350px]
                h-[450px]

                object-cover

                rounded-[28px]
                "
              />

            </motion.div>

          </motion.div>

          {/* TEXT */}

          <motion.div

            initial={{
              opacity: 0,
              x: 120,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}

            viewport={{ once: true }}
          >

            <div
              className="
              space-y-8

              text-lg
              leading-9

              text-[var(--color-text-secondary)]
              "
            >

              <p>
                Computer Engineering student at UMN
                with strong interest in Machine Learning,
                Deep Learning, and intelligent mobile systems.
                Experienced in software engineering across
                web development, data science, and data modeling,
                with hands-on experience building end-to-end
                machine learning solutions through academic
                and personal projects.
              </p>

              <p>
                Previously interned at Wijaya Karya Realty
                as a Product Manager, collaborating on product
                planning and digital solution development.
                Currently focused on expanding expertise in
                ML/AI engineering and mobile technology,
                particularly in creating efficient and impactful
                AI-driven applications.
              </p>

              <p>
                Beyond technical work, actively involved in
                leadership and organizational roles including
                serving as President of DKBM UMN,
                BEM Supervisor, and Chairman of the
                Computer Engineering Orientation Program.
              </p>

              <p>
                Passionate about combining technical innovation,
                leadership, and problem-solving to build products
                with meaningful real-world impact.
              </p>

              {/* HIGHLIGHT */}

              <motion.div

                whileHover={{
                  x: 8,
                }}

                className="
                pt-4

                text-[var(--color-text-primary)]
                font-medium
                "
              >
                Open to backend, ML/AI,
                and mobile app opportunities.
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About