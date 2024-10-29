import '../CSS/Event.css';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { EventsData } from '../types/types';
import Loading from '../Compoents/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/strore';
import { setData } from '../Reducers/fetchData';
import { PushRegisterData } from '../Reducers/RegisteredEvents';
import { useAuth0 } from '@auth0/auth0-react';
import Alert from '../Compoents/Alert';
import { selectIsRegisteredAgain } from "../Reducers/RegisteredEvents";

const Event = () => {
    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [showAlert, setShowAlert] = useState('');
    const { isLoading, error, data: events } = useQuery({
        queryKey: ['events'],
        queryFn: () => fetch('http://localhost:4000/events').then((res) => res.json()),
    });

    useEffect(() => {
        if (events) {
            dispatch(setData(events));
        }
    }, [events, dispatch]);

    const EventsResData = useSelector((state: RootState) => state.event);
    const RegisTeredData = useSelector((state: RootState) => state.registerEvents);

    if (isLoading) return <Loading />;

    if (error) return 'An error has occurred: ' + error.message;

    const filteredEvents = EventsResData.filter((event: EventsData) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const HandleRegisterData = (event: EventsData) => {
        const isRegistered = selectIsRegisteredAgain(RegisTeredData, event);
        
        if (!isRegistered) {
            dispatch(PushRegisterData(event));
            setShowAlert('Event Registered');
        } else {
            setShowAlert('Event Already Registered');
        }

        // Clear the alert after 3 seconds
        setTimeout(() => {
            setShowAlert('');
        }, 3000);
    };

    return (
        <>
            <hr />
            <center className='EventsHeading'>
                Events! You Waiting for..?
            </center>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Event..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {showAlert && <Alert message={showAlert} to='/dashboard/registered' />}

            <div className="event-container">
                {filteredEvents.length > 0 ? (
                    filteredEvents.reverse().map((event: EventsData, index: number) => (
                        <center key={index}>
                            <div className="container">
                                <div className="wrapper">
                                    <div className="banner-image">
                                        <img src={event.img} alt={event.id} />
                                    </div>
                                    <h1>{event.title}</h1>
                                    <p>{event.description}</p>
                                </div>
                                <p>{event.price}</p>
                                <div className="button-wrapper">
                                    <div className="btn outline">{event.location}</div>
                                    <button 
                                        onClick={() => isAuthenticated ? HandleRegisterData(event) : null} 
                                        className="btn fill" 
                                        disabled={!isAuthenticated}
                                    >
                                        {isAuthenticated ? 'Register' : 'Login to Register'}
                                    </button>
                                </div>
                            </div>
                        </center>
                    ))
                ) : (
                    <p>No events found matching your search.</p>
                )}
            </div>
        </>
    );
};

export default Event;
