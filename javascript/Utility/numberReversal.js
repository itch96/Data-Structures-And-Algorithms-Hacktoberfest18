const reverseNumber = integer => parseInt(integer.toString().split("").reverse().join("")) * Math.sign(integer);
