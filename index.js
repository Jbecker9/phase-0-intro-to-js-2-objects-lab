const employee = {
    name: 'nick',
    streetAddress: '1054 drink avenue'
};

function updateEmployeeWithKeyAndValue(){
    return{ ...employee,
        name: 'Sam',
        streetAddress: '11 Broadway'
    };
};

destructivelyUpdateEmployeeWithKeyAndValue = employee.name = 'Sam'

destructivelyUpdateEmployeeWithKeyAndValue = employee.streetAddress = '12 Broadway'
