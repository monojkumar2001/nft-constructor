import AppLayout from "../component/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Faq from "react-faq-component";
import Review from "./inner/Review";
import HeroSub from "./inner/HeroSub";
import OfferA from "./inner/OfferA";
import PriceRangeSlider from "./inner/PriceRange";
import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";
function Portfolio() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://admin.nftconstructer.com/api/portfolio")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPortfolio(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


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
        <title>NFT website design portfolio - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/portfolio"
        />
        <link rel="canonical" href="https://nftconstructer.com/portfolio" />

        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />

        <meta
          name="description"
          content="We are a full-service NFT website development company that can assist you in developing and launching your own NFT marketplace so that clients may simply purchase your NFT.
"
        ></meta>
        <meta
          name="og:description"
          content="We are a full-service NFT website development company that can assist you in developing and launching your own NFT marketplace so that clients may simply purchase your NFT.
"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT website design portfolio - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/8.jpg" />
        <meta property="image" content="assets/img/meta/8.jpg" />
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
      <OfferA />
      {/* <!-- =========== Portfolio-Hero-Start ================= --> */}
    <section class="portfolio cpy-5 cpb-6">
      <div class="container">
        <div class="portfolio-wrapper">
          <div class="portfolio-left">
            <h1>See Why You Should Use NFT Constructer</h1>
            <p>
              We use cutting-edge technology and a community of skilled
              professionals to offer our clients unparalleled security and peace
              of mind.
            </p>
            <div class="portfolio-btn">
              <a href="#get-quoted" class="btn-hero-1"> Hire Us </a>
              <div class="portfolio-followers">
                <div class="follower-member">
                  <div class="follower-img">
                    <img
                      src="./assets/images/portfolio/follow-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="follower-img">
                    <img
                      src="./assets/images/portfolio/follow-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="follower-img">
                    <img
                      src="./assets/images/portfolio/follow-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div class="follower-img">
                    <img
                      src="./assets/images/portfolio/follow-img-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="follower-content">
                  <p>+10k worldwide clients</p>
                  <p>clients</p>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-right">
            <div class="hero-bg-img-1">
              <img src="./assets/images/portfolio/portfolio-img-2.png" alt="" />
            </div>
            <div class="hero-bg-img-2">
              <img src="./assets/images/portfolio/dymon.png" alt="" />
            </div>
            <div class="hero-bg-img-3">
              <img src="./assets/images/portfolio/project.png" alt="" />
            </div>
            <div class="hero-bg-img-4">
              <img src="./assets/images/portfolio/figma.png" alt="" />
            </div>
            <div class="hero-bg-img-5">
              <img src="./assets/images/portfolio/ai.png" alt="" />
            </div>
            <div class="hero-bg-img-6">
              <img src="./assets/images/portfolio/photoshop.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- =========== Portfolio-Hero-end ================= --> */}

    {/* <!-- ============== Our Recent Project start============== --> */}
    <section class="our-recent-project cpt-7 ">
      <div class="container">
        <div class="our-recent-wrapper">
          <div class="our-recent-title">
            <h3>Our Recent Projects</h3>
          </div>
          <div class="our-recent-project-items cpt-7">
            <div class="our-recent-arrow-left our-recent-arrow">
                <img src="./assets/images/portfolio/left-arrow-2.svg" alt="" />
            </div>
            <div class="our-recent-arrow-right our-recent-arrow">
              <img src="./assets/images/portfolio/right-arrow-2.svg" alt="" />
            </div>
            <div class="our-recent-project-item">
              <div class="our-recent-project-img">
                <img
                  src="./assets/images/portfolio/our-recent-project-img.png"
                  alt=""
                />
              </div>
              <div class="our-recent-project-content">
                <div class="our-recent-project-content-item">
                  <h3>Vegas App Design</h3>
                  <a href="">Vegas/Mobile App</a>
                </div>
                <div class="our-recent-project-content-item-img">
                  <img
                    src="./assets/images/portfolio/our-recent-up-arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="our-recent-project-item">
              <div class="our-recent-project-img">
                <img
                  src="./assets/images/portfolio/our-recent-project-img.png"
                  alt=""
                />
              </div>
              <div class="our-recent-project-content">
                <div class="our-recent-project-content-item">
                  <h3>Vegas App Design</h3>
                  <a href="">Vegas/Mobile App</a>
                </div>
                <div class="our-recent-project-content-item-img">
                  <img
                    src="./assets/images/portfolio/our-recent-up-arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="our-recent-project-item">
              <div class="our-recent-project-img">
                <img
                  src="./assets/images/portfolio/our-recent-project-img.png"
                  alt=""
                />
              </div>
              <div class="our-recent-project-content">
                <div class="our-recent-project-content-item">
                  <h3>Vegas App Design</h3>
                  <a href="">Vegas/Mobile App</a>
                </div>
                <div class="our-recent-project-content-item-img">
                  <img
                    src="./assets/images/portfolio/our-recent-up-arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ============== Our Recent Project end============== --> */}

    {/* <!-- ============== Our Imagine start ======================  --> */}
    <section class="imagine cpy-8">
      <div class="container">
        <div class="imagine-warrper">
          <div class="imagine-title">
            <h3>If you can imagine it, we can make it done</h3>
          </div>
          <div class="imagine-items cpt-7">
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>NFT Websites</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-1.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>NFT Marketplaces</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-2.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>Admin Dashboards</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-3.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>Defi Platforms</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-4.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>Meta Verse Platforms</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-5.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="imagine-item">
              <div class="imagine-item-title">
                <h4>P2P Exchanges</h4>
              </div>
              <div class="imagine-item-img">
                <div class="imaging-img">
                  <img
                    src="./assets/images/portfolio/imagine-img-6.png"
                    alt=""
                  />
                </div>
                <div class="imagine-arrow-left">
                  <img src="./assets/images/portfolio/left-arrow.svg" alt="" />
                </div>
                <div class="imagine-arrow-right">
                  <img src="./assets/images/portfolio/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ============== Our Imagine end ======================  --> */}
    {/* <!-- ===================== Creative Ideas start ============== --> */}
    <section class="creative-idea">
        <div class="container">
            <div class="creative-idea-wrapper">
                <div class="creative-idea-content">
                    <div class="creative-idea-content-left">
                        <h3>Creative ideas</h3>
                        <p>Use our personalized designing plans to bring in high-caliber clients who will spend a fortune at your site. To provide you a game-changing experience,</p>
                        <button class="create-idea-btn">
                            Get Started
                        </button>
                    </div>
                    <div class="creative-idea-content-right">
                        <img src="./assets/images/portfolio/creative-idea-img.png" alt=""/>
                    </div>
                </div>
                <div class="creative-idea-items cpt-7">
                    <div class="creative-idea-item">
                        <img src="./assets/images/portfolio/creative-idea-item-img.png" alt=""/>
                    </div>
                    <div class="creative-idea-item">
                        <img src="./assets/images/portfolio/creative-idea-item-img.png" alt=""/>
                    </div>
                    <div class="creative-idea-item">
                        <img src="./assets/images/portfolio/creative-idea-item-img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ===================== Creative Ideas end ============== --> */}
     {/* ================WHY CHOSE UP SECTION start================  */}
     <section>
          <div className="why-chose-area cpt-6">
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
     {/* =====================happy clients======================= */}
     <Review />
        {/* =====================happy clients end======================= */}
         {/* ==========================faq================== */}
         <div className="faqs-section cpb-6 cpt-7">
          <div className="container">
            <div className="faq-wrapper">
              <div className="left-faq">
                <h2>Frequently Asked Questions</h2>
                <p>
                  If you can not find what you are looking for
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
         {/* ===============================contact us start ================ */}
         <ContactBtn />
{/* ===============================contact us end ================ */}
{/* ======================== LetsTalk start ============================ */}
    <LetsTalk />
{/* ======================== LetsTalk end============================ */}

    </>
  );
}

Portfolio.layout = AppLayout;

export default Portfolio;
