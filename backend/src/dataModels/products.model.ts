class ProductsSchema{
    id:string
    name:string
    price:number
    inStock:number

    constructor(){
        this.id=''
        this.name=''
        this.price=0
        this.inStock=0
    }

    public setName(name:string){
        this.name=name
    }
    public setPrice(price:number){
        this.price = price
    }
    public setInstock(stock:number){
        this.inStock = stock
    }
}

export default ProductsSchema