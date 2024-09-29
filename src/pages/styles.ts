import styled from "styled-components";

export const MainComponent = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 450px;

  .progress {
    padding: 4rem;
    position: relative;

    .time {
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -45%);
      font-size: 7rem;
    }

    .stage {
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -65%);
      font-size: 1.25rem;
    }
   }
`;
