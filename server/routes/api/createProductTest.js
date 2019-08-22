const fetch = require('node-fetch');
const BodyParser = require('koa-body');
const bodyParser = BodyParser();
const Product = require('product');
const SQLite = require('db');

    module.exports = async (router) => {
        router.post('/create-product-test', bodyParser, (ctx, next) => {
            ctx.status = 200;
            const body = ctx.request.body;
            const product =  new Product(
                body._productID,
                body._shopID,
                body._originalTitle,
                body._originalImage,
                body._originalDescription,
                body._originalDailySalesAverage,
                body._originalDaysListed,
                body._originalTotalSales,
                body._testTitle,
                body._testImage,
                body._testDescription,
                body._testDailySalesAverage,
                body._testDaysListed,
                body._testTotalSales
            );

            const sqlite = new SQLite();
            sqlite.insertProducts(product);

        });
    };

/*{"_productID":"gid://shopify/Product/3935275417645",
"_shopID":"gid://shopify/Shop/24714444845",
"_originalTitle":"Blue Silk Tuxedo",
"_originalImage":"https://cdn.shopify.com/s/files/1/0247/1444/4845/products/man-adjusts-blue-tuxedo-bowtie_925x_656f2a36-34a8-4db2-9701-c01e49e9e5c0.jpg?v=1562893388",
"_originalDescription":"Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.",
"_originalDailySalesAverage":0,
"_originalDaysListed":0,
"_originalTotalSales":0,
"_testTitle":"Blue Silk Tuxedo",
"_testImage":"",
"_testDescription":"Blue silk tuxedo with marbled aquatic pattern and dark lining. Sleeves are complete with rounded hem and black buttons.",
"_testDailySalesAverage":0,
"_testDaysListed":0,
"_testTotalSales":0}
 */