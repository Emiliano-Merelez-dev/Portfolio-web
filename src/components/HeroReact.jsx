
import Typewriter from 'typewriter-effect';

export default function HeroReact() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#0F172A] text-white px-4 py-20 min-h-screen text-center md:text-left"
    >
      {/* FOTO A LA IZQUIERDA */}
      <img
        src="/images/image.jpg"
        alt="Foto de Emiliano Merelez"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-2 border-gray-700 mb-6 md:mb-0 md:mr-10"
      />

      {/* TEXTO A LA DERECHA */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold fade-in mb-4">
          <Typewriter
            options={{
              strings: ["Hello!, I'm Emiliano Merelez", 'Full stack developer.'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>

        <p className="text-lg md:text-xl max-w-xl mt-6 text-gray-300 fade-in">
          Full Stack Developer with a specialized focus on <span class="text-red-500">Front-end</span>, passionate about creating attractive and functional interfaces.
        </p>

        {/* ÍCONOS REDES SOCIALES */}
        <div className="flex space-x-6 mt-6 fade-in">
          <a href="https://github.com/Emiliano-Merelez-dev" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/GitHub.png"
            alt="GitHub"
            className="w-8 h-8 bg-white rounded-full p-1 transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_8px_#60A5FA]"
          />

          </a>
          <a href="https://www.linkedin.com/in/emiliano-matias-merelez-300b86274/" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/LinkedIn.png"
              alt="LinkedIn"
              className="w-8 h-8 transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_6px_#60A5FA] hover:brightness-125"
            />
          </a>
        </div>

        {/* SECCIÓN CONTACTAME */}
        <div className="mt-10">
          <a
            href="#contacto"
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:brightness-125"
          >
            ¡Contact me!
          </a>
        </div>
      </div>
    </section>
  );
}