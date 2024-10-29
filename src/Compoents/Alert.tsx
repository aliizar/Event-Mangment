
import { Link } from 'react-router-dom';
import '../CSS/alert.css'

type propsTypes = {
    message: string,
    to : string
}

const Alert = ({ message , to }: propsTypes) => {


    return (
        <div className="notification">
            <div className="notification-header">
                <h3 className="notification-title">{message}</h3>
                <i className="fa fa-times notification-close"></i>
            </div>
            <div className="notification-container">
                <div className="notification-media">
                    
                </div>
                <div className="notification-content">
                    <p className="notification-text">
                        <strong>Event </strong>, <strong>{message}</strong> <strong></strong>
                    </p>
                    <Link to={to}> <span className="notification-timer">View</span></Link>
                </div>
                <span className="notification-status"></span>
            </div>
        </div>
    );
};

export default Alert;
