const sqlite3 = require('sqlite3').verbose();

class sqlite {
    constructor() {
        // open the database
        this.db = new sqlite3.Database('./testDB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the chinook database.');
        });
    }

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

        selectVariantByVariantID(variantID){
            this.db.all(`SELECT * FROM products WHERE VARIANT_ID = ?`, [variantID], (err, rows) => {
                if (err) {
                    throw err;
                }
                rows.forEach((row) => {
                    console.log(row);
                });
            });
        }

        updateOriginalProductSales(newSales, productID) {
            let newDailySalesAverage = null;
            this.db.run('SELECT ORIGINAL_DAYS_LISTED originalDaysListed, ORIGINAL_TOTAL_SALES originalTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = originalDaysListed + 1;
                const newTotalSales = originalTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed
            });
            this.db.run(`UPDATE products SET ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`, [newDailySalesAverage, productID], (err) => {
                if (err) {
                    throw err;
                }
                console.log("New sales average: ", newDailySalesAverage);
            });
        }

        updateTestProductSales(newSales, productID){
            let newDailySalesAverage = null;
            this.db.run('SELECT TEST_DAYS_LISTED testDaysListed, TEST_TOTAL_SALES testTotalSales FROM products WHERE PRODUCT_ID = ?', [productID], (err) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = testDaysListed + 1;
                const newTotalSales = testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed
            });
            this.db.run(`UPDATE products SET TEST_DAILY_SALES_AVERAGE = ? WHERE PRODUCT_ID = ?`, [newDailySalesAverage, productID], (err) => {
                if (err) {
                    throw err;
                }
                console.log("New sales average: ", newDailySalesAverage);
            });
        }

        updateOriginalVariantSales(newSales, variantID){
            let newDailySalesAverage = null;
            this.db.run('SELECT ORIGINAL_DAYS_LISTED originalDaysListed, ORIGINAL_TOTAL_SALES originalTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = originalDaysListed + 1;
                const newTotalSales = originalTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed
            });
            this.db.run(`UPDATE variants SET ORIGINAL_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDailySalesAverage, variantID], (err) => {
                if (err) {
                    throw err;
                }
                console.log("New sales average: ", newDailySalesAverage);
            });
        }

        updateTestVariantSales(newSales, variantID){
            let newDailySalesAverage = null;
            this.db.run('SELECT Test_DAYS_LISTED testDaysListed, TEST_TOTAL_SALES testTotalSales FROM variants WHERE VARIANT_ID = ?', [variantID], (err) => {
                if (err) {
                    throw err;
                }
                const newDaysListed = testDaysListed + 1;
                const newTotalSales = testTotalSales + newSales;
                newDailySalesAverage = newTotalSales/newDaysListed
            });
            this.db.run(`UPDATE variants SET TEST_DAILY_SALES_AVERAGE = ? WHERE VARIANT_ID = ?`, [newDailySalesAverage, variantID], (err) => {
                if (err) {
                    throw err;
                }
                console.log("New sales average: ", newDailySalesAverage);
            });
        }

        insert(obj){
            this.db.run(`INSERT INTO tests (ORIGINAL_ID, ORIGINAL_TITLE, ORIGINAL_IMAGE, ORIGINAL_DESCRIPTION, ORIGINAL_PRICE, ORIGINAL_DISCOUNT, TEST_TITLE, TEST_IMAGE, TEST_DESCRIPTION, TEST_PRICE, TEST_DISCOUNT) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 'id', 'title', './1200px-SNice.svg.png', 'this is the original description', 10.99, 9.99, 'test title', './1200px-SNice.svg.png', 'test description', 9.99, 8.99, ['C'], function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                    // get the last insert id
                    console.log(`A row has been inserted`);
                }
            );
        }
 }

module.exports = sqlite;


