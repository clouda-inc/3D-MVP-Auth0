class OrdersSchema{
    id:string
    customerId:string
    date:Date
    products:
        {
            productId:string
            quntity:number
        }[]
    totalPrice:number
    isShiped:boolean

    constructor(){
        this.id = ''
        this.customerId=''
        this.date = new Date()
        this.products = []
        this.totalPrice = 0
        this.isShiped = false
    }

    public setCustomer(customerId:string){
        this.customerId = customerId
    }
    public addProduct(product:{productId:string,quntity:number}){
        this.products.push({...product})
    }
    public setTotalPrice(price:number){
        this.totalPrice = price
    }
    public setShipedStatus(isShiped:boolean){
        this.isShiped = isShiped
    }
}

export default OrdersSchema