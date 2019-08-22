const SQLite = require('db');

module.exports = async (router, shopID) => {
    router.get('/get-product-tests-by-shop', (ctx, next) => {
        ctx.status = 200;
        const sqlite = new SQLite();
        try{
            ctx.body = sqlite.selectProductsByShopID(shopID);
        } catch (error) {
            throw error;
        }
    });
};
