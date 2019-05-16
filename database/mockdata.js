const faker = require('faker');

let reviews = [

];

const commentGenerator = () => {
  let italianFoods = ['pizza', 'chicken parmesan', 'spaghetti and meatballs', 'garlic bread', 'pasta', 'bread sticks', ''];
  let mexicanFoods = [];
  let chineseFoods = [];
  let burgerFoods = [];
  let koreanFoods = [];
}

const generateFakeData = (num) => {
  let fakeData = [];
  let _id = 0;
  for (let i = 0; i < num; i++) {
    _id++;
    let instance = {};
    instance.user = {};

    let firstName = faker.name.firstName();
    let firstLetter = firstName[0];
    let numOfRatings = Math.ceil(Math.random() * 10);
    // Giving it a 1/8 chance the user is a top reviewer
    let topReviewer = (Math.floor(Math.random() * 8) === 1 ? true : false);
    let starRating = Math.ceil(Math.random()*5);
    let date = faker.date.past();
    // console.log(_id);

    instance._id = _id;
    instance.user.firstName = firstName;
    instance.user.firstLetter = firstLetter;
    instance.user.numOfRatings = numOfRatings;
    instance.user.topReviewer = topReviewer;
    instance.starRating = starRating;
    instance.date = date;

    fakeData.push(instance);

  }

  console.log(fakeData);
}

generateFakeData(8);

/*
{
_id: Number (1-500)
restaurantID: Number (1-100) //////////////
user: {
         Name: String
         firstLetter: String
         numOfRatings: Number
         topReviewer: Boolean
         }
starRating: Number(1-5)
Ordered: [String] ??? /////////////////
comments: String ///////////////////
date: date
}
*/