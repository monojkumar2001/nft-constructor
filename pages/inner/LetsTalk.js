import React from "react";

function letsTalk() {
  return (
    <section class="create-metaverse cpb-6">
      <div class="container">
        <div class="create-metaverse-wrapper">
          <div class="create-metaverse-left">
            <h1 class="create-title">
              Tell us about your brand & marketing needs
            </h1>
            <div class="create-metaverse-list">
              <h4>Book a demo and discovery call to get a look at:</h4>
              <ul>
                <li>How NFT Constructor works</li>
                <li>
                  How you can bring your project at scale better, faster and
                  cheaper.
                </li>
                <li>
                  How we’re different from agencies, freelancers and in-house
                  teams.
                </li>
                <li>The most suitable pricing plan according to your needs.</li>
              </ul>
            </div>
            <div class="all-company-list">
              <div class="company-img">
                <img src="./assets/images/stackware.png" alt="" />
              </div>
              <div class="company-img">
                <img src="./assets/images/prime-trust.png" alt="" />
              </div>
              <div class="company-img">
                <img src="./assets/images/solana.png" alt="" />
              </div>
              <div class="company-img">
                <img src="./assets/images/consensys.png" alt="" />
              </div>
              <div class="company-img">
                <img src="./assets/images/alchemy.png" alt="" />
              </div>
              <div class="company-img">
                <img src="./assets/images/coinbase.png" alt="" />
              </div>
            </div>
          </div>
          <div class="create-metaverse-right">
            <div class="meta-forms">
              <form action="">
                <div class="forms-fullname">
                  <div class="meta-forms-item">
                    <label for="">First Name</label>
                    <div class="form-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="E.g . Buzz"
                      />
                    </div>
                  </div>
                  <div class="meta-forms-item">
                    <label for="">Last Name</label>
                    <div class="form-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="E.g . Buzz"
                      />
                    </div>
                  </div>
                </div>
                <div class="meta-forms-item">
                  <label for="">Email</label>
                  <div class="form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="E.g . buzz@nasa.gov"
                    />
                  </div>
                </div>
                <div class="meta-forms-item">
                  <label for="">Company</label>
                  <div class="form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="E.g . Buzz"
                    />
                  </div>
                </div>
                <div class="meta-forms-item">
                  <label for="size">Company Size</label>
                  <div class="select-form">
                    <select name="size" id="size">
                      <option value="one">Select One</option>
                      <option value="two">Saab</option>
                      <option value="three">Opel</option>
                      <option value="four">Audi</option>
                    </select>
                  </div>
                </div>
                <div class="meta-forms-item">
                  <label for="">Phone Number</label>
                  <div class="form-input">
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="E.g 234 5678 9"
                    />
                  </div>
                </div>
                <p>
                  We need your phone number for the demo. We'll never use it for
                  any other purposes.
                </p>
                <div class="meta-forms-item">
                  <input class="submit-btn" type="submit" value="Let’s Talk" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default letsTalk;
