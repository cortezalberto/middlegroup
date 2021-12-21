const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');

const groupsModel = jsonTable('groups');

const { validationResult } = require('express-validator');



module.exports = {
    index: (req, res) => {

        let groups = groupsModel.all()

        res.render('groups/index', { groups });
    },


    create: (req, res) => {
        res.render('groups/create');
    },


    store: (req, res) => {
        console.log("Entre al almacenar del controlador de Grupo");
        let group = req.body;
        console.log('MUESTRO LOS CAMPOS DEL BODY');
        console.log(req.body);

        // Solicito algo que puede venir o no
        // si no existe es undefined
        console.log('MUESTRO LOS CAMPOS DEL FILE');
        console.log(req.file);

        //validación propia    
        const matrizDeValidaciones = validationResult(req)
        // si no está vacía , significa que tiene errores
        if (!matrizDeValidaciones.isEmpty()) {
            console.log(req.body)
            // Para Mantener los valores anteriores del body
            // y cuando volvelos a pintar en  el html no borre los correctos

            const valoresRecibidos = req.body
            // Para los errores 
            const validacionesVerificadas = matrizDeValidaciones.mapped()
            console.log('antes de renderizar Alberto')
            console.log("------COMO ARRAY--------")

            console.log(matrizDeValidaciones)
            
            console.log("---------COMO OBJETO LITERAL-------------")
            console.log(validacionesVerificadas)
    
           
            res.render('groups/create',
                { validacionesVerificadas 
                    , valoresRecibidos })
            console.log('despues de renderizar')


        } else {
            groupId = groupsModel.create(group);

            res.redirect('/groups/' + groupId);

        }

     
      
    },

    show: (req, res) => {
        let group = groupsModel.find(req.params.id);

        res.render('groups/detail', { group });
    }
}