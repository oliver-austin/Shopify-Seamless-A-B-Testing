const SQLite = require('db');

module.exports = async (router, shopID) => {
    router.get('/get-variant-tests-by-shop', (ctx, next) => {
        ctx.status = 200;
        const sqlite = new SQLite();
        try {
            ctx.body = sqlite.selectVariantsByShopID(shopID);
        } catch (error) {
            throw error;
        }
    });
};
