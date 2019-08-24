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
const helpers = require('./modules/testDailyTasksHelpers.js');
const SQLite = require('db');
const testDailyTasks = async (shopID) => {

    //let productTestsPromise = helpers.getProductTestsByShop(shopID);

    const sqlite = new SQLite();
    console.log("getProductTestsByShop Called, shopID: ", shopID);
    try{
        let productTestsPromise = await sqlite.selectProductsByShopID(shopID);
        console.log(productTestsPromise);
        callback(productTestsPromise);
    } catch (error) {
        throw error;
    }

    //let productTests = await productTestsPromise;
    //console.log("GETTING ALL PRODUCT TESTS: ", productTests);
    //callback(productTests)

};

callback = async (productTests) => {
    const sqlite = new SQLite();
    for (let i = 0; i < productTests.length; i++) {
        console.log("TASKS FOR PRODUCT: ", productTests[i]);
        //TODO: call shopify api here to retrieve sales count
        const newSales = 0;
        //await helpers.updateProductTest(productTests[i].PRODUCT_ID, productTests[i].ORIGINAL_FLAG, newSales);

        if (productTests[i].ORIGINAL_FLAG){
            try {
                sqlite.updateOriginalProductSales(newSales, productTests[i].PRODUCT_ID, productTests[i].ORIGINAL_DAYS_LISTED, productTests[i].ORIGINAL_TOTAL_SALES);
                //console.log("updateOriginalProductSales: ", newSales, productID, original);
            } catch (error) {
                throw error;
            }
        } else {
            try {
                sqlite.updateTestProductSales(newSales, productTests[i].PRODUCT_ID, productTests[i].TEST_DAYS_LISTED, productTests[i].TEST_TOTAL_SALES);
                //console.log("updateTestProductSales: ", newSales, productID, original);
            } catch (error) {
                throw error;
            }
        }
        sqlite.updateProductFlag(productTests[i].PRODUCT_ID, productTests[i].ORIGINAL_FLAG);

        //TODO: call shopify api here to mutate product to other version
    }
};

module.exports.testDailyTasks = testDailyTasks;