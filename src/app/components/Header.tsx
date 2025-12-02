import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return(
        <div className="container p-5 flex justify-between mx-auto">
            {/* Logo */}
            <Logo/>

            {/* Buttons */}
            <div className="flex gap-4">
                <Link href="/login" className="button button-default">Login</Link>
                <Link href="/register" className="button button-default">Sign Up</Link>
            </div>
        </div>
    );
}