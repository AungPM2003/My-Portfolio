import Link from "next/link";

export default function Name() {
  return (
    <header className="w-full flex items-center backdrop-blur-lg bg-opacity-50 h-[3.5em] px-[15%] absolute top-0 left-0 border-b border-b-gray-500 z-[999999]">
        <Link href="/home">Aung Myat</Link>
    </header>
  )
}
