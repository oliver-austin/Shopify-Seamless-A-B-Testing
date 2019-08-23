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

    const productTests = await helpers.getProductTestsByShop(shopID);
    console.log("GETTING ALL PRODUCT TESTS: ", productTests);

    for (let productTest in productTests) {
        console.log("TASKS FOR PRODUCT: ", productTest);
        //TODO: call shopify api here to retrieve sales count
        const newSales = 0;
        await helpers.updateProductTest(productTest.productID, productTest.flag, newSales);
        //TODO: call shopify api here to mutate product to other version
    }
};

module.exports.testDailyTasks = testDailyTasks;