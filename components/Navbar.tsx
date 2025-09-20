import { animate } from 'motion/react';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

  const scrollToSection = (id: any) => {
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
  };
  return (
    <header className='flex justify-center fixed left-2/4 -translate-x-2/4 z-50'>
        <nav className='flex items-center p-2 border-1 border-[#ffffff14] bg-[#101010] rounded-[3rem] backdrop-blur-lg ml-auto mr-auto gap-4'>
            <Link href="/" className='text-2xl pl-4 opacity-[.9] font-semibold'>Rikhil.</Link>
            <ul className='flex items-center'>
                <button onClick={handleCasesClick} className='h-8 px-4 py-2 flex items-center justify-center cursor-pointer'>
                    Cases
                </button>
                <Link href="/about" className='h-8 px-4 py-2 flex items-center justify-center'>
                    About
                </Link>
                <Link href="/Rikhil_Makwana.pdf" className='h-8 px-4 py-2 flex items-center justify-center gap-2'>
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
            </ul>
            <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className='btn flex items-center justify-center border-2  border-[#007aff] bg-[#007aff] text-[#f8f8f8] rounded-[3rem] px-4 py-2'>Contact</Link>
        </nav>
    </header>
  )
}
