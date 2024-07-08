const drivers = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Chicago' },
    { name: 'Annette', hometown: 'San Francisco' },
    { name: 'Sarah', hometown: 'Seattle' },
    { name: 'Bobby', hometown: 'New York' }
];
//returns all drivers that match the passed in name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers, 'bobby')); 
console.log(findMatching(drivers, 'BOBBY')); 

// returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

console.log(fuzzyMatch(drivers, 'Sa')); 
console.log(fuzzyMatch(drivers, 'Bo')); 

//Treturns each element whose name property matches the provided string argument.
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

console.log(matchName(drivers, 'Bobby')); 
