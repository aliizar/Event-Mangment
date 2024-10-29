import '../CSS/NoEvent.css';
type Proptype ={
    event : string  
}
const NoEventsUploaded = ({event} : Proptype) => {
    return (
            <div className="no-events-message">
                <h2>No Events {event} Yet</h2>
                <p>It looks a bit empty here. Start uploading your events now!</p>
            </div>
    );
};

export default NoEventsUploaded;
