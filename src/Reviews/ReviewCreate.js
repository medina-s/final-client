import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const ReviewCreate = (props) => {
    // const accessToken = localStorage.getItem('SessionToken')
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');
    const [feedback, setFeedback] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/review/create`, {
            method: 'POST',
            body: JSON.stringify({review: {movie: movie, date: date, feedback: feedback}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
        }).then((res)=> res.json())
        .then((logData) => {
            console.log(logData);
            setMovie('');
            setDate('');
            setFeedback('');
            props.fetchReviews();
        })
    }

    return(
        <>
        <h3>Leave your feedback</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="movie"/>
                <Input name="movie" value={movie} onChange={(e)=> setMovie(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="date"/>
                <Input name="date" value={date} onChange={(e)=> setDate(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="feedback"/>
                <Input name="feedback" value={feedback} onChange={(e)=> setFeedback(e.target.value)}/>
            </FormGroup>
            <button type="submit">Click to submit</button>
        </Form>
        </>
    )
}

export default ReviewCreate;