const BodyParser = require('koa-body');
const bodyParser = BodyParser();

const Variant = require('variant');
const SQLite = require('db');

module.exports = async (router) => {
    router.post('/create-variant-test', bodyParser, (ctx, next) => {
        ctx.status = 200;
        const body = ctx.request.body;
        const variant =  new Variant(
            body._variantID,
            body._productID,
            body._shopID,
            body._originalDisplayName,
            body._originalImage,
            body._originalPrice,
            body._originalDiscount,
            body._originalDailySalesAverage,
            body._originalDaysListed,
            body._originalTotalSales,
            body._testDisplayName,
            body._testImage,
            body._testPrice,
            body._testDiscount,
            body._testDailySalesAverage,
            body._testDaysListed,
            body._testTotalSales,
            body._originalFlag
        );
        const sqlite = new SQLite();
        sqlite.insertVariants(variant);

    });
};
