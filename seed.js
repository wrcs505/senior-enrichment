const db = require('./db');
const Campus = require('./db/models/campus');
const Student = require('./db/models/student');


const campuses = [{
  name: 'Clemson',
  photo: '/images/clemson.png'
}, {
  name: 'Auburn',
  photo: '/images/auburn.png'
}, {
  name: 'Florida',
  photo: '/images/florida.png'
}, {
  name: 'Georgia',
  photo: '/images/georgia.png'
}];

const students = [{
  name: 'Cody',
  email: 'seed@cody.jpg'
}, {
  name: 'Ben',
  email: 'seed@ben.jpg'
}, {
  name: 'Star',
  email: 'seed@star.jpg'
}, {
  name: 'Batman',
  email: 'seed@batman.jpg'
}, {
  name: 'Elliott',
  email: 'seed@elliott.com'
}, {
  name: 'Fira',
  email: 'seed@fira.com'
}, {
  name: 'Henry',
  email: 'seed@henry.com'
}, {
  name: 'Marcy',
  email: 'seed@marcy.com'
}, {
  name: 'Milton',
  email: 'seed@milton.com'
}, {
  name: 'Murphy',
  email: 'seed@murphy.com'
}, {
  name: 'Raffi',
  email: 'seed@raffi.com'
}, {
  name: 'Tulsi',
  email: 'seed@tulsi.com'
}, {
  name: 'Pork Chop',
  email: 'seed@pork_chop.com'
}, {
  name: 'Ribs',
  email: 'seed@ribs.com'
}, {
  name: 'Stacey',
  email: 'seed@stacey.com'
}, {
  name: 'JD',
  email: 'seed@jd.com'
}, {
  name: 'BenBen',
  email: 'seed@benben.com'
}, {
  name: 'Odie',
  email: 'seed@odie.com'
}];

// const id = () => Math.round(Math.random() * (students.length - 1)) + 1;

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ))


const main = () => {
  console.log('Syncing db...');
  db.didSync
  .then(() => {
    console.log('Seeding databse...');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    return null;
  });
};

main();
