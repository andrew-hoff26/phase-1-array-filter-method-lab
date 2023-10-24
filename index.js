// Code your solution here
function findMatching(drivers, string) {
    const lowercaseString = string.toLowerCase()
    const matchingDrivers = drivers.filter(driver => {
        const lowercaseDriver = driver.toLowerCase(); 
        return lowercaseDriver === lowercaseString; 
      });
    
      return matchingDrivers;
}
function fuzzyMatch(drivers, string) {
   let matchingDrivers = [];
    for (let driver of drivers) {
    if (driver.startsWith(string)) {
        matchingDrivers.push(driver); 
   }
}
return matchingDrivers;
}
function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name === name);
    return matchingDrivers;
}