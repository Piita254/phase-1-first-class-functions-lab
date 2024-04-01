// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers)); 
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier function
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

// fareDoubler function
const fareDoubler = createFareMultiplier(2);

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
};


