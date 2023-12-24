const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "Must have a name"]
    },
    rating:{
        type : Number,
        min : 1,
        max : 5
    },
    review: String,
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit : fruitSchema
});

let fruitArr = [];

fruitSchema.post('save',function(){
    console.log("Entry saved to database");
    return;
});

fruitSchema.post('insertMany', function(){
    console.log("Inserted all to the database");
    return;
});

fruitSchema.pre('deleteOne', function(){
    console.log('Removing from database');
    return;
});

fruitSchema.pre('deleteMany', function(){
    console.log("Deleted all instances from database");
    return;
});

const person = new mongoose.model('person', personSchema);
const Fruit = new mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name:'Apple',
    rating:4,
    review : "Good Fruit"
});
fruit.save();

const newPerson = new person({
    name: "Doe",
    age: 14,
    favFruit: fruit
});
newPerson.save();

const kiwi = new Fruit({
    name: "kiwi",
    rating : 5,
    review : "Nice One",
});
//kiwi.save()

const orange = new Fruit({
    name : 'orange',
    rating : 3.5,
    review : "sour in taste",
});
//orange.save()

const banana = new Fruit({
    name : "banana",
    rating : 4,
    review : "good carbs",
});
//banana.save()

//Fruit.insertMany(fruitArr);

/* function showFruitNames(){
        Fruit.find({},'name rating').then(fruits=>{
        fruits.forEach(fruit=>{
            console.log(fruit.name);
        })
    });
} */

//Fruit.deleteMany({name:"Apple"}).exec();

/* Fruit.find({}).then(fruits=>{
    fruits.forEach(fruit=>{
        fruitArr.push(fruit);
        showFruitNames();
       Fruit.deleteMany({name:fruit.name}).exec();
    })
}
) */



