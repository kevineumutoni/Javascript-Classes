// function FeatureToggle(featureName, isEnabled, userGroupAccess){
//     this.featureName= featureName;
//     this.isEnabled= isEnabled;
//     this.userGroupAccess = userGroupAccess;

const { timeLog } = require("console");

//     this.toggleFeature = function(flag){
//         this.isEnabled= flag
//     };
// }
// FeatureToggle.prototype.canAccess = function(userRole){
//     return this.isEnabled && this.userGroupAccess.includes(userRole);
// }


// let feature =new  FeatureToggle("Login", true, ["betaTesters", "admins", "Quality-engineers"])
// let features =new  FeatureToggle("SignUp", false, ["betaTesters", "stakeholder", "Quality-engineers, product"])

// console.log(feature.featureName);
// console.log(feature.isEnabled);
// console.log(feature.canAccess("admins"));
// console.log(feature.canAccess("developers"));

// // 

// console.log(features.featureName);
// console.log(features.isEnabled);
// console.log(features.canAccess("admins"));
// console.log(features.canAccess("developers"));


//In a freelancer time-tracking platform, create a TimeLog constructor function with properties:
//  freelancerName (string), projectDetails (object with name and hourlyRate), and logs
//  (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range,
//  and determine if weekly hours exceed 40 using if-else logic.


function Timelog(freelancerName, projectDetails, logs){
    this.freelancerName= freelancerName;
    this.projectDetails=projectDetails;
    this.logs= logs;
}
Timelog.prototype.totalEarnings= function(){
    let weeklyHours=  this.logs.reduce((acc, sum)=> acc + (this.projectDetails.hourlyRate * sum.hoursWorked), 0)
    if (weeklyHours > 40) {
        console.log("Over 40 hours worked this week!");
        return true;
    } else {
        console.log("Within weekly limit.");
        return false;
    }


};

let timelog = new Timelog("Kevine", {names:"coding", hourlyRate:80}, [
    {date:"march-2", hoursWorked:2},
    {date:"may-4", hoursWorked:7},
    {date:"Jan-10", hoursWorked:10}
]);

console.log(timelog.totalEarnings());



// function Timelog(freelancerName, projectDetails, logs){
//     this.freelancerName = freelancerName;
//     this.projectDetails = projectDetails;
//     this.logs = logs;
// }
// Timelog.prototype.totalEarnings = function(){
//     return this.logs.reduce((acc, sum) => acc + (this.projectDetails.hourlyRate * sum.hoursWorked), 0);
// };
// let timelog = new Timelog("Kevine", {name: "coding", hourlyRate: 80}, [
//     {date: "march-2", hoursWorked: 2},
//     {date: "may-4", hoursWorked: 7},
//     {date: "Jan-10", hoursWorked: 10} // fixed this!
// ]);
// console.log(timelog.totalEarnings()); // Output: 1520