import {NotebookPen, User} from "lucide-react"
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-24 h-screen bg-[#d0edd4] flex flex-col justify-between items-center py-4 fixed top-0 left-0">
      {/* Top button */}
      <button className="p-2 h-12 w-12 rounded-full bg-gray-200 hover:bg-gray-300 hover:text-[#2d973b] flex items-center justify-center cursor-pointer">
        <NotebookPen size={24} />
      </button>

      {/* Bottom buttons */}
      <Link href="/register" className="flex flex-col gap-2 mb-5 items-center hover:text-[#2d973b]">
        <button className="p-2 h-12 w-12 rounded-full bg-gray-200  flex items-center justify-center cursor-pointer">
          <User size={24} />
        </button>
        <p className="text-base text-center">Sign Up</p>
      </Link>
    </div>
  )
}
