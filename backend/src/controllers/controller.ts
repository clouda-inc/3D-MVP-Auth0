import { Request, Response } from 'express'
import OrdersSchema from '../dataModels/orders.model.js'
import ds, { DataStore } from '../dataStore/dataStore.js'
class Orders {
  private ds:DataStore = ds
  public getOrdersList = (req: Request, resp: Response) => {
    let orderLs = this.ds.getOrders(0, this.ds.getOrdersListLength())
    resp.status(200).json(orderLs)
  }

  public getOrderById = (req: Request, resp: Response) => {
    let order = this.ds.getOrderById(req.params.id)
    resp.status(200).json(order)
  }
  public createOrder = (req: Request, resp: Response) => {
    let order = new OrdersSchema()
    order.setCustomer(req.body.customerId)
    order.setShipedStatus(false)
    order.setTotalPrice(req.body.totalPrice)
    order.addProduct({ productId: req.body.productId, quntity: req.body.quntity })
    this.ds.saveOrder(order)
    resp.status(200).json({ status: 'success' })
  }
  public updateOrderById = (req: Request, resp: Response) => {
    let order = new OrdersSchema()
    order.id = req.params.id
    order.setCustomer(req.body.customerId)
    order.setTotalPrice(req.body.totalPrice)
    this.ds.updateOrderById(req.params.id, order)
    resp.status(200).json({ status: 'success' })
  }
  public deleteOrderById = (req: Request, resp: Response) => {
    this.ds.deleteOrderById(req.params.id)
    resp.status(200).json({ status: 'success' })
  }
}

class Products {
  private ds:DataStore = ds
  public getProductsList = (req: Request, resp: Response) => {
    let productLs = this.ds.getProducts(0, this.ds.getProductsListLength())
    resp.status(200).json(productLs)
  }
  public getProductById = (req: Request, resp: Response) => {

  }
  public createProduct = (req: Request, resp: Response) => {

  }
  public updateProduct = (req: Request, resp: Response) => {

  }
  public deleteProduct = () => {

  }
}

export { Orders, Products }
