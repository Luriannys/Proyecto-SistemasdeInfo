import { db } from '../controller/services/firebase.js';
import { doc,collection, addDoc, getDoc,deleteDoc,updateDoc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore";
class Controller{
    constructor(){
    }
    
    //Los id deben ser strings

    async joinmember(UseruId,AgId){
        const Agrupacion = doc(db,"Agrupaciones",AgId);
        await updateDoc(Agrupacion,{
            Members: arrayUnion(UseruId)
        });
    }
    async deletememeber(UseruId,AgId){
        const Agrupacion = doc(db,"Agrupaciones",AgId);
        await updateDoc(Agrupacion,{
            Members: arrayRemove(UseruId)
        });
    }
    async addcomment(AgId,Text){
        const Agrupacion = doc(db,"Agrupaciones",AgId);
        await updateDoc(Agrupacion,{
            testimonios: arrayUnion(Text)
        });
    }
    async addrating(AgId,Float){
        const Agrupacion = doc(db,"Agrupaciones",AgId);
        const docSnap = await getDoc(Agrupacion);
        const oldRating = parseFloat(docSnap.data().PromRating);
        var newrating=((oldRating+Float)/2);
        await updateDoc(Agrupacion,{
            PromRating: newrating
        });
    }
}
const Controlador = new Controller();
export default Controlador;