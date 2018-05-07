
//         __  .__                      .___                 .______.    
//      _/  |_|  |__  __ __  ____    __| _/___________    __| _/\_ |__  
//      \   __\  |  \|  |  \/    \  / __ |/ __ \_  __ \  / __ |  | __ \ 
//      |  | |   Y  \  |  /   |  \/ /_/ \  ___/|  | \/ / /_/ |  | \_\ \
//      |__| |___|  /____/|___|  /\____ |\___  >__|    \____ |  |___  /
//               \/           \/      \/    \/             \/      \/ 

var fs = require('fs');

class thunderDB {
    constructor(filePath, dbName) {
        // Set Default FilePath
        if (filePath)    this.fp = filePath;
        else /*default*/ this.fp = '.';
        // Set DataBase Name
        if (dbName)      this.db = dbName;
        else /*default*/ this.db = 'ThunderDB';

        console.log(`DataBase is named [${this.db}] and file-path is [${this.fp}]`);

        // Edit a filepath prefix for all commands
        this.editPath = (filePath) => {
            this.fp = filePath;
            console.log(`File path prefix adjusted to [${this.fp}].`);
        }

        // Create Database folder named {db}
        this.createDB = () => {
            var filePath = this.fp + "/" + this.db;
            fs.mkdir(filePath, (error) => {
                if (error) {
                    if (error.code === 'EEXIST') {
                        console.warn(`Failed to create [${this.db}] database at ${this.fp}; Already exists.`);
                    } else {
                        console.log(error);
                    }
                }
                else console.log(`Created database [${this.db}]`);
            });
        }

        // Creates file named {name} in Folder named {db}
        this.mkCol = (name) => {
            if (!name) console.error(`Warning: mkDoc requires a directory name.\n - [Example: fileDB(mydb).mkCol(myCollection)]`);
            else {
                var filePath = this.fp + '/' + this.db +'/' + name + '.json';
                fs.writeFile(filePath, `{\n"name": "${name}",\n}`, (error) => {
                    if (error) throw error;
                    else console.log(`Successfully created collection: [${name}] in db: [${db}].`);
                });
            }
        }

        // Returns file with name {col}
        this.getCol = (col) => {
            var filePath = this.fp + '/' + this.db + '/' + col + '.json';
            fs.readFile(filePath, 'utf8', (error, data) => {
                if (error) throw error;
                // TODO: Return a loggable block of data
                else console.log(data);
            });
        }

        // Adds a new line of text {data} to collection {col} in database {db}
        this.addDoc = (col, data) => {
            var filePath = this.fp + '/' + this.db + '/' + col + '.json';
            fs.appendFile(filePath, '\t"' + data + '"\n', function (error) {
                if (error) throw error;
                else console.log(`Saved information to [${filePath}]`);
            });
        }
    }
}



// Test Scripts

// TODO:
// Move to Test folder

var db = new thunderDB('.', 'MyCoolDb');

db.createDB();

db.mkCol('robots');
db.getCol('robots');
db.addDoc('robots', 'beep-boop');


