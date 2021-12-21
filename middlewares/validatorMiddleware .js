
const {body} = require('express-validator')
// Creamos una propiedad por cada formulario que queramos validar
module.exports = {


    createForm: [
        
        body('name')
            .notEmpty().withMessage('Campo obligatorio').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'), 

        body('description')
            .notEmpty().withMessage('Debes completar el campo de descripción').bail()
            .isLength({ min: 15 }).withMessage('La descripción debe tener al menos 15 caracteres'), 

        body('repository')
            .notEmpty().withMessage('Debes completar el campo de repositorio').bail()
            .isLength({ min: 5 }).withMessage('El repo debe tener al menos 5 caracteres')
        
    ],

    searchForm: [
        body('name')
            .notEmpty().withMessage('Debes completar el campo de busqueda').bail()
            .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
    ]
}