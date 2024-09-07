const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.send({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.send({ success: true, data: idea });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.post('/', async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log('The dataBase error', error);
    res.status(500).json({ success: false, error: 'The idea is not save' });
  }
});

router.put('/edit/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (idea.username === req.body.username) {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        { new: true }
      );
      return res.json({ success: true, data: updatedIdea });
    }

    res.status(403).json({
      success: false,
      error: 'You don`t have permission to Update this idea',
    });
  } catch (error) {
    console.log('Error do update', error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {}, messege: 'Deleted' });
    }

    res.status(403).json({
      success: false,
      error: 'You don`t have permission to Delete this idea',
    });
  } catch (error) {
    console.log('Error do update', error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

module.exports = router;
