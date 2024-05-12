interface item {
    name: string
    price: number
}
// create two objects
const book:item={
    name:'URDU TEXT',
    price :450
}
const mango:item={
    name:'mango',
    price :250  
}
console.log(`book name:${book.name}, price :${book.price}`);
console.log(`mango name:${mango.name},price :${mango.price}`);