import React from "react";

const HeroBG = () => {
  return (
    <svg
      style={{
        position: "absolute",
        right: 0,
        top:0,
        zIndex: 1,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      width="574"
      height="800"
      viewBox="0 0 574 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.13" clip-path="url(#clip0_46_26146)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M430.338 704.17C391.28 704.17 353.925 696.741 319.662 683.153L196.682 763.664C263.946 807.538 344.208 833 430.338 833C589.601 833 728.671 745.949 803.065 616.547L692.2 552.101C639.891 643.024 542.213 704.17 430.338 704.17Z"
          fill="#1572D3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M143.113 77.5434L269.753 400.031L143.113 722.456L343.074 591.531L635.728 400.031L343.074 208.469L143.113 77.5434Z"
          fill="#1572D3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M430.34 95.8301C542.215 95.8301 639.892 156.975 692.201 247.899L803.067 183.452C728.61 54.0508 589.602 -33 430.34 -33C344.146 -33 263.947 -7.53875 196.621 36.3359L319.664 116.847C353.927 103.259 391.218 95.8301 430.34 95.8301Z"
          fill="#1572D3"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94.6488 670.962L153.331 522.004L201.413 399.968L153.331 277.995L94.6488 129.038C35.4617 203.199 0 297.425 0 400.032C0 502.575 35.4617 596.801 94.6488 670.962Z"
          fill="#1572D3"
        />
      </g>
      <defs>
        <clipPath id="clip0_46_26146">
          <rect
            width="803"
            height="866"
            fill="white"
            transform="translate(0 -33)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeroBG;