import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Whatsapp from "../../public/whatsapp.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Fiver from "../../public/fiver.svg";
import SocialButton from "../../components/SocialButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Rodríguez · Video Editor</title>
        <meta name="description" content="Hello, I`m David Rodríguez, I`m a video editor with 4 years of experience. I`ll do any editing for you on any video you want, on the platform you like, horizontal or vertical content, on all social and work platforms, available at all hours with delivery as soon as possible, for any detailed information you can contact me, looking forward to working with you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index" />
        <link rel="canonical" href="https://davidrodriguez.vercel.app" />
        <link rel="me" href="mailto:jossrodripe22@gmail.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="David Rodríguez" />
        <meta property="og:description" content="Hello, I`m David Rodríguez, I`m a video editor with 4 years of experience. I`ll do any editing for you on any video you want, on the platform you like, horizontal or vertical content, on all social and work platforms, available at all hours with delivery as soon as possible, for any detailed information you can contact me, looking forward to working with you!" />
        <meta property="og:title" content="David Rodríguez" />
        <meta property="og:image" content="../public/banner-portfolio.jpg" />
        <meta name="twitter:site" content="@joossee22" />
        <meta name="twitter:title" content="David Rodríguez" />
        <meta name="twitter:description" content="Hello, I`m David Rodríguez, I`m a video editor with 4 years of experience. I`ll do any editing for you on any video you want, on the platform you like, horizontal or vertical content, on all social and work platforms, available at all hours with delivery as soon as possible, for any detailed information you can contact me, looking forward to working with you!" />
        <meta name="twitter:image" content="../public/banner-portfolio.jpg" />
        <meta name="keywords" content="David Rodríguez, David Rodríguez video, David Rodríguez edicion, David Rodríguez editor, David Rodríguez edicion shorts, David Rodríguez tiktok edicion, David Rodríguez editor profesional, editor freelancer, editor de videos, video editor, editor de tiktoks" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="text-white rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hello, I`m David, I`m a video editor with 4 years of experience.
          </h1>
          <p className="flex-1">
            I`ll do any editing for you on any video you want, on the platform you like, horizontal or vertical content, on all social and work platforms, available at all hours with delivery as soon as possible, for any detailed information you can contact me, looking forward to working with you!
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <div className="bg-black text-white font-medium py-3 px-12 rounded-2xl w-auto lg:w-auto">
              jossrodripe22@gmail.com
            </div>
            <div className="flex items-center gap-4">
              <SocialButton bgColor="whatsapp" link="https://bit.ly/joossee22">
                <Whatsapp className="w-7 h-7" />
              </SocialButton>
              <SocialButton bgColor="instagram" link="">
                <Instagram className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="twitter" link="https://twitter.com/joossee22">
                <Twitter className="w-5 h-5" />
              </SocialButton>
              <SocialButton bgColor="fiver" link="https://www.fiverr.com/joossee22?source=gig_page&gigs=slug%3Acreate-and-edit-tiktok-videos-youtube-shorts-and-instagram-reels-of-your-videos%2Cpckg_id%3A1">
                <Fiver className="w-5 h-5" />
              </SocialButton>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.png')] bg-cover bg-center grayscale hover:grayscale-0 duration-100 ease-in" />
      </section>

      <section className="gap-4 mb-4">
        <div className="text-white rounded-3xl p-10 flex flex-col gap-16 bg-cover" style={{ backgroundColor: '#111' }}>
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">
            Why should we work together?
          </h1>
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              <p className="flex-1">
                I have several years of experience editing videos (4) and I know that elements, video effects and sound can be interesting for the public of any category.
              </p>
            </li>
            <li>
              <p className="flex-1">
                I will pay close attention to your indications and I will work meticulously on your projects for the best possible quality.
              </p>
            </li>
            <li>
              <p className="flex-1">
                I am an editor available at all times 24/7 contact me whenever you want.
              </p>
            </li>
            <li>
              <p className="flex-1">
                Friendly customer service, fast delivery and free unlimited revisions.
              </p>
            </li>
          </ul>

        </div>
      </section>

      <section className="gap-4 mb-4">
        <div className="text-white rounded-3xl p-10 flex flex-col gap-16 bg-cover" style={{ backgroundColor: '#111' }}>

          <h1 className="text-3xl sm:text-4xl font-semibold text-center">
            What I offer in all my packages?
          </h1>
          <ul className="flex flex-col gap-2 list-disc">
            <li>
              <p className="flex-1">
                Interactive, animated and common subtitles (with the font, size and color you want).
              </p>
            </li>
            <li>
              <p className="flex-1">
                Emojis and images of all kinds, with or without animation.
              </p>
            </li>
            <li>
              <p className="flex-1">
                Sound effects, background music and use of content without copyright (images, music, etc)
              </p>
            </li>
            <li>
              <p className="flex-1">
                Best cutscenes for the best possible entertainment.
              </p>
            </li>
            <li>
              <p className="flex-1">
                Anything else you want in your video let me know.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="flex flex-col my-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProjectPreview
            name="Sergio Peinado edition"
            description="Shorts Format"
            bgColor="#111"
            dark
            linkProject="https://mega.nz/file/4mdzmY6B#nKDLrLduXptjKvwmZeqmbojHmCQRTzCASK8f93yg62o"
          />
          <ProjectPreview
            name="Course English edition"
            description="Shorts Format"
            bgColor="#111"
            dark
            linkProject="https://mega.nz/file/oqFRFayS#uLmVUO_6CdYCi3ud_e0JtqmSFmXTY5Xj2IiCwJEQZ78"

          />
          <ProjectPreview
            name="Course English edition"
            description="Shorts Format"
            bgColor="#111"
            dark
            linkProject="https://mega.nz/file/hzsjkBbI#Q61nMrAofV5GXvFCovJI8kogTrmP_6SsrznjntuvMuw"

          />
          <ProjectPreview
            name="Habif edition"
            description="Shorts Format"
            bgColor="#111"
            dark
            linkProject="https://mega.nz/file/FqdHmIJZ#i9kKirZDWjbFeOkhw2Cn3cIHA7IyHJ6OEhrhHg74fbY"
          />
        </div>

        <a href="" target="blank_" className="font-medium text-lg text-center text-white mx-auto mt-8 mb-5 hover:underline delay-300 ease-in">See all Projects</a>

      </section>

      <div className="flex justify-center items-center sm:fixed bottom-0 right-0 p-2 rounded-full mb-3 mx-auto sm:mx-3" style={{ backgroundColor: '#111', width: '180px' }}>
        <a href="https://jeandv.vercel.app" target="_blank">
          <h1 className="text-white text-center mx-auto">
            Made by <strong>Jean Rondón</strong>
          </h1>
        </a>
      </div>
    </>
  );
}
