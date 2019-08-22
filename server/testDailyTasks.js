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
