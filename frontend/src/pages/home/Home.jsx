import {Link} from 'react-router-dom';
import './home.css';
import Button from '../../components/Button';
import StudentDashboard from '../../components/StudentDashboard';
import Announcements from '../../components/Announcements';

const Home = () => {
    return (
        <div>
            <div className="head underline underline-offset-8">Student Dashboard</div>
            <div className="page">
                <div className="card">
                    <div className="info">
                        <div className="text">
                            <StudentDashboard />
                            <Announcements />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;