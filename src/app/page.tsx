import SpaceBackground from "@/componentes/pointergradiente";
import Starfild from "@/componentes/starfild";
import T1 from "@/componentes/T1";
import T2 from "@/componentes/T2";
import Nav from "@/componentes/Nav";
import L from "@/componentes/LinksHeader";
import Cardskills from "@/componentes/cardSkills";
import Cardprojetos from "@/componentes/cardProjetos";

export default function Home() {
  return (
    <div className="relative z-0 mx-auto min-h-screen max-w-screen-x1 px-6 py-12 font-sans lg:px-16 lg:py-0 md:px-12 md:py-16 ">
      <SpaceBackground />
      <Starfild />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header
          className="lg:sticky lg:flex lg:flex-col lg:max-h-screen
         space-y-4 justify-between pb-5 lg:py-24 lg:top-0 lg:w-[35%]  "
        >
          <div className="space-y-4 ">
            <h1 className="text-violet-700 font-bold text-4xl tracking-tight sm:text-5xl">
              Sergio Santos
            </h1>
            <div>
              <h2 className="text-violet-500 text-lg tracking-tight font-medium sm:text-xl">
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
              <L id="#skills">Skills</L>
              <L id="#projetos">Projetos</L>
            </div>
          </nav>
          <Nav />
        </header>
        <main className="lg:w-[65%] lg:py-24 min-h-screen ">
          <section id="about" className="scroll-mt-24 mb-24">
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
          <section id="skills" className="flex  scroll-mt-24 mb-24">
            <div className="flex flex-col w-full  ">
              <T1>Skills</T1>
              <Cardskills
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevrons-left-right-icon lucide-chevrons-left-right"
                  >
                    <path d="m9 7-5 5 5 5" />
                    <path d="m15 7 5 5-5 5" />
                  </svg>
                }
                t="Languages"
                c={["Java Script", "Type Script"]}
              />
              <Cardskills
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe-icon lucide-globe"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                }
                t="Frontend"
                c={["NextJS", "ReactJS", "TailwindCSS"]}
              />
              <Cardskills
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-100"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                }
                t="Backend"
                c={["NodeJS", "ExpressJS", "FastAPI"]}
              />
              <Cardskills
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-database-icon lucide-database"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                }
                t="Databases"
                c={["MySQL", "PostGree", "MongoDB"]}
              />
              <Cardskills
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-computer-icon lucide-computer"
                  >
                    <rect width="14" height="8" x="5" y="2" rx="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" />
                    <path d="M6 18h2" />
                    <path d="M12 18h6" />
                  </svg>
                }
                t="Cloud & DevOps Tools"
                c={["Git", "GitHub", "VS Code", "Docker"]}
              />
            </div>
          </section>
          <section id="projetos" className=" flex scroll-mt-24  ">
            <div className="w-full ">
              <T1>Projetos</T1>
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-3 w-full space-x-5 space-y-5 lg:space-y-0">
                <Cardprojetos
                  img="/ProjetoSaaS.png"
                  tec={[
                    "Next.JS",
                    "Type Script",
                    "Node.JS",
                    "PostgreSQL",
                    "TailwindCSS",
                  ]}
                  t="SaaS Inventory"
                  git="https://github.com/sergio088/saas"
                  live="https://saas-flame-chi.vercel.app/"
                />
                <Cardprojetos
                  img="/Portifolio pronto.png"
                  tec={["Next.JS", "Type Script", "TailwindCSS"]}
                  t="Portifolio"
                  git="https://github.com/sergio088/Portifolio"
                  live="https://portifolio-rho-bice.vercel.app/"
                />
                <Cardprojetos
                  img="/FrontN8N.png"
                  tec={[
                    "Next.JS",
                    "Type Script",
                    "TailwindCSS",
                    "Api REST",
                    "Vercel",
                  ]}
                  t="Projeto desenvolvido sob demanda para integração com automações no n8n"
                  job={true}
                  git=""
                  live="https://n8n-front.vercel.app/"
                />
                <Cardprojetos
                  img="/Jogodavelha.png"
                  tec={["Next.JS", "TypeScript", "TailwindCSS"]}
                  t="Versão interativa do clássico Jogo da Velha, desenvolvida para praticar gerenciamento de estados, lógica condicional e renderização dinâmica no React."
                  git="https://github.com/sergio088/Jogo-da-velha"
                  live="https://jogo-da-velha-sandy-one.vercel.app/"
                />

                <Cardprojetos
                  img="/SnakeGame.png"
                  tec={["Next.JS", "TypeScript", "TailwindCSS", "Canvas API"]}
                  t="Jogo da cobrinha desenvolvido para estudar manipulação de arrays, otimização de renderização e lógica de game loop com requestAnimationFrame."
                  git="https://github.com/sergio088/SnakeGame"
                  live="https://snake-game-kohl-one.vercel.app/"
                />
                <Cardprojetos
                  img="/Eduq-play-and-learn.png"
                  tec={["Next.JS", "TypeScript", "TailwindCSS", "Vercel"]}
                  t="Site infantil, de jogo da memoria para estimular o aprendizado e a memoria"
                  job={true}
                  git="https://github.com/sergio088"
                  live="https://eduq-play-and-learn.vercel.app/"
                />
                <Cardprojetos
                  img="/Tetris.png"
                  tec={[
                    "Next.JS",
                    "TypeScript",
                    "TailwindCSS",
                    "Vercel",
                    "Canvas API",
                  ]}
                  t="Jogo Tetris desenvolvido para estudar manipulaçao de arrays"
                  job={false}
                  git="https://github.com/sergio088/Tetris"
                  live="https://tetris-two-pi.vercel.app/"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
