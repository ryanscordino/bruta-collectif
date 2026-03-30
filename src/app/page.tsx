import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center font-mono">
      {
        // TODO: add a rotation of images logo*.jped from the public folder
        // They need to change every 1.5 seconde
      }
      <h1 className="text-xl">BRUTA COLLECTIF</h1>
    </div>
  );
}
