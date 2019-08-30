function User(firstname, lastname, age, location) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.location = location;
    this.greeting = function () {
        document.write(`Hello! My name is ${this.firstName} ${this.lastName}, I'm ${this.age}. I live in ${this.location}`)
    }
}
User.IsFromUkraine = true;
User.IsAdult = function (){
    if (User.age >= 18){
        return  new User.IsAdult(true)}
        else{ return new User.IsAdult(false)
        }
};
const user1 = new User('Petro','Ivanov', 25,'Kyiv');

user1.greeting();
