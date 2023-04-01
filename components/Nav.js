import Link from "next/link"

const Nav = (props) => {
    return (
        <nav>
            <ul className="flex justify-evenly py-2 px-4 bg-zinc-400">
                <li className="px-4 py-2 font-bold text-white bg-cyan-500 rounded-2xl hover:bg-cyan-700">
                    <Link href="/">HOME</Link>
                </li>
                <li className="px-4 py-2 font-bold text-white bg-green-500 rounded-2xl hover:bg-green-700">
                    <Link href="/new">ADD POST</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav