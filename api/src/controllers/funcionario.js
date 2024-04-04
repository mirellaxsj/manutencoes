const e = require('express');
const con = require('../connect/mysql');

const createFuncionario = (req, res) => {
    const {matricula, nome, telefone} = req.body;
    const sql = "INSERT INTO funucionario (matricula, nome) VAALUES (?, ?)";
    con.query(sql, [matricula, nome], (err, result) => {
        if (err) {
            res.json(err);
        }else {
            res.json(result);
        }
    });
}


const readFuncionarios = (req, res) => {
    const sql = "SELECT * FROM funcionario";
    con.query(sql, (err, result) => {
        if (err) {
            res.json(err);
        }else {
            res.json(result);
        }
    });
}

    const readFuncionario = (req, res) => {
        const sql = "SELECT * FROM vw_funcionario WHERE matricula = ?";
        con.query(sql, [req.params.matricula], (err, result) => {
            if (err) {
                res.json(err);
            }else {
                res.json(result);
            }
        });
    }
    
module.exports = {
    readFuncionarios,
    readFuncionario
}