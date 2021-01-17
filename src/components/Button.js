import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.25rem;
  width: 176px;
  height: 40px;
  // background: transparent;
  background: ${props => props.cart? 'var(--mainGreen)' : 'transparent'};
  border: 2px solid var(--mainGreen);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  // border: none;
  // color: var(--mainWhite);
  color: ${props => props.general? 'var(--mainGreen)': 'var(--mainWhite)'};
  transition: all 0.3s linear;
  &:hover {
    // color:var(--lightGreen);
    color: ${props => props.general? 'var(--mainWhite)': 'var(--lightGreen)'};
    background: ${props => props.general? 'var(--mainGreen)': 'transparent'};
  }
  &:focus {
    outline: none;
  }
`