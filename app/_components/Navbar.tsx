import Link from "next/link"
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { RiBookShelfLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
const navItems = [
    {
        href:"/",
        label:"Home",
        icon:<IoMdHome/>,
    },
    {
        href:"/about",
        label:"About",
        icon:<CgProfile />,
    },
    {
        href:"/snippets",
        label:"Snippets",
        icon:<FaCode />,
    },
    {
        href:"/projects",
        label:"Projects",
        icon:<RiBookShelfLine />,
    }
]
export default function Navbar() {
  return (
    <nav className="flex flex-col gap-3   backdrop-blur-md border border-white/20 p-3">
        {
            navItems.map(navItem => (
                <Link href={navItem.href} key={navItem.label} className=" py-2 flex px-2 items-center gap-3 hover:font-bold  backdrop-blur-lg border border-white/20">
                    <div className="text-xl">{navItem.icon}</div>
                    <div className="pt-1">
                        {navItem.label}
                    </div>
                </Link> 
            ))
        }
    </nav>
  )
}
