import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 5 0"
          />
        </filter>

        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 10 0"
          />
        </filter>

        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 1 0 
                    0 1 0 1 0 
                    0 0 1 1 0 
                    0 0 0 2 0"
          />
        </filter>
      </svg>

      <div className="card-container">
        <div className="spin spin-blur" />
        <div className="spin spin-intense" />
        <div className="backdrop" />
        <div className="card-border">
          <div className="spin spin-inside" />
        </div>
        <div className="card" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    width: 600px;
    height: 500px;
    border-radius: 1em;
  }

  .card-border {
    position: absolute;
    inset: 0;
    background: #0a0a0a;
    border-radius: inherit;
  }

  .card {
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: #0a0a0a;
    overflow: hidden;
  }

  .backdrop {
    position: absolute;
    inset: -100%;
    background: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 20%,
      #0a0a0a 100%
    );
    background-size: 3px 3px;
    z-index: -1;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(3em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.5em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, #f50, #0000 46% 54%, #05f);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, #f95, #0000 35% 65%, #59f);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, #fc9, #0000 35% 65%, #9cf);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    100% {
      rotate: 370deg;
    }
  }
`;

export default Card;
