import { v4 as generateUUID} from 'uuid'
const products = []

export const createProduct = (req, res) => {
const body = req.body
body["id"] = generateUUID()
products.push(body)
const productCreated = products.finds(product => product.id == id)
return res.json(productCreated)
}