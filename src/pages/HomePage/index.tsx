import React from 'react'
import FiltersCategory from './filters-category/FiltersCategory'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts/>
        <CardList/>
      </div>
    </div>
  )
}

export default HomePage