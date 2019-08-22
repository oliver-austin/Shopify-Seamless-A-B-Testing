class Product {
    constructor(productID, shopID, originalTitle, originalImage, originalDescription, originalDailySalesAverage,
                originalDaysListed, originalTotalSales, testTitle, testImage, testDescription, testDailySalesAverage,
                testDaysListed, testTotalSales) {
        this._productID = productID;
        this._shopID = shopID;
        this._originalTitle = originalTitle;
        this._originalImage = originalImage;
        this._originalDescription = originalDescription;
        this._originalDailySalesAverage = originalDailySalesAverage;
        this._originalDaysListed = originalDaysListed;
        this._originalTotalSales = originalTotalSales;
        this._testTitle = testTitle;
        this._testImage = testImage;
        this._testDescription = testDescription;
        this._testDailySalesAverage = testDailySalesAverage;
        this._testDaysListed = testDaysListed;
        this._testTotalSales = testTotalSales;
    }

    get productID() {
        return this._productID;
    }

    set productID(value) {
        this._productID = value;
    }

    get shopID() {
        return this._shopID;
    }

    set shopID(value) {
        this._shopID = value;
    }

    get originalTitle() {
        return this._originalTitle;
    }

    set originalTitle(value) {
        this._originalTitle = value;
    }

    get originalImage() {
        return this._originalImage;
    }

    set originalImage(value) {
        this._originalImage = value;
    }

    get originalDescription() {
        return this._originalDescription;
    }

    set originalDescription(value) {
        this._originalDescription = value;
    }

    get originalDailySalesAverage() {
        return this._originalDailySalesAverage;
    }

    set originalDailySalesAverage(value) {
        this._originalDailySalesAverage = value;
    }

    get originalDaysListed() {
        return this._originalDaysListed;
    }

    set originalDaysListed(value) {
        this._originalDaysListed = value;
    }

    get originalTotalSales() {
        return this._originalTotalSales;
    }

    set originalTotalSales(value) {
        this._originalTotalSales = value;
    }

    get testTitle() {
        return this._testTitle;
    }

    set testTitle(value) {
        this._testTitle = value;
    }

    get testImage() {
        return this._testImage;
    }

    set testImage(value) {
        this._testImage = value;
    }

    get testDescription() {
        return this._testDescription;
    }

    set testDescription(value) {
        this._testDescription = value;
    }

    get testDailySalesAverage() {
        return this._testDailySalesAverage;
    }

    set testDailySalesAverage(value) {
        this._testDailySalesAverage = value;
    }

    get testDaysListed() {
        return this._testDaysListed;
    }

    set testDaysListed(value) {
        this._testDaysListed = value;
    }

    get testTotalSales() {
        return this._testTotalSales;
    }

    set testTotalSales(value) {
        this._testTotalSales = value;
    }
}
module.exports = Product;