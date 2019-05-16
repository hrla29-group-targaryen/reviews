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
  
  let positiveStart = ['I love eating from here! ', 'My family and I order from here twice a week. ',
  'I often order this on my lunch break. ', 'This is a great place to get a family dinner. ',
  'I have them cater my business meetings and my associates love it. ', 'Great for a quick bite. ', 
  'They give you a lot of food for the price! ', 'Always on time!'];
  let neutralStart = ['This place is just okay. ', 'We order from here every once in a while. ', 
  'Food here is hit or miss. ', 'Some of the food is great. ', 'I like this place but dont order on Mondays. ',
  'Great for adults but not for kids. ', 'The food was good but they wont deliver alcohol. ',
  'They forgot to give me utensils or napkins. '];
  let negativeStart = ['I hate this restaurant. ', 'The delivery always takes 3 hours. ',
  'They cancelled my order after I was waiting for an hour! ','Prices here are outrageous. ', 
  'They refuse to deliver because the chef thinks "his food is too good for delivery". ',
  'The food smells terrible every time. ', 'The staff was so rude! ', 
  'I received my food late and it was as cold as the Night King'];

  let positiveMid = [`My favorite is the ${randomFood1}. `, `I ate the ${randomFood1} and it was to die for. `, 
  `We ordered the ${randomFood1} and it was delivered right away. `, `I've never had ${randomFood1} that was so juicy. `,
  `The ${randomFood1} is always so fresh and great. `, `The chef's special is the ${randomFood1}. `, 
  `You will never eat ${randomFood1} anywhere as good as they make it here. `, 
  `The ${randomFood1} tastes great with some hot sauce. `, 
  `I love the ${randomFood1}. It is the best thing on the menu. `,
  `One time they gave me 3 extra orders of ${randomFood1} by accident. `,];
  let neutralMid = [`The ${randomFood1} is good but everything else on the menu sucks. `,
  `If not for the half price ${randomFood1} special on Thursdays, I probably would not order from here. `,
  `My husband likes getting the ${randomFood1}. I'm not a huge fan. `,
  `I ate the ${randomFood1}. Not bad but nothing like the Cheesecake Factory. `,
  `They sent me a box of sushi when I really ordered ${randomFood1}, but they were nice enough to refund my order and give me free food. `,
  `The ${randomFood1} spilled out of the container...but it was still delicious. `];
  let negativeMid = [`There is so much salt in the ${randomFood1}. `, `There was a bug in my ${randomFood1}. `, 
  `My son ate the ${randomFood1} and felt sick all night. `, 
  `I asked if the ${randomFood1} was made with dairy and the employee said no but there so much butter in it; I am lactose intolerant and I feel like I'm going to die. `,
  `I usually love ${randomFood1} but they don't know how to make it the right way. `,
  `The delivery man threw ${randomFood1} at my face. `,
  `One time I was there, someone spilled ${randomFood1} on the floor and it was there for 3 hours before they cleaned it. `];

  let positiveEnd = ['Would definitely recommend! Mmmmmm', 'I would give it 6 stars if I could.', 
  'Cant wait to order this again soon!', 'Best food ive had in a while!', 'Now I know what food should taste like.',
  'My daughter even got a free dessert with her kids meal!', 'They were so nice they gave me a drink on the house.'];
  let neutralEnd = ['I just wish they knew how to pack soup properly.', 'There are better options if you have time.',
  'It is too busy most nights', 'The food was great but it took way too long.', 
  'It was better than I expected, but not great.', 'They forgot my drink.'];
  let negativeEnd = ['I will never eat from here again!.', 'We will be reporting this restaurant to the BBB.',
  'Someone is going to get sick eating here.', 'AVOID AT ALL COSTS!!', 'Order from the place next door instead.',
  'I will be pursuing legal action immediately.', 'Im still hungry!', 'I think I may throw up.', 
  'I would rather eat a hot dog at 7/11', 
  'Every time I ask for extra sauce they put a note in my order that says "What do you think this is, the Bellagio? We dont have Kim Kardashian money".'];

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
comments: String
date: date
}
*/