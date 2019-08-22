class Variant {
    constructor(variantID, productID, shopID, originalDisplayName, originalImage, originalPrice, originalDiscount,
                originalDailySalesAverage, originalDaysListed, originalTotalSales, testDisplayName, testImage, testPrice,
                testDiscount, testDailySalesAverage, testDaysListed, testTotalSales){
        this._variantID = variantID;
        this._productID = productID;
        this._shopID = shopID;
        this._originalDisplayName = originalDisplayName;
        this._originalImage = originalImage;
        this._originalPrice = originalPrice;
        this._originalDiscount = originalDiscount;
        this._originalDailySalesAverage = originalDailySalesAverage;
        this._originalDaysListed = originalDaysListed;
        this._originalTotalSales = originalTotalSales;
        this._testDisplayName = testDisplayName;
        this._testImage = testImage;
        this._testPrice = testPrice;
        this._testDiscount = testDiscount;
        this._testDailySalesAverage = testDailySalesAverage;
        this._testDaysListed = testDaysListed;
        this._testTotalSales = testTotalSales;
    }

    get variantID() {
        return this._variantID;
    }

    set variantID(value) {
        this._variantID = value;
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

    get originalDisplayName() {
        return this._originalDisplayName;
    }

    set originalDisplayName(value) {
        this._originalDisplayName = value;
    }

    get originalImage() {
        return this._originalImage;
    }

    set originalImage(value) {
        this._originalImage = value;
    }

    get originalPrice() {
        return this._originalPrice;
    }

    set originalPrice(value) {
        this._originalPrice = value;
    }

    get originalDiscount() {
        return this._originalDiscount;
    }

    set originalDiscount(value) {
        this._originalDiscount = value;
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

    get testDisplayName() {
        return this._testDisplayName;
    }

    set testDisplayName(value) {
        this._testDisplayName = value;
    }

    get testImage() {
        return this._testImage;
    }

    set testImage(value) {
        this._testImage = value;
    }

    get testPrice() {
        return this._testPrice;
    }

    set testPrice(value) {
        this._testPrice = value;
    }

    get testDiscount() {
        return this._testDiscount;
    }

    set testDiscount(value) {
        this._testDiscount = value;
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
module.exports = Variant;