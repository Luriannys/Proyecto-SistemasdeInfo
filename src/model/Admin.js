import { Group } from "./Group"
import { Category } from "./Category";
import { db } from './firebase';
class user extends admin{
    constructor(name,email,password,phone,isadmin){
        //llamado a clase de usuario
        super(name,email,password,phone,true);
    }
    //Crear Agrupacion
    async createGroup(Cat,Desc,Email,img,insta,Name,tlf){
        const FirebaseAgg = db.collection("Agrupaciones");
        //Creacion del documento de agrupacion
        await FirebaseAgg.add({
            category: Cat,
            descripcion: Desc,
            email: Email,
            imagen: img,
            instagram: insta,
            nombre: Name,
            telefono: tlf,
            testimonios: null,
        });
    }
    async deleteGroup(GroupId){
        const FirebaseAgg = db.collection("Agrupaciones");
        await FirebaseAgg.doc(GroupId).delete();
    }
    async editGroup(GroupId,Cat,Desc,Email,img,insta,Name,tlf){
        const FirebaseAgg = db.collection("Agrupaciones");
        FirebaseAgg.doc(GroupId).update({
            category: Cat,
            descripcion: Desc,
            email: Email,
            imagen: img,
            instagram: insta,
            nombre: Name,
            telefono: tlf,
        });
    }
    async createCategory(Name){
        const FirebaseCatt = db.collection("Categorías");
        //Creacion del documento de Categoría
        await FirebaseCatt.add({
            nombre: Name
        });
    }
    async deleteCategory(CatId){
        const FirebaseCatt = db.collection("Categorías");
        //Eliminar documento de Categoría
        await FirebaseCatt.doc(CatId).delete();
    }
    async editCategory(CatId,newname){
        const FirebaseCatt = db.collection("Categorías");
        await FirebaseCatt.doc(CatId).set({
            nombre: newname
        })
    }
}