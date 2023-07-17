import { v4 as generateUUID} from 'uuid'
const products = []

export const createProduct = (req, res) => {
const body = req.body
body["id"] = generateUUID()
products.push(body)
const productCreated = products.finds(product => product.id == id)
return res.status(201).json(productCreated)
}

export const getProducts = (req, res) => {
    return res.status(200).json ( products)
}
export const updateProductbyId = (req, res) => {
    const productIndex = products.findIndex (products => product.id == id )
    products = [productIndex ] = body
    return res.status(200).json ( products[productIndex])
}

export const deleteById = (req, res) => {
    const id = req.params.id
}

export const getProductsById = (req, res) => {
    const id = req.params.id
    const body = req.body
    const productFound = products.find( product => product.id == id)
    if (!productFound)
    return res.status (404.).json( {status: "error", msg: "producto no encontrado"})
    const productIndex = products.findIndex= (product => product.id ==id ) 
    const productRemoved = products.splice(productIndex, 1) 
    return res.status(200).json ( productsRemoved[0])
    
}