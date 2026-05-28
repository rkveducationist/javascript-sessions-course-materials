// 1. asynchronous
// console.log("start");

// setTimeout(() => {
//     console.log("delayed");
// }, 2000);

// console.log("end");

// 2. callbacks
// function fetchData(callback) {
//     console.log("fetching data...");

//     setTimeout(() => {
//         let data = "Data Received";
//         callback(data);
//     }, 2000);

//     console.log("completed..");
// }

// function displaData(result) {
//     console.log("result: " + result);
// }


// fetchData(displaData);

// 3. promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true;

//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Error fetching data");
//             }
//         }, 2000);
//     });
// }


// fetchData()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

