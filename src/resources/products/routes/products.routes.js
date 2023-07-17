import {Router} from 'express'
import { createProduct, deleteById, getProducts, getProductsById, updateProductbyId } from '../controllers/products.controller.js'

const productsRouter = Router ()
const baseURI = '/products'

productsRouter.post(baseURI, createProduct)
productsRouter.get(baseURI, getProducts)
productsRouter.post(`${baseURI}/:id`, getProductsById)
productsRouter.put(`${baseURI}/:id`, updateProductbyId)
productsRouter.patch(`${baseURI}/:id`)
productsRouter.delete(`${baseURI}/:id`, deleteById)

export default productsRouter