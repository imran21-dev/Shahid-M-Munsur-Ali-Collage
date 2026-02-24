import { ArrowRight } from "lucide-react";
import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="flex items-center gap-2">
        Connect with me <ArrowRight />
        <div className="star-3">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 784.11 815.53"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              />
            </g>
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 6px 35px;
    background: #000000;

    font-size: 14px;
    font-weight: 600;
    color: #f26d44;
    box-shadow: none;
    border-radius: 100px;
    box-shadow: 0 0 80px #f26d44;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .star-3 {
    position: absolute;
    top: 40%;
    left: 5%;
    width: 10px;
    height: auto;
    filter: drop-shadow(0 0 10px #f26d44);
    z-index: 2;
    transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
  }

  button:hover .star-3 {
    transform: rotate(180deg) scale(1.5);
    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
  }

  button:hover {
    gap: 50px;
    padding-right: 5px;
    transition: all 0.3s ease-in-out;
  }

  .fil0 {
    fill: #f26d44;
  }
`;

export default Button;
