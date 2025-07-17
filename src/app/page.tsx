import SpaceBackground from "@/componentes/pointergradiente";
import Starfild from "@/componentes/starfild";
import T1 from "@/componentes/T1";
import T2 from "@/componentes/T2";
import Nav from "@/componentes/Nav";
import L from "@/componentes/LinksHeader";

export default function Home() {
  return (
    <div className="relative z-0 mx-auto min-h-screen max-w-screen-x1 px-6 py-12 font-sans lg:px-16 lg:py-0 md:px-12 md:py-16 ">
      <SpaceBackground />
      <Starfild />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header
          className="lg:sticky lg:flex lg:flex-col lg:max-h-screen
         space-y-4 justify-between pb-5 lg:py-24 lg:top-0 lg:w-[48%]  "
        >
          <div className="space-y-4 ">
            <h1 className="text-slate-200 font-bold text-4xl tracking-tight sm:text-5xl">
              Sergio Santos
            </h1>
            <div>
              <h2 className="text-slate-200 text-lg tracking-tight font-medium sm:text-xl">
                Full Stack Developer
              </h2>
            </div>
            <div>
              <p className="text-slate-400 max-w-xs ">
                Desenvolvo aplicações web completas com foco em performance,
                acessibilidade e boa experiência de uso.
              </p>
            </div>
          </div>
          <nav>
            <div className="hidden lg:flex lg:flex-col">
              <L id="#about">About</L>
              <L id="#tecnologias">Tecnologias</L>
              <L id="#projetos">Projetos</L>
            </div>
          </nav>
          <Nav />
        </header>
        <main className="lg:w-[52%] lg:py-24 space-y-14 ">
          <section id="about" className="scroll-mt-24">
            <div className="space-y-10 ">
              <T1>Sobre mim</T1>
              <T2>
                Desde pequeno, tecnologia sempre me fascinou. Eu era o tipo de
                criança que desmontava controle remoto só pra entender o que
                tinha dentro (e às vezes conseguia montar de novo 😅). Essa
                curiosidade nunca foi embora — ela só evoluiu. Hoje, virou
                vontade de aprender todos os dias, criar soluções reais com
                código e transformar ideias em experiências que funcionam de
                verdade.
              </T2>
              <T2>
                🚀 Atualmente, estou me desenvolvendo como dev full stack, com
                um carinho especial tanto pela parte visual quanto pela lógica
                por trás das aplicações. No front, gosto de pensar na
                experiência do usuário e deixar tudo bonito e fluido ✨. Mas é
                no back-end que eu mais me encontro: gosto da estrutura, dos
                desafios lógicos e da sensação de que tudo está conectado por
                trás dos panos 🧠.
              </T2>
              <T2>
                {" "}
                Estudo e pratico com tecnologias como React, Next.js, Node.js,
                MongoDB, MySQL, PostgreSQL, Tailwind CSS, Git e outras — sempre
                tentando escrever um código mais limpo, performático e
                sustentável 💡. Meu foco agora é ganhar experiência real, seja
                com freelas, projetos pessoais ou contribuindo com times que
                valorizem evolução contínua. Quero crescer junto com quem também
                tem sede de aprender, colaborar e construir coisas que façam
                sentido 🌌. Se quiser trocar uma ideia, criar algo junto ou só
                bater um papo, tô por aqui. Bora? 💬✨
              </T2>
            </div>
          </section>
          <section id="tecnologias" className=" flex items-center h-screen">
            <div className="mt-50">
              <T2>Em desemvolvimento...</T2>
            </div>
          </section>
          <section id="projetos" className=" flex items-center h-screen ">
            <div className="">
              <T2>Em desemvolvimento...</T2>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
