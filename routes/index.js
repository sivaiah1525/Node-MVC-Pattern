const productRouter = require('./products');

module.exports = function (app) {
    app.use('/api/products', productRouter)
    
}