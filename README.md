# array

```
npm i jsh1400-array
```


### pluck
```javascript
import {jArray} from 'jsh1400-array'

let ar = [
    { id: 5, name: "j", family: "sh"},
    { id: 6, name: "r", family: "sh"},
    { id: 7, name: "s", family: "e"}
    ]
  
jArray.pluck(ar, 'name')
  
// out put ["j", "r", "s"]
```


### findAll
```javascript
import {jArray} from 'jsh1400-array'

let ar = [
    { id: 5, name: "j", family: "sh"},
    { id: 6, name: "r", family: "sh"},
    { id: 7, name: "s", family: "e"}
    ]
    
jArray.findAll(ar,(item) => item.family === 'sh')
  
// out put [{ id: 5, name: "j", family: "sh"},{ id: 6, name: "r", family: "sh"},]
```


### findAllIndex
```javascript
import {jArray} from 'jsh1400-array'

let ar = [
    { id: 5, name: "j", family: "sh"},
    { id: 6, name: "r", family: "sh"},
    { id: 7, name: "s", family: "e"}
    ]
    
jArray.findAllIndex(ar,(item) => item.family === 'sh')
  
// out put ["0", "1", ]
```


### toObject
```javascript
import {jArray} from 'jsh1400-array'

let ar = ["a", "b", "c"]

jArray.toObject(ar)
  
// out put { "0":"a", "1":"b", "2":"c"]
```


### toStringify
```javascript
import {jArray} from 'jsh1400-array'

let ar = ["a","b","c"]

jArray.toStringify(ar)

// out put '["a","b","c"]'
```


### toParseArray
```javascript
import {jArray} from 'jsh1400-array'

let string = '["a","b"]'

jArray.toParseArray(string)
  
// out put ["a", "b"]
```


---
>Javad Shariati <jsh1400@yahoo.com>
