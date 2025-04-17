import {
  createContext,
  useContext,
  useContextSelector,
} from 'use-context-selector'

export type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type CreateTransactionInput = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

type TransactionsContextType = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const useTransactionsContext = () => useContext(TransactionsContext)

type TransactionsContextSelector<Selected> = (
  context: TransactionsContextType,
) => Selected

export const useTransactionsContextSelector = <Selected>(
  selector: TransactionsContextSelector<Selected>,
) => useContextSelector(TransactionsContext, selector)
