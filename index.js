//QUESTION 1
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole); 
};

FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
};

//Simulation
const feature = new FeatureToggle("DarkMode", true, ["admins", "betaTesters"]);

let role = "admins";

if (feature.canAccess(role)) {
    console.log(`${role} can access ${feature.featureName}`);
} else {
    switch (role) {
        case "admins":
        case "betaTesters":
            console.log(`${role} should have access but feature is disabled.`);
            break;
        default:
            console.log(`${role} cannot access ${feature.featureName}`);
    }
}
//QUESTION2

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}

TimeLog.prototype.calculateTotalEarnings = function() {
    return this.logs.reduce((sum, log) => sum + (log.hoursWorked * this.projectDetails.hourlyRate), 0);
};

TimeLog.prototype.filterLogsByDate = function(start, end) {
    const startDate = new Date(start), endDate = new Date(end);
    return this.logs.filter(log => {
        let logDate = new Date(log.date);
        return logDate >= startDate && logDate <= endDate;
    });
};

TimeLog.prototype.isOverworked = function() {
    const weeklyHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (weeklyHours > 40) {
        console.log("Over 40 hours worked this week!");
        return true;
    } else {
        console.log("Within weekly limit.");
        return false;
    }
};

// Example
const timeLog = new TimeLog("Alice", { name: "Website Revamp", hourlyRate: 50 }, [
    { date: "2025-05-01", hoursWorked: 10 },
    { date: "2025-05-02", hoursWorked: 15 },
    { date: "2025-05-03", hoursWorked: 20 }
]);

console.log("Total Earnings:", timeLog.calculateTotalEarnings());
console.log("Filtered Logs:", timeLog.filterLogsByDate("2025-05-01", "2025-05-02"));
timeLog.isOverworked();


//QUESTION 3

function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.calculateTotal = function() {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
};

Order.prototype.updateStatus = function(paymentReceived) {
    if (paymentReceived) {
        this.status = "Paid";
    } else {
        this.status = "Pending";
    }
};

Order.prototype.categorizeUrgency = function() {
    let urgency;
    switch (this.status) {
        case "Pending":
            urgency = "High";
            break;
        case "Processing":
            urgency = "Medium";
            break;
        case "Paid":
            urgency = "Low";
            break;
        default:
            urgency = "Unknown";
    }
    return urgency;
};

// Example
const order = new Order(
    { name: "Bob", email: "bob@example.com" },
    [{ productName: "Mouse", quantity: 2, unitPrice: 15 }, { productName: "Keyboard", quantity: 1, unitPrice: 40 }],
    "Pending"
);

console.log("Total Cost:", order.calculateTotal());
order.updateStatus(true);
console.log("Status:", order.status);
console.log("Urgency:", order.categorizeUrgency());

//QUESTION4

function Employee(id, name, performanceMetrics, feedback) {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
}

Employee.prototype.averageScore = function() {
    let scores = Object.values(this.performanceMetrics);
    return scores.reduce((a, b) => a + b, 0) / scores.length;
};

Employee.prototype.performanceLevel = function() {
    const avg = this.averageScore();
    if (avg >= 4.5) return "Excellent";
    else if (avg >= 3.5) return "Good";
    else return "Needs Improvement";
};

Employee.prototype.addFeedback = function(newFeedback) {
    if (newFeedback && newFeedback.length > 3) {
        this.feedback.push(newFeedback);
    }
};

// Example
const emp = new Employee(1, "Charlie", { communication: 4, efficiency: 5, reliability: 4.5 }, []);
console.log("Average Score:", emp.averageScore());
console.log("Performance:", emp.performanceLevel());
emp.addFeedback("Great job this quarter!");
console.log("Feedback:", emp.feedback);

//QUESTION 5


function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
}

Course.prototype.completedStudents = function() {
    return this.students.filter(s => s.completionStatus === true).map(s => s.name);
};

Course.prototype.countByExpertise = function(area) {
    return this.students.filter(s => s.expertise === area).length;
};

Course.prototype.instructorMessage = function() {
    const count = this.students.length;
    if (count >= 5) {
        console.log(`Instructor ${this.instructor.name} is managing a big class.`);
    } else {
        console.log(`Instructor ${this.instructor.name} has a small class.`);
    }
};

// Example
const course = new Course("JS Basics", { name: "Diana", expertise: "Web Dev" }, [
    { name: "Tom", completionStatus: true, expertise: "Web Dev" },
    { name: "Jane", completionStatus: false, expertise: "Data" },
    { name: "Sam", completionStatus: true, expertise: "Web Dev" }
]);

console.log("Completed Students:", course.completedStudents());
console.log("Web Dev Count:", course.countByExpertise("Web Dev"));
course.instructorMessage();

