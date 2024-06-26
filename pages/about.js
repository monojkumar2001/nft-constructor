import AppLayout from "../component/Layout/Layout";
import Contract from "./inner/Contract";
import Head from "next/head";
import Faq from "react-faq-component";
import CountUp from "react-countup";
import DemoForm from "./inner/demoform";
import TopProject from "./inner/TopProject";
import HeroSub from "./inner/HeroSub";
import Newsletter from "./inner/Newsletter";
import Review from "./inner/Review";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";

function About() {

  const data = {
    rows: [
      {
        title: "What is an NFT minting platform?",
        content: `NFT Minting platform is a website where users can mint their various digital assets such as artwork,music,video,game items NFT etc digital collectibles. While minting an NFT users have to pay a gas fee based on the blockchain and platform they wish to mint their NFTs.`,
      },
      {
        title: "How to create a NFT Minting website",
        content: `You can either create an NFT minting website with the use of ready made White label NFT minting software which can reduce the development cost and time. You just need to buy an NFT minting software, customize it based on your business niche requirements and launch it. You can also create an nft minting website from scratch which requires a lot of time and development cost.`,
      },
      {
        title: "Which is the best NFT minting platform development company?",
        content: `With no doubt NFT Constructer is the best one step NFT minting platform development company delivering NFT Minting website development services worldwide such as India, United states, united kingdom and much more.`,
      },
      {
        title: "Which is the best NFT minting platform designing company?",
        content: `With no doubt NFT Constructer is the best one step NFT minting platform development & designing company delivering NFT Minting website development & design services worldwide such as India, United states, united kingdom and much more.`,
      },
      {
        title: "How much does it cost to design a NFT minting website?",
        content: `The cost to develop an NFT Minting platform depends on various factors such as geography, design model, resources needed, time and mainly focused on the features and functionalities required by the business owners on their platform.The cost can vary 5000 usd to 20000 usd depeding on the features and functionalities required by the business.`,
      },
      {
        title: "Is it completely secure?",
        content: `Yes, it’s completely secure & tested before we hand over the complete project to the customers.`,
      },
    ],
  };

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };
  return (
    <>
      <Head>
        <title>Non-Fungible Development Services - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/about" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/about" />

        <meta
          name="description"
          content="We assist you in starting your own NFT collectibles minting website & marketplace to draw in the expanding NFT user community."
        ></meta>
        <meta
          name="og:description"
          content="We assist you in starting your own NFT collectibles minting website & marketplace to draw in the expanding NFT user community."
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Non-Fungible Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/11.jpg" />
        <meta property="image" content="assets/img/meta/11.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>


{/* ================= Hero section ====================== */}
      <section className="about-hero cpy-5">
        <div className="container">
          <div className="about-hero-wrapper">
            <div className="about-hero-left">
              <h1>
              Non Fungible Token Development Agency Committed to Your Best Interest
              </h1>
              <p>
              Get the ability to scale your decentralized start up globally with secure transactions and tamper-proof programming.
              </p>
              <div className="about-hero-btn">
                <a href="#get-quoted" className="btn-hero-1">
                  Get Started
                </a>
              </div>
            </div>
            <div className="about-hero-right">
              <div className="hero-bg-img-1">
                <img src="./assets/images/about/about-hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ================= Hero section ====================== */}

{/* ===================Mentioned section ================== */}
<div className="cpt-7">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* <!-- ================ Solving Problem Services start ================ --> */}
    <section className="solving-problem-service cpt-7">
        <div className="container">
            <div className="solving-problem-service-wrapper">
                <div className="solving-problem-service-content">
                    <h3>Solving Problem By the Services</h3>
                    <p>NFT Constructer is a blockchain development company that has been providing innovative solutions to clients around the world for the past five years. With a team of more than 100 experienced and passionate team of developers, designers & marketing experts , NFT Constructer offers a wide range of services that cover the entire blockchain Web3 development process. From smart contract development and NFT development to DeFi development, Metaverse development, website design, marketing, and website analysis, they have the expertise and resources to deliver on any project.NFT Constructer is committed to staying up-to-date on the latest blockchain and web3 technologies, and has developed a comprehensive suite of tools and resources to ensure that their services remain at the highest level. They also focus on providing a secure and reliable environment for their clients and have implemented stringent security measures to ensure the safety and privacy of their data.</p>
                </div>
                <div className="solving-problem-video cpt-6">
                    <div className="solving-problem-video-img">
                        <img src="./assets/images/about/about-img.png" alt=""/>
                    </div>
                    <img className="about-boll-img-1"  src="./assets/images/about/about-img-1.png" alt=""/>
                    <img className="about-boll-img-2" src="./assets/images/about/about-img-2.png" alt=""/>
                </div> 
            </div>
        </div>
    </section>
    {/* <!-- ================ Solving Problem Services end ================ --> */}
        {/* ===================service section ================== */}
        <section class="our-services cpt-6 cpb-7 ">
          <div class="container">
            <div class="our-service-wrapper">
              <div class="our-service-content">
                {/* <span class="short-title">OUR NON FUNGIBLE</span> */}
                <h1 class="service-title">We’re Like your cheif growth officer</h1>
              </div>
              <div class="about-service-items cpy-5">
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-1.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Strategy</h3>
                  <p>A team lead manager creates your development  strategy with a clear action plan for Web3, DeFi, Dapps or NFT projects.</p>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-2.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Collabs  and partner ships</h3>
                  <p>We can also  introduce you to the right partners within the web3 space. We source, negotiate, and arrange for win-win deals.</p>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/meta-service/meta-3.png"
                      alt="nft-constructer"
                    />
                  </div>
                  <h3>Influence Marketing</h3>
                  <p>We  create  your   Web3, DeFi, Dapps or NFT projects with marketig friednly UI & functional prattern that influnce the core of martketing needs </p>
                </div>
              
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

                {/* ================WHY CHOSE UP SECTION start================  */}
                <section>
          <div className="why-chose-area cpb-6">
            <div className="container">
              <div className="chose-grid">
                <div className="left-wrapper">
                  <div className="chose-left">
                    <div className="left-title">
                      <h2 className="sec-title-left">Why Chose Us</h2>
                      <p className="sec-des">
                        Use our customized plans to bring in high-caliber
                        clients who will spend a fortune at your site. To
                        provide you a game-changing experience,
                      </p>
                    </div>

                    <div className="chose-list">
                      <div className="chose-list-item">
                        <div className="chose-list-item-icon">
                          <img
                            height="auto"
                            width="auto"
                            src="assets/img/icon/chose1.svg"
                            alt="nft constructer"
                          />
                        </div>

                        <div className="chose-list-item-content">
                          <h3>Technical Proficiency </h3>
                          <p>
                            Our team of blockchain enthusiasts have worked with
                            300+ projects in crypto nft and blockchain industry.
                          </p>
                        </div>
                      </div>

                      <div className="chose-list-item">
                        <div className="chose-list-item-icon">
                          <img
                            height="auto"
                            width="auto"
                            src="assets/img/icon/chose2.svg"
                            alt="nft constructer"
                          />
                        </div>

                        <div className="chose-list-item-content">
                          <h3>Affordable prices</h3>
                          <p>
                            Use our personalized designing plans to bring in
                            high-caliber clients at a very affordable cost.
                          </p>
                        </div>
                      </div>

                      <div className="chose-list-item">
                        <div className="chose-list-item-icon">
                          <img
                            height="auto"
                            width="auto"
                            src="assets/img/icon/chose3.svg"
                            alt="nft constructer"
                          />
                        </div>

                        <div className="chose-list-item-content">
                          <h3>Technical Prowess</h3>
                          <p>
                            Use our personalized designing plans to bring in
                            high-caliber clients who will spend a fortune at
                            your site. To provide you a
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chose-right">
                    <div className="chose-right-img">
                      <img
                        src="assets/img/inner/whychoseme.png"
                        alt="nft constructer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================WHY CHOSE UP SECTION end================  */}

         {/* ==========================faq================== */}
         <div className="faqs-section cpb-7">
          <div className="container">
            <div className="faq-wrapper">
              <div className="left-faq">
                <h2>Frequently Asked Questions</h2>
                <p>
                  If you can not find what you are looking for{" "}
                  <a href="" className="faq-link">
                    send us a message!
                  </a>
                </p>
                <img src="assets/img/faq/1.png" className="faq-image" alt="" />
              </div>

              <div className="content">
                <Faq data={data} styles={styles} />
              </div>
            </div>
          </div>
        </div>
        {/* ==========================faq end================== */}

      {/* * ===============================contact us start ================ */} 
        <ContactBtn />
{/* ===============================contact us end ================ */}
{/* ===================== LetsTalk start ===================== */}
        <LetsTalk />
{/* ===================== LetsTalk start ===================== */}

    </>

  );
}

About.layout = AppLayout;

export default About;
