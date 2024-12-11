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
unstring('"{ "one": 1 }"')
// { one: 1 }
```

Returns an empty object for malformed objects and unexpected types 
```javascript

unstring('"{ key: 'value' }"')
// {} 
unstring(null)
// {} 
unstring(undefined)
// {} 
unstring(true)
// {} 
unstring(42)
// {} 
```

Returns an empty array when a malformed array is attempted 

```javascript 
unstring('[1, 2, 3')
// []
```