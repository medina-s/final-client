import React, {useState}from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import APIURL from '../helpers/environment';

const ReviewUpdate = (props) => {
    console.log(props)
     const [editMovie, setEditMovie] = useState(props.review.movie);
     const [editDate, setEditDate] = useState(props.review.date);
     const [editFeed, setEditFeed] = useState(props.review.feedback);

     const reviewUpdate = (event, review) => {
      const token = localStorage.getItem("token")
         console.log(props);
         event.preventDefault();
         fetch(`${APIURL}/review/update/${props.review.id}`, {
             method: 'PUT',
             body: JSON.stringify({
                 review:{
                     movie: editMovie, 
                     date:editDate, 
                     feedback: editFeed
                 }
             }),
                    
             headers: new Headers({
                 'Content-type': 'application/json',
                 'Authorization': `Bearer ${token}`
             })
         }).then((res)=>{
             props.fetchReviews();
            toggle();

            //  props.updateOff();
         })
     }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
        <Button color="danger" onClick={toggle}>Update</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader>Update a Review</ModalHeader>
            <ModalBody>
                <Form onSubmit={reviewUpdate}>
                    <FormGroup>
                        <Label htmlFor="feedback">Edit Feedback</Label>
                        <Input name="feedback" value={editFeed} onChange={(e)=> setEditFeed(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="movie">Edit Movie Title</Label>
                        <Input name="movie" value={editMovie} onChange={(e)=> setEditMovie(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date">Edit Date of the Review</Label>
                        <Input name="date" value={editDate} onChange={(e)=> setEditDate(e.target.value)}>
                        </Input>
                    </FormGroup>
                    <Button type="submit" >Update the Review</Button>
                </Form>
            </ModalBody>
        </Modal>
        </div>
    )
}
export default ReviewUpdate;