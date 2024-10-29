import React, { useState } from 'react';
import '../CSS/Form.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EventsData } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PushData } from '../Reducers/uploadsData';
import Alert from '../Compoents/Alert';

const EventForm: React.FC = () => {
  const { handleSubmit, register , reset} = useForm<EventsData>();
  const [ ShowAlert , setSHowAlert] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitForm: SubmitHandler<EventsData> = async (eventData) => {
    
    try {
      const response = await fetch('http://localhost:4000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData), 
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    reset();
    console.log(eventData);
    
    dispatch(PushData(eventData))
    setSHowAlert(true)
    
    setTimeout(() => {
      
      navigate('/event')
      setSHowAlert(false)
    }, 3000);
  };

  return (
    <>
   
    {ShowAlert  &&  <Alert message='Event Submitted' to='/dashboard/uploads' />}
    <form onSubmit={handleSubmit(submitForm)} className="event-form">
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" {...register('title')} required />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" {...register('description')} rows={5} required />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" {...register('location')} required />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" {...register('price')} required />
      </div>

      <div>
        <label htmlFor="imgUrl">Image URL</label>
        <input type="text" id="imgUrl" {...register('img')} placeholder="Enter image URL" required />
      </div>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default EventForm;
