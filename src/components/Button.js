import styled from "styled-components";
export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgba(255, 255, 255, 0.4);
  color: #f3f8f9;
  padding: 10px 30px;
  font-weight: 600;
  border: 1px rgba(255, 255, 255, 30%) solid;
  margin: 20px;
  margin-top: 40px;
  text-transorm: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 24px;

  &:hover,
  &:active {
    transform: scale(1.06);
  }
`;
