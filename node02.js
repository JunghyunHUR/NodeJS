class Human{
    constructor(type = "human"){
        this.type = type;
    }

    static isHuman(human){
        return human instanceof Human;
    }

    breathe(){
        alert("후 - 우 - 우 - 웁!!");
    }
}

class Student extends Human{

    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName(){
        super.breathe();
        alert(`${this.firstName} ${this.lastName}의 숨소리!!`);
    }

}

const newStudent = new Student("3학년", "철수", "안");
console.log(Human.isHuman(newStudent));
// newStudent.sayName();