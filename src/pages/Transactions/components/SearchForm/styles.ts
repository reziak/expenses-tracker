import styled from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme.colors['gray-900']};
    color: ${(props) => props.theme.colors['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors['green-300']};
    color: ${(props) => props.theme.colors['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors['green-500']};
      border-color: ${(props) => props.theme.colors['green-500']};
      color: ${(props) => props.theme.colors.white};
    }
  }
`