import Image from "next/image";

interface props {
  img: string;
}

function Cardimage({ img }: props) {
  return (
    <div className=" rounded rounded-b-none relative w-full h-48 overflow-hidden transition-all">
      <Image
        src={img}
        alt="Imagem projeto"
        fill
        className="object-cover rounded-t group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}
