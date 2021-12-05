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

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employeeObj, name) {
    const employee = {...employee};
    delete employee.name;
    return employee
};

function destructivelyDeleteFromEmployeeByKey(employeeObj, name) {
    delete employee.name;
    return employee
};
