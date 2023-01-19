import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategories } from '../../store/slices/categories/categoriesSlice'
import { fetchProducts } from '../../store/slices/product/productAPI'
import { selectProduct } from '../../store/slices/product/productSlice'
import { selecSearchtWord } from '../../store/slices/searchWord/searchWordSlice'
import Categories from '../Categories/Categories'
import ProductsItem from '../ProductsItem/ProductsItem'
import ClipLoader from "react-spinners/ClipLoader";

import "./Products.css"
import Pages from '../Pages/Pages'
import BestFilms from '../BestFilms/BestFilms'


const override = {
  display: "block",
  margin: "300px auto",
}

export const Products = () => {

  const [loading, setLoading] = useState(false)

  const products = useSelector(selectProduct)
  const dispatch = useDispatch()
  const searchWord = useSelector(selecSearchtWord)
  const categories = useSelector(selectCategories)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 700);

    if (!products.length) {
      dispatch(fetchProducts())
    }
  }, [])


  const filter = useMemo(() => {
    const haveCategory = categories.some(el => el.active)

    const initialProducts = products.filter(product => product?.name?.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1)

    if (haveCategory) {
      return initialProducts.filter(product => categories.find(category =>
        category.title === product?.genres.map(el => el.name_ru)[0])
        ?.active)
    }
    return initialProducts
  }, [products, categories, searchWord])

  return (
    <>
      {
        loading ?
          <ClipLoader
            color={"#36d7b7"}
            loading={loading}
            size={100}
            cssOverride={override}
            aria-label="Fade Loader"
            data-testid="Fade Loader"
          /> :
          <>
            <BestFilms />
            <Categories />
            <div className='products'>
              {
                filter.length ?
                  <>
                    {
                      filter.map(product => <ProductsItem key={product.id} {...product} />)
                    }
                  </>
                  :
                  <h1 style={{ margin: '10px auto', color: 'white' }}><i style={{ borderBottom: '1px solid black', color: 'red' }}>{searchWord}</i> - not found</h1>
              }
            </div>

            <Pages />
          </>

      }

    </>
  )
}
