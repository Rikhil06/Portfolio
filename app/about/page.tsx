import type { Metadata } from "next";
import AboutAccordion from '@/components/AboutAccordion';
import Link from 'next/link';
import React from 'react'
import { FaPlaneDeparture, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Rikhil Makwana - About",
  description: "Learn more about Rikhil Makwana, a London-based Full-Stack Developer with 5+ years of experience in building dynamic web applications. Explore my skills in React, Next.js, Node.js, and GraphQL, view projects, and get in touch to collaborate on innovative digital experiences.",
};

export default function page() {
  return (
        <>
          <main className='relative z-1'>
            <section className="pt-32 bg-[#080808]">
                <div className="max-w-[64rem] ml-auto mr-auto">
                    <div className="flex flex-wrap items-center about-hero">
                        <div className="w-3/5 p-8">
                            <h1 className='text-5xl leading-16 font-medium pb-4 text-[#f8f8f8]'>Full Stack Developer</h1>
                            <p className='leading-6'>Creative and detail-oriented Full-Stack Developer with 5+ years of experience in building dynamic, scalable, and user-focused
                                web applications. Skilled in both frontend and backend development using modern technologies such as React, Next.js, Node.js, and GraphQL. Proven ability to
                                architect and implement full-stack solutions, build custom APIs, and collaborate with cross-functional teams to deliver performant and accessible digital experiences.
                            </p>
                            <div className="flex gap-2 pt-6">
                                <Link href="/Rikhil_Makwana.pdf" className="btn flex items-center justify-center border-2 border-[#007aff] bg-[#007aff] text-[#f8f8f8] rounded-[3rem] px-4 py-2 w-fit gap-1">Download CV <FaArrowDown /></Link>
                                <Link href="https://github.com/Rikhil06/" target='_blank' className="btn flex items-center justify-center border-2 border-[#BFFFD1] bg-[#BFFFD1] text-[#080808] rounded-[3rem] px-4 py-2 w-fit gap-1">Github <FaGithub /></Link>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="p-2 border-1 border-[#ffffff14] rounded-2xl">
                                <div className="bg-cover w-[23.8rem] h-[32rem] flex pp-image rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-8 bg-[#080808]">
                <div className="max-w-[64rem] ml-auto mr-auto">
                    <AboutAccordion />
                </div>
            </section>

            <section className="pt-8 pb-20 bg-[#080808]">
                <div className="max-w-[64rem] ml-auto mr-auto">
                    <div className="flex gap-2">
                        <div className="flex p-3.5 w-1/4 items-center justify-center bg-[#101010] rounded-2xl border-1 border-[#ffffff14]">
                            <Image src="/vscode.svg" width={60} height={32} alt="VSCode" />                   
                        </div>
                        <div className="flex p-3.5 w-1/4 items-center justify-center bg-[#101010] rounded-2xl border-1 border-[#ffffff14]">
                            <Image src="/figma.svg" width={80} height={32} alt="Figma" />                   
                        </div>
                        <div className="flex p-3.5 w-1/4 items-center justify-center bg-[#101010] rounded-2xl border-1 border-[#ffffff14]">
                            <Image src="/wordpress.svg" width={60} height={32} alt="Wordpress" />                   
                        </div>
                        <div className="flex p-3.5 w-1/4 items-center justify-center bg-[#101010] rounded-2xl border-1 border-[#ffffff14]">
                            <Image src="/git.svg" width={70} height={32} alt="VSCode" />                   
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-8 pb-20 bg-[#080808]">
                <div className="max-w-[64rem] ml-auto mr-auto">
                    <div className="flex gap-2">
                        <div className="w-2/4">
                            <div className="rounded-xl">
                                <div className='h-[687px] w-full relative'>
                                    <Image src='/mockup.png' fill alt="mockup" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4">
                            <div className="rounded-xl">
                                <div className='h-[687px] w-full relative'>
                                    <Image src='/placeholder.jpg' fill alt="mockup" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            


            <section className="pb-20 bg-[#080808]">
                <div className="max-w-[64rem] ml-auto mr-auto pt-20">
                    <div className="p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010]">
                    <div className="p-8 text-center w-full inner-wrapper">
                        <h2 className='text-[#f8f8f8] text-[4rem] font-medium'>Exploring new challenges</h2>
                        <div className="flex justify-center pt-8">
                        <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className="btn flex items-center justify-center border-2 border-[#007aff] bg-[#007aff] text-[#f8f8f8] rounded-[3rem] px-4 py-2 w-fit">Contact</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
          </main>

        <footer className='bg-[#101010] sticky bottom-0'>
            <div className="px-10 h-auto">
                <div className="max-w-[64rem] ml-auto mr-auto w-full">
                    <div className="py-12 flex items-center justify-between border-b-1 border-[#ffffff14]">
                        <div className='flex items-center gap-6'>
                            <Link href="https://www.linkedin.com/in/rikhil-makwana-93940a153/" target='_blank' className='text-[#cac9c9]'>Linkedin</Link>
                            <Link href="https://github.com/Rikhil06/" target='_blank' className='text-[#cac9c9]'>Github</Link>
                            <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" target='_blank' className='text-[#cac9c9]'>rikhilmakwana06@gmail.com</Link>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className='text-[#cac9c9]'>🇬🇧 London, UK</p>
                            <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className='text-white !text-[1rem] flex items-center gap-3'>Available remotely <FaPlaneDeparture /></Link>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-6">
                        <p className='text-[#cac9c9]'>© {new Date().getFullYear()}</p>
                        <p className='text-[#cac9c9]'>Rikhil Makwana</p>
                    </div>
                </div>
            </div>
      </footer>
    </>
  )
}
