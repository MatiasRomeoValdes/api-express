import {Router} from 'express'
import { createProduct } from '../controllers/products.controller.js'

const productsRouter = Router ()
const baseURI = '/products'

productsRouter.post(baseURI, createProduct)
productsRouter.get(baseURI)
productsRouter.post(`${baseURI}/:id`)
productsRouter.put(`${baseURI}/:id`)
productsRouter.patch(`${baseURI}/:id`)
productsRouter.delete(`${baseURI}/:id`)

export default productsRouter