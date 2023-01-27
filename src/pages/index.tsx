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

type Props = {
  socialLinks: SocialLink[],
  heroData: HeroData,
  aboutData: AboutData
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socialLinks: SocialLink[] = await fetchSocialLinks();
  const heroData: HeroData = await fetchHeroData();
  const aboutData: AboutData = await fetchAbout();

  return {
    props: {
      socialLinks,
      heroData,
      aboutData
    }, 
    // Next.js will attempt to re-generate the page:
    // When a request come in
    // at most once every 10 secondes  
    revalidate: 10
  }
}

export default function Home({socialLinks, heroData, aboutData}: Props) {
  return (
    <div className='bg-[rgb(42,42,42)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header socialLinks={socialLinks}/>

        {/* Hero */}
        <section id="hero" className='snap-start'>
          <Hero words={heroData.typeWriterWords} src={heroData.src}/>
        </section>

        {/* About */}
        <section id="about" className='snap-center'>
          <About about={aboutData.about} src={aboutData.src}/>
        </section>

        {/* Experience */}
        <section id="experience"></section>

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
