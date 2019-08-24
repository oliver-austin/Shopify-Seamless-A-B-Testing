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

const testDailyTasks = async (shopID) => {

    let productTestsPromise = helpers.getProductTestsByShop(shopID);
    let productTests = await productTestsPromise;
    console.log("GETTING ALL PRODUCT TESTS: ", productTests);
    callback(productTests)

};

callback = async (productTests) => {
    for (let i = 0; i < productTests.length; i++) {
        console.log("TASKS FOR PRODUCT: ", productTests[i]);
        //TODO: call shopify api here to retrieve sales count
        const newSales = 0;
        await helpers.updateProductTest(productTest[i].productID, productTest[i].flag, newSales);
        //TODO: call shopify api here to mutate product to other version
    }
};

module.exports.testDailyTasks = testDailyTasks;