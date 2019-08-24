const SQLite = require('db');

getProductTestsByShop = async (shopID) => {
        const sqlite = new SQLite();
        console.log("getProductTestsByShop Called, shopID: ", shopID);
        try{
            let products = await sqlite.selectProductsByShopID(shopID);
            console.log(products);
            return callback(products);
        } catch (error) {
            throw error;
        }
};

callback = (value) => {
  return(value);
};

getVariantTestsByShop = async (shopID) => {
        const sqlite = new SQLite();
        try {
            return sqlite.selectVariantsByShopID(shopID);
            console.log("getVariantTestsByShop: ", shopID);
        } catch (error) {
            throw error;
        }
};

updateProductTest = async (productID, original, newSales) => {
        const sqlite = new SQLite();
        if (original){
            try {
                sqlite.updateOriginalProductSales(newSales, productID);
                console.log("updateOriginalProductSales: ", newSales, productID, original);
            } catch (error) {
                throw error;
            }
        } else {
            try {
                sqlite.updateTestProductSales(newSales, productID);
                console.log("updateTestProductSales: ", newSales, productID, original);
            } catch (error) {
                throw error;
            }
        }
        sqlite.updateProductFlag(productID, original);
};

updateVariantTest = async (variantID, original, newSales) => {
        const sqlite = new SQLite();
        if (original){
            try {
                sqlite.updateOriginalVariantSales(newSales, variantID);
                console.log("updateOriginalVariantSales: ", newSales, variantID, original);
            } catch (error) {
                throw error;
            }
        } else {
            try {
                sqlite.updateTestVariantSales(newSales, variantID);
                console.log("updateTestVariantSales: ", newSales, variantID, original);
            } catch (error) {
                throw error;
            }
        }
        sqlite.updateVariantFlag(variantID, original);
};

module.exports = {
    getProductTestsByShop: getProductTestsByShop,
    getVariantTestsByShop: getVariantTestsByShop,
    updateProductTest: updateProductTest,
    updateVariantTest: updateVariantTest
};