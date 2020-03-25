                        //ARRAYS 

// .push()
var num=[1,2,3,4,5];
num.push(6);
console.log(num);


//pop()
var num=[5,6,7,8,9];
num.pop([4]);
console.log(num);

// .shift()
var array=["cake","cookies",1,2];
array.shift();
console.log(array);

//unshift()
var num=[2,3,4,5];
num.unshift(1);
console.log(num);


// .toString()
var array=["cake","cookies",1,2];
array.toString();
console.log(array);

// .concat()
var array=["cake","cookies",1,2];
array.ocncat();
console.log(array); 

// .slice()
var array=["cake","cookies",1,2];
var x= array.slice(0,2);
console.log(x); 


                                //STRINGS
//toUpperCase()
var sentence="There is a tree on a hill";
var word=sentence.toUpperCase();
console.log(word);

//toLowerCase()
var sentence="MUSIC and MeaLS";
var word=sentence.toLowerCase();
console.log(word);      

//charAt()
var sentence="coding is fun";
var word=sentence.charAt(5);
console.log(word); 

//indexOf()
var sentence="Work, play, learn";
var word=sentence.indexOf("a");
console.log(word); 

                            //OBJECTS
//create()
const person={
age:12, gender:"female", name:"Sarah"
};
const d = Object.create(person);
d.name="deborah";
d.gender="female";
console.log(d); 


//keys()
const car={
    name:"Benz", model:300, weight:"500kgs", color:"pink"
}
const k=Object.keys(car);
console.log(k); 


//values()
const person={
    age:12, gender:"female", name:"Sarah"
    };
    const v= Object.values(person);
    console.log(v); 

//entries()
const building={
    type:"flat", storeys:5, color:"green", occupants:"tenants"
}
const e=Object.entries(building);
console.log(e); 

//assign() to copy one object into another
const car={
    name:"Benz", model:300, weight:"500kgs", color:"pink"
}
const a=Object.assign(car);
console.log(a); 

//Or assign() to merge two objects
const building={
    type:"flat", storeys:5, color:"green", occupants:"tenants"
}
const location={
    district:"Kampala", division:"Central", country:"Uganda"
}
const address=Object.assign(building,location);
console.log(address); 

//freeze()
const login={
    username:"exam-ple", email:"example@gmail.com", password:123
    };
    const f= Object.freeze(login);
    login.username="deborah"; //try to change the username
    login.id=001; //try to add a new property/key called id
    console.log(f); */