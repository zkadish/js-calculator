// this is a class constructor
function Person (name, address, sex, race, age, height, likes) {
    var self = this;
    
    this.likes = likes.replace(/\s/g, '').split(',');
    // debugger;
    
    this.name = name;
    this.address = address;
    this.sex = sex;
    this.race = race;
    this.age = age;
    this.height = height;
    this.email = '';
    this.initials = name.split(' ');
    
    
    for(var i = 0; i < this.initials.length; i++){
        this.initials[i] = this.initials[i].slice(0, 1);
    }
    
    this.initials = this.initials.toString().replace(/,/g, '').toUpperCase();
    
    this.speaks = function (says) {
        // console.log(this.name + ' ' + says)
        console.log(`name: ${this.name} ${says}!?! ;P`)
    }
    
    this.get = function (prop) {
        return console.log(this[prop]);
    }
    
    this.set = function (prop, value) {
        this[prop] = value;
        console.log(this[prop])
    }
}

export default Person;