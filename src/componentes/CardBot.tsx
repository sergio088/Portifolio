interface CardBotProps {
  video: string;
  t: string;
  git: string;
  tec: string[];
  job?: boolean;
}

export default function CardBot({ video, t, git, tec, job }: CardBotProps) {
  return (
    <div
      className="border border-violet-500 rounded w-full group hover:shadow-xl transition-shadow duration-300"
      style={{ boxShadow: "0 4px 20px rgba(139, 92, 246, 0.5)" }}
    >
      {/* Video */}
      <div className="relative w-full h-48 overflow-hidden rounded-t">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-t group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tec.map((item, index) => (
            <p key={index} className="text-slate-400 rounded-2xl font-semibold text-sm">
              {item}
            </p>
          ))}
        </div>

        <div className="space-y-3">
          <h1 className="text-slate-200 font-bold">{t}</h1>

          {job && (
            <h1 className="border border-transparent bg-gradient-to-r from-green-500 to-violet-500 text-white w-fit rounded-2xl px-2 font-semibold text-sm">
              Projeto Remunerado
            </h1>
          )}

          {/* GitHub link */}
          <div className="text-slate-400">
            <a href={git} target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 flex items-center gap-1 w-fit">
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
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
