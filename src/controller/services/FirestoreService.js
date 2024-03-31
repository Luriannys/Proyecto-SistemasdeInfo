import { db } from './firebase';
import { Group } from '../../model/Group';
class FirestoreService {
    constructor() {
        if (!FirestoreService.instance) {
            this.db = db;
            FirestoreService.instance = this;
        }
        return FirestoreService.instance;
    }
}

const firestoreService = new FirestoreService();
//Obtencion de agrupaciones en la base de datos
var agrupaciones = [];
const FireAgrupaciones = firestoreService.db.doc("Agrupaciones");
const querySnapshot = await FireAgrupaciones;
querySnapshot.forEach((doc) =>{
    const agrupacion = new Group(/*agregar parametros al firebase para continuar*/);
})

export default (firestoreService,agrupaciones);