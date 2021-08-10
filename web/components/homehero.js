import Image from "next/image";
import rodrun1 from "../public/rodrun1.jpg";

export default function Homehero() {
  return (
    <div>
      <div className="relative container mx-auto">
        <div className="absolute inset-10 z-50 flex justify-center items-start text-xl md:text-6xl text-white font-semibold">
          <p> Welcome to Northeast Rod Run</p>
        </div>

        <Image
          layout="responsive"
          objectFit="contain"
          src={rodrun1}
          alt="Picture of cars driving"
        />
      </div>
    </div>
  );
}
