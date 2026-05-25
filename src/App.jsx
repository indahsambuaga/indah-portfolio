import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

function App() {

  return (

    <div
      className="
      relative
      overflow-hidden
      bg-[var(--color-bg-primary)]
      "
    >

      {/* MAIN BACKGROUND BLURS */}

      <div
        className="
        fixed
        top-[-120px]
        left-[-120px]

        w-[420px]
        h-[420px]

        rounded-full

        bg-[var(--color-accent-green)]

        opacity-20
        blur-[140px]

        animate-float-slow

        pointer-events-none
        "
      />

      <div
        className="
        fixed
        bottom-[-180px]
        right-[-120px]

        w-[520px]
        h-[520px]

        rounded-full

        bg-[var(--color-accent-taupe)]

        opacity-20
        blur-[150px]

        animate-float-reverse

        pointer-events-none
        "
      />

      <div
        className="
        fixed
        top-[35%]
        left-[45%]

        w-[280px]
        h-[280px]

        rounded-full

        bg-[var(--color-accent-sand)]

        opacity-10
        blur-[110px]

        animate-float-slow

        pointer-events-none
        "
      />

      {/* EXTRA DEPTH BLUR */}

      <div
        className="
        fixed
        top-[70%]
        left-[10%]

        w-[240px]
        h-[240px]

        rounded-full

        bg-[var(--color-accent-green)]

        opacity-10
        blur-[100px]

        animate-float-reverse

        pointer-events-none
        "
      />

      {/* GRAIN TEXTURE */}

      <div
        className="
        fixed
        inset-0

        opacity-[0.03]

        pointer-events-none
        z-[1]

        mix-blend-multiply
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* CONTENT */}

      <div className="relative z-10">

        <Navbar />

        <main>

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />

        </main>

      </div>

    </div>
  )
}

export default App