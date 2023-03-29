import Link from "next/link"

const Nav = (props) => {
    return (
        <nav>
            <ul className="flex justify-evenly py-2 px-4 bg-gray-300">
                <li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-2xl hover:bg-blue-700">
                    <Link href="/">HOME</Link>
                </li>
                <li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-2xl hover:bg-blue-700">
                    <Link href="/new">ADD BLOG</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav