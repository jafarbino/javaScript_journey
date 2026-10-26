function Developer(name, language, level){
this.name= name;
this.language= language;
this.level= level;

this.describe= function(){

    console.log("Hi, my name is " + this.name + ". I code in " + this.language + ", and I am at " + this.level + " level.");

};
}

const dev1 = new Developer("Jafar", "javaScript", "beginner");

dev1.describe();

console.log("object properties");
for(let key in dev1){
   if (typeof dev1[key] !== "function"){
     console.log(dev1[key]);
   }
}

const backupDev= dev1;
backupDev.level= "intermediate";
console.log("dev1 level is now: " + dev1.level);
console.log(Developer.level);
