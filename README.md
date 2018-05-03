
# ThunderDB - IN DEVELOPMENT [![Build Status](https://travis-ci.org/rrainn/ThunderDB.svg?branch=master)](https://travis-ci.org/rrainn/ThunderDB) [![Coverage Status](https://coveralls.io/repos/github/rrainn/ThunderDB/badge.svg?branch=master)](https://coveralls.io/github/rrainn/ThunderDB?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/thunderdb/badge.svg)](https://snyk.io/test/github/rrainn/thunderdb) [![Dependencies](https://david-dm.org/rrainn/thunderdb.svg)](https://david-dm.org/rrainn/thunderdb) [![Dev Dependencies](https://david-dm.org/rrainn/thunderdb/dev-status.svg)](https://david-dm.org/rrainn/thunderdb?type=dev) [![NPM version](https://badge.fury.io/js/thunderdb.svg)](http://badge.fury.io/js/thunderdb) 

ThunderDB is an open source NoSQL database solution based on Node.js. The goal of this project is to incorporate the structure of SQL with the flexibility of NoSQL DB solutions.


**Create a Database**
```javascript
fileDB('myDB').createDB;
```

**Create a Collection**
```javascript
fileDB('myDB').mkCol('myCol');
```

**Veiw a Collection**
```javascript
fileDB('myDb').logCol('myCol');
```

**Add a document to collection**
```javascript
fileDB('myDB').addDoc('myCol', 'MyDocumentName');
```

**Find a Document** *Currently not implemented*
```javascript
file('myDB').findDoc('myCol', 'SearchTerm');
```