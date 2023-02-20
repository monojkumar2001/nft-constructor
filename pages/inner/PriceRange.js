import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}USD`;
}

export default function DiscreteSlider({ valuetext }) {
  const [value, setValue] = React.useState(5000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="price-range">
        <div className="container">
          <div className="section-title price-range-width">
            <h2 className="sec-title">
              Customize pricing and quotation methods.
            </h2>

            <p className="sec-des">
              Use our personalized pricing plans to bring in high-caliber for
              your project. Our pricing plan service combines the work of top
              team of developers from across the globe with technology that has
              been specifically designed for the purpose.
            </p>
          </div>
          <div className="range-area">
            <div className="left-range">
              <h3 className="range-title">What is your spending budget?</h3>
              <h2 className="range-total">$5k - $10k</h2>
              <Box className="price-slider">
                <Slider
                  aria-label="Temperature"
                  defaultValue={500}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  step={250}
                  marks
                  min={5000}
                  max={10000}
                />
              </Box>
              <p>
                $5k - $10k $10k - $20k $20k - $40k $40k - $60k $60k - $100k
                $100k - $200k $200k -$500k $500k
              </p>
            </div>
            <div className="right-telk">
              <h2 className="month-price">
                ${value}/<span className="price-text">mo</span>
              </h2>
              <a href="" className="get-start-btn">
                Get Started
              </a>
              <p>
              Monthly payment, no setup fees, pay only when you approve the expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
