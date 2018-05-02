var fs = require('fs');

function fileDB(db) {
    this.createDB = () => {
        fs.mkdir(db, (error) => {
            if (error) throw error;
            else console.log(`Created database [${db}]`);
        });
    }

    this.mkCol = (name) => {
        if (!name) {
            console.error(`Warning: mkCol requires a directory name.\n[Example: fileDB(mydb).mkCol(myCollection)]`);
        } else {
            var filePath = db +'/' + name + '.JSON';
            fs.writeFile(filePath, `// This is Collection ${name}.\n`, (error) => {
                if (error) throw error;
                else console.log(`Successfully created collection: [${name}] in db: [${db}].`);
            });
        }
    }

    this.logCol = (col) => {
        var filePath = db + '/' + col;
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) throw error;
            else console.log(`\n ┄┄┄┄┄┄┄┄┄┄┄ [${col}] ┄┄┄┄┄┄┄┄┄┄┄ \n` + data);
        });
    }

    this.addDoc = (col, data) => {
        var filePath = db + '/' + col + '.JSON';
        fs.appendFile(filePath, data + "\n", function (error) {
            if (error) throw error;
            else console.log(`Saved information to [${filePath}]`);
        });
    }

    this.findDoc = (col, search) => {
        var filePath = db + '/' + col;
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) throw error;
            else console.log("\n" + data + "\n");
        });
    }

    return this;
}

class model {
    constructor(name, data1, data2) {
        this.name = name;
        this.data1 = data1;
        this.data2 = data2;
    }
}

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
    fileDB('robots').logCol('cats');
    fileDB('robots').logCol('robo');
});

