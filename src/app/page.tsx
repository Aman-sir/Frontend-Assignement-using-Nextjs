import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen">
       <div className="flex text-center flex-col w-fit h-fit mx-auto mt-52">
       <h1 className="text-4xl text-white text-center font-mono w-fit mx-auto bg-blue-500 px-3 py-2 rounded-md">Frontend Task</h1>
      
      <h3 className="mt-4 text-blue-200"><Link href={"/books"}> Click on <span className="text-blue-600">Book List</span> For Visiting Books Page </Link>
      </h3>
       </div>
    </main>
  );
}
