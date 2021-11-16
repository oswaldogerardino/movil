//database
import pool from '../settings/database';

let list = async (req, res, next) => {

  try {
    
    const data = await pool.query('SELECT * FROM admin');

    res.status(200).json(data.rows)


  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

let getUserById = async (req, res, next) => {

  try {

    const data = await pool.query('SELECT * FROM admin WHERE admin_id=$1', [req.params.id])

    res.status(200).json({
      message: 'Usuario consultado exitosamente',
      body:{
        user: data.rows
      }
    });
    
  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

//CREATE
let add = async (req, res, next) => {

  try {

    const { first_name, last_name, encrypted_password, email, admin_type } = req.body;

    const response= await pool.query('INSERT INTO admin (first_name, last_name, encrypted_password, email, admin_type) VALUES($1 ,$2 ,$3 ,$4 ,$5)',[first_name, last_name, encrypted_password, email, admin_type]);
    console.log(response);

    res.json({
      message: 'Usuario agregado exitosamente',
      body: {
        user: {first_name, email}
      },
      status:200
    });


    res.send('usuario creado')
    
  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

let update = async (req, res, next) => {
  
  try {
    const id = req.params.id;
    const {first_name} = req.body;
    
    const response= await pool.query('UPDATE admin SET first_name = $1 WHERE admin_id = $2',[first_name, id]);

    res.status(200).json({

      message: 'Usuario Actualizado',
      body:{
        usuario_id: id,        
      }

    });
    
  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

let activate = (req, res, next) => {

  try {
    
  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

let deactivate = (req, res, next) => {

  try {
    
  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};

let remove = async (req, res, next) => {

  try {
    
    await pool.query('DELETE FROM admin WHERE admin_id=$1',[req.params.id]);

    res.status(200).json({

      message:`Usuario ${req.params.id} eliminado exitosamente`

    });

  } catch (e) {
    res.status(500).send({
      message:'error en el proceso'
    });
  }

};


export default {
  list, getUserById, add, update, activate, deactivate, remove
}