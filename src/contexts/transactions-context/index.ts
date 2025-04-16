import { createContext, useContext } from 'react'

export type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type TransactionsContextType = {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const useTransactionsContext = () => useContext(TransactionsContext)
