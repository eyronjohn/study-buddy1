import Header from "@/app/components/Header";
import Sidebar from "../components/Sidebar";
export default function({
    className,
    children
}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col justify-between min-h-screen w-full ml-24 ">
            
            <Header/>
            <main className={`container flex justify-center mx-auto p-5 flex-1 ${className}`}>{children}</main>
            </div>
        </div>
    )
}