import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./nav";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Daniel<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
