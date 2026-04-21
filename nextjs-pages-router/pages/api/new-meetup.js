import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meetups.db');

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    data.url = slugify(data.title, { lower: true });
    data.description = xss(data.description);

    await new Promise(resolve => setTimeout(() => resolve(), 3000));

    db.prepare(`
      INSERT INTO meetups 
        (url, title, image, address, description)
      VALUES
        (@url, @title, @image, @address, @description)
    `).run(data);

    res.status(201).json({ message: 'Meetup added.' });
  }
}

export default handler;
