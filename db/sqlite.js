const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const Promise = require('bluebird');
const Product = require("../data_classes/product/Product");
const Variant = require("../data_classes/variant/Variant");

class SQLite {
    static async open(){
        return sqlite.open('C:\\Users\\Oliver\\Shopify\\Seamless AB Testing\\db\\testDB', {Promise});
    }

        // test passed
        static async selectProductsByShopID(DB, shopID){
            return await DB.all(`SELECT * FROM products WHERE SHOP_ID = ?`, [shopID]);
        }

        //test passed
        static async selectVariantsByShopID(DB, shopID){
            return await DB.all(`SELECT * FROM variants WHERE SHOP_ID = ?`, [shopID]);
        }

        //test passed
        static async selectProductByProductID(DB, productID){
            return await DB.all(`SELECT * FROM products WHERE PRODUCT_ID = ?`, [productID]);
        }

        //test passed
        static async selectVariantByVariantID(DB, variantID){
            return await DB.all(`SELECT * FROM variants WHERE VARIANT_ID = ?`, [variantID]);
        }

        //test passed
        static async updateOriginalProductSales(DB, newSales, productID, originalDaysListed, originalTotalSales) {
            let newDailySalesAverage;
            const newDaysListed = originalDaysListed + 1;
            const newTotalSales = originalTotalSales + newSales;
            newDailySalesAverage = newTotalSales/newDaysListed;

            return await DB.run(`UPDATE products SET ORIGINAL_DAYS_LISTED = ?, ORIGINAL_TOTAL_SALES = ?,
                            ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`,
                [newDaysListed, newTotalSales, newDailySalesAverage, productID]);
        }

        // test passed
        static async updateTestProductSales(DB, newSales, productID, testDaysListed, testTotalSales){
            let newDailySalesAverage;
                const newDaysListed = testDaysListed + 1;
                const newTotalSales = testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;
                //TODO: invert flag column here

                return await DB.run(`UPDATE products SET TEST_DAYS_LISTED = ?, TEST_TOTAL_SALES = ?,
                            TEST_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`,
                    [newDaysListed, newTotalSales, newDailySalesAverage, productID]);
        }

        //test passed
        static async updateOriginalVariantSales(DB, newSales, variantID, originalDaysListed, originalTotalSales){
            let newDailySalesAverage;
                const newDaysListed = originalDaysListed + 1;
                const newTotalSales = originalTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;
                //TODO: invert flag column here
                return await DB.run(`UPDATE variants SET ORIGINAL_DAYS_LISTED = ?, ORIGINAL_TOTAL_SALES = ?,
                            ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDaysListed, newTotalSales, newDailySalesAverage, variantID]);
        }

        // test passed
        static async updateTestVariantSales(DB, newSales, variantID, testDaysListed, testTotalSales){
            let newDailySalesAverage;
                const newDaysListed = testDaysListed + 1;
                const newTotalSales = testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;
                return await DB.run(`UPDATE variants SET TEST_DAYS_LISTED = ?, TEST_TOTAL_SALES = ?,
                            TEST_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDaysListed, newTotalSales, newDailySalesAverage, variantID]);
        }

        static async updateProductFlag(DB, productID, flag){
            if(flag){flag = 0;}
            else{flag = 1;}
            return await DB.run(`UPDATE products SET ORIGINAL_FLAG = ? WHERE PRODUCT_ID = ?`, [(flag), productID]);
        }

        static async updateVariantFlag(DB, variantID, flag){
            if(flag){flag = 0;}
            else{flag = 1;}
            return await DB.run(`UPDATE variants SET ORIGINAL_FLAG = ? WHERE VARIANT_ID = ?`, [(flag), variantID]);
        }

        //test passed
          static async insertProducts(DB, obj) {
              if(!(obj instanceof Product)){
                  return console.error("ERROR: Passed object is not a Product instance");
              }
              else{
                  return await DB.run(`INSERT INTO products (PRODUCT_ID, SHOP_ID, ORIGINAL_TITLE, ORIGINAL_IMAGE, ORIGINAL_DESCRIPTION,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_TITLE, TEST_IMAGE,
                        TEST_DESCRIPTION, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES, ORIGINAL_FLAG)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.productID, obj.shopID, obj.originalTitle,
                          obj.originalImage, obj.originalDescription, obj.originalDailySalesAverage,
                          obj.originalDaysListed, obj.originalTotalSales, obj.testTitle, obj.testImage,
                          obj.testDescription, obj.testDailySalesAverage, obj.testDaysListed, obj.testTotalSales, obj.originalFlag]);
              }
          }

    //test passed
    static async insertVariants(DB, obj) {
        if(!(obj instanceof Variant)){
            return console.error("ERROR: Passed object is not a Variant instance");
        }
        else{
            return await DB.run(`INSERT INTO variants (VARIANT_ID, PRODUCT_ID, SHOP_ID, ORIGINAL_DISPLAY_NAME, ORIGINAL_IMAGE, ORIGINAL_PRICE, ORIGINAL_DISCOUNT,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_DISPLAY_NAME, TEST_IMAGE,
                        TEST_PRICE, TEST_DISCOUNT, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES, ORIGINAL_FLAG)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.variantID, obj.productID, obj.shopID, obj.originalDisplayName,
                    obj.originalImage, obj.originalPrice, obj.originalDiscount, obj.originalDailySalesAverage,
                    obj.originalDaysListed, obj.originalTotalSales, obj.testDisplayName, obj.testImage,
                    obj.testPrice, obj.testDiscount, obj.testDailySalesAverage, obj.testDaysListed, obj.testTotalSales, obj.originalFlag]);
        }
    }

}
 module.exports = SQLite;
