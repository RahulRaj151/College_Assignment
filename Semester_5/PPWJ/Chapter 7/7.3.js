class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    animalsound() {
        return this.name + " makes "+ this.sound + " sounds ";
    }
}
animal.prototype.intruduce = function(){
    console.log("they are friendy animal");
}
let a1 = new animal("Dog", "Bark");
a1.intruduce();
console.log(a1.animalsound());
