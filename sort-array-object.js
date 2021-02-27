const users = [
    {id: 1, name: "Antony"},
    {id: 2, name: "fred"},
    {id: 3, name: ""},
    {id: 4, name: "Word"},
    {id: 5, name: "Bailey"}
];

const sortData = (itemList, field, order) => {
    const sortItem = itemList.sort((a, b) => { 
        const val1 = a[field].toLowerCase();
        const val2 = b[field].toLowerCase();
       	if(val1 < val2) {
         return order === "ASC" ? -1 : 1;   
       	}
         if ( val1 > val2){
           return order === "ASC" ? 1 : -1;
         }
       return 0;
    });
    return sortItem;
}

console.log(sortData(users, "name", "ASC"));
console.log(sortData(users, "name", "DESC"));
