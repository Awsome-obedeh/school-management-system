import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="h-screen flex title">

      {/* left side */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] h-screen  shadow-gray-300" >
        <Link href="/" className='flex  items-center justify-center lg:justify-start gap-2'>
          <Image alt="school logo" src='/logo.png' width={32} height={32}></Image>
          <span className='hidden lg:block font-semibold'>Awsome School</span>
        </Link>
        <Menu/>
      </div>

      {/* right */}
      <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col ">
        <Navbar/>
        {children}
      </div>
    </div>

  );
}
