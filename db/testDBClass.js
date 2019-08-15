const SQLite = require("./sqlite");
const Product = require("../data_classes/Product");
const Variant = require("../data_classes/Variant");


var DB = new SQLite();
var product = new Product("1", "1", "test", "testImage", "testDescription", 2.5, 10, 25, "test", "test", "test", 3, 10, 30);
var variant = new Variant("1", "1", "1", "test", "test", 20, 18, 1.2, 10, 12, "test", "test", 15, 13, 3, 10, 30);
