const db = require('./models');

const events = [
  { name: 'Event 1', completed: true}, 
  { body: 'Event 2', completed: false}
];
const oneEvent = { name: 'Event 3', completed: true };

const addManyEvents = async () => {
  const savedEvents = await db.Event.insertMany(events);
  console.log('=======> Saved Events.');
  console.log(savedEvents);
}

const addOneEvent = async () => {
  const savedOneEvent = await db.Event.create(oneEvent);
  console.log('=======> Saved One Event.');
  console.log(savedOneEvent);
}

// run the functions
addManyEvents();
addOneEvent();