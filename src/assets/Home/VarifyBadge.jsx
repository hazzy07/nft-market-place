import React from "react";

const VerifiedBadge = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    width={size}
    height={size}
    aria-label="Verified"
    role="img"
    className={className}
  >
    <path
      d="M344-60l-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"
      fill="rgb(32, 129, 226)"
    />
    <path
      d="M438-338 L664-564 L608-622 L438-452 L352-538 L296-482 L438-338 Z"
      fill="white"
    />
  </svg>
);

export default VerifiedBadge;
