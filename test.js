const ProductManager = require ('./index')

const products = new ProductManager ('products.txt')

const test = async () => {
    let getAll = await products.getAll()
    let getById = await products.getById(2)
    console.log(getById)
}

test()