const generator = require ('./mockdata.js');
const model = require ('./model.js');

let data = generator(5);
console.log(data);

const seeder = (data) => {
  model.ReviewList.insertMany(data)
    .then(() => console.log('Success adding data to database!'))
    .catch(err => console.log(err))
}

seeder();