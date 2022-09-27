import express, { Router } from 'express'
import {Orders,Products} from '../controllers/controller.js'
import {claimIncludes} from 'express-oauth2-jwt-bearer'
const router:Router = express.Router()


let ordersContoller = new Orders()
let productsController = new Products()


router.get('/orders',claimIncludes('scope', 'read:orders', 'read:own-orders'),ordersContoller.getOrdersList)
router.get('/orders/:id',claimIncludes('scope', 'read:orders', 'read:own-orders'),ordersContoller.getOrderById)
router.post('/orders',claimIncludes('scope', 'create:orders'),ordersContoller.createOrder)
router.patch('/orders',claimIncludes('scope', 'update:own-orders','update:orders'),ordersContoller.updateOrderById)
router.delete('/orders/:id',claimIncludes('scope', 'delete:orders','delete:own-orders'),ordersContoller.deleteOrderById)

router.get('/products',claimIncludes('scope','read:products', 'read:own-products'),productsController.getProductsList)
router.get('/products/:id',claimIncludes('scope', 'read:products', 'read:own-products'),productsController.getProductById)
router.post('/products',claimIncludes('scope', 'create:products'),productsController.createProduct)
router.patch('/products',claimIncludes('scope', 'update:products','update:own-products'),productsController.updateProduct)
router.delete('/products/:id',claimIncludes('scope', 'delete:products'),productsController.deleteProduct)

export default router
