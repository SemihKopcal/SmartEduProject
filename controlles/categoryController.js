const Category = require("../models/Category");

exports.creatCategory = async (req, res) => {
  try {
    const category= await Category.create(req.body)
    
    res.status(201).json({
      status: 'sucsess',
      category,
    });
    // res.send("veri olusturuldu!");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
