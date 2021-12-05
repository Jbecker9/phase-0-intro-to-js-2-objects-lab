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

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee[name] = 'Sam';
    employee[streetAddress] = '12 Broadway';
    return employee;
}


