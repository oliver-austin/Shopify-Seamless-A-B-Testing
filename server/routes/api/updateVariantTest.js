const SQLite = require('db');

module.exports = async (router, variantID, original, newSales) => {
    router.get('/update-variant-test', (ctx, next) => {
        ctx.status = 200;
        const sqlite = new SQLite();
        if (original){
            try {
                sqlite.updateOriginalVariantSales(newSales, variantID);
            } catch (error) {
                throw error;
            }
        } else {
            try {
                sqlite.updateTestVariantSales(newSales, variantID);
            } catch (error) {
                throw error;
            }
        }
    });
};
