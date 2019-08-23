const SQLite = require("./sqlite");
const Product = require("../data_classes/product/Product");
const Variant = require("../data_classes/variant/Variant");


var DB = new SQLite();
var product = new Product("1", "1", "test", "testImage", "testDescription", 2.5, 10, 25, "test", "test", "test", 3, 10, 30, 1);
var variant = new Variant("1", "1", "1", "test", "test", 20, 18, 1.2, 10, 12, "test", "test", 15, 13, 3, 10, 30);

test = async () => {
    let promise = DB.selectProductsByShopID("gid://shopify/Shop/24714444845");
    let result = await promise;
    return result;
};
const result = test();
setTimeout(function (result){
    console.log(result);
}, 10000);