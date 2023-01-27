import Head from 'next/head'
import Header from '@/components/Header'
import { GetStaticProps } from 'next'
import { SocialLink } from '@/typings/SocialLink';
import { fetchSocialLinks } from '@/utils/fetchSocialLinks';

type Props = {
  socialLinks: SocialLink[]
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socialLinks: SocialLink[] = await fetchSocialLinks();

  return {
    props: {
      socialLinks
    }, 
    // Next.js will attempt to re-generate the page:
    // When a request come in
    // at most once every 10 secondes  
    revalidate: 10
  }
}

export default function Home({socialLinks}: Props) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header socialLinks={socialLinks}/>

        {/* Hero */}
        <section id="hero"></section>

        {/* About */}
        <section id="about"></section>

        {/* Experience */}
        <section id="experience"></section>

        {/* Skills */}
        <section id="skills"></section>

        {/* Projects */}
        <section id="projects"></section>

        {/* Contact Me */}
        <section id="contact"></section>

      </main>
    </>
  )
}
