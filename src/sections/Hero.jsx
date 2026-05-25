import { motion } from "framer-motion"

function Hero() {

  return (

      <section id="home"      className="
      relative
      min-h-screen

      flex
      items-center
      justify-center

      overflow-hidden

      px-6

      bg-[var(--color-bg-primary)]
      "
    >

      {/* BACKGROUND BLURS */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        top-[-120px]
        left-[5%]

        w-[340px]
        h-[340px]

        rounded-full

        bg-[var(--color-accent-green)]

        opacity-20
        blur-[110px]
        "
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
        absolute
        bottom-[-120px]
        right-[5%]

        w-[340px]
        h-[340px]

        rounded-full

        bg-[var(--color-accent-taupe)]

        opacity-20
        blur-[110px]
        "
      />

      {/* CONTENT */}

      <motion.div

        initial={{
          opacity: 0,
          y: 60,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}

        className="
        relative
        z-10

        text-center
        "
      >

        {/* TOP LABEL */}

        <motion.p

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
            duration: 1,
          }}

          className="
          uppercase
          tracking-[0.35em]

          text-sm

          text-[var(--color-text-muted)]

          mb-7
          "
        >
          MACHINE LEARNING ENGINEER
        </motion.p>

        {/* NAME */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.4,
            duration: 1.2,
          }}

          className="
          text-6xl
          md:text-[110px]

          font-bold

          leading-none
          tracking-tight

          bg-gradient-to-r
          from-[var(--color-text-primary)]
          via-[var(--color-accent-green)]
          to-[var(--color-text-primary)]

          bg-clip-text
          text-transparent
          "
        >
          Indah Marshanda
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.7,
            duration: 1.2,
          }}

          className="
          mt-10

          max-w-3xl
          mx-auto

          text-lg
          md:text-xl

          leading-9

          text-[var(--color-text-secondary)]
          "
        >
          Building intelligent systems through
          machine learning, software engineering,
          and thoughtful digital experiences
          with real-world impact.
        </motion.p>

        {/* BUTTONS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 1,
            duration: 1,
          }}

          className="
          flex
          flex-wrap
          justify-center
          gap-5

          mt-14
          "
        >

          {/* PRIMARY */}

          <a
            href="#contact"            className="
            px-8
            py-4

            rounded-2xl

            bg-[var(--color-accent-green)]
            text-white

            font-medium

            hover:-translate-y-1
            hover:scale-[1.02]
            hover:shadow-2xl

            transition-all
            duration-500
            "
          >
            Contact Me
            </a>
          {/* SECONDARY */}

          <a
            href="#projects"            className="
            px-8
            py-4

            rounded-2xl

            border
            border-[var(--color-accent-sand)]

            bg-[rgba(255,255,255,0.35)]
            backdrop-blur-xl

            text-[var(--color-text-primary)]

            font-medium

            hover:bg-[var(--color-bg-secondary)]
            hover:-translate-y-1
            hover:scale-[1.02]

            transition-all
            duration-500
            "
          >
            View Projects
         </a>
        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div

        animate={{
          y: [0, 12, 0],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
        }}

        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        "
      >

        <div
          className="
          w-[2px]
          h-14

          rounded-full

          bg-[var(--color-accent-sand)]
          "
        />

      </motion.div>

    </section>
  )
}

export default Hero