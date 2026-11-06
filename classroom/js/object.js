// Creating an Object : CRUD operation: Create read update delete
const obj={
    name:"Raj",
    age:20,
    cls:"BCA-3rd",
    subject:["Web","Python","DSA"],
    "home address":{city:"Ambala",state:"Hariyana",zip:110011},
    fn:function(){console.log(this.name)},
    arrow:()=>{console.log(this.age)}
}

// Read
console.log(obj.name);
console.log(obj["name"]);
console.log(obj["home address"]);

// Update
obj.age=23;
obj["home address"].city="Chandighar";

// delete
delete obj.age;

console.log(obj)
// iteration 
for(let key in obj){
    console.log(`${key}:${obj[key]}`)
}

// Object Methods // Important
console.log(Object.keys(obj)) //return all keys in array
console.log(Object.values(obj)) //return all values in array
console.log(Object.entries(obj)) //return all key values in array

// Obj destructuring 

// const {name,cls}=obj;
// console.log("destructuring",name,cls);

// Renaming Variables (Aliases)
const {name:userName,cls:className}=obj;
console.log("destructuring(Aliases) ",userName,className);

// Default Values
const {name,cls,contary='india'}=obj
console.log(name,cls,contary)

// Destructuring Nested Objects
const {"home address":{city}}=obj
console.log(city)

// iteration using for....of

for(let key of Object.keys(obj)){
    console.log(key);
}
for(let value of Object.values(obj)){
    console.log(value);
}
for(let [key,value] of Object.entries(obj)){
    console.log(`${key} :=> ${value}`);
}

// Copy Object 
const obj2=obj //only referance obj and obj2 store in stack and point to {} which is store in heep
const obj3={...obj} //using this method create new copy //shallow copy

obj3.name="rohit";

obj3["home address"].city="Mohli"
console.log(obj,obj2,obj3);

//deepCopy
const obj4=structuredClone(obj);
obj4.name="Rancho";
obj4["home address"].city="mohali";
console.log(obj,obj4);









