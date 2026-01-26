let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        accessLevel = "Full access granted."
        userMessage = "Hello Admin";
    } else if (userRole === "manager") {
        accessLevel = "Limited access granted";
        userMessage = "Hello Manager";
    } else { 
        accessLevel = "No access granted.";
    }
    console.log("Access level: ", accessLevel);
} else {
    userMessage = "Log in first.";
}

console.log("Alert: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "admin";
        break;
    case "manager":
        userCategory = "manager";
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("The user category is:", userCategory);