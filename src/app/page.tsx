import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        fill
        src="https://picsum.photos/800/600?image=0"
        alt="Laptop"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
