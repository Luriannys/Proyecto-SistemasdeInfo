import { auth } from './firebase';
import { doc, setDoc } from 'firebase/firestore'
import firestoreService from './FirestoreService'

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

    // Sign in with email and password
    async signIn(email, password) {
        try {
            await this.auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    }

    // Sign out
    async signOut() {
        try {
            await this.auth.signOut();
        } catch (error) {
            console.error('Error signing out:', error);
            throw error;
        }
    }

    // Get the current user (if authenticated)
    getCurrentUser() {
        return this.auth.currentUser;
    }

}

const authService = new AuthService();
export default authService;
