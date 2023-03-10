import Head from 'next/head'
import Header from '@/components/Header'
import { GetStaticProps } from 'next'
import { SocialLink } from '@/typings/SocialLink';
import { fetchSocialLinks } from '@/utils/fetchSocialLinks';
import { fetchAbout } from '@/utils/fetchAbout';
import Hero from '@/components/Hero';
import { fetchHeroData } from '@/utils/fetchHeroData';
import { AboutData } from '@/typings/AboutData';
import { HeroData } from '@/typings/HeroData';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import { Experience } from '@/typings/Experience';
import { fetchExperiences } from '@/utils/fetchExperiences';
import Skills from '@/components/Skills';
import { SkillData } from '@/typings/SkillData';
import { fetchSkills } from '@/utils/fetchSkills';
import Projects from '@/components/Projects';
import { Project } from '@/typings/Project';
import { fetchProjects } from '@/utils/fetchProjects';
import ContactMe from '@/components/ContactMe';
import { Contact } from '@/typings/Contact';
import { fetchContact } from '@/utils/fetchContact';
import Link from 'next/link';
import Image from 'next/image'

type Props = {
  socialLinks: SocialLink[],
  heroData: HeroData,
  aboutData: AboutData,
  experiences: Experience[],
  skills: SkillData[],
  projects: Project[],
  contact: Contact
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socialLinks: SocialLink[] = await fetchSocialLinks();
  const heroData: HeroData = await fetchHeroData();
  const aboutData: AboutData = await fetchAbout();
  const experiences: Experience[] = await fetchExperiences();
  const skills: SkillData[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const contact: Contact = await fetchContact();

  return {
    props: {
      socialLinks,
      heroData,
      aboutData,
      experiences,
      skills,
      projects,
      contact
    },
    // Next.js will attempt to re-generate the page:
    // When a request come in
    // at most once every 10 secondes  
    revalidate: 10
  }
}

export default function Home({ socialLinks, heroData, aboutData, experiences, skills, projects, contact }: Props) {
  return (
    <div className='bg-[rgb(33,33,33)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header socialLinks={socialLinks} />

        <section id="hero" className='snap-start'>
          <Hero words={heroData.typeWriterWords} src={heroData.src} />
        </section>

        <section id="about" className='snap-center'>
          <About about={aboutData.about} src={aboutData.src} />
        </section>

        <section id="experience" className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>

        <section id="skills" className='snap-center'>
          <Skills skills={skills} />
        </section>

        <section id="projects" className='snap-center'>
          <Projects projects={projects} />
        </section>

        <section id="contact" className='snap-center'>
          <ContactMe contact={contact} />
        </section>

        {/* This section is only needed for the smallest screen resolutions (Galaxy S8+ / Iphone SE) */}
        <section className='snap-end h-44 sm:hidden'></section>
        
        <footer className='inline sticky bottom-5 w-full cursor-pointer'>
          <span className='flex items-center justify-center'>
            <Link href="#hero" className='z-0'>
              <Image
                className='rounded-full h-10 w-10 filter grayscale hover:grayscale-0'
                loader={() => heroData.src}
                src={heroData.src}
                alt="Photo de profil"
                width={420}
                height={420}
              />

            </Link>
          </span>
        </footer>
      </main>
    </div>
  )
}

