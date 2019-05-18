const generator = require ('./mockdata.js');
const model = require ('./model.js');

let myData = generator(3);

const seeder = () => {
  model.insertMany(myData)
    .then(() => console.log('Success adding data to database!'))
    .catch(err => console.log(err))
}

seeder();