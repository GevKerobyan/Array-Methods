// - Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.
// ``` javascript

function sortBy(arr, order) {

    if (order === "Asc") {
        arr.sort(function (a, b) { return a - b });
    } else if (order === "Desc") {
        arr.sort(function (a, b) { return b - a });
    } else if (!order) {
        return arr;
    }
    return arr;
}
