const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'EcoWorld, a blog dedicated to sustainable living and eco-friendly tips',
    tag: 'Environment',
    username: 'GreenGuru',
    date: '2022-03-15',
  },
  {
    id: 3,
    text: 'FitLife, an app that helps users track their fitness goals and progress',
    tag: 'Health',
    username: 'FitnessFanatic',
    date: '2022-05-10',
  },
  {
    id: 4,
    text: 'CookWithLove, a YouTube channel featuring easy and healthy recipes',
    tag: 'Food',
    username: 'ChefMaria',
    date: '2022-07-20',
  },
  {
    id: 5,
    text: 'BookHaven, an online community for book lovers to share reviews and recommendations',
    tag: 'Literature',
    username: 'BookWorm',
    date: '2022-09-05',
  },
  {
    id: 6,
    text: 'TravelTales, a podcast where travelers share their most memorable adventures',
    tag: 'Travel',
    username: 'GlobeTrotter',
    date: '2022-11-25',
  },
];

router.get('/', (req, res) => {
  res.send({ success: true, data: ideas });
});

router.get('/:id', (req, res) => {
  const idea = ideas.find((item) => item.id === parseInt(req.params.id));

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.send({
    success: true,
    data: idea,
  });
});

router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);
  res.json({ success: true, data: idea });
});

router.put('/edit/:id', (req, res) => {
  const idea = ideas.find((item) => item.id === parseInt(req.params.id));
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  const updateIdea = {
    ...idea,
    text: req.body.text ?? idea.text,
    tag: req.body.tag ?? idea.tag,
    username: req.body.username ?? idea.username,
  };

  res.json({ success: true, data: updateIdea });
});

router.delete('/delete/:id', (req, res) => {
  const newIdeas = ideas.filter((item) => item.id !== parseInt(req.params.id));

  if (!newIdeas) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: newIdeas });
});

module.exports = router;
