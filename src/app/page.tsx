import SpaceBackground from "@/componentes/pointergradiente";
import Starfild from "@/componentes/starfild";

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen text-white">
      <SpaceBackground />
      <Starfild />
      <div className="flex  justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Portfólio Espacial 🚀</h1>
      </div>
    </div>
  );
}
