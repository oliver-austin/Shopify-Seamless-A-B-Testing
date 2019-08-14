const sqlite3 = require('sqlite3').verbose();

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
                rows.forEach((row) => {
                    console.log(row);
                });
            });
        }

        //test passed
        selectVariantsByShopID(shopID){
            this.db.all(`SELECT * FROM variants WHERE SHOP_ID = ?`, [shopID], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row);
                });
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
            this.db.get('SELECT ORIGINAL_DAYS_LISTED originalProductDaysListed, ORIGINAL_TOTAL_SALES originalProductTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.originalProductDaysListed + 1;
                const newTotalSales = row.originalProductTotalSales + newSales;
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
            this.db.get('SELECT TEST_DAYS_LISTED testProductDaysListed, TEST_TOTAL_SALES testProductTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.testProductDaysListed + 1;
                const newTotalSales = row.testProductTotalSales + newSales;
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
            this.db.get('SELECT ORIGINAL_DAYS_LISTED originalVariantDaysListed, ORIGINAL_TOTAL_SALES originalVariantTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.originalVariantDaysListed + 1;
                const newTotalSales = row.originalVariantTotalSales + newSales;
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
            this.db.get('SELECT TEST_DAYS_LISTED testVariantDaysListed, TEST_TOTAL_SALES testVariantTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err, row) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = row.testVariantDaysListed + 1;
                const newTotalSales = row.testVariantTotalSales + newSales;
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
              this.db.run(`INSERT INTO products (PRODUCT_ID, SHOP_ID, ORIGINAL_TITLE, ORIGINAL_IMAGE, ORIGINAL_DESCRIPTION,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_TITLE, TEST_IMAGE,
                        TEST_DESCRIPTION, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.productID, obj.shopID, obj.originalTitle,
                      obj.originalProductImage, obj.originalProductDescription, obj.originalProductDailySalesAverage,
                      obj.originalProductDaysListed, obj.originalTotalSales, obj.testTitle, obj.testProductImage,
                      obj.testDescription, obj.testProductDailySalesAverage, obj.testProductDaysListed, obj.testProductTotalSales],
                  function (err) {
                      if (err) {
                          return console.log(err.message);
                      }
                      // get the last insert id
                      console.log(`A row has been inserted`);
                  });
              this.db.close();
          }

    //test passed
    insertVariants(obj) {
        this.db.run(`INSERT INTO variants (VARIANT_ID, PRODUCT_ID, SHOP_ID, ORIGINAL_DISPLAY_NAME, ORIGINAL_IMAGE, ORIGINAL_PRICE, ORIGINAL_DISCOUNT,
                        ORIGINAL_DAILY_SALES_AVERAGE, ORIGINAL_DAYS_LISTED, ORIGINAL_TOTAL_SALES, TEST_DISPLAY_NAME, TEST_IMAGE,
                        TEST_PRICE, TEST_DISCOUNT, TEST_DAILY_SALES_AVERAGE, TEST_DAYS_LISTED, TEST_TOTAL_SALES)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [obj.variantID, obj.productID, obj.shopID, obj.originalDisplayName,
                obj.originalVariantImage, obj.originalPrice, obj.originalDiscount, obj.originalVariantDailySalesAverage,
                obj.originalVariantDaysListed, obj.originalVariantTotalSales, obj.testDisplayName, obj.testVariantImage,
                obj.testPrice, obj.testDiscount, obj.testVariantDailySalesAverage, obj.testVariantDaysListed, obj.testVariantTotalSales],
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
 module.exports = SQLite;
