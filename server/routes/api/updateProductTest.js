const SQLite = require('db');

module.exports = async (router, productID, original, newSales) => {
    router.get('/update-product-test', (ctx, next) => {
        ctx.status = 200;
        const sqlite = new SQLite();
        if (original){
            try {
                sqlite.updateOriginalProductSales(newSales, productID);
            } catch (error) {
                throw error;
            }
        } else {
            try {
                sqlite.updateTestProductSales(newSales, productID);
            } catch (error) {
                throw error;
            }
        }
    });
};
