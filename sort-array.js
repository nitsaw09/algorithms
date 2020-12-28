const users = [
    {id: 1, name: "Antony"},
    {id: 2, name: "Fred"},
    {id: 3, name: null},
    {id: 4, name: "Word"},
    {id: 5, name: "Bailey"}
];

// using null object design pattern to convert null to empty string
const nullEmptyString = (item) => {
    for (const obj in item) {
       item[obj] = item[obj] === null ? "" : item[obj];
    }
    return item;
} 

const sortData = (itemList, field, order) => {
    const sortItem = itemList.map(item => item[field]).sort();

    // sort array in descending order
    if(order === "DESC") {
        sortItem.reverse();
    }

    return sortItem.map(data => {
        const findItem =itemList.find(item => item[field] === data);
        if(findItem) {
            const item = nullEmptyString(findItem);
            return item;
        }
    });
}

console.log(sortData(users, "name", "ASC"));
console.log(sortData(users, "name", "DESC"));
