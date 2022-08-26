const CourseModel = require('../models/Course.model');

module.exports.courseController = {
  addCourse: async (req, res) => {
    try {
      const { name, language, price, duration } = req.body;
      const addCourse = await CourseModel.create({
        name: name,
        language: language,
        price: price,
        duration: duration,
      });
      res.json(addCourse);
    } catch (error) {
      console.log(error);
    }
  },
};
