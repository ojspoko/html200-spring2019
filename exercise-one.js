let newEnglandCities = ["boston", "portland", "portsmouth"];

newEnglandCities.push("newport");

console.log(newEnglandCities);

newEnglandCities.splice(2,1);

console.log(newEnglandCities);

const eastCoastPlaces = newEnglandCities.join(', ');

console.log(newEnglandCities);
console.log(eastCoastPlaces);
