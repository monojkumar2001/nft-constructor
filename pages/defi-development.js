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

function DefiDevelopment() {
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
      <section className="defi-hero cpy-5">
        <div className="container">
          <div className="defi-hero-wrapper">
            <div className="defi-hero-left">
              <h1>
                Decentralized Smart <span>Contract</span> Auditing Services{" "}
              </h1>
              <p>
                We use cutting-edge technology and a community of skilled
                professionals to offer our clients unparalleled security and
                peace of mind.{" "}
              </p>
              <div className="defi-hero-btn">
                <a href="#get-quoted" className="btn-hero-1">
                  Get Started
                </a>
                <a href="#get-quoted" className="btn-hero-2">
                  Learn More
                </a>
              </div>
            </div>
            <div className="defi-hero-right">
              <div className="hero-bg-img-1">
                <img src="./assets/images/defi/hero-img-1.png" alt="" />
              </div>
              <div className="hero-bg-img-2">
                <img src="./assets/images/defi/hero-img-2.png" alt="" />
              </div>
              <div className="hero-bg-img-3">
                <img src="./assets/images/defi/hero-img-3.png" alt="" />
              </div>
              <div className="hero-bg-img-4">
                <img src="./assets/images/defi/hero-img-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
        <section className="our-services cpt-6">
          <div className="container">
            <div className="our-service-wrapper">
              <div className="our-service-content">
                <span className="short-title">OUR NON FUNGIBLE</span>
                <h1 className="service-title">DeFi Services</h1>
                <p className="service-discription">
                  Being a top NFT token development company, our non-fungible
                  token development services facilitate the digital assets to be
                  tokenized for collection. Majorly, we work on Ethereum NFTs,
                  which are too popular in the market. SemiDot helps you to
                  launch your NFT for all your business needs.
                </p>
              </div>
              <div className="our-service-items cpy-5">
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/1.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Staking Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/2.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Yield Farming</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/3.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Lending and Borrowing Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/4.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Governance Token</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/5.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Crowd Funding Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/6.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Exchange Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/7.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Real State Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/8.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Synthetic Asset</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/9.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Swapping Platform</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/10.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Services</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/11.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>DeFi Wallet</h3>
                </div>
                <div className="our-service-item">
                  <div className="our-service-icon">
                    <img
                      src="/assets/images/defi/defi-service/12.png"
                      alt="nft-contructer"
                    />
                  </div>
                  <h3>Dex Development</h3>
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
        {/* ==================Features================== */}
        <section>
          <div id="inner-area" className="cpt-6">
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
                  <h2 className="sec-title">
                    Key Features of DeFi Development{" "}
                  </h2>
                  <p className="sec-des">
                    Being a top NFT token development company, our non-fungible
                    token development services facilitate the digital assets to
                    be tokenized for collection. Majorly, we work on Ethereum
                    NFTs, which are too popular in the market. NFT CONSTRUCTER
                    helps you to launch your NFT for all your business needs.
                  </p>
                </div>

                <div className="services">
                  <div className="services-container">
                    <div
                      className="service"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <div className="services-icon">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/per-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/per-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Permissionless</p>
                      <p>
                        DeFi uses an open, permission-less access model that
                        anyone with an internet connection and a cryptocurrency
                        wallet can access.
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
                          src="assets/imgs/defi-feature-icon/pro-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/pro-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Programmability</p>
                      <p>
                        DeFi's programmability creates new opportunities for the
                        development of new financial instruments and digital
                        assets.
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
                          src="assets/imgs/defi-feature-icon/trans-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/trans-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Transparency</p>
                      <p>
                        For the public Ethereum blockchain, each transaction
                        must be broadcast to all other users on the network to
                        maintain utmost transparency.
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
                          src="assets/imgs/defi-feature-icon/immu-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/immu-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Immutability</p>
                      <p>
                        DeFi offers the assurance of integrity for all
                        transactions with the guarantee of safe and secure data
                        transmission without any unauthorized modifications.
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
                          src="assets/imgs/defi-feature-icon/inter-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/inter-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Interoperability </p>
                      <p>
                        DeFi protocols are often referred to as "legos,"because
                        of its interoperability. You must specify how to combine
                        two DeFi protocols like Lego blocks for specific use
                        cases.
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
                          src="assets/imgs/defi-feature-icon/high-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/high-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>High Security</p>
                      <p>
                        Decentralized platforms are known for having complex and
                        impenetrable security structures. Users feel far more
                        secure in the system because of the involvement of
                        finance.
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
                          src="assets/imgs/defi-feature-icon/decen-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/decen-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Decentralized Transactions</p>
                      <p>
                        DeFi is able to offer platforms decentralized exchanges
                        without a centralized infrastructure. The transfer of
                        funds only take place once the trade is concluded, to
                        fully ensure their security.
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
                          src="assets/imgs/defi-feature-icon/non-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/non-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Non Custodial</p>
                      <p>
                        By utilizing web3 wallets like MetaMask, users can
                        interact with smrp financial protocols and applications
                        more effectively while retaining total control over
                        their assets and personal data.
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
                          src="assets/imgs/defi-feature-icon/global-1.png"
                          alt="nft constructer"
                        />
                        <img
                          height="auto"
                          width="auto"
                          src="assets/imgs/defi-feature-icon/global-2.png"
                          alt="nft constructer"
                        />
                      </div>

                      <p>Global Access</p>
                      <p>
                        Since traders and entrepreneurs from all over the world
                        can use the lending and borrowing DeFi platform, it has
                        proven to be very helpful.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================Features ================== */}

        {/* ===============Benefits================== */}
        <section>
          <div id="inner-area" data-aos="fade-up" data-aos-duration="1000">
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
                  <h2>Defi Development</h2>
                  <div className="title-line"></div>
                </div>

                <div className="spider">
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
                          src="assets/img/design/1.png"
                          alt="nft constructer"
                        />
                        <p>Automation</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/5.png"
                          alt="nft constructer"
                        />
                        <p>
                          Usage Of <br /> Smart Contract
                        </p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/2.png"
                          alt="nft constructer"
                        />
                        <p>
                          Strategized <br />
                          Investment Plans
                        </p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/6.png"
                          alt="nft constructer"
                        />
                        <p>
                          Lack Of the <br />
                          presence of a<br /> third party
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/3.png"
                          alt="nft constructer"
                        />
                        <p>Highly Secure</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/7.png"
                          alt="nft constructer"
                        />
                        <p>
                          Inmplementation <br /> of Pseudonymous <br />{" "}
                          Transactions
                        </p>
                      </div>
                    </div>

                    <div className="benefits-container">
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/4.png"
                          alt="nft constructer"
                        />
                        <p>Ensures Global Access</p>
                      </div>
                      <div className="benefit-box">
                        <img
                          height="auto"
                          width="auto"
                          src="assets/img/design/8.png"
                          alt="nft constructer"
                        />
                        <p>Interoperability</p>
                      </div>
                    </div>
                    <div className="benefits-container">
                      <a href="#" className="carcel-btn">
                        Get NFT Solution
                      </a>
                      <a href="#" className="carcel-btn-alt">
                        Discuss Your Project
                      </a>
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
        <section className="business-grow cpb-7">
          <div className="container">
            <div className="business-warrper">
              <div className="business-left">
                <div className="business-items">
                  <div className="business-item boxx">
                    <span>01</span>
                  </div>
                  <div className="business-item">
                    <h3>Fill in your brief</h3>
                    <p>
                      Our allotted designers team will make a wireframe then we
                      will show it to you for final confirmation.
                    </p>
                  </div>
                </div>
                <div className="business-items">
                  <div className="business-item">
                    <span>02</span>
                  </div>
                  <div className="business-item">
                    <h3>Get confirmation</h3>
                    <p>
                      Launching  a new NFT DeFi Or fintech start up? Do you need
                      a complete technical and marketing support? Tell us
                      exactly what you need, and then leave the hard work to us.
                    </p>
                  </div>
                </div>
                <div className="business-items">
                  <div className="business-item">
                    <span>03</span>
                  </div>
                  <div className="business-item">
                    <h3>Manage your team</h3>
                    <p>
                      Our developers will start working to make the whole
                      website functional with all the required designs
                      functionalities according to your given requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="business-right">
                <div className="business-img">
                  <img src="./assets/images/business-grow-img.png" alt="" />
                </div>
                <div className="business-btn">
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
        <div className="faqs-section cpt-6 cpb-6">
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
DefiDevelopment.layout = AppLayout;

export default DefiDevelopment;
