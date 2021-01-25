// Imports
const excelToJson = require('convert-excel-to-json');

// * ==> Read Excel and convert to JSON <== *//

const readEXcel = () => {
    return new Promise((resolve, reject) => {
        // Convert excel to json for reading your data
        const result = excelToJson({
            sourceFile: 'resources/users.xlsx',
            header: {
                rows: 1
            },
            // Attributes contained in the excel list
            columnToKey: {
                A: 'fullName',
                B: 'company',
                C: 'position',
                D: 'telefono',
                E: 'email',
            }
        });


        // Sheet name.
        const excelUserList = result['Users'];

        resolve(excelUserList);
    });
}

module.exports = { readEXcel };