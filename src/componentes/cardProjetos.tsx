import Image from "next/image";

interface props {
  img: string;
  t: string;
  git: string;
  tec: string[];
  live: string;
}

export default function Cardprojetos({ img, t, git, tec, live }: props) {
  return (
    <div
      className="border border-violet-500 rounded  w-full group hover:shadow-xl "
      style={{ boxShadow: "0 4px 20px rgba(139, 92, 246, 0.5)" }}
    >
      <div className=" rounded rounded-b-none relative w-full h-48 overflow-hidden">
        <Image
          src={img}
          alt="Imagem projeto"
          fill
          className="object-cover rounded-t group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-2">
        <div className="flex space-x-3 mb-3">
          {tec.map((item, index) => (
            <p
              key={index}
              className=" text-slate-400 rounded-2xl font-semibold "
            >
              {item}
            </p>
          ))}
        </div>
        <div className="space-y-3">
          <h1 className="text-slate-200 font-bold">{t}</h1>
          <div className="space-x-5 text-slate-400 flex">
            <a href={git} className="hover:text-violet-500 flex">
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
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <a href={live} className="hover:text-violet-500 flex">
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
                className="lucide lucide-external-link-icon lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
