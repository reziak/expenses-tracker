import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.25rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme.colors['gray-700']};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightedProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlighted = styled.td<PriceHighlightedProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme.colors['green-300']
      : props.theme.colors['red-300']};
`
