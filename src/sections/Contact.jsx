import { motion } from "framer-motion"

import { Mail } from "lucide-react"

import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"

function Contact() {

  return (

    <section id="contact"      className="
      relative
      py-36
      px-6

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
        top-[0]
        left-[-120px]

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
        right-[-120px]

        w-[320px]
        h-[320px]

        rounded-full

        bg-[var(--color-accent-taupe)]

        opacity-10
        blur-[120px]
        "
      />

      {/* MAIN CARD */}

      <motion.div

        initial={{
          opacity: 0,
          y: 100,
          scale: 0.96,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}

        viewport={{ once: true }}

        whileHover={{
          y: -6,
        }}

        className="
        relative
        z-10

        max-w-5xl
        mx-auto

        rounded-[40px]

        bg-[rgba(237,232,222,0.55)]
        backdrop-blur-xl

        border
        border-[var(--color-accent-sand)]

        px-8
        md:px-16

        py-24

        text-center

        overflow-hidden
        "
      >

        {/* INNER GLOW */}

        <div
          className="
          absolute
          inset-0

          opacity-40

          bg-gradient-to-br
          from-[rgba(139,158,132,0.10)]
          to-transparent
          "
        />

        <div className="relative z-10">

          {/* SMALL TITLE */}

          <motion.p

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
              duration: 0.8,
            }}

            viewport={{ once: true }}

            className="
            uppercase
            tracking-[0.3em]

            text-sm

            text-[var(--color-text-muted)]

            mb-6
            "
          >
            CONTACT
          </motion.p>

          {/* HEADING */}

          <motion.h2

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.4,
              duration: 1,
            }}

            viewport={{ once: true }}

            className="
            text-5xl
            md:text-7xl

            font-bold
            tracking-tight
            leading-tight

            text-[var(--color-text-primary)]

            mb-8
            "
          >
            Let’s build something together.
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.6,
              duration: 1,
            }}

            viewport={{ once: true }}

            className="
            max-w-3xl
            mx-auto

            text-lg
            leading-9

            text-[var(--color-text-secondary)]

            mb-14
            "
          >
            Open to ML/AI and software engineering
            opportunities. Feel free to connect
            through email or social media.
          </motion.p>

          {/* EMAIL BUTTON */}

          <motion.a

            whileHover={{
              scale: 1.03,
              y: -3,
            }}

            whileTap={{
              scale: 0.98,
            }}

            href="mailto:indahsambuaga04@gmail.com"

            className="
            inline-flex
            items-center
            gap-4

            px-8
            py-5

            rounded-2xl

            bg-[var(--color-accent-green)]
            text-white

            font-medium

            hover:bg-[var(--color-text-primary)]
            hover:shadow-2xl

            transition-all
            duration-500
            "
          >

            <Mail size={22} />

            indahsambuaga04@gmail.com

          </motion.a>

          {/* SOCIALS */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.8,
              duration: 1,
            }}

            viewport={{ once: true }}

            className="
            flex
            justify-center
            gap-6

            mt-14
            "
          >

            {/* LINKEDIN */}

            <motion.a

              whileHover={{
                y: -6,
                scale: 1.06,
              }}

              whileTap={{
                scale: 0.95,
              }}

              href="https://www.linkedin.com/in/indahmarshanda04"
              target="_blank"
              rel="noreferrer"

              className="
              w-16
              h-16

              rounded-2xl

              bg-[var(--color-bg-primary)]

              border
              border-[var(--color-accent-sand)]

              flex
              items-center
              justify-center

              text-[var(--color-text-secondary)]

              hover:bg-[var(--color-accent-green)]
              hover:text-white

              hover:shadow-xl

              transition-all
              duration-300
              "
            >
              <FaLinkedinIn className="text-2xl" />
            </motion.a>

            {/* INSTAGRAM */}

            <motion.a

              whileHover={{
                y: -6,
                scale: 1.06,
              }}

              whileTap={{
                scale: 0.95,
              }}

              href="https://www.instagram.com/indahmarshandas"
              target="_blank"
              rel="noreferrer"

              className="
              w-16
              h-16

              rounded-2xl

              bg-[var(--color-bg-primary)]

              border
              border-[var(--color-accent-sand)]

              flex
              items-center
              justify-center

              text-[var(--color-text-secondary)]

              hover:bg-[var(--color-accent-green)]
              hover:text-white

              hover:shadow-xl

              transition-all
              duration-300
              "
            >
              <FaInstagram className="text-2xl" />
            </motion.a>

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}

export default Contact