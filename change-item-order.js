const data = [
 {
   name: 'P1',
   order: 1
 },
 {
   name: 'p2',
   order: 2
 },
 {
   name: 'p3',
   order: 3
 },
 {
   name: 'P4',
   order: 4
 },
 {
   name: 'p5',
   order: 5
 },
 {
   name: 'p6',
   order: 6
 },
 {
   name: 'P7',
   order: 7
 },
 {
   name: 'p8',
   order: 8
 },
 {
   name: 'p9',
   order: 9
 },
 {
   name: 'p10',
   order: 10
 }
];

const orderData = (newItemOrder) => {
   const oldItemOrder = data.find(d => d.name === newItemOrder.name);
   
   data.filter(d => {
     if (d.order > oldItemOrder.order && d.order <= newItemOrder.order && d.name !== newItemOrder.name) {
        d.order = d.order - 1;
     } else if (d.order < oldItemOrder.order && d.order >= newItemOrder.order && d.name !== newItemOrder.name) {
        d.order = d.order + 1;
     }
   })
   data.find(d => {
    if (d.name === newItemOrder.name) {
   	  d.order = newItemOrder.order
    }
  })
}

orderData({ name: 'p2', order: 5 })

console.log(data);
