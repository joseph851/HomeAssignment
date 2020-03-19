const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.post('/signup', async (req, res) => {
  const {name, price, category, description, logo, photos} = req.body.product;
  try {
    const product = new Product({
      name,
      price,
      category,
      description,
      logo,
      photos,
    });
    await product.save();
    res.send('you made post req');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

////////////////////////////////////////////

// return list of all products
// router.get('/all', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

////////////////////////////////////////////

router.get('/result/:id', async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

////////////////////////////////////////////

router.get('/list/:num/:cat', async (req, res) => {
  const cat = req.params.cat;
  const num = req.params.num;
  try {
    const products = await Product.find({category: cat}).limit(parseInt(num));
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

////////////////////////////////////////////

router.get('/search/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const products = await Product.find({
      name: {$regex: new RegExp(name, 'i')}, //for case insensitive (TikTok and tiktok are equal)
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
