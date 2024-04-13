/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let x = arr.map((value)=>{ if(value.profession=='developer') return value})
  console.log(x)
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value)=>{ if(value.profession=='developer') console.log(value)})
}

function addData() {
  //Write your code here, just console.log
  arr.push({id: 4,name: "susan",age: "20",profession: "intern"})
  console.log(arr[3])
}

function removeAdmin() {
  //Write your code here, just console.log
  let x = arr.filter((value)=>{  return value.profession!='admin'})
  arr=x
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "johnus", age: "28", profession: "intern" },
    { id: 6, name: "jacksparrow", age: "30", profession: "developer" },
    { id: 7, name: "karena", age: "32", profession: "admin" },
  ];
  let merge = [...arr,...arr1]
  console.log(merge)
}
