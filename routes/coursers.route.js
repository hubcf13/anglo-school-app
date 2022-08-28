const Router = require('express');
const { courseController } = require('../controllers/courses.controller');
const router = new Router();

router.get('/couses', courseController.getCourses);
router.get('/couse/:id', courseController.getCourseById);
router.post('/add/course', courseController.addCourse);
router.patch('/edit/course/:id', courseController.editCourse);
router.delete('delete/course/:id', courseController.deleteCourse)

module.exports = router;
