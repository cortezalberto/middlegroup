const express = require('express');
const router = express.Router();

const controller = require('../controllers/groupsController');

const upload = require('../middlewares/multerMiddleware');
const {createForm} = require('../middlewares/validatorMiddleware ');


console.log('Estoy en groups 1');
// Todos los grupos
router.get('/', controller.index);

// Formulario de creación
router.get('/create', controller.create);

// Procesamiento del formulario de creación
router.post('/', upload.single('group-image'), createForm ,controller.store);

// Detalle de un grupo
router.get('/:id', controller.show);

module.exports = router;