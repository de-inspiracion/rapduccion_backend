module.exports = class ProductsService {

    constructor(ProductRepositoty) {
        this.repository = new ProductRepositoty()
    }

    saveProduct() {
        return this.repository.save()
    }


}
