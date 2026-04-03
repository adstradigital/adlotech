'use client'

export default function About() {
  return (
    <div className="bg-white">
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061326]/80 via-[#0c2445]/65 to-[#061326]/55" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
          <div className="max-w-xl translate-y-24 sm:translate-y-28">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">About Us</h1>
            <p className="mt-6 text-2xl font-medium text-white/90">
              Adlotech <span className="mx-2 text-white/40">{'>'}</span>{' '}
              <span className="text-blue-200">About Us</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            About Us - Python Training Institute in Calicut
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 sm:text-lg">
            <p>
              Adlotech is a career-focused Python training institute based in Calicut, Kerala, dedicated to helping
              students and aspiring professionals build strong programming skills and launch successful careers in the
              IT industry. Powered by AdstraDigital, Adlotech was created with a clear vision: to bridge the gap
              between academic knowledge and real-world software development requirements through practical,
              industry-oriented training.
            </p>

            <p>
              In today&apos;s fast-evolving tech landscape, Python has become one of the most in-demand programming
              languages across industries. At Adlotech, we focus on delivering a structured and intensive Python
              training program that emphasizes hands-on learning, real-time coding experience, and project-based
              development. Our goal is not just to teach programming, but to prepare students to confidently work on
              real-world applications and industry projects.
            </p>

            <p>
              Our 6-month Python training program is designed to build a strong foundation in programming while
              providing exposure to modern development tools and practices. Students learn directly from experienced
              industry professionals who provide continuous mentorship and guidance throughout the learning journey. The
              program also offers opportunities for stipend-based internships, enabling students to gain practical
              industry experience and enhance their career prospects.
            </p>

            <p>
              Adlotech is open to B.Tech and BCA students, graduates, and beginners who are passionate about starting
              a career in programming. Whether you are new to coding or looking to step into the IT field, our
              training approach ensures you gain the skills, confidence, and industry readiness required to succeed.
            </p>

            <p>
              With a strong focus on practical learning, career development, and globally recognized certification,
              Adlotech is committed to empowering the next generation of Python developers and helping them build a
              future-ready career in technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
