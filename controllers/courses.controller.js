const CourseModel = require('../models/Course.model');

const { name, language, price, duration } = req.body;

module.exports.courseController = {
  addCourse: async (req, res) => {
    try {
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
  editCourse: async (req, res) => {
    try {
      const editCourse = await CourseModel.findByIdAndUpdate(req.params.id, {
        name: name,
        language: language,
        price: price,
        duration: duration,
      });
      res.json(editCourse);
    } catch (error) {
      console.log(error);
    }
  },
  deleteCourse: async (req, res) => {
    try {
      const deleteCourse = await CourseModel.findByIdAndDelete(req.params.id);
      res.json(deleteCourse);
    } catch (error) {
      console.log(error);
    }
  },
  getCourses: async (req, res) => {
    try {
      const getProds = await CourseModel.find();
      res.json(getProds);
    } catch (error) {
      console.log(error);
    }
  },
  getCourseById: async (req, res) => {
    try {
      const getCourseById = await CourseModel.findById(req.params.id);
      res.json(getCourseById);
    } catch (error) {
      console.log(error);
    }
  },
};
