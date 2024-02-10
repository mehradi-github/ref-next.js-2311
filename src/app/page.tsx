import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        height={600}
        width={800}
        src="https://picsum.photos/800/600?image=0"
        alt="Laptop"
      />
    </div>
  );
}
