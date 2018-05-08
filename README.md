# ThunderDB - IN DEVELOPMENT [![Build Status](https://travis-ci.org/rrainn/ThunderDB.svg?branch=master)](https://travis-ci.org/rrainn/ThunderDB) [![Coverage Status](https://coveralls.io/repos/github/rrainn/ThunderDB/badge.svg?branch=master)](https://coveralls.io/github/rrainn/ThunderDB?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/rrainn/thunderdb/badge.svg)](https://snyk.io/test/github/rrainn/thunderdb) [![Dependencies](https://david-dm.org/rrainn/thunderdb.svg)](https://david-dm.org/rrainn/thunderdb) [![Dev Dependencies](https://david-dm.org/rrainn/thunderdb/dev-status.svg)](https://david-dm.org/rrainn/thunderdb?type=dev) [![NPM version](https://badge.fury.io/js/thunderdb.svg)](http://badge.fury.io/js/thunderdb) 

ThunderDB is an open source NoSQL database solution based on Node.js. The goal of this project is to incorporate the structure of SQL with the flexibility of NoSQL DB solutions.

---

### Folder Schema

`$` surrounding name means variable and not a litteral name.

**Format**: name - type (folder or file) - description

- `db` - folder - main folder
  - `thunderdb.json` - file - details about the ThunderDB server (version number, etc)
  - `users.json` - file - details about the users on a ThunderDB server
  - `databases.json` - file - file containing data about all the databases
  - `$databasename$` - folder - folder containing each database data
    - `tables.json` - file - file containing details about all the tables
    - `$tablename$` - folder - folder containing data of each table
      - `information.json` - file - file containing all details about the table
      - `schema.json` - file - schema for the table
      - `data` - folder - folder containing all the data
        - `$primaryKey$.json` - file - file containing the entire document
        - `$primaryKey$` - folder - folder containing all the data for a given document
          - `$key$.json` - file - file containing the value for a given key in a document

---

### Terms

- **Primary Key** - each item will contain a primary key that is unique to each item (within a table), if you put another item with the same primary key it will overwrite the existing item. Two items in different tables can have the same primary key.

---

### Internal Documentation

**Initalize an instance of ThunderDB**

```javascript
const db = new thunderDB('My-DataBase-Name', '../path/to/storage/location');
```

**Create a Database**

Creates a database folder at a given location, will be accessed by thunderDB with all other commands.
```javascript
db.createDB();
```

**Create a Collection**

Creates a collection within the database folder.
```javascript
db.mkCol('myCol');
```

**Veiw a Collection**

Console logs a collection. TODO: Return collection as a data object
```javascript
db.getCol('myCol');
```

**Add a document to collection**

Appends to the collection. TODO: Instead of append, retrieve JSON, convert to js object, update with new data, then rewrite the document with new data.
```javascript
db.addDoc('myCol', 'MyDocumentName');
```

**Add a file prefix**

Allows you to edit the path for your database. Make sure you run a createDB if you do not have an instance of thunderSB there.
```javascript
db.editPath('../my/other/folder');
```
