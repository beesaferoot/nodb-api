
const express = require('express');
const router = express.Router();
const employees = require('../../models/employee');

function getEmployees(req, res) {
    if (req.query.id || req.query.name) {
        console.log(req.query)
        return getEmployee(req, res);
    }
    if (employees) {
        res.status(200).json(employees);
    } else {
        res.status(404).json({
            message: "No employee found" 
        })
    }
}

function getEmployee(req, res) {
    console.log(typeof req.query.id);
    if (req.query.id) {
        if (!isNaN(req.query.id)) {
            req.params.id = req.query.id
            return getEmployeebyId(req, res);
        } else{
            req.params.name = req.query.id
            return getEmployeebyName(req, res)
        }

    } else {
        res.status(400).json({
            message: "no search parameter specified"
        })
    }
}

function getEmployeebyId(req, res) {
    for (employee of employees) {
        if (employee.id === parseInt(req.params.id)) {
            res.status(200).json(employee);
        }
    }
    res.status(404).json({
        message: `No employee with the id ${req.params.id}`
    })
}

function getEmployeebyName(req, res) {
   
    for (employee of employees) {
        if (employee.name === req.params.name) {
            res.status(200).json(employee);
        }
    }
    res.status(404).json({
        message: `No employee with the name ${req.params.name}`
    })
}

router.get('/', getEmployees);




module.exports = router;