import ProductsSchema from '../dataModels/products.model'
import OrdersSchema from '../dataModels/orders.model'
export class DataStore {
  products: ProductsSchema[]
  orders: OrdersSchema[]
  constructor() {
    this.products = []
    this.orders = []
  }
  public saveProduct(product: ProductsSchema): number {
    return this.products.push(product)
  }
  public getProducts(start: number, count: number): ProductsSchema[] {
    return this.products.slice(start, start + count)
  }
  public getProductById(id: string): ProductsSchema | undefined {
    return this.products.find(product => product.id === id)
  }
  public updateProductById(id: string, product: ProductsSchema): ProductsSchema {
    let index = this.products.indexOf(this.products.find(product => product.id === id) as ProductsSchema)
    return this.products[index] = product
  }
  public deleteProductById(id: string): ProductsSchema[] {
    let index = this.products.indexOf(this.products.find(product => product.id === id) as ProductsSchema)
    return this.products.splice(index, 1)
  }
  public getProductsListLength():number{
    return this.products.length
  }

  public saveOrder(order: OrdersSchema): number {
    return this.orders.push(order)
  }
  public getOrders(start: number, count: number): OrdersSchema[] {
    return this.orders.slice(start, start + count)
  }
  public getOrderById(id: string): OrdersSchema | undefined {
    return this.orders.find(order => order.id === id)
  }
  public updateOrderById(id: string, order: OrdersSchema): OrdersSchema {
    let index = this.orders.indexOf(this.orders.find(order => order.id === id) as OrdersSchema)
    return this.orders[index] = order
  }
  public deleteOrderById(id: string): OrdersSchema[] {
    let index = this.orders.indexOf(this.orders.find(order => order.id === id) as OrdersSchema)
    return this.orders.splice(index, 1)
  }
  public getOrdersListLength():number{
    return this.orders.length
  }

}

export default new DataStore()