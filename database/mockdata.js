const faker = require('faker');

let reviews = [

];

const commentGenerator = (foodType, starRating) => {
  let italianFoods = ['cheese pizza', 'chicken parmesan', 'spaghetti and meatballs', 'garlic bread', 
  'pasta', 'bread stick', 'Caesar salad', 'pepperoni pizza', 'bbq pizza'];
  let mexicanFoods = ['fish tacos', 'chicken tacos', 'carne asada tacos', 
  'spicy enchiladas', 'California burrito', 'shrimp tacos', 'fajita salad bowl', 'veggie bowl',
   'steak quesadilla', 'nacho platter', 'taquitos'];
  let chineseFoods = ['chow mein', 'chicken fried rice', 'orange chicken', 'teriyaki chicken', 
  'wok-fired shrimp', 'kung pao chicken','veggie egg roll', 'chicken egg roll', 'white rice', 'brown rice',
  'honey walnut shrimp'];
  let burgerFoods = ['cheeseburger', 'hamburger', 'Cali burger', 'chili cheeseburger', 
  'vegan burger', 'chicken sandwich', 'french fries', 'onion rings', 'double bacon cheeseburger',
  'veggie burger', 'black bean burger', 'chicken tenders','southwest chicken salad'];
  let koreanFoods = ['bulgogi beef', 'galbi chicken', 'beef short ribs', 'red chicken', 
  'organic tofu', 'spicy pork', 'kimchi', 'noodles', 'kimchi rice', 'salad'];
  
  let food;
  if (foodType === 'italian') {
    food = italianFoods;
  } else if (foodType === 'mexican') {
    food = mexicanFoods;
  } else if (foodType === 'chinese') {
    food = chineseFoods;
  } else if (foodType === 'burger') {
    food = burgerFoods;
  } else if (foodType === 'korean') {
    food = koreanFoods;
  }

  let randomFood1 = food[Math.floor(Math.random() * food.length)];
  
  let positiveStart = ['I love eating here! ', 'My family and I eat here twice a week. ',
  'I often go here on my lunch break. ', 'This is a great place for a family dinner. ',
  'I take business associates here to impress them. ', 'Great for a quick bite. ', 
  'They give you a lot of food for the price! '];
  let neutralStart = ['This place is just okay. ', 'We go here every once in a while. ', 
  'Food here is hit or miss. ', 'Some of the food is great. ', 'I like this place but dont go on Mondays. ',
  'Great for adults but not for kids. '];
  let negativeStart = ['I hate this restaurant. ', 'The waiters are so slow. ',
  'Expect the service to be terrible! ','Prices here are outrageous. ', 'Always way too loud there. ',
  'Smells terrible all the time. ', 'The staff was so rude! '];

  let positiveMid = [`My favorite is the ${randomFood1}. `, `I ate the ${randomFood1} and it was to die for. `, 
  `We ordered the ${randomFood1} and it came out right away. `, `I've never had ${randomFood1} that was so juicy. `,
  `The ${randomFood1} is always so fresh and great. `, `The chefs special is the ${randomFood1}. `, 
  `You will never eat ${randomFood1} anywhere as good as they make it here. `, 
  `The ${randomFood1} tastes great with some hot sauce. `, 
  `I love dipping the ${randomFood1} in some ranch. `];
  let neutralMid = [];
  let negativeMid = [];

  let positiveEnd = ['Would definitely recommend! Mmmmmm', 'I would give it 6 stars if I could.', 
  'Cant wait to come here again soon!', 'Best food ive had in a while!', 'Now I know what food should taste like.',
  'My daughter even got a free dessert!', 'They were so nice they gave me a drink on the house.'];
  let neutralEnd = ['I just wish it had a better environment.', 'There are better options if you have time.',
  'It is too crowded most nights', 'The food was great but it took way too long.', 
  'It was better than I expected, but not great.'];
  let negativeEnd = ['I will never go here again!.', 'We will be reporting this restaurant to the BBB.',
  'Someone is going to get sick eating here.', 'AVOID AT ALL COSTS!!', 'Go to the place next door instead.',
  'I will be pursuing legal action immediately.', 'Im still hungry!', 'I think I may throw up.'];

  let comment= '';
  let startPhrase;
  let midPhrase;
  let endPhrase;
  

  if (starRating === 4 || starRating === 5) {
      startPhrase = positiveStart[Math.floor(Math.random() * positiveStart.length)];
      midPhrase = positiveMid[Math.floor(Math.random() * positiveMid.length)];
      endPhrase = positiveEnd[Math.floor(Math.random() * positiveEnd.length)];
  } else if (starRating === 3) {
      startPhrase = neutralStart[Math.floor(Math.random() * neutralStart.length)];
      midPhrase = neutralMid[Math.floor(Math.random() * neutralMid.length)];
      endPhrase = neutralEnd[Math.floor(Math.random() * neutralEnd.length)];
  } else if (starRating === 2 || starRating === 1) {
      startPhrase = negativeStart[Math.floor(Math.random() * negativeStart.length)];
      midPhrase = negativeMid[Math.floor(Math.random() * negativeMid.length)];
      endPhrase = negativeEnd[Math.floor(Math.random() * negativeEnd.length)];
  }

  comment+= startPhrase;
  comment+= midPhrase;
  comment+= endPhrase;
  console.log(comment);
  return comment;
}

const generateFakeData = (num) => {
  let fakeData = [];
  let _id = 0;
  for (let i = 0; i < num; i++) {
    _id++;
    let instance = {};
    instance.user = {};

    let restaurantID = 5; ////////////////////////////FIX THIS
    let firstName = faker.name.firstName();
    let firstLetter = firstName[0];
    let numOfRatings = Math.ceil(Math.random() * 10);
    // Giving it a 1/8 chance the user is a top reviewer
    let topReviewer = (Math.floor(Math.random() * 8) === 1 ? true : false);
    let starRating = Math.ceil(Math.random()*5);
    let date = faker.date.past();

    let foodType;
    if (restaurantID >=1 && restaurantID <=20) {
      foodType = 'korean';
    }
    else if (restaurantID >=21 && restaurantID <=40) {
      foodType = 'mexican';
    }
    else if (restaurantID >=41 && restaurantID <=60) {
      foodType = 'chinese';
    }
    else if (restaurantID >=61 && restaurantID <=80) {
      foodType = 'italian';
    }
    else if (restaurantID >=81 && restaurantID <=100) {
      foodType = 'burger';
    }

    let comments = commentGenerator(foodType, starRating);
    // console.log(_id);

    instance._id = _id;
    instance.user.firstName = firstName;
    instance.user.firstLetter = firstLetter;
    instance.user.numOfRatings = numOfRatings;
    instance.user.topReviewer = topReviewer;
    instance.starRating = starRating;
    instance.date = date;
    instance.comments = comments;

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