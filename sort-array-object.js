const users = [
    {id: 1, name: "Antony"},
    {id: 2, name: "Fred"},
    {id: 3, name: ""},
    {id: 4, name: "Word"},
    {id: 5, name: "Bailey"}
];

const sortData = (itemList, field, order) => {
    const sortItem = itemList.sort((a, b) => {
       	if(a[field] < b[field]) {
         return order === "ASC" ? -1 : 1;   
       	}
         if ( a[field] > b[field] ){
           return order === "ASC" ? 1 : -1;
         }
       return 0;
    });
    return sortItem;
}

console.log(sortData(users, "name", "ASC"));
console.log(sortData(users, "name", "DESC"));
