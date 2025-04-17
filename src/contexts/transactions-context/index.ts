import { createContext, useContext } from 'react'

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
