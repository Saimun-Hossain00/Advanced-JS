const students = [
    {id: 21, name: 'omar sunnay'},
    {id: 22, name: 'mannnna'},
    {id: 23, name: 'salma'},
    {id: 74, name: 'dipjol'}
];
const names = students.map( s => s.name); 
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);

console.log(biggerOne);