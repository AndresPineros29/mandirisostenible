/* eslint-disable react/prop-types */
// Import Link
import { Link } from "react-router-dom";
// Import data
import { servicesData } from "../../Data/servicesData";

const Home = () => {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <main className="mt-20 xl:mt-36">
      <section className="flex flex-col-reverse xl:flex-row">
        <div className="w-full xl:w-2/3 p-10 md:p-24 xl:p-16 bg-secundary-green text-center">
          <h1 className="text-xl text-white font-bold uppercase">
            Por que elegirnos?
          </h1>
          <br />

          <h2 className="text-lg text-white font-bold">
            Compromiso con la sostenibilidad
          </h2>
          <p className="text-white text-lg">
            La sustentabilidad es el núcleo de nuestra organización. Nuestra
            misión es fomentar acciones que protejan el medio ambiente y asistir
            a nuestros clientes en la disminución de su impacto ecológico.
            Nuestra estrategia se fundamenta en la economía circular y en el
            aprovechamiento óptimo de los recursos, impulsando un modelo de
            negocio duradero en el tiempo y en armonía con el entorno.
          </p>
          <br />

          <h2 className="text-lg text-white font-bold">
            Impacto positivo en la comunidad
          </h2>
          <p className="text-white text-lg">
            Tomamos parte activa en proyectos educativos relacionados con el
            medio ambiente y en programas que promueven la responsabilidad
            social, con el fin de fomentar el conocimiento y el compromiso
            ciudadano en asuntos socioambientales.
          </p>
          <br />
          <h2 className="text-lg text-white font-bold">
            Soluciones integrales
          </h2>
          <p className="text-white text-lg">
            Diseñamos soluciones integrales y a la medida para satisfacer las
            necesidades particulares del sector público y privado. Nuestra gama
            de servicios incluye evaluaciones de impacto ambiental, gestión de
            residuos, eficiencia energética y asesoría en certificaciones
            ambientales.
          </p>
          <br />

          <h2 className="text-lg text-white font-bold">
            Ética y responsabilidad
          </h2>
          <p className="text-white text-lg">
            Nos aseguramos de cumplir con las regulaciones ambientales vigentes
            y siempre buscamos ir más allá de los requisitos mínimos para
            garantizar resultados excepcionales y duraderos.
          </p>
        </div>
        <div className="w-full h-64 md:h-96 xl:h-auto bg-bottom bg-home-image bg-cover"></div>
      </section>
      <section
        id="services"
        className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-3"
      >
        {servicesData.map((data, i) => (
          <div
            key={i}
            className={`py-10 flex flex-col gap-5 text-center items-center ${
              data.color === 1 ? "bg-primary-blue" : "bg-white"
            }`}
          >
            <img className="w-20" src={data.icon} />
            <h3
              className={`text-xl font-bold ${
                data.color === 1 ? "text-white" : "text-primary-blue"
              }`}
            >
              {data.service}
            </h3>
            <Link to={data.ruta}>
              <button
                className="py-2 px-11 rounded-md bg-secundary-green text-white"
                onClick={scrollToTop}
              >
                Ver más
              </button>
            </Link>
          </div>
        ))}
      </section>
      <section className="py-20 lg:py-40 xl:py-44 flex justify-around bg-[url('https://images.unsplash.com/photo-1584204559709-ca7d413229eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-4 text-2xl lg:text-4xl xl:text-6xl">
          <h3 className="text-white">Si deseas mas información</h3>
          <Link to={"/contacto"}>
            <div
              className="p-3 lg:p-5 xl:p-7 rounded-full bg-primary-green text-white"
              onClick={scrollToTop}
            >
              Contactanos Aqui
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
