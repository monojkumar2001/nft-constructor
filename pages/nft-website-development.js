import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import TopProject from "./inner/TopProject";
import DemoForm from "./inner/demoform";
import Newsletter from "./inner/Newsletter";
import Head from "next/head";
import Review from "./inner/Review";
import Link from "next/link";
import OfferA from "./inner/OfferA";
import Featured from "./inner/Featured";
import PriceRangeSlider from "./inner/PriceRange";

import LetsTalk from "./inner/LetsTalk";
import ContactBtn from "./inner/ContactBtn";

function HiCoin() {
  const [service, setService] = useState(1);

  const data = {
    rows: [
      {
        title: "What is an NFT minting platform?",
        content: `NFT Minting platform is a website where users can mint their various digital assets such as artwork,music,video,game items NFT etc digital collectibles. While minting an NFT users have to pay a gas fee based on the blockchain and platform they wish to mint their NFTs.`,
      },
      {
        title: "How to create a NFT Minting website?",
        content:
          "You can either create an NFT minting website with the use of ready made White label NFT minting software which can reduce the development cost and time. You just need to buy an NFT minting software, customize it based on your business niche requirements and launch it. You can also create an nft minting website from scratch which requires a lot of time and development cost.",
      },
      {
        title: "Which is the best NFT minting platform development company?",
        content: `With no doubt NFT Constructer is the best one step NFT minting platform development company delivering NFT Minting website development services worldwide such as India, United states, united kingdom and much more.`,
      },
      {
        title: "How much does it cost to create a NFT minting website?",
        content: `The cost to develop an NFT Minting platform depends on various factors such as geography, development model, resources needed, time and mainly focused on the features and functionalities required by the business owners on their platform.The cost can vary 5000 usd to 20000 usd depeding on the features and functionalities required by the business.`,
      },
      {
        title: "Is it completely secure?",
        content: `Yes, its completely secure & tested before we hand over the complete project to the customers.`,
      },
      {
        title: "Do you guys also provide after sales support?",
        content: `Yes obviously we provide 15-30 days after sales support after the project is completely delivered to the customers.`,
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
        <title>Nft Website Development Services - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="description"
          content="We develop a cutting-edge minting platform using blockchain technology that will support the growth of the gaming, real estate, and art sectors. Looking for information about websites for NFT minting?"
        ></meta>
        <meta
          name="og:description"
          content="We develop a cutting-edge minting platform using blockchain technology that will support the growth of the gaming, real estate, and art sectors. Looking for information about websites for NFT minting?"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Nft Website Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/2.jpg" />
        <meta property="image" content="assets/img/meta/2.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development, NFT marketplace development, NFT Website Design"
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
      <div id="hiCoin" className="cpy-5">
        <div className="decor-balls">
          <img
            height="auto"
            width="auto"
            src="assets/imgs/decor-ball-1.svg"
            alt="nft constructer"
          />
          <img
            height="auto"
            width="auto"
            src="assets/imgs/decor-ball-3.svg"
            alt="nft constructer"
          />
        </div>
        <div className="container">
          <section className="hero cpy-5">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1>Top Notch NFT Development Company</h1>

              <p className="raleway-black-16">
                Get an unique and distinguishable non-fungible token platform
                with integrated multiple security layers and rich features to
                enhance users&apos; trading experiences.
              </p>
              <div className="hero-checks">
                <div>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/check.svg"
                    alt="Checked"
                  />
                  <p className="raleway-grey-14">Free Register</p>
                </div>
                <div>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/check.svg"
                    alt="Checked"
                  />
                  <p className="raleway-grey-14">Great Service</p>
                </div>
              </div>
              <div className="hero-btns">
                <a href="#get-quoted" className="btn-hero-1">
                  Get Started
                </a>
              </div>
            </div>

            <div
              className="hero-img"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                height="auto"
                width="auto"
                src="assets/imgs/hero-img-6.png"
                alt="Hero IMG"
                className="hero-img-5"
              />

              <div className="charts-container">
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
                <div className="chart">
                  <div></div>
                </div>
              </div>
              <img
                height="auto"
                width="auto"
                src="assets/imgs/wheel.svg"
                alt="nft constructer"
                className="wheel"
              />
              <img
                height="auto"
                width="auto"
                src="assets/imgs/decor-4.png"
                alt="nft constructer"
                className="decor-4"
              />
            </div>
          </section>
        </div>
      </div>
      {/* =============service card section ================== */}
      <section>
        <div className="service-card">
          <div className="container">
            <div className="row-4">
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Reliable Platform
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/timer.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Most Realiable Developers </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Project&apos;s Confidentiality
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/doller.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>All of Your Information Is Secure </p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # Communicative
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/notice.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Clients say the team feels like their employees.</p>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                <div className="service-show-card">
                  <div className="service-name-img">
                    <a href="#" className="service-name">
                      # 24/7 Support
                    </a>
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/inner/vip.svg"
                      alt="nft constructer"
                    />
                  </div>
                  <p>Our developers are there to support you 24*7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============service card section ================== */}

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
                    height="auto"
                    width="auto"
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
                      Are you in search of a platform to develop your own NFTs?
                      NFT marketplaces built by us are feature-rich,
                      decentralized, and facilitate tokenization of all kinds of
                      assets - including artwork, collectibles, software
                      licenses, digital collectibles, and real-world assets.
                      With expertise in NFT token development services, you get
                      to earn royalties whenever a token is sold on your
                      website. Rather than working with intermediaries like
                      other companies do, we offer non-fungible token
                      development services direct from our website. You can
                      design NFTs for any kind of item unique to your business
                      or provide them on a primary online platform through our
                      development team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            height="auto"
            width="auto"
            src="assets/img/inner/cr-8.png"
            alt="nft constructer"
            className="cr8-img"
          />
          <img
            height="auto"
            width="auto"
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
        {/* ===================demo request section ================== */}
        {/* <div id="demo-sec">
          <DemoForm />
        </div> */}
        {/* ===================demo request section end ================== */}

        {/* ===================service section ================== */}
        <section class="our-services cpt-6">
          <div class="container">
            <div class="our-service-wrapper">
              <div class="our-service-content">
                <span class="short-title">OUR NON FUNGIBLE</span>
                <h2 class="sec-title">Token Development Services</h2>
                <p class="service-discription">
                Being a top NFT token development company, our non-fungible token development services facilitate the digital assets to be tokenized for collection. Majorly, we work on Ethereum NFTs, which are too popular in the market. SemiDot helps you to launch your NFT for all your business needs.
                </p>
              </div>
              <div class="our-service-items cpy-5">
                <div class="our-service-item">
                  <div class="our-service-icon">
                    <img
                      src="/assets/images/nft-development/1.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Minting Platform</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/2.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Marketplace </h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/3.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Launchpad</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/4.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Cross-Chain NFT Minting Platform</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/5.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Mult-Chain NFT Marketplace</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/6.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Token Development </h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/7.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Marketplace With Governance</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/8.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Ticketing Marketplace</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/9.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT For Real state</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/10.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>DAO Enabled NFT</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/11.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Swapping Platform </h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/12.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Staking Platform</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/13.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Game Marketplace</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/14.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Physical NFT</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/15.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Physical NFT Marketplace</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/16.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Wallet</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/17.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Fractional NFT Marketplace</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/18.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Governance Token</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/19.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>NFT Social Platform</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/20.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Ecommerce Based NFT Store</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/21.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Asset Lifecycle Management</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/22.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Software License Management</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/23.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>Real Estate Tokenization</h3>
                </div>
                <div class="our-service-item">
                  <div class="our-service-icon">
                  <img
                      src="/assets/images/nft-development/24.png"
                      alt="nftconstructer"
                    />
                  </div>
                  <h3>IPO Development</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpt-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================development track ================== */}
        <section>
          <div className="development-track cpt-6" id="nft-development">
            <div className="container">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="sm-title">best services</p>
                <h2 className="sec-title">NFT Development Tech Stack</h2>
                <p className="sec-des">
                SemiDot is a leading NFT marketplace development company. We are highly innovative & work with advanced technologies.
                </p>
              </div>
              <div
                className="options"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div
                  className={service === 1 ? "option active" : "option"}
                  onClick={() => {
                    setService(1);
                  }}
                >
                  <p>BlockChain Platform</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 2 ? "option active" : "option"}
                  onClick={() => {
                    setService(2);
                  }}
                >
                  <p>Storage Platform</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 3 ? "option active" : "option"}
                  onClick={() => {
                    setService(3);
                  }}
                >
                  <p>NFT Standards</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 4 ? "option active" : "option"}
                  onClick={() => {
                    setService(4);
                  }}
                >
                  <p>Front End Frameworks</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 5 ? "option active" : "option"}
                  onClick={() => {
                    setService(5);
                  }}
                >
                  <p>Programming Languages</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
                <div
                  className={service === 6 ? "option active " : "option"}
                  onClick={() => {
                    setService(6);
                  }}
                >
                  <p>Cloud Platforms</p>
                  <img
                    height="auto"
                    width="auto"
                    src="assets/imgs/triangle.png"
                    alt="nft constructer"
                    className="arrow-down"
                  />
                </div>
              </div>
              <div className="" data-aos="fade-up" data-aos-duration="1000">
                <div className={service === 1 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/1.png"
                      alt="nft-constructer"
                    />
                    <p>Ethereum</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/2.png"
                      alt="nft-constructer"
                    />
                    <p>Hyperledger</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/3.png"
                      alt="nft-constructer"
                    />
                    <p>Binance</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/4.png"
                      alt="nft-constructer"
                    />
                    <p>Tron</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/5.png"
                      alt="nft-constructer"
                    />
                    <p>Solana</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/6.png"
                      alt="nft-constructer"
                    />
                    <p>Polygon</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/7.png"
                      alt="nft-constructer"
                    />
                    <p>Cardano</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/8.png"
                      alt="nft-constructer"
                    />
                    <p>Polkadot</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/9.png"
                      alt="nft-constructer"
                    />
                    <p>Litecoin</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/10.png"
                      alt="nft-constructer"
                    />
                    <p>Avalanche</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/11.png"
                      alt="nft-constructer"
                    />
                    <p>NEO</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/12.png"
                      alt="nft-constructer"
                    />
                    <p>Harmony</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/13.png"
                      alt="nft-constructer"
                    />
                    <p>Fantom</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/14.png"
                      alt="nft-constructer"
                    />
                    <p>Moonbeam</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/15.png"
                      alt="nft-constructer"
                    />
                    <p>Aurora</p>
                  </div>
                  <div className="nft-coin">
                  <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/blockchain/16.png"
                      alt="nft-constructer"
                    />
                    <p>Cronos</p>
                  </div>
                  
                </div>
                <div className={service === 2 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/ipfs.png"
                      alt="Etherium"
                    />
                    <p>IPFS</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/file-coin.png"
                      alt="Etherium"
                    />
                    <p>File Coin</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchbd.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                </div>
                <div className={service === 3 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/etherium.png"
                      alt="Etherium"
                    />
                    <p>ERC-721A</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/etherium.png"
                      alt="Etherium"
                    />
                    <p>ERC-1155</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/tezos.png"
                      alt="Etherium"
                    />
                    <p>Tezos</p>
                  </div>

                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/dgoods.png"
                      alt="Etherium"
                    />
                    <p>Dgoods</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/trc.png"
                      alt="Etherium"
                    />
                    <p>Trc-721</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/bep.png"
                      alt="Etherium"
                    />
                    <p>Bep-20</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/rust.png"
                      alt="Etherium"
                    />
                    <p>Rust Programing</p>
                  </div>
                </div>

                <div className={service === 4 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/vuejs.png"
                      alt="Etherium"
                    />
                    <p>Vue Js</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/angular.png"
                      alt="Etherium"
                    />
                    <p>Angular</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/react.png"
                      alt="Etherium"
                    />
                    <p>React</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/cafca.png"
                      alt="Etherium"
                    />
                    <p>Kafka</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb-2.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                </div>

                <div className={service === 5 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/solidity.png"
                      alt="Etherium"
                    />
                    <p>Solidity</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/angular1.png"
                      alt="Etherium"
                    />
                    <p>Angular</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/c++.png"
                      alt="Etherium"
                    />
                    <p>C++</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/c.png"
                      alt="Etherium"
                    />
                    <p>C</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/couchdb.png"
                      alt="Etherium"
                    />
                    <p>CouchDB</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/php.png"
                      alt="Etherium"
                    />
                    <p>PHP</p>
                  </div>
                </div>

                <div className={service === 6 ? "coins active" : "coins"}>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/aws.png"
                      alt="Etherium"
                    />
                    <p>aws</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/ibm.png"
                      alt="Etherium"
                    />
                    <p>IBM BLUEMIX</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/rass.png"
                      alt="Etherium"
                    />
                    <p>Eth rass</p>
                  </div>
                  <div className="nft-coin">
                    <img
                      height="auto"
                      width="auto"
                      src="assets/img/icon/kaleido.png"
                      alt="Etherium"
                    />
                    <p>Kaleido Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================development track end ================== */}
        {/* ===================ChainUP section  ================== */}
        <section>
          <div className="chainup-area cpy-6">
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
                        <p>Data Center Worldwide</p>
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
                          <CountUp end={300} duration={5} /> +
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

        {/* ==================Features================== */}
        <section>
          <div id="inner-area">
            <div className="features">
              <div className="services-decor">
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-1.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-2.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-3.png"
                  alt="nft constructer"
                />
                <img
                  height="auto"
                  width="auto"
                  src="assets/imgs/decor-ball-4.png"
                  alt="nft constructer"
                />
              </div>
              <div className="container">
                <div className="section-title">
                  <p className="sm-title">FEATURES OF</p>
                  <h2 className="sec-title"> NFT Development Services</h2>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/paper.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/paper-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Standardization</p>
                      <p>
                        You can create reusable, inheritable, and common
                        standards for all NFTs. Begin token standardization of
                        collectibles.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/chart-99.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/chart-99-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Marketplace</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hand.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hand-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Ownership</p>
                      <p>
                        NFT tokens are immutable ownership of antique
                        collectibles that eliminate unauthorized changes
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hammer.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/hammer-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Bidding</p>
                      <p>
                        Trade in multiple marketplaces and bid over them to take
                        part in the trade.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/trace.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/trace-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Traceability</p>
                      <p>
                        The various NFT marketplaces are highly productive for
                        NFT trading & unique ownership.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/rocket.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/rocket-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>New Project</p>
                      <p>
                        Wallet providers are eyeing every new project arriving
                        in the NFT marketplace. Enjoy smooth trade.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/circles.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/circles-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Tracking</p>
                      <p>
                        You can track the owner of any asset and avoid
                        third-party verification requirements.You can also track
                        traffic & sales analytics.
                      </p>
                    </div>

                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/goverment.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/goverment-pu.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Governance Attributes</p>
                      <p>
                        Users can vote on upgrades of the platform developed by
                        a Governance attribute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}
        {/* ===================Newsletter section  ================== */}
        {/* <Newsletter /> */}
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
                  <h2>NFT Development</h2>
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
                        <p>NFT Liquidity</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/gas.png"
                          alt="nft constructer"
                        />
                        <p>Lowest Gas Price</p>
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
                        <p>Multi-Chain NFT Marketplace</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/smart-contract.png"
                          alt="nft constructer"
                        />
                        <p>
                          Smart contract <br /> Audited NFT
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
                        <p>NFT Staking</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/lending.png"
                          alt="nft constructer"
                        />
                        <p>NFT Lending</p>
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
                        <p>NFT Launch Pad</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/auction.png"
                          alt="nft constructer"
                        />
                        <p>Bidding & Auction</p>
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
        <div className="faqs-section cpb-6 cpt-7">
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
        <ContactBtn />
        {/* ===============================contact us ================ */}
        <LetsTalk />
      </div>
    </>
  );
}
HiCoin.layout = AppLayout;

export default HiCoin;
