import Link from "next/link";

export default function Page(){
    return <>
    home page


    <Link  className="rounded-lg bg-red-500 text-white hover:bg-blue-500" href={"/test"}>
     test page
    </Link>
    </>
}