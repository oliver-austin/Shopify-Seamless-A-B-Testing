const SQLite = require("./sqlite");

var DB = new SQLite();
var productObject = {
    productID: "1",
    shopID: "1",
    originalTitle: "original title",
    originalProductImage: "./1200px-SNice.svg.png",
    originalProductDescription: "original description",
    originalProductDailySalesAverage: 2.50,
    originalProductDaysListed: 10,
    originalProductTotalSales: 25,
    testTitle: "test title",
    testProductImage: "./1200px-SNice.svg.png",
    testDescription: "test description",
    testProductDailySalesAverage: 3,
    testProductDaysListed: 10,
    testProductTotalSales: 30,
};

var variantObject = {
    variantID: "1",
    productID: "1",
    shopID: "1",
    originalDisplayName: "original title",
    originalVariantImage: "./1200px-SNice.svg.png",
    originalPrice: 20,
    originalDiscount: 15,
    originalVariantDailySalesAverage: 2.50,
    originalVariantDaysListed: 10,
    originalVariantTotalSales: 25,
    testDisplayName: "test title",
    testVariantImage: "./1200px-SNice.svg.png",
    testPrice: 18,
    testDiscount: 14,
    testVariantDailySalesAverage: 3,
    testVariantDaysListed: 10,
    testVariantTotalSales: 30,
};
