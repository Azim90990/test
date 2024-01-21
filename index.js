let map = new Map();

map.set("user-name-1", "Amir");

map.set("user-name-2", "yeban");

const resultUser = map.get("user-name-1")

console.log(map);

console.log(resultUser);


const isHAs = map.has("user-name-1");

console.log(isHAs);

map.delete("user-name-2");

map.clear();

console.log(map);

const WeekDays = val => {
    let map = new Map();
    ["Mn", "Th","Wn", "To", "Fr", "St", "Sn"].forEach((item, i) => {
        map.set(i,item);
    });
    return map.get(Number(val))
}

console.log(WeekDays(1));

console.log(WeekDays(6));
const Recipe = () => {
  let recipeMap = new Map([
    ["yabloko", 25000],
    ["sigareta", 17000],
    ["ogurets", 29000]
  ])
  for(const interator of recipeMap.keys()) {
    console.log(iterator);
  }
  console.log(`-------------------------`);
  for(const iterator of fecipeMap.values()){
    console.log(iterator);
  }
}

Recipe();


////
////
/////

const set = new Set();

const users = [`makhmud`,`makhmud`, `Max`, `Max` ,]
users.forEach(item =>{
    set.add(item)
})
console.log(set);

console.log(set.has("max"));

console.log(set.entries());

///JSON

const user ={
    name: "Abdulloh",
    age: 14,
    developer:true,
    skills:["C++"],
    address:{
        country:"Uzbekistan",
        city:"tashkent",
    }
}

const stringObject = JSON.stringify(user);

console.log(user);

console.log(SrtingObject);


toJSON() {
    return this
}

console.log(User.toJSON());


localStorage.setItem("local", "Hello world by localStorage");

localStorage.setItem("local-object",JSON.stringify({name: "Azim"}))

const info = localStorage.getItem("local-object");

console.log(JSON.parse(info));

localStorage.removeItem()