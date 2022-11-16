const Category = require("../models/categoryModel");

const addCategory = async (req, res) => {
  try {
    const category_data = await Category.find();

    if (category_data.length > 0) {
      let checking = false;

      for (let i = 0; i < category_data.lenght; i++) {
        if (
          category_data[i]["category"].toLowerCase() ===
          req.body.category.toLowerCase()
        ) {
          console.log(category_data[i]);
          checking = true;
          break;
        }
      }
      console.log(checking);

      if (checking == false) {
        const category = new Category({
          category: req.body.category,
        });
        const cat_data = await category.save();
        res
          .status(200)
          .send({ success: true, msg: "Category Data", data: cat_data });
      } else {
        res.status(200).send({
          success: false,
          msg: "This category (" + req.body.category + ") alredy exists!",
        });
      }
    } else {
      const category = new Category({
        category: req.body.category,
      });
      const cat_data = await category.save();
      res
        .status(200)
        .send({ success: true, msg: "Category Data", data: cat_data });
    }
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }
};

module.exports = {
  addCategory,
};
