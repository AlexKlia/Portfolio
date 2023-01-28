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

type Props = {
  socialLinks: SocialLink[],
  heroData: HeroData,
  aboutData: AboutData,
  experiences: Experience[]
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socialLinks: SocialLink[] = await fetchSocialLinks();
  const heroData: HeroData = await fetchHeroData();
  const aboutData: AboutData = await fetchAbout();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      socialLinks,
      heroData,
      aboutData,
      experiences
    }, 
    // Next.js will attempt to re-generate the page:
    // When a request come in
    // at most once every 10 secondes  
    revalidate: 10
  }
}

export default function Home({socialLinks, heroData, aboutData, experiences}: Props) {
  return (
    <div className='bg-[rgb(33,33,33)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header socialLinks={socialLinks}/>

        <section id="hero" className='snap-start'>
          <Hero words={heroData.typeWriterWords} src={heroData.src}/>
        </section>

        <section id="about" className='snap-center'>
          <About about={aboutData.about} src={aboutData.src}/>
        </section>

        <section id="experience" className='snap-center'>
          <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id="skills"></section>

        {/* Projects */}
        <section id="projects"></section>

        {/* Contact Me */}
        <section id="contact"></section>

      </main>
    </div>
  )
}
