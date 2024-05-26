import React from "react";

const LeftSideButtonLinks = () => {
  return (
      <div
        className={'col-2 position-fixed" id="left-side-buttons-links'}
        style={{
          top: "10%",
          backgroundColor: "white",
        }}
      >
        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "100%",
                height: "100%",
              }}
            >
              <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </g>
            </svg> */}
            
          </div>
          <div>Home</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "100%",
                height: "100%",
              }}
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg> */}
          </div>
          <div>Shorts</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "inherit",
                width: "100%",
                height: "100%",
              }}
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg> */}
          </div>
          <div>Subscriptions</div>
        </div>
        {/* section line mark  */}
        <div className={"section-line my-3"}></div>
        <div className={"p-1"}>
          <p className={"px-4 fw-bolder"}>
            You
            <span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                focusable="false"
                style={{
                  pointerEvents: "none",
                  display: "inherit",
                  width: "100%",
                  height: "100%",
                }}
              >
                <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
              </svg> */}
            </span>
          </p>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <g>
                <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
              </g>
            </svg> */}
          </div>
          <div>History</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
            </svg> */}
          </div>
          <div>Playlists</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
            </svg> */}
          </div>
          <div>Watch later</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
            </svg> */}
          </div>
          <div>Liked Vedios</div>
        </div>

        {/*  section line mark  */}
        <div className={"section-line my-3"}></div>
        <div className={"p-1"}>
          <p className={"px-4 fw-bolder"}>Explore </p>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
            </svg> */}
          </div>
          <div>Trending</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
            </svg> */}
          </div>
          <div>Music</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
            </svg> */}
          </div>
          <div>Gaming</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
            </svg> */}
          </div>
          <div>News</div>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
            </svg> */}
          </div>
          <div>Sports</div>
        </div>

        {/* section line mark  */}
        <div className={"section-line my-3"}></div>
        <div className={"p-1"}>
          <p className={"px-4 fw-bolder"}>More from YouTube</p>
        </div>

        <div
          className={
            'd-flex justify-content-start align-items-center p-2" id="icon-text'
          }
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 30px; height: 30px;"
            >
              <defs>
                <radialGradient
                  cx="5.4%"
                  cy="7.11%"
                  r="107.93%"
                  fx="5.4%"
                  fy="7.11%"
                  gradientTransform="matrix(.70653 0 0 1 .016 0)"
                >
                  <stop offset="0%" stopColor="#FFF"></stop>
                  <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path d="M1 1h21.77v22H1z"></path>
                <g fillRule="nonzero">
                  <path
                    fill="#F00"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                  ></path>
                  <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                  <path
                    fill="#000"
                    fillOpacity=".12"
                    d="M9.68 8.88l5.13 3.48.73-.38"
                  ></path>
                  <path
                    fill="#FFF"
                    fillOpacity=".2"
                    d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                  ></path>
                  <path
                    fill="#3E2723"
                    fillOpacity=".2"
                    d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                  ></path>
                  <path
                    fill="#FFF"
                    fillOpacity=".2"
                    d="M9.68 15.08v.1l5.84-3.08v-.12"
                  ></path>
                  <path
                    fill="#3E2723"
                    fillOpacity=".2"
                    d="M9.68 8.9v-.13l5.84 3.1v.1"
                  ></path>
                  <path
                    fill="url(#a_yt70)"
                    fillOpacity=".1"
                    d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                    transform="translate(1 4.208)"
                  ></path>
                </g>
              </g>
            </svg> */}
          </div>
          <div>YouTube Premium</div>
        </div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 30px; height: 30px;"
            >
              <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
              <polygon
                fill="#FFFFFF"
                points="10,14.65 10,9.35 15,12 "
              ></polygon>
              <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
              ></path>
            </svg> */}
          </div>
          <div>YouTube Music</div>
        </div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 30px; height: 30px;"
            >
              <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
              ></path>
              <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
              ></path>
              <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
              ></path>
              <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
              ></path>
            </svg> */}
          </div>
          <div>YouTube Kids</div>
        </div>

        {/* section line mark  */}
        <div className={"section-line my-3"}></div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path>
            </svg> */}
          </div>
          <div>Settings</div>
        </div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path>
            </svg> */}
          </div>
          <div>Report History</div>
        </div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
            </svg> */}
          </div>
          <div>Help</div>
        </div>

        <div
          className={"d-flex justify-content-start align-items-center p-2"}
          id="icon-text"
        >
          <div className={"px-4"}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none; display: inherit; width: 100%; height: 100%;"
            >
              <path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path>
            </svg> */}
          </div>
          <div>Send Feedback</div>
        </div>

        {/* section line mark  */}
        <div className={"section-line my-3"}></div>
      </div>
  );
};

export default LeftSideButtonLinks;
