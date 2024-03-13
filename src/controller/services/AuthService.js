import { auth } from './firebase';
import firestoreService from './FirestoreService'
import { doc, setDoc } from 'firebase/firestore'

class AuthService {
    constructor() {
        if (!AuthService.instance) {
            this.auth = auth;
            AuthService.instance = this;
        }
        return AuthService.instance;
    }

    // Sign up with email and password
    async signUp(email, password, name, phone) {
        try {
            const user = await this.auth.createUserWithEmailAndPassword(email, password);
            console.log(user.user.uid)
            const userRef = doc(firestoreService.db, 'users', user.user.uid)
            await setDoc(userRef, {
                name: name,
                email: email,
                phoneNumber: phone,
            })
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    }


}

const authService = new AuthService();
export default authService;
