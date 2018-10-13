import * as big from "big.js";

var foo = new big.Big("111.11111111111111111111");
var bar = foo.plus(new big.Big("0.00000000000000000001"));

console.info(bar.toString());