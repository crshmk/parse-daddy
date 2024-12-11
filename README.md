### Safe and pure json parser

---

Intended for objects and arrays 

Always returns an object or array
- primitives, null, etc return an empty object 
- malformed objects return an empty object 
- malfomred arrays return an empty array

--- 

Parses JSON normally 
```javascript
parseDaddy('"{ "one": 1 }"')
// { one: 1 }
```

Returns an empty object for malformed objects and unexpected types 
```javascript

parseDaddy('"{ key: 'value' }"')
// {} 
parseDaddy(null)
// {} 
parseDaddy(undefined)
// {} 
parseDaddy(true)
// {} 
parseDaddy(42)
// {} 
```

Returns an empty array when a malformed array is attempted 

```javascript 
parseDaddy('[1, 2, 3')
// []
```