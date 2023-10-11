const express = require('express');
const router = express.Router();
const { list, new: newest, recomended, delete: remove, create, add, detail, destroy, update, edit } = require('../controllers/moviesController');
const {upload} = require('../middlewares/upload');
router
    .get('/movies', list)
    .get('/movies/new', newest)
    .get('/movies/recommended', recomended)
    .get('/movies/detail/:id', detail)
    //Rutas exigidas para la creación del CRUD
    .get('/movies/add', add)
    .post('/movies/create', upload.single('image'), create)
    .get('/movies/edit/:id', edit)
    .put('/movies/update/:id', upload.single('image'), update)
    .get('/movies/delete/:id', remove)
    .delete('/movies/delete/:id', destroy)

module.exports = router;