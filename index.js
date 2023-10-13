// Code your solution here
/*[1, 2, 3, 4, 5].filter(function (num) {
  return num > 3;
});
// => [4, 5] */



/*let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
let filterDrivers = drivers.filter(function( name ) {
    return "Booby";
    
})
console.log(filterDrivers)*/

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
  return drivers.filter(function(name) {
    return name.toLowerCase() === string.toLowerCase();
  });
}
console.log(findMatching(drivers, "bobby"));
/*-------------------------------------------------------------------------------------------------*/

function fuzzyMatch(drivers, string) {
return drivers.filter(function(mtchLetter) {
  return  mtchLetter.startsWith(string)
})
}
console.log(fuzzyMatch(drivers, "A"));
/*-------------------------------------------------------------------------------------------------*/

const driver = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(driver, string) {
  return driver.filter(function(ele) {
return ele.name  === string;

  })
}
console.log(matchName(driver, "Sammy"));
/*-------------------------------------------------------------------------------------------------*/