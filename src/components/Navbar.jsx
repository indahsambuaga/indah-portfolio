import { motion } from "framer-motion"

function Navbar() {

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ]

  return (

    <motion.nav

      initial={{
        opacity: 0,
        y: -60,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
        ease: "easeOut",
      }}

      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2

      w-[95%]
      max-w-7xl

      z-50

      flex
      items-center
      justify-between

      px-8
      md:px-10

      py-5

      rounded-[28px]

      backdrop-blur-2xl

      bg-[rgba(247,244,239,0.65)]

      border
      border-[rgba(212,203,186,0.5)]

      shadow-[0_10px_40px_rgba(0,0,0,0.04)]
      "
    >

      {/* LOGO */}

      <motion.h1

        whileHover={{
          scale: 1.03,
        }}

        className="
        text-3xl
        font-bold

        tracking-tight

        bg-gradient-to-r
        from-[var(--color-text-primary)]
        via-[var(--color-accent-green)]
        to-[var(--color-text-primary)]

        bg-clip-text
        text-transparent
        "
      >
        Portfolio
      </motion.h1>

      {/* NAVIGATION */}

      <ul
        className="
        hidden
        md:flex

        items-center
        gap-8

        text-[15px]
        font-medium

        text-[var(--color-text-secondary)]
        "
      >

        {navItems.map((item, index) => (

          <motion.li

            key={item.label}

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}

            whileHover={{
              y: -2,
            }}

            className="
            relative
            group
            "
          >

            <a

              href={item.link}

              className="
              relative

              cursor-pointer

              hover:text-[var(--color-text-primary)]

              transition-all
              duration-300
              "
            >

              {item.label}

              {/* UNDERLINE */}

              <span
                className="
                absolute
                left-0
                -bottom-2

                h-[2px]
                w-0

                bg-[var(--color-accent-green)]

                transition-all
                duration-300

                group-hover:w-full
                "
              />

            </a>

          </motion.li>

        ))}

      </ul>

      {/* STATUS */}

      <motion.div

        animate={{
          opacity: [0.4, 1, 0.4],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
        }}

        className="
        hidden
        md:flex

        items-center
        gap-3
        "
      >

        <div
          className="
          w-3
          h-3

          rounded-full

          bg-[var(--color-accent-green)]
          "
        />

        <p
          className="
          text-sm

          text-[var(--color-text-muted)]
          "
        >
          Available
        </p>

      </motion.div>

    </motion.nav>
  )
}

export default Navbar