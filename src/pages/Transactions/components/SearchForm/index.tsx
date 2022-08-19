import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'

import { TransactionContext } from '../../../../contexts/TransactionsContext'

import { SearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({ resolver: zodResolver(searchFormSchema) })

  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await fetchTransactions(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        <span>Buscar</span>
      </button>
    </SearchContainer>
  )
}
