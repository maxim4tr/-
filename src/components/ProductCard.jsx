import React from 'react'
import classes from './ProductCard.module.css'

const ProductCard = ({title, category, desc,image, prise, count}) => {
  return (<div className={classes.card}>
            <div>{title}</div>
            <img src={image} alt="#" />
            <div>{desc}</div>
            <div>Цена: {prise}</div>
            <div>В наличии: {count}</div>
  </div>
  )
}

export default ProductCard