import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import background from '../public/images/Mask Group.png'
// import phoneTwo from '../public/images/png-phone.png'
// import phone from '../public/images/phone-icon.png'
// import privacy from '..public/images/lock-icon.png'
// import imgDownload from '../public/images/dl-icon.png'
// import imgLogo from '../public/images/logos.png'
// import phoneThree from '../public/images/png-phone2.png'
// import profSherina from '../public/images/sherina.jpg'
// import profJess from '../public/images/jessica.png'
// import profRobert from '../public/images/robert.png'


export default function Home() {
  return (
    <>
    <Head>
      <title>Jettpay</title>
    </Head>
  {/* Start of Header */}
    <header>
      <h1 className="top-h1">Zwallet</h1>
        <div>
          <Link href="#" >
            <button className="login">Login</button>
          </Link>
                
          <Link href="#" >
            <button className="signup">Sign Up</button>
          </Link>
        </div>
    </header>

    <div className="container-topleft">
        <h1 className="h1-topleft">Awesome App For Saving <span>Time.</span></h1>
        <h3 className="h3-topleft" >We bring you a mobile app for banking problems that oftenly wasting much of your times.</h3>
        <Link href="#" >
          <button className="try-free">Try it Free</button>
        </Link>
    </div>

    <div className="rectangle">
      <Image src='/images/Mask-Group.png' width={710} height={658} alt="rectangle" />
    </div>

    <div className="phone">
      <Image src='/images/png-phone.png' width={439} height={846} alt="phone"></Image>
    </div>
    {/* End of Header */}

    {/* Start of Main */}
    <main className="container-main">
        <div>
          <h1 className="h1-main"> <span>About</span> the Application.</h1>
          <h2>We have some great features from the application and it&apos;s totally free to use by all users around the world.</h2>  
        </div>

        <div className="mini-container">
          <div className="cards">
            <div className="card-one">
              <Image src='/images/phone-icon.png' width={60} height={60} alt="Support"></Image>
              <h1>24/7 Support</h1>
              <h2>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</h2>
            </div>
            <div className="card-two">
              <Image src='/images/lock-icon.png' width={60} height={60} alt="Privacy"></Image>
              <h1>Data Privacy</h1>
              <h2>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</h2>
            </div>
            <div className="card-three">
              <Image src='/images/dl-icon.png' width={60} height={60} alt="Download"></Image>
              <h1>Easy Download</h1>
              <h2>Zwallet is 100% totally free to use it&apos;s now available on Google Play Store and App Store.</h2>
            </div>
          </div>
        </div>
    </main>
    {/* End of Main */}

    {/* Start of Section */}
    <section>
      <div className="container-top">
        <div className="content-top">
          <div className="text-top">
            <h1>100+ <span>Trusted</span> Partners.</h1>
            <h2>We have reached global level and have 100+ brand partners around the globe.</h2>
          </div>
          <div className="logos-top">
            <Image src='/images/logos.png' width={560} height={270} alt="logos"></Image>
          </div>
        </div>
      </div>
      
      <div className="container-mid">
        <div className="content-mid">
          <div className="phone-transaction">
            <Image src='/images/png-phone2.png' width={450} height={856} alt="phone"></Image>
          </div>
          <div className="mid-content">
              <div className="text-mid">
                <h1>All The <span>Great</span> Zwallet Features</h1>
              </div>
              <div className="box-one">
                <h1><span>1.</span> Small Fee</h1>
                <h2>We only charge 5% of every success transaction done in Zwallet app.</h2>
              </div>
              <div className="box-two">
                <h1><span>2.</span> Data Secured</h1>
                <h2>All your data is secured properly in our system and it&apos;s encrypted.</h2>
              </div>
              <div className="box-three">
                <h1><span>3.</span> User Friendly</h1>
                <h2>Zwallet come up with modern and sleek design and not complicated.</h2>
              </div>
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <div>
          <h1 className="h1-bottom">What Users are <span>Saying.</span></h1>
          <h2 className="h2-bottom">We have some great features from the application and it&apos;s totally free to use by all users around the world</h2>  
        </div>
        <div className="bottom-container">
          <div className="testimonials">
            <div className="testi-one">
              <Image src='/images/sherina.jpg' width={60} height={60}alt="Testimoni"></Image>
              <h1>Sherina Chaw</h1>
              <h2>“I use this app since 2 years ago and this is the best app that I&apos;ve ever use in my entire life”</h2>
            </div>
            <div className="testi-two">
              <Image src='/images/jessica.png' width={60} height={60} alt="Testimoni"></Image>
              <h1>Jessica Mera</h1>
              <h2>“I use Zwallet to manage all financial needs. It&apos;s super easy to use and it&apos;s 100% free app”</h2>
            </div>
            <div className="testi-three">
              <Image src='/images/robert.png' width={60} height={60} alt="Testimoni"></Image>
              <h1>Robert Chandler</h1>
              <h2>“Since I&apos;m using this app, I&apos;m not going to move to another similar app. Thank you Zwallet!”</h2>
            </div>
          </div>
        </div>
      </div>
    </section>    
    {/* /* End of Section */}

    {/* Start of Footer */}
    <footer className="footer-container">
        <div className="footer-content">
        <h1>Zwallet</h1>
        <h2>Simplify financial needs and saving much time in banking needs with one single app.</h2>
        <hr/>
          <div className="copyright">
            <h4>2020 Zwallet. All right reserved.</h4>
            <h4 className="flex">+62 5637 8882 9901</h4>
            <h4>contact@zwallet.com</h4>
          </div>
        </div>
    </footer>
    {/* End of Footer */}
    </>
  )
}   