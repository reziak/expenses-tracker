import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  TransactionsTable,
  TransactionsContainer,
  PriceHighlighted,
} from './styles'

export const Transactions = () => {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions &&
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <PriceHighlighted variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter(transaction.price)}
                  </PriceHighlighted>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter(transaction.createdAt)}</td>
                </tr>
              ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  )
}
