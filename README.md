# sort()
```javascript
sort() only sort string
sort( (a,b) => a - b) only sort number
```

# set()
```javascript
let a = new Set(["xyz", "live", "strong","xyz"]);
a = {"xyz", "live", "strong"};

```

# permutation
```javascript

arr = [
  `a`,
  `aa`,
  `aab`,
  `a`,
  `ab`,
  `b`
];
```

# randomCase
```javascript

Math.floor(Math.random() * 3)

it will only generate number from 0 to 2 because Math.floor round down, Math.random() generaates `0`(inclusively) to `1`(exclusively)
```

# replace
```javascript
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

`repalce will make a new copy!`
```
