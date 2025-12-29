import styled from "styled-components";

const Box = styled.div`
  background-color: #1B211A;
  color: white;
  border-radius: 10px;
  padding: 16px;

  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.25),
    0 10px 20px rgba(0, 0, 0, 0.35);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 8px 12px rgba(0, 0, 0, 0.3),
      0 16px 32px rgba(0, 0, 0, 0.4);
  }
`;


export default Box;
