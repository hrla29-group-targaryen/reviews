const generator = require ('./mockdata.js');
const ReviewList = require ('./model.js');

let myData = generator(3);

const seeder = () => {
  ReviewList.insertMany(myData)
    .then(() => console.log('Success adding data to database!'))
    .catch(err => console.log(err))
}

seeder();