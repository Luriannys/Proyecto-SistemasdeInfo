import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { auth } from './firebase';
import firestoreService from './FirestoreService'
import { doc, setDoc, getDoc } from 'firebase/firestore'


const googleProider = new GoogleAuthProvider();
googleProider.setCustomParameters({
    prompt: "select_account "
});

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
            const user = await createUserWithEmailAndPassword(this.auth, email, password);
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

    async signUpWithGoogle() {
        try {
            const result = await signInWithPopup(this.auth, googleProider);
            const user = result.user;
            const userRef = doc(firestoreService.db, 'users', user.uid)
            const docSnap = await getDoc(userRef);
            if (!docSnap.exists()) {
                await setDoc(userRef, {
                    name: user.displayName,
                    email: user.email,
                    phoneNumber: user.phoneNumber != null ? user.phoneNumber : null,
                })
            } else {
                console.log("The user already exists");
            }
            return result;
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    }

    // Sign in with email and password
    async signIn(email, password) {
        try {
            await signInWithEmailAndPassword(this.auth, email, password);
        } catch (error) {
            console.error('Error signing in:', error);
            throw error;
        }
    }

    // Sign out
    async signOut() {
        try {
            await signOut(this.auth);
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
