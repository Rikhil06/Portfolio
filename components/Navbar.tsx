import { animate } from 'motion/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.pageYOffset;

    animate(window.scrollY, top, {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  // Scroll on page load if there's a hash in the URL
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => scrollToSection(id), 100); // give DOM a moment to render
    }
  }, [pathname]);

  const handleCasesClick = () => {
    if (pathname === '/') {
      scrollToSection('case-studies');
    } else {
      router.push('/#case-studies');
    }
    setIsNavOpen(false);
  };

  const handleNavLinkClick = () => setIsNavOpen(false);
  return (
    <header className='flex justify-center fixed left-2/4 -translate-x-2/4 z-50 md:w-[520px] w-full'>
        <nav className='relaive flex items-center p-2 border-1 border-[#ffffff14] bg-[#101010] md:rounded-[3rem] backdrop-blur-lg ml-auto mr-auto gap-4 w-full md:justify-start justify-between'>
            <Link href="/" className='text-2xl pl-4 opacity-[.9] font-semibold' onClick={handleNavLinkClick}>Rikhil.</Link>
            <div className={`items-center md:flex ${isNavOpen ? 'flex absolute flex-col items-start top-[60px] bg-[#101010] w-full h-screen left-0 right-0' : 'hidden'}`}>
                <button onClick={handleCasesClick} className='h-8 px-4 py-2 flex items-center justify-center cursor-pointer md:text-[16px] text-5xl md:my-0 my-10'>
                    Projects
                </button>
                <Link href="/about" className='h-8 px-4 py-2 flex items-center justify-center md:text-[16px] text-5xl md:my-0 my-10' onClick={handleNavLinkClick}>
                    About
                </Link>
                <Link href="https://drive.google.com/file/d/1lkXiKm4sjx8mag2dFhZSJKctZ4WgtLFP/view?usp=sharing" target="_blank" className='h-8 px-4 py-2 flex items-center justify-center gap-2 md:text-[16px] text-5xl md:my-0 my-10' onClick={handleNavLinkClick}>
                    Resume
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5'>
                        <mask id="mask0_5447_55667" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
                        <rect x="0.769043" y="0.308594" width="16" height="16" fill="#D9D9D9"></rect>
                        </mask>
                        <g mask="url(#mask0_5447_55667)">
                        <path d="M5.03563 12.3073L4.10229 11.374L10.5023 4.97396H4.76896V3.64062H12.769V11.6406H11.4356V5.90729L5.03563 12.3073Z" fill="white"></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className='md:block flex items-center gap-6 md:pr-0 pr-4'>
              <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className='btn flex items-center justify-center border-2  border-[#004FB3] bg-[#004FB3] text-[#f8f8f8] rounded-[3rem] px-4 py-2'>Contact</Link>
              <div className={`hambuger md:hidden cursor-pointer ${isNavOpen && 'active'}`} onClick={() => setIsNavOpen((prev) => !prev)}>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
              </div>
            </div>
        </nav>
    </header>
  )
}
