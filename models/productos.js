const pool = require('./../utils/bd');
const TABLA_ITEMS = "items";

const get = async(habilitado)=>{
    try{
        const query = "SELECT * FROM ?? WHERE habilitado = ?";
        const params = [TABLA_ITEMS, habilitado];
        return await pool.query(query, params)

    }catch(e){
        console.log(e)
    }
}

const create = async(obj)=>{
    try{
        const query = "INSERT INTO ?? SET ?";
        const params = [TABLA_ITEMS, obj];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
 

}

const eliminar = async(habilitado, id)=>{
    try{
        const query = "UPDATE ?? SET habilitado = ? WHERE id = ?";
        const params = [TABLA_ITEMS, habilitado, id];
        return await pool.query(query, params);
    }catch(e){
        console.log(e);
    }
}

const update = async(id, proModif)=>{
    try{
       const query = "UPDATE ?? SET ? WHERE id = ?"
        const params = [TABLA_ITEMS, proModif, id]
        return await pool.query(query, params);

    }catch(e){
        console.log(e)
    }
}

const single = async(id)=>{
    try{
        const query = "SELECT * FROM ?? WHERE id = ?";
        const params = [TABLA_ITEMS, id];
        return await pool.query(query, params)
    }catch(e){
        console.log(e)
    }
}

module.exports = {get, eliminar, create, update, single}