const sql = require('better-sqlite3');
const db = sql('meetups.db');

const dummyMeetups = [
  {
    url: 'the-first-meetup',
    title: 'The First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup!'
  },
  {
    url: 'the-second-meetup',
    title: 'The Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the second meetup!'
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meetups (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       url TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       address TEXT NOT NULL,
       description TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meetups VALUES (
         null,
         @url,
         @title,
         @image,
         @address,
         @description
      )
   `);

  for (const meetup of dummyMeetups) {
    stmt.run(meetup);
  }
}

initData();
