import { Group } from "./Group"
import { Category } from "./Category";
class user extends admin{
    constructor(name,email,password,phone,isadmin){
        //llamado a clase de usuario
        super(name,email,password,phone,true);
    }
    //Crear Agrupacion
    createGroup(Name,Cat,CreationYear,Instagram,Email,Desc){
        newgroup= new Group(Name,Cat,CreationYear,Instagram,Email,Desc);
        return(newgroup);
    }
}