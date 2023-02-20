class ProductManager {
    
    constructor() {
        this.products=[]
    }
    getProducts = () => {
        return this.products;
    }
    addProduct = (title, description, price, thumbnail, stock ) => {
        const product = {
            id : this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            stock,
        }
        this.products.push(product)

    }
    searchProductById = (valorId) => {
        const product = this.products.find((product) => product.id === valorId)
        if (product){
            return product
        } else {
            console.error ("product does not exist")
            return null
        }
        
    } 
}
const productManager = new ProductManager ()


productManager.addProduct("sandia", "verde", 500, "https", 50)
productManager.addProduct("banana", "verde", 300, "https", 60)
console.log (productManager.searchProductById(2))
console.log(productManager.getProducts())
