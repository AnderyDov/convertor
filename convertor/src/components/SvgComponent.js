import React from "react";

export default function SvgComponent({ name, themes }) {
  switch (name) {
    case "sun":
      return (
        <svg
          className="cursor-pointer stroke-grey-600 hover:stroke-cyan-400 hover:fill-cyan-400"
          height="24"
          width="24"
          enablbackground="new 0 0 32 32"
          id="Outline"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <desc />
          <g>
            <path d="M16,26c-5.514,0-10-4.486-10-10S10.486,6,16,6s10,4.486,10,10S21.514,26,16,26z M16,8c-4.411,0-8,3.589-8,8s3.589,8,8,8   s8-3.589,8-8S20.411,8,16,8z" />
            <rect height="4" width="2" x="15" />
            <rect
              height="4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5269 6.1006)"
              width="2"
              x="5.101"
              y="4.101"
            />
            <rect height="2" width="4" y="15" />
            <rect
              height="2"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.5268 11.8995)"
              width="4"
              x="4.101"
              y="24.9"
            />
            <rect height="4" width="2" x="15" y="28" />
            <rect
              height="4"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.7279 25.8994)"
              width="2"
              x="24.9"
              y="23.9"
            />
            <rect height="2" width="4" x="28" y="15" />
            <rect
              height="2"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 3.272 20.1005)"
              width="4"
              x="23.9"
              y="5.101"
            />
          </g>
        </svg>
      );

    case "moon":
      return (
        <svg
          className="bi bi-moon cursor-pointer stroke-greey-600 hover:stroke-cyan-400 hover:fill-cyan-400 "
          fill="currentColor"
          height="20"
          width="20"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </svg>
      );

    default:
      <svg></svg>;
  }
}
if (module && module.hot) module.hot.accept();
