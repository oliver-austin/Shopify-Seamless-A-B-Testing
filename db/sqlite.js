const sqlite3 = require('sqlite3').verbose();
const Product = require("../data_classes/product/Product");
const Variant = require("../data_classes/variant/Variant");

class SQLite {
    constructor() {
        // open the database
        this.db = new sqlite3.Database('C:\\Users\\Oliver\\Shopify\\Seamless AB Testing\\db\\testDB', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
            }
            else{
                console.log('Connected to the database.');
            }
        });
    }
        // test passed
        selectProductsByShopID(shopID){
            this.db.all(`SELECT * FROM products WHERE SHOP_ID = ?`, [shopID], (err, rows) => {
                if (err) {
                    throw err;
                }
                return rows;
            });
        }

        //test passed
        selectVariantsByShopID(shopID){
            this.db.all(`SELECT * FROM variants WHERE SHOP_ID = ?`, [shopID], (err, rows) => {
                if (err) {
                    throw err;
                }
                return rows
            });
        }

        //test passed
        selectProductByProductID(productID){
            this.db.all(`SELECT * FROM products WHERE PRODUCT_ID = ?`, [productID], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row);
                });
            });
        }

        //test passed
        selectVariantByVariantID(variantID){
            this.db.all(`SELECT * FROM variants WHERE VARIANT_ID = ?`, [variantID], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row);
                });
            });
        }

        //test passed
        updateOriginalProductSales(newSales, productID) {
            let newDailySalesAverage = null;
            this.db.get('SELECT ORIGINAL_DAYS_LISTED originalDaysListed, ORIGINAL_TOTAL_SALES originalTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.originalDaysListed + 1;
                const newTotalSales = row.originalTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;

                this.db.run(`UPDATE products SET ORIGINAL_DAYS_LISTED = ?, ORIGINAL_TOTAL_SALES = ?,
                            ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`,
                            [newDaysListed, newTotalSales, newDailySalesAverage, productID], (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("New sales average: ", newDailySalesAverage);

                });
            });

        }

        // test passed
        updateTestProductSales(newSales, productID){
            let newDailySalesAverage = null;
            this.db.get('SELECT TEST_DAYS_LISTED testDaysListed, TEST_TOTAL_SALES testTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.testDaysListed + 1;
                const newTotalSales = row.testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;

                this.db.run(`UPDATE products SET TEST_DAYS_LISTED = ?, TEST_TOTAL_SALES = ?,
                            TEST_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`,
                    [newDaysListed, newTotalSales, newDailySalesAverage, productID], (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log("New sales average: ", newDailySalesAverage);

                    });
            });
        }

        //test passed
        updateOriginalVariantSales(newSales, variantID){
            let newDailySalesAverage = null;
            this.db.get('SELECT ORIGINAL_DAYS_LISTED originalDaysListed, ORIGINAL_TOTAL_SALES originalTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.originalDaysListed + 1;
                const newTotalSales = row.originalTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;
                this.db.run(`UPDATE variants SET ORIGINAL_DAYS_LISTED = ?, ORIGINAL_TOTAL_SALES = ?,
                            ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDaysListed, newTotalSales, newDailySalesAverage, variantID], (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("New sales average: ", newDailySalesAverage);
                });
            });
        }

        // test passed
        updateTestVariantSales(newSales, variantID){
            let newDailySalesAverage = null;
            this.db.get('SELECT TEST_DAYS_LISTED testDaysListed, TEST_TOTAL_SALES testTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.testDaysListed + 1;
                const newTotalSales = row.testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed;
                this.db.run(`UPDATE variants SET TEST_DAYS_LISTED = ?, TEST_TOTAL_SALES = ?,
                            TEST_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDaysListed, newTotalSales, newDailySalesAverage, variantID], (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("New sales average: ", newDailySalesAverage);
                });
            });
        }

        //test passed
          insertProducts(obj) {
              if(!(obj instanceof Product)){
                  return console.error("ERROR: Passed object is not a Product instance");
              }
              else{
                  this.db.run(`INSERT INTO products (PRODUCT_ID, SHOP_ID, ORIGINAL_TITLE, ORIGINAL_IMAGE, ORIGINAL_DESCRIPTION,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_TITLE, TEST_IMAGE,
                        TEST_DESCRIPTION, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.productID, obj.shopID, obj.originalTitle,
                          obj.originalImage, obj.originalDescription, obj.originalDailySalesAverage,
                          obj.originalDaysListed, obj.originalTotalSales, obj.testTitle, obj.testImage,
                          obj.testDescription, obj.testDailySalesAverage, obj.testDaysListed, obj.testTotalSales],
                      function (err) {
                          if (err) {
                              return console.log(err.message);
                          }
                          // get the last insert id
                          console.log(`A row has been inserted`);
                      });
                  this.db.close();
              }
          }

    //test passed
    insertVariants(obj) {
        if(!(obj instanceof Variant)){
            return console.error("ERROR: Passed object is not a Variant instance");
        }
        else{
            this.db.run(`INSERT INTO variants (VARIANT_ID, PRODUCT_ID, SHOP_ID, ORIGINAL_DISPLAY_NAME, ORIGINAL_IMAGE, ORIGINAL_PRICE, ORIGINAL_DISCOUNT,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_DISPLAY_NAME, TEST_IMAGE,
                        TEST_PRICE, TEST_DISCOUNT, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.variantID, obj.productID, obj.shopID, obj.originalDisplayName,
                    obj.originalImage, obj.originalPrice, obj.originalDiscount, obj.originalDailySalesAverage,
                    obj.originalDaysListed, obj.originalTotalSales, obj.testDisplayName, obj.testImage,
                    obj.testPrice, obj.testDiscount, obj.testDailySalesAverage, obj.testDaysListed, obj.testTotalSales],
                function (err) {
                    if (err) {
                        return console.log(err.message);
                    }
                    // get the last insert id
                    console.log(`A row has been inserted`);
                });
            this.db.close();
        }
    }

    //TODO: update flag field
 }
 module.exports = SQLite;
