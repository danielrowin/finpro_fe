import Link from "next/link";
import logo from "@/assets/images/logo_minimiracle.png";
import {
    UserCircle,
    ShoppingBag
} from "@phosphor-icons/react";
import inputSearch from "@/components/layout/navbar/inputSearch";
import Image from "next/image";
export default function Navbar() {

    return (
        <header className="w-full">
            <div className="container flex flex-wrap justify-between items-center p-4">
                <Link href="/" className="flex items-center flex-row font-bold text-color-black hover:text-primary text-3x1">
                    <Image
                        src={logo}
                        alt="Logo MiniMiracle"
                        width={50}
                        height={50}
                        className="mr-2 rounded-full w-auto h-auto"
                    />
                    MiniMiracle
                </Link>
            </div>
        </header>
    )
}