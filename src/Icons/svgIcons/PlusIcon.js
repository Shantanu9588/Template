import React from "react";

const PlusIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_38_23509)">
        <path
          d="M12 4C12.0883 4 12.1729 4.03525 12.2354 4.09766C12.2978 4.16009 12.3329 4.24472 12.333 4.33301V10.667H18.667C18.7553 10.6671 18.8399 10.7022 18.9023 10.7646C18.9648 10.8271 19 10.9117 19 11C19 11.0883 18.9648 11.1729 18.9023 11.2354C18.8399 11.2978 18.7553 11.3329 18.667 11.333H12.333V17.667C12.3329 17.7553 12.2978 17.8399 12.2354 17.9023C12.1729 17.9648 12.0883 18 12 18C11.9117 18 11.8271 17.9648 11.7646 17.9023C11.7022 17.8399 11.6671 17.7553 11.667 17.667V11.333H5.33301C5.24472 11.3329 5.16009 11.2978 5.09766 11.2354C5.03525 11.1729 5 11.0883 5 11L5.00684 10.9346C5.01965 10.8706 5.0509 10.8115 5.09766 10.7646C5.16009 10.7022 5.24472 10.6671 5.33301 10.667H11.667V4.33301C11.6671 4.24472 11.7022 4.16009 11.7646 4.09766C11.8115 4.0509 11.8706 4.01965 11.9346 4.00684L12 4Z"
          fill="#010D19"
          stroke="#513CCE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_38_23509"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_38_23509"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_38_23509"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default PlusIcon;
