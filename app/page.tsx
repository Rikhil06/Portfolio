'use client';

import { useEffect, useRef, useState } from 'react';
import { Noto_Serif_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaPlaneDeparture } from "react-icons/fa";
import Accordion from '@/components/Accordion';
import Head from './head';
import { IoArrowForward, IoClose } from "react-icons/io5";
import TransitionLink from '@/components/utils/TransitionLink';

const noto = Noto_Serif_Display({
    weight: ["400"],
    subsets: ['latin'],
});

export default function Home() {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const CARD_WIDTH = 320;
  const GAP = 8;
  const CARD_COUNT = 10;
  const VIEWPORT_WIDTH = typeof window !== "undefined" ? window.innerWidth : 0;
  const TOTAL_CARDS_WIDTH = CARD_COUNT * (CARD_WIDTH + GAP);
  const MAX_SCROLL_X = -(TOTAL_CARDS_WIDTH - VIEWPORT_WIDTH);
  const scrollOffset = useMotionValue(0);
  const rawScrollX = useTransform(scrollYProgress, [0, 1], [0, MAX_SCROLL_X]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dragOffset = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    scrollOffset.set(rawScrollX.get());
    const unsub = rawScrollX.on("change", (v) => scrollOffset.set(v));
    return () => unsub();
  }, [rawScrollX, scrollOffset]);


  return (
      <>
      <Head />
      <motion.main ref={wrapperRef} className='relative z-1'>
          <section className="pt-32 max-w-[51rem] ml-auto mr-auto bg-[#080808] md:px-0 px-4">
            <div className="max-w-[64rem] ml-auto mr-auto">
              <div className="flex items-center flex-col text-center">
                <div className='flex gap-4'>
                  <p className={`${noto.className} text-sm !italic`}>Full-Stack Developer & Problem Solver</p>
                  <div className="relative w-[60px] h-5 bg-black overflow-hidden">
                    <div className="bubble absolute top-0 left-[15px] w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#e64980] to-[#ff8787]"></div>
                    <div className="bubble1 absolute top-0 left-[1px] w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#82c91e] to-[#3bc9db]"></div>
                    <div className="bubble2 absolute top-0 left-[30px] w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#7950f2] to-[#f783ac]"></div>
                    <div className="bubble3 absolute top-0 left-[20px] w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#4481eb] to-[#04befe]"></div>
                  </div>
                </div>
                <h1 className="md:text-[4rem] text-5xl font-medium md:leading-[4.5rem] leading-14 text-[#f8f8f8] pb-4">Crafting fast, scalable, and user-friendly digital solutions.</h1>
                <p>
                  5+ years crafting modern websites and apps with React, Next.js, Node.js, and WordPress.
                  From custom CMS builds to performance optimisation, I blend technical precision with design flair for seamless user experiences.
                </p>
              </div>
            </div>
          </section>


        <section className="pt-20 pb-20 w-lvw relative overflow-hidden bg-[#080808] md:px-0 px-4">
          <motion.div 
            style={{ x: scrollOffset }} 
            role="region"  
            aria-label="Scrollable project gallery" 
            tabIndex={0}
            onKeyDown={(e) => {
              const step = CARD_WIDTH + GAP;
              if (e.key === "ArrowRight") {
                scrollOffset.set(Math.max(scrollOffset.get() - step, MAX_SCROLL_X));
              }
              if (e.key === "ArrowLeft") {
                scrollOffset.set(Math.min(scrollOffset.get() + step, 0));
              }
            }}
          >
            <motion.div 
              className="gap-y-2 gap-x-2 flex items-center justify-items-start w-max cursor-grab active:cursor-grabbing touch-none" 
              style={{ x: dragOffset }}
              drag="x"
              dragListener={true}
              dragMomentum={!prefersReducedMotion}
              dragConstraints={{ left: MAX_SCROLL_X, right: 0 }}
              dragElastic={prefersReducedMotion ? 0 : 0.15}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              onDragStart={() => { document.body.style.userSelect = 'none'; }}
              onDragEnd={() => { document.body.style.userSelect = ''; }}
            >
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/1.png' fill alt="Glion" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/2.png' fill alt="Cytora" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/4.png' fill alt="MBL Seminars" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/3.png' fill alt="MetFilm School" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/5.png' fill alt="Good Salon Guide" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/6.png' fill alt="Hudgell's Solicitors" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/7.png' fill alt="Everyone's Energy" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/10.png' fill alt="Royal Society" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/9.png' fill alt="NFTS" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2 object-right" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
              <div className="relative w-[20rem] h-[45vh]">
                <Image src='/11.png' fill alt="Categorama" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2" draggable={false} onDragStart={(e) => e.preventDefault()}/> 
              </div>
            </motion.div>
          </motion.div>
          <div className="flex justify-center pt-12">
            <TransitionLink href="/about" className="btn flex items-center justify-center border-2 border-[#004FB3] bg-[#004FB3] text-[#f8f8f8] rounded-[3rem] px-4 py-2 w-fit">Get to know me</TransitionLink>
          </div>
        </section>
        
        <section className="pt-20 pb-20 bg-[#080808] md:px-0 px-4">
          <div className="max-w-[64rem] ml-auto mr-auto">
            <div>
              <p className={`${noto.className} text-sm text-center pb-2 !italic`}>What I do</p>
              <h2 className='text-5xl text-center font-medium text-[#f8f8f8]'>Areas of expertise</h2>
            </div>
            <div className='flex pt-12 gap-2 md:flex-nowrap flex-wrap'>
              <div className="md:w-2/4 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="bg-[#101010] rounded-xl text-[#f8f8f8]">
                  <div className="bg-[#080808] rounded-xl">
                    <DotLottieReact
                      src="web_design.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>Full-Stack Development</h3>
                    <p className='text-[#cac9c9]'>I build dynamic, scalable web apps with performant frontends and robust backends, creating seamless, accessible user experiences end-to-end.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>React</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Next.js</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Typescript</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Node.js</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Express</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>GraphQL</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>PHP</span>
                  </div>
                </div>
              </div>
            <div className="md:w-2/4 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="bg-[#101010] rounded-xl text-[#f8f8f8]">
                  <div className="bg-[#080808] rounded-xl">
                    <DotLottieReact
                      src="3D_designer.lottie"
                      loop
                      autoplay
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>UI Engineering & Collaboration</h3>
                    <p className='text-[#cac9c9]'>I turn design systems into pixel-perfect, responsive interfaces, collaborating with teams to deliver consistent, scalable, and engaging user experiences.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Client Collaboration</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Component Architecture</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Design Systems</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Brand Consistency</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Figma</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>XD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="pb-20 bg-[#080808] md:px-0 px-4">
          <div className="max-w-[64rem] ml-auto mr-auto border-t-1 pt-20 border-[#ffffff14]">
            <div>
              <p className={`${noto.className} text-sm text-center pb-2 !italic`}>Projects</p>
              <h2 className='text-5xl text-center font-medium text-[#f8f8f8]'>Development highlights</h2>
            </div>

            <div className="w-full grid [grid-template-rows:auto_auto_auto] grid-cols-1 gap-2 py-12">
              <div className="gap-2 flex items-stretch justify-between">
                <Link href="https://cytora.wpengine.com/" target="_blank" className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] w-full'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/2.png' fill alt="Cytora" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>Cytora· <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>Using the latest in tech to help customers take risks</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="gap-2 flex items-stretch justify-between md:flex-nowrap flex-wrap">
                <Link href="https://www.metfilmschool.ac.uk/" target="_blank" className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full md:h-[559px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/3.png' fill alt="MetFilms School" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>MetFilm School · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>Increasing leads by 20%</p>
                    </div>
                  </div>
                </Link>
                <div className={`cursor-pointer relative p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] ${isModalOpen ? '' : 'md:hover:w-[70%]'} md:w-[50%] w-full md:h-[559px] h-auto  transition-[width] duration-500 ease-in-out`}>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden" onClick={() => setIsModalOpen(true)}>
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/8.png' fill alt="Hotpoint/Whirlpool/Indesit" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>Hotpoint / Whirlpool / Indesit · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>Three Sites, One Goal: Speed and Performance Through a Next Gen Tech Stack</p>
                    </div>
                  </div>
                  {isModalOpen && (
                    <motion.div 
                      className="bg-[#101010] absolute inset-0 w-[300px] h-[220px] z-40 left-2/4 -translate-2/4 top-2/4 rounded-xl border-1 border-[#ffffff14] p-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-[#101010] rounded-xl flex flex-col justify-between border-1 border-[#ffffff14] h-full p-3">
                        <div className='flex justify-between items-center pr-2 pb-2'>
                          <div>Pick a site</div>
                          <button onClick={() => setIsModalOpen(false)}>
                            <IoClose className='cursor-pointer' size={20}/>
                          </button>
                        </div>
                        <Link href="https://hotpointservice.ie/" target='_blank' className='bg-[#ffffff14] rounded-lg p-2 flex items-center justify-between mb-3'>Hotpoint <IoArrowForward className='-rotate-45' /></Link>
                        <Link href="https://whirlpoolservice.co.uk/" target='_blank' className='bg-[#ffffff14] rounded-lg p-2 flex items-center justify-between mb-3'>Whirlpool <IoArrowForward className='-rotate-45' /></Link>
                        <Link href="https://indesitservice.co.uk/" target='_blank' className='bg-[#ffffff14] rounded-lg p-2 flex items-center justify-between mb-3'>Indesit <IoArrowForward className='-rotate-45' /></Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              <div className="gap-2 flex items-stretch justify-between md:flex-nowrap flex-wrap">
                 <Link href="https://www.glion.edu/" target='_blank' className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full lg:h-[390px] md:h-[480px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/1.png' fill alt="Glion" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>Glion · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>Rebranding a leading hospitality school to infuse a personal digital story</p>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.mblseminars.com/" target="_blank" className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full lg:h-[559px] md:h-[480px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/4.png' fill alt="MBL Seminars" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>MBL Seminars · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>79% increase in leads via a new headless website and marketing automation</p>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.goodsalonguide.com/" target="_blank" className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full md:h-[480px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/5.png' fill alt="Good Salon Guide" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <p></p>
                      <h3 className='text-2xl font-semibold'>GSG · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>67.39% goal completion rate</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="gap-2 flex items-stretch justify-between md:flex-nowrap flex-wrap">
                <Link href="https://www.hudgellsolicitors.co.uk/" target='_blank' className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full md:h-[450px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/6.png' fill alt="Hudgell's Solicitors" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <h3 className='text-2xl font-semibold'>Hudgell Solicitors · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>+11.85% Market Visibility in AI Overviews 90 days</p>
                    </div>
                  </div>
                </Link>
                <Link href="https://everyonesenergy.co.uk/" target='_blank' className='p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010 flex flex-col relative] md:w-[50%] w-full lg:h-[599px] md:h-[450px] h-auto md:hover:w-[70%] transition-[width] duration-500 ease-in-out'>
                  <div className="bg-[#101010] text-[#f8f8f8] rounded-xl flex flex-col h-full relative overflow-hidden">
                    <div className='w-full md:h-[559px] h-[350px] relative'>
                      <Image src='/7.png' fill alt="Everyone's Energy" className="p-2 object-cover rounded-2xl border-2 border-[#ffffff14] aspect-3/2"/> 
                    </div>
                    <div className='p-6 gap-2 text-left rounded-b-xl flex-col flex'>
                      <h3 className='text-2xl font-semibold'>Everyone&apos;s Energy · <span className={`${noto.className} text-sm italic`}>Case Study</span></h3>
                      <p>84% increase in organic new users</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <p className='text-center'>*More projects and case studies available on request.</p>
            <div className="flex justify-center pt-6">
              <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className="btn flex items-center justify-center border-2 border-[#004FB3] bg-[#004FB3] text-[#f8f8f8] rounded-[3rem] px-4 py-2 w-fit">Request</Link>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-[#080808] md:px-0 px-4">
          <div className="max-w-[64rem] ml-auto mr-auto border-t-1 pt-20 border-[#ffffff14]">
            <div>
              <p className={`${noto.className} text-sm text-center pb-2 !italic`}>Skills </p>
              <h2 className='text-5xl text-center font-medium text-[#f8f8f8]'>My Specialties</h2>
            </div>
             <div className='flex pt-12 gap-2 lg:flex-nowrap flex-wrap'>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>Frontend</h3>
                    <p className='text-[#cac9c9]'>Delivering pixel-perfect, user-focused frontends with attention to detail and usability.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>React</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Next.js</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Vue.js</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Javascript</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Typescript</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>HTML</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>CSS/SCSS</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>Backend</h3>
                    <p className='text-[#cac9c9]'>Developing robust, scalable, and efficient backend systems and APIs.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Node.js</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Express</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>GraphQL</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>PHP</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>REST API’s</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>DevOps/Infrastructure</h3>
                    <p className='text-[#cac9c9]'>Managing deployment, infrastructure, and workflows to ensure reliable and scalable applications.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Docker</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>AWS</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>GIT</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Cloudflare</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Azure DevOps</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>CI/CD Pipelines</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Jira</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex pt-2 gap-2 lg:flex-nowrap flex-wrap'>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>CMS’s</h3>
                    <p className='text-[#cac9c9]'>Building and integrating content management systems for flexible, dynamic web experiences.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Wordpress</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Strapi</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Drupal</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Contentful</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Graph CMS</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Sitecore</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>Tools & Design:</h3>
                    <p className='text-[#cac9c9]'>Using design and development tools to create seamless, collaborative, and efficient workflows.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Figma</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Adobe XD</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Sketch</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Photoshop</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/6 w-full bg-[#101010] p-2 border-1 border-[#ffffff14] rounded-2xl">
                <div className="p-6">
                  <div className="">
                    <h3 className='text-2xl font-semibold pb-2 text-[#f8f8f8]'>Analytics</h3>
                    <p className='text-[#cac9c9]'>Tracking, measuring, and analyzing data to drive informed decisions and optimize performance.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Google Analytics</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Hotjar</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Google Tag Manager</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Matomo</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Hubspot</span>
                    <span className='block border-1 border-[#ffffff14] rounded-3xl bg-[#ffffff14] py-1 px-3 text-[14px] font-semibold'>Crazy Egg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-[#080808] md:px-0 px-4">
          <div className="max-w-[64rem] ml-auto mr-auto border-t-1 pt-20 border-[#ffffff14]">
            <div className='md:pb-0 pb-4'>
              <p className={`${noto.className} text-sm text-center pb-2 !italic`}>Frequently asked questions</p>
              <h2 className='text-5xl text-center font-medium text-[#f8f8f8]'>Quick answers</h2>
            </div>
            <Accordion />
          </div>
        </section>

        <section className="pb-20 bg-[#080808] md:px-0 px-4">
          <div className="max-w-[64rem] ml-auto mr-auto border-t-1 pt-20 border-[#ffffff14]">
            <div className="p-2 border-1 border-[#ffffff14] rounded-2xl bg-[#101010]">
              <div className="p-8 text-center w-full inner-wrapper">
                <h2 className='text-[#f8f8f8] md:text-[4rem] text-5xl font-medium'>Exploring new challenges</h2>
                <div className="flex justify-center pt-8">
                  <Link href="mailto:rikhilmakwana06@gmail.com?subject=Hello%20Rikhil!" className="btn flex items-center justify-center border-2 border-[#004FB3] bg-[#004FB3] text-[#f8f8f8] rounded-[3rem] px-4 py-2 w-fit">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      
      </motion.main>
      
      <footer className='bg-[#101010] sticky bottom-0'>
        <div className="px-10 h-auto">
          <div className="max-w-[64rem] ml-auto mr-auto w-full">
            <div className="py-12 flex md:items-center md:justify-between border-b-1 border-[#ffffff14] md:flex-row flex-col">
              <div className='flex md:items-center gap-6 md:flex-row flex-col md:pb-0 pb-6'>
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
  );
}
