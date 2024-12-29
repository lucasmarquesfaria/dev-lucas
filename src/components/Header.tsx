import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          LUCAS<span className="text-purple-500">DEV</span>
        </Link>
        <ul className="flex space-x-8">
        </ul>
      </nav>
    </header>
  )
}

