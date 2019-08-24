//Fetch all active product tests by shopID (getProductTestsByShop)
//For each row (test)
    //Check flag to see which version is being displayed
    //Make call to Shopify Sales API to check how many sales were made yesterday
    //Write to DB by product ID (updateProductTest)
        //Invert flag
        //Update sales fields
    //Make call to Shopify Product API to mutate product to other version

//Fetch all active variant tests by shopID
//For each row (test)
    //Check flag to see which version is being displayed
    //Make call to Shopify Sales API to check how many sales were made yesterday
    //Write to DB by variant ID
        //Invert flag
        //Update sales fields
//Make call to Shopify Product API to mutate product to other version
const SQLite = require('db');
const testDailyTasks = async (shopID) => {

    try {
        const db = await SQLite.open();
        const productTests = await SQLite.selectProductsByShopID(db, shopID);
    if(productTests.length > 0){
        for (let i = 0; i < productTests.length; i++) {
            //TODO: call shopify api here to retrieve sales count
            const newSales = 0;

            if (productTests[i].ORIGINAL_FLAG) {
                try {
                    SQLite.updateOriginalProductSales(db, newSales, productTests[i].PRODUCT_ID,
                        productTests[i].ORIGINAL_DAYS_LISTED, productTests[i].ORIGINAL_TOTAL_SALES);
                } catch (error) {
                    throw error;
                }
            } else {
                try {
                    SQLite.updateTestProductSales(db, newSales, productTests[i].PRODUCT_ID,
                        productTests[i].TEST_DAYS_LISTED, productTests[i].TEST_TOTAL_SALES);
                } catch (error) {
                    throw error;
                }
            }
            SQLite.updateProductFlag(db, productTests[i].PRODUCT_ID, productTests[i].ORIGINAL_FLAG);

            //TODO: call shopify api here to mutate product to other version
        }
    }

        const variantTests = await SQLite.selectVariantsByShopID(db, shopID);
    if (variantTests.length > 0) {
        for (let i = 0; i < productTests.length; i++) {
            //TODO: call shopify api here to retrieve sales count
            const newSales = 0;

            if (variantTests[i].ORIGINAL_FLAG) {
                try {
                    SQLite.updateOriginalVariantSales(db, newSales, variantTests[i].VARIANT_ID,
                        variantTests[i].ORIGINAL_DAYS_LISTED, variantTests[i].ORIGINAL_TOTAL_SALES);
                } catch (error) {
                    throw error;
                }
            } else {
                try {
                    SQLite.updateTestVariantSales(db, newSales, variantTests[i].VARIANT_ID,
                        variantTests[i].TEST_DAYS_LISTED, variantTests[i].TEST_TOTAL_SALES);
                } catch (error) {
                    throw error;
                }
            }
            SQLite.updateVariantFlag(db, variantTests[i].VARIANT_ID, variantTests[i].ORIGINAL_FLAG);
            //TODO: call shopify api here to mutate product to other version
        }
    }
    } catch (error) {
        throw error;
    }
};

module.exports.testDailyTasks = testDailyTasks;