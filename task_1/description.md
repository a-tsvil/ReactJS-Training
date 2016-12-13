# Task \#1
Lecture #1 Task, related to ES6 features.
## Description
Need to create **Measurement Units Converter module** which is contains сlasses hierarchy representing various converters for few measurements units.

Module must contains one method - _createConverter_ which is receive plain object depending on which module determine which converter class to instantiate. Object must looks like following:
```javascript
let conversion = {
  from: 'cm',
  to: 'mm'
};
```
For measurement units codes use: https://en.wikipedia.org/wiki/International_System_of_Units

_createConverter_ return this converter instance which is also has single method
_convert_.

Method _convert_ receive number of units to convert and return converted value as a string, method can retrieve single argument - string or number, multiple arguments of same type or array of same type units, if method got array it's return array (or list of params), in case of string returns string, for number - number.

## Requirements
- For this task try to use as much as possible of ES6 features from lecture;
- class, extends, import, export, rest, destructuring, let, const usage is required if possible;
- Use NodeJS to test your code;
- Create at least 3 various conversions;
- Send ES6 syntax code as your tasks solutions;
- Use of GoF patterns if possible;

## Deprecations
- Use of ES5 syntax if there is ES6 syntax for this;
- Use of prototype;
- Use of ES5 Revealing Module Pattern;
- Send ES5 syntax code as your tasks solutions;

## Before you start
Tools what you need for this task is:
- [NodeJS and npm](https://nodejs.org/en/) - You must install it with npm.
- [Babel](https://babeljs.io/) - Install it globally with npm and use from command line for this task
- [Babel Playground](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=true&presets=es2015%2Cstage-0&code=%0A) - Or just use playground to transpile your solutions manually.
After transpiling try to run your code via NodeJS or Browser (not required);

Good Luck!
