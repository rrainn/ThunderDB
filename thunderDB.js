
var fs = require('fs');

function fileDB(db) {

    this.fp = '.';
    // Not yet functioning correctly
    // Add or edit a filepath prefix for all commands
    this.setPath = (filePath) => {
        fp = filePath;
        console.log(`File path prefix set to [${fp}].`);
    }

    // Create Database folder named {db}
    this.createDB = () => {
        var filePath = this.fp + "/" + db;
        fs.mkdir(filePath, (error) => {
            if (error) {
                if (error.code === 'EEXIST') {
                    console.log(`Failed to create [${db}] database at ${filePath}; Already exists.`);
                } else {
                    console.log(error);
                }
            }
            else console.log(`Created database [${db}]`);
        });
    }

    // Creates file named {name} in Folder named {db}
    this.mkCol = (name) => {
        if (!name) {
            console.error(`Warning: mkCol requires a directory name.\n[Example: fileDB(mydb).mkCol(myCollection)]`);
        } else {
            var filePath = fp + '/' + db +'/' + name + '.json';
            fs.writeFile(filePath, `// This is Collection ${name}.\n`, (error) => {
                if (error) throw error;
                else console.log(`Successfully created collection: [${name}] in db: [${db}].`);
            });
        }
    }

    // Returns file with name {col}
    this.getCol = (col) => {
        var filePath = this.fp + '/' + db + '/' + col + '.json';
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) throw error;
            else return (data);
        });
    }

    // Adds a new line of text {data} to collection {col} in database {db}
    this.addDoc = (col, data) => {
        var filePath = this.fp + '/' + db + '/' + col + '.json';
        fs.appendFile(filePath, '\t"'+data+'"\n', function (error) {
            if (error) throw error;
            else console.log(`Saved information to [${filePath}]`);
        });
    }
    return this;
}

// fileDB().setPath('../ThunderTest');

fileDB('robots').createDB();
fileDB('robots').mkCol('robo');
fileDB('robots').mkCol('cats');
fileDB('robots').addDoc('cats', 'Cats 1');
fileDB('robots').addDoc('cats', 'Cats 2');
fileDB('robots').addDoc('cats', 'Cats 3');
fileDB('robots').addDoc('robo', 'Robo 1');
fileDB('robots').addDoc('robo', 'Robo 2');
fileDB('robots').addDoc('robo', 'Robo 3');

setImmediate(() => {
    console.log(fileDB('robots').getCol('cats'));
    console.log(fileDB('robots').getCol('robo'));
});

