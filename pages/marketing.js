import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Faq from "react-faq-component";
import CountUp from "react-countup";
import DemoForm from "./inner/demoform";
import Head from "next/head";
import TopProject from "./inner/TopProject";
import HeroSub from "./inner/HeroSub";
import Newsletter from "./inner/Newsletter";
import Review from "./inner/Review";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";

function Marketing() {
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
        <title>NFT Website Development Services - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!"
        ></meta>
        <meta
          name="og:description"
          content="We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Website Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
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
      <section class="marketing-hero cpy-5 cpb-6">
        <div class="container">
          <div class="marketing-hero-warrper">
            <div class="hero-content">
              <h1>Proven Marketing Plans For Non Fungible Token Sales</h1>
              <p class="raleway-black-16">
                Our marketers trive on executing customized marketing plans with
                boldest ideas to reality specifically designed for Crypto Nft
                Defi start ups.
              </p>
              <div class="hero-btns">
                <a href="#get-quoted" class="btn-hero-1">
                  Get Started
                </a>
                <a href="#get-quoted" class="btn-hero-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="marketing-balls">
          <img src="./assets/images/marketing-boll-1.png" alt="" />
          <img src="./assets/images/marketing-boll-2.png" alt="" />
          <img src="./assets/images/marketing-boll-3.png" alt="" />
        </div>
      </section>

      {/* <!-- =============== marketing dashbord start =========== --> */}
      <section class="mareting-dashbord">
        <div class="dashbord-img">
          <img src="./assets/images/marketing-dasboard-img.png" alt="" />
        </div>
      </section>
      {/* <!-- =============== marketing dashbord end=========== --> */}

      <div className="white-bg">
        {/* ================about us section ================== */}
        <section className="about-us cpt-6">
          <div className="container">
            <div className="row-col-2">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="about-us-img">
                  <img
                    src="assets/img/inner/about-us.png"
                    alt="nft constructer"
                  />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="about-us-content">
                  <div className="about-content-inner">
                    <h1>Description</h1>
                    <p>
                      By 2040, when metaverse will be significantly more
                      developed, completely immersive, and functioning, a half
                      billion or more people will use the metaverse every day.
                      Countless facets of our real-world ecosystem, including
                      education, healthcare, gaming, entertainment, the arts,
                      etc., are likely to benefit from the metaverse's rapid
                      evolution. The creation of Al and the seamless integration
                      of VR/AR with user data would provide you with entirely
                      new experiences. Metaverse for business is therefore
                      crucial for people in business like you. There are
                      countless options, including social networking,
                      e-commerce, and real estate. You can host conferences,
                      events, parties, business meetings, and other activities
                      in the virtual world by using our metaverse development
                      services. You may customize the platform in a number of
                      ways to provide your customers experiences they won't
                      easily forget. Therefore, while major IT companies are
                      still working to solidify their positions as the market
                      leaders in this industry, you should fully capitalize on
                      this trend by creating your own virtual world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="assets/img/inner/cr-8.png"
            alt="nft constructer"
            className="cr8-img"
          />
          <img
            src="assets/img/inner/cr-6.png"
            alt="nft constructer"
            className="cr6-img"
          />
        </section>
        {/* ================about us section end ================== */}

{/* ==============pricing range ============== */}
<div className="cpt-6">
          <PriceRangeSlider />
        </div>
        {/* ==============pricing range end ============== */}
        {/* ===================service section ================== */}
        <section class="our-services cpt-6">
          <div class="container">
            <div class="our-service-wrapper">
              <div class="our-service-content">
                <span class="short-title">OUR NON FUNGIBLE</span>
                <h1 class="service-title">Marketing Services</h1>
                <p class="service-discription">
                Being a top NFT token development company, our non-fungible token development services facilitate the digital assets to be tokenized for collection. Majorly, we work on Ethereum NFTs, which are too popular in the market. SemiDot helps you to launch your NFT for all your business needs.
                </p>
              </div>
              <div class="our-service-items cpy-5">
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-1.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Marketing Services</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-2.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Marketplace Marketing Services</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-3.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Collectibles Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-4.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Game Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-5.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Telegram Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-6.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Influencer Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-7.png"
                      alt=""
                    />
                  </div>
                  <h3>Influencer Marketing Agency</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-8.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT PR/Media Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-9.png"
                      alt=""
                    />
                  </div>
                  <h3>NFT Discord Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-10.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-11.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Server Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-12.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Brand Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-13.png"
                      alt=""
                    />
                  </div>
                  <h3>Discord Game Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-14.png"
                      alt=""
                    />
                  </div>
                  <h3>DeFi Marketing Services</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-15.png"
                      alt=""
                    />
                  </div>
                  <h3>Cryptocurrency Exchange Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-16.png"
                      alt=""
                    />
                  </div>
                  <h3>Web3 Marketing Services</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-17.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-18.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Community Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-19.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO Influencer Marketing</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/marketing-service/marketing-20.png"
                      alt=""
                    />
                  </div>
                  <h3>ICO YouTube Influencer</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpy-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpb-6">
            <div className="container">
              <div className="chainup-grid">
                <div
                  className="chainup-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    height="auto"
                    width="auto"
                    src="assets/img/inner/chainup.png"
                    alt="nft constructer"
                  />
                </div>
                <div
                  className="chainup-content"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="chainup-title">
                    <p>CHAINUP</p>
                    <h2>ChainUP Data Center Worldwide</h2>
                  </div>
                  <div className="chainup-inner-grid">
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/client.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={500} duration={5} /> +
                        </h3>
                        <p>Served Clients</p>
                      </div>
                    </div>

                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/financial.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Financial Detervative Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/crypto.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={100} duration={5} /> +
                        </h3>
                        <p>Wallet Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/nft.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={300} duration={5} /> +
                        </h3>
                        <p>Crypto Exchange Clients</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/region.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={250} duration={5} /> +
                        </h3>
                        <p>NFT Service Client</p>
                      </div>
                    </div>
                    <div className="chainup-inner-grid-item">
                      <div className="chainup-inner-grid-item-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/icon/wallet.svg"
                          alt="nft constructer"
                        />
                      </div>
                      <div className="chainup-inner-grid-item-content">
                        <h3>
                          <CountUp end={20} duration={5} /> +
                        </h3>
                        <p>Countries & Region </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================ChainUP section end ================== */}

        {/* ===================Newsletter section  ================== */}
        <Newsletter />
        {/* ===================Newsletter section end ================== */}

        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area">
            <div className="benefits-area">
              <div className="benefits-decor">
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-5.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-6.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-7.png"
                  alt="nft constructer"
                />
              </div>
              <div className="container benefit-section">
                <div className="title">
                  <p className="colorful-txt">BENIFITS OF</p>
                  <h2>Our Marketing Services</h2>
                  <div className="title-line"></div>
                </div>

                <div
                  className="spider"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/center-nft.png"
                    alt="nft constructer"
                    className="spider-center"
                  />

                  <div className="benefits">
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/liquidity.png"
                          alt="nft constructer"
                        />
                        <p>Increased Revenue</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/gas.png"
                          alt="nft constructer"
                        />
                        <p>Brand Awareness</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/marketplace.png"
                          alt="nft constructer"
                        />
                        <p>Transparency</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/smart-contract.png"
                          alt="nft constructer"
                        />
                        <p>
                        Data Insight
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/stakling.png"
                          alt="nft constructer"
                        />
                        <p>Authencity </p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/lending.png"
                          alt="nft constructer"
                        />
                        <p>Organic Growth</p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/launchpad.png"
                          alt="nft constructer"
                        />
                        <p>Global Reach</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/auction.png"
                          alt="nft constructer"
                        />
                        <p>Effective Targeting</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/ownership.png"
                          alt="nft constructer"
                        />
                        <p>Fractional Ownership</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/minting.png"
                          alt="nft constructer"
                        />
                        <p>Lazy Minting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===============Benefits end================== */}

        {/* =====================top project===================== */}
        <TopProject />
        {/* ===============top project end=============== */}
  {/* <!--  ============ business grow start =============--> */}
  <section class="business-grow cpb-7">
          <div class="container">
            <div class="business-warrper">
              <div class="business-left">
                <div class="business-items">
                  <div class="business-item boxx">
                    <span>01</span>
                  </div>
                  <div class="business-item">
                    <h3>Fill in your brief</h3>
                    <p>
                      Our allotted designers team will make a wireframe then we
                      will show it to you for final confirmation.
                    </p>
                  </div>
                </div>
                <div class="business-items">
                  <div class="business-item">
                    <span>02</span>
                  </div>
                  <div class="business-item">
                    <h3>Get confirmation</h3>
                    <p>
                      Launching  a new NFT DeFi Or fintech start up? Do you need
                      a complete technical and marketing support? Tell us
                      exactly what you need, and then leave the hard work to us.
                    </p>
                  </div>
                </div>
                <div class="business-items">
                  <div class="business-item">
                    <span>03</span>
                  </div>
                  <div class="business-item">
                    <h3>Manage your team</h3>
                    <p>
                      Our developers will start working to make the whole
                      website functional with all the required designs
                      functionalities according to your given requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div class="business-right">
                <div class="business-img">
                  <img src="./assets/images/business-grow-img.png" alt="" />
                </div>
                <div class="business-btn">
                  <button>How it works</button>
                  <img src="./assets/images/right-arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--  ============ business grow end =============--> */}
        {/* =====================happy clients======================= */}
        <Review />
        {/* =====================happy clients end======================= */}
        {/* ==========================faq================== */}
        <div className="faqs-section cpt-6">
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
        {/* ===============================contact us ================ */}
        <LetsTalk />
      </div>
    </>
  );
}
Marketing.layout = AppLayout;

export default Marketing;
