## Covid-19 Tracker
Surge: http://frightening-battle123.surge.sh/


### ```<h1 style={{color: '#8e24aa'}}>Pakistan</h1>```
- inline style for particular element

### Grid:
- https://material-ui.com/components/grid/
- "xs" can be 3, 6, 12. It changes the layout when using on small devices.
- All the "sm" sum must be equal to 12.

### elevation={3} 
- elevation={3} is a paper property that increases the dropdown shadow.

### Converting Object into an Array
- Object.keys( {} ) => It converts the object into an array having all the keys at separate indexes. 
  - For Example: ["NewConfirmed", "TotalConfirmed", "NewDeaths", "TotalDeaths", "NewRecovered", "TotalRecovered"]
- Object.values( globalData ) => It converts the object into an array having all the values at separate indexes. 
  - For Example: [692917, 78692866, 13607, 1730560, 324529, 44384291]
- Object.entries( globalData ) => Convert it into an array having inside an array of objects. 
  - For Example: [["NewConfirmed", 692917], ["TotalConfirmed", 78692866], ["NewDeaths", 13607], ["TotalDeaths", 1730560], ["NewRecovered", 324529]]
- Here globalData is an object.

### Why we don't use object.map() directly:
- Object.keys(globalData).map( (obj, ind)
    1. globalData is an object
    2. so we first convert object into an array having only keys
    3. then we can apply .map() property of an array.

### replace()
- replace(/([a-z])([A-Z])/, '$1 $2')
- $1 and $2 are parenthesized submatches, where $1 is the string/character caught by the range in the first parentheses ([a-z]) and $2 is the match caught by second part ([A-Z]) of the regex. If you have more parentheses, you can use $3, $4 etc.

- So… with this expression you can catch chunks of two characters where the first one is lowercase and the second one is uppercase. As these ranges are between parentheses, you can use them in your replace() function’s second argument.
```
let str = 'lowerAndUppercase'
str.replace(/([a-z])([A-Z])/g, '$1 $2')
```
- In the above example, the regex catches rA and dU.
- You could also use a function as the second parameter instead of the $1 $2 string:
```
let str = 'lowerAndUppercase'
str.replace(/([a-z])([A-Z])/g, function(match, s1, s2) {
  return s1 + '  ' + s2
})
```
- In this case s1 and s2 are the same as $1 and $2 but you have more options to play with them.

- [Details](https://forum.freecodecamp.org/t/spinal-tap-case-operator/56148)
