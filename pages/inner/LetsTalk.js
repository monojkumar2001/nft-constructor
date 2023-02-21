import React from "react";

function letsTalk() {
  return (
    <section className="create-metaverse cpb-6">
      <div className="container">
        <div className="create-metaverse-wrapper">
          <div className="create-metaverse-left">
            <span>The bottom line?</span>
            <h1 className="create-title">With Mayple you get:</h1>
            <div className="create-metaverse-list">
              <div className="talk-list-item">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7L7.5 12.5L18 2"
                    stroke="#04AA33"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                <p>
                  <span>A marketing “dream team”</span> of top-performing
                  experts (that none of your competitors can steal from you)
                </p>
              </div>
              <div className="talk-list-item">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7L7.5 12.5L18 2"
                    stroke="#04AA33"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                <p>
                  <span>A marketing “dream team”</span> of top-performing
                  experts (that none of your competitors can steal from you)
                </p>
              </div>
              <div className="talk-list-item">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7L7.5 12.5L18 2"
                    stroke="#04AA33"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                <p>
                  <span>A marketing “dream team”</span> of top-performing
                  experts (that none of your competitors can steal from you)
                </p>
              </div>
              <div className="talk-list-item">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7L7.5 12.5L18 2"
                    stroke="#04AA33"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
                <p>
                  <span>A marketing “dream team”</span> of top-performing
                  experts (that none of your competitors can steal from you)
                </p>
              </div>
            </div>
            <div className="all-company-list">
              <div className="company-img">
                <img src="./assets/images/stackware.png" alt="" />
              </div>
              <div className="company-img">
                <img src="./assets/images/prime-trust.png" alt="" />
              </div>
              <div className="company-img">
                <img src="./assets/images/solana.png" alt="" />
              </div>
              <div className="company-img">
                <img src="./assets/images/consensys.png" alt="" />
              </div>
              <div className="company-img">
                <img src="./assets/images/alchemy.png" alt="" />
              </div>
              <div className="company-img">
                <img src="./assets/images/coinbase.png" alt="" />
              </div>
            </div>
          </div>
          <div className="create-metaverse-right">
            <div className="meta-forms">
              <form action="">
                <div className="forms-fullname">
                  <div className="meta-forms-item">
                    <label for="">First Name</label>
                    <div className="form-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="E.g . Buzz"
                      />
                    </div>
                  </div>
                  <div className="meta-forms-item">
                    <label for="">Last Name</label>
                    <div className="form-input">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="E.g . Buzz"
                      />
                    </div>
                  </div>
                </div>
                <div className="meta-forms-item">
                  <label for="">Email</label>
                  <div className="form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="E.g . buzz@nasa.gov"
                    />
                  </div>
                </div>
                <div className="meta-forms-item">
                  <label for="">Company</label>
                  <div className="form-input">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="E.g . Buzz"
                    />
                  </div>
                </div>
                <div className="meta-forms-item">
                  <label for="size">Company Size</label>
                  <div className="select-form">
                    <select name="size" id="size">
                      <option value="one">Select One</option>
                      <option value="two">Saab</option>
                      <option value="three">Opel</option>
                      <option value="four">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="meta-forms-item">
                  <label for="">Phone Number</label>
                  <div className="form-input">
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
                <div className="meta-forms-item">
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Let’s Talk"
                  />
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
