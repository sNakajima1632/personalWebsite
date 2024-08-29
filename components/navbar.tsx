import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavBar() {
    return (
        <div className="flex h-full w-full flex-row bg-slate-800 text-white">
            <Link
                className="flex p-4 justify-center items-center md:h-full" 
                href="/"
            >
                <div className="w-32 text-lg md:w-60">
                    Shido Nakajima&apos;s Website
                </div>
            </Link>
            <div className="flex grow flex-col justify-between space-y-2 md:flex-row md:space-y-0">
                {/* Spacing between title and navigation tabs */}
                <div className="hidden h-auto w-full grow md:block"></div>
                <NavLinks />
            </div>
        </div>
    )
}