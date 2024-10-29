import { useDispatch, useSelector } from "react-redux"
import NoEventsUploaded from "../Compoents/NoEvent"
import { RootState } from "../Store/strore";
import { EventsData } from "../types/types";
import { DeleteRegisterData } from "../Reducers/RegisteredEvents";

const RegisterEvents = () => {
    const dispatch = useDispatch()
  const RegisterEvent = useSelector((state: RootState) => state.registerEvents);
  
  const DeleteEvent = (description : string) => {
    dispatch(DeleteRegisterData(description))
  }


  return (
    <>
      <div className="event-container">
                {RegisterEvent.length > 0 ? (
                    RegisterEvent.map((event: EventsData, index: number) => (
                        <div className="container" key={index}>
                            <div className="banner-image">
                                <img src={event.img} alt={event.title} />

                            </div>
                            <h1>{event.title}</h1>
                            <p>{event.description}</p>
                            <p>{event.price}</p>
                            <div className="button-wrapper">
                                <div className="btn outline">{event.location}</div>
                                <button onClick={() => DeleteEvent(event.description)} className=" btn-fill-del">Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <NoEventsUploaded event={'Registered'} />
                )}
             </div> 
    </>
  )
}

export default RegisterEvents
