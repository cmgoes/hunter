import React from 'react'
import { PassiveIncomeCard } from './PassiveIncomeCard'
import { Pagination } from '../../Shared'
import {
  Container
} from './styles'

export const PassiveIncome = () => {
  return (
    <Container>
      {[...Array(5).keys()].map(index => (
        <PassiveIncomeCard key={index} />
      ))}
      <Pagination
        currentPage={1}
        totalPages={5}
        handleChangePage={() => console.log()}
      />
    </Container>
  )
}
