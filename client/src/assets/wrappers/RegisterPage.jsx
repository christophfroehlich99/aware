import styled from "styled-components";

const Wrapper = styled.main`
  display: grid;
  align-items: center;
  .logo {
    margin: 0 auto;
    display: block;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  input {
    margin-bottom: 1.3rem;
  }

  .btn-block {
    margin: 2rem 0;
  }

  p {
    text-align: center;
    font-weight: bold;
    button {
      color: var(--primary-500);
      background: transparent;
      cursor: pointer;
      border-style: none;
      letter-spacing: var(--letterSpacing);
      font-weight: bold;
    }
  }
`;

export default Wrapper;
