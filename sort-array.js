const items = [
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

const sortData = (itemList, order) => {
    const sortItem = itemList.map(item => item.name).sort();

    // sort array in descending order
    if(order === "DESC") {
        sortItem.reverse();
    }

    return sortItem.map(data => {
        const findItem =itemList.find(item => item.name === data);
        if(findItem) {
            const item = nullEmptyString(findItem);
            return item;
        }
    });
}

console.log(sortData(items, "ASC"));
console.log(sortData(items, "DESC"));

