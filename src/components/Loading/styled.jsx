import styled from "styled-components";

export const Loading = styled.div`
  background-color: rgba(0, 0, 0, 0.871);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  img {
    width: 35%;
  }

  .loading-animate {
    animation: load 1.2s infinite 0s ease-in-out;
    animation-direction: alternate;
    text-shadow: 0 0 1px white;
  }

  @keyframes load {
    0% {
      opacity: 0.08;
      filter: blur(5px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
