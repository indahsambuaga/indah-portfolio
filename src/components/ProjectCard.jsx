import { motion } from "framer-motion"

function ProjectCard({ title, date, description, tech }) {

  const techColors = {

    Python:
      "bg-[#E8E0D2] text-[#6B705C]",

    TensorFlow:
      "bg-[#DDD2C2] text-[#7D5A50]",

    React:
      "bg-[#DCE5DE] text-[#5F7161]",

    Tailwind:
      "bg-[#E5E2DA] text-[#6B7280]",

    Laravel:
      "bg-[#E6D8D5] text-[#8A5A44]",

    MySQL:
      "bg-[#DCE2E8] text-[#5C677D]",

    PHP:
      "bg-[#E3DFF0] text-[#5E548E]",

    JavaScript:
      "bg-[#ECE3C9] text-[#8C6A2F]",

    "Deep Learning":
      "bg-[#E7DADF] text-[#7B5563]",

    CNN:
      "bg-[#E5DCEC] text-[#6B4F7A]",

    EDA:
      "bg-[#E7E2D8] text-[#7A6A58]",

    "Knowledge Distillation":
      "bg-[#DCE7E2] text-[#5F7161]",

    "Scikit-learn":
      "bg-[#E5DCED] text-[#6B4F7A]",

    "IoT":
    "bg-[#E7E2D8] text-[#7A6A58]",

    "Embedded System":
    "bg-[#E5DCEC] text-[#6B4F7A]",

    "Sensor Integration":
    "bg-[#DCE2E8] text-[#5C677D]",

    "Signal Processing":
    "bg-[#DCE2E8] text-[#5C677D]",

    "MATLAB":
    "bg-[#E8E0D2] text-[#6B705C]",

    "Data Analysis":
    "bg-[#E5DCED] text-[#6B4F7A]",
  }

  return (

    <motion.div

      whileHover={{
        y: -14,
        rotateX: 2,
        rotateY: -2,
      }}

      transition={{
        duration: 0.4,
      }}

      className="
      group
      relative

      h-full

      bg-[rgba(237,232,222,0.55)]
      backdrop-blur-xl

      border
      border-[var(--color-accent-sand)]

      rounded-[32px]

      p-8

      overflow-hidden

      hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]

      transition-all
      duration-500
      "
    >

      {/* HOVER GLOW */}

      <div
        className="
        absolute
        inset-0

        opacity-0
        group-hover:opacity-100

        transition-all
        duration-700

        bg-gradient-to-br
        from-[rgba(139,158,132,0.10)]
        to-transparent
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* DATE */}

        <p
          className="
          text-xs
          uppercase
          tracking-[0.25em]

          text-[var(--color-text-muted)]

          mb-5
          "
        >
          {date}
        </p>

        {/* TITLE */}

        <motion.h3

          whileHover={{
            x: 4,
          }}

          className="
          text-3xl
          font-bold

          tracking-tight
          leading-tight

          mb-6

          text-[var(--color-text-primary)]
          "
        >
          {title}
        </motion.h3>

        {/* DESCRIPTION */}

        <p
          className="
          text-[var(--color-text-secondary)]

          leading-8

          mb-8
          "
        >
          {description}
        </p>

        {/* TECH STACK */}

        <div className="flex flex-wrap gap-3">

          {tech.map((item, index) => (

            <motion.span

              key={item}

              initial={{
                opacity: 0,
                scale: 0.8,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                delay: index * 0.04,
                duration: 0.3,
              }}

              whileHover={{
                scale: 1.08,
                y: -2,
              }}

              className={`
                px-4
                py-2

                rounded-full

                text-sm
                font-medium

                transition-all
                duration-300

                border
                border-white/10

                ${techColors[item]}
              `}
            >
              {item}
            </motion.span>

          ))}

        </div>

      </div>

    </motion.div>
  )
}

export default ProjectCard