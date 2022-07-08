import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
            <Link href="/">
                <a> Home </a>
            </Link>
            
            <Link href="/about">
                <a> About </a>
            </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
