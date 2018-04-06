joi-simple
---
Simple validator, function-based wrapper for `joi`

#### Installation and including in your code

```bash
npm install --save joi-simple
```


```javascript 1.5
var Joi = require('joi'),
    Config = require('joi-simple').Configuration,
    validate = require('joi-simple').Validate;
```

#### Built in validation (email only)

```javascript 1.5

// in your test
expect(validate('maass', 'email')).toBe(false);
expect(validate('acc@dom.com', 'email')).toBe(true);
expect(validate('111', 'email')).toBe(false);
```

#### Expanding validators

```javascript 1.5

Config.set('username', Joi.string().alphanum().min(3).max(30));

// in your test
expect(validate('A', 'username')).toBe(false);
expect(validate('ABDNBD0102030', 'username')).toBe(true);
expect(validate('111111111444444444444444444444444444444444111111111111111111111111111111111111111111111111111111111111111111', 'username')).toBe(false);
```



