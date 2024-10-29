import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store/strore";
import { EventsData } from "../types/types";
import NoEventsUploaded from "../Compoents/NoEvent";
import { DeleteOneData } from "../Reducers/uploadsData";
import { RemoveData } from "../Reducers/fetchData";

const YourUploads = () => {
    const UpdatedEvents = useSelector((state: RootState) => state.AddedEvents);
    const dispatch = useDispatch()

  


    const DeleteEvent = async (id: string) => {
      console.log(id);
      
        dispatch(DeleteOneData(id)); 
        try {
          const response = await fetch(`http://localhost:4000/events/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            dispatch(RemoveData(id));  
            console.log('Event deleted successfully from the server and local state.');
          } else {
            console.error('Failed to delete event from the server.');
          }
        } catch (error) {
          console.error('Error deleting event:', error);
        }
      };


      console.log(UpdatedEvents);
      
      
    

    return (
        <>
            <div className="event-container">
                {UpdatedEvents.length > 0 ? (
                    UpdatedEvents.map((event: EventsData, index: number) => (
                        <div className="container" key={index}>
                            <div className="banner-image">
                                <img src={event.img} alt={event.title} />

                            </div>
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                            <p>{event.price}</p>
                            <div className="button-wrapper">
                                <div className="btn outline">{event.location}</div>
                                <button onClick={() => DeleteEvent(event.id!)} className=" btn-fill-del">Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <NoEventsUploaded event={'Uploaded'} />
                )}
            </div>
        </>
    );
}

export default YourUploads;
