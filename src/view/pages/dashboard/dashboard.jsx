import './dashboard.css';
import authService from '../../../controller/services/AuthService';

export default function Dashboard() {
    return (
        <>
            <button type="button" className="send" onClick={() => authService.signOut()}>logout</button>
            <p>{authService.getCurrentUser()?.email}</p>
        </>

    )
}