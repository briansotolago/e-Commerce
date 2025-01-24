const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//http://localhost:3001/api/tags/
  router.get('/', async (req, res) => {
    try {
      const tagData = await Tag.findAll({
        include: [{ model: Product, through: ProductTag, as: 'products' }],
      });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//http://localhost:3001/api/tags/1
  router.get('/:id', async (req, res) => {
    try {
      const tag = await Tag.findByPk(req.params.id, {
        include: [{ model: Product, through: ProductTag }],
      });
  
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
  
      res.status(200).json(tag);
    } catch (err) {
      res.status(500).json(err);
    }
});

//http://localhost:3001/api/tags/
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

//http://localhost:3001/api/tags/1
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows === 0) {
      res.status(404).json({ message: 'Tag not found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/tags/1
router.delete('/:id', async (req, res) => {
  try {
    const affectedRows = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows === 0) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
