import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment';


const ReviewCreate = (props) => {
    const [movie, setMovie] = useState('');
    const [date, setDate] = useState('');
    const [feedback, setFeedback] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.sessionToken);
        fetch(`${APIURL}/review/create`, {
            method: 'POST',
            body: JSON.stringify({review: {movie: movie, date: date, feedback: feedback}}),
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then((res)=> res.json())
        .then((logData) => {
            console.log(logData);
            setMovie('');
            setDate('');
            setFeedback('');
        })
    }

    return(
        <div className="moviereview">
        <h3>Leave your feedback</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="movie"/>
                <Input name="movie" placeholder="Movie" value={movie} onChange={(e)=> setMovie(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="date"/>
                <Input name="date" placeholder="Date" value={date} onChange={(e)=> setDate(e.target.value)}>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="feedback"/>
                <Input name="feedback" placeholder="Enter your review" value={feedback} onChange={(e)=> setFeedback(e.target.value)}/>
            </FormGroup>
            <Button type="submit">Click to submit</Button>
        </Form>
        </div>
    )
}

export default ReviewCreate;