import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  .input {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    font-size: 1.25rem;

    select {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }
`;
