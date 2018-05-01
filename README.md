# ThunderDB

A database query system using node's fs package. Creates and reads files as a database!

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
