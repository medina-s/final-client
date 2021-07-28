  
import React, {useState}from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
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
         alert('Review Updated!');
        //  fetch(`${APIURL}review/update/${props.review.id}`, {
            fetch (`http://localhost:3000/review/update/${props.review.id}`, {
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

         })
     }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div>
        <Button className="updatebtn" onClick={toggle}>Update</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader className="updatetitle">Update a Review</ModalHeader>
            <ModalBody>
                <Form onSubmit={reviewUpdate}>
                <FormGroup>
                        <Label htmlFor="movie" className="updatemovietitle">Edit Movie Title</Label>
                        <Input name="movie" className="updatemovie" value={editMovie} onChange={(e)=> setEditMovie(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="date" className="updatedatetitle">Edit Date of the Review</Label>
                        <Input name="date" className="updatedate" value={editDate} onChange={(e)=> setEditDate(e.target.value)}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="feedback" className="updatefeedbacktitle">Edit Feedback</Label>
                        <Input name="feedback" className="updatefeedback" value={editFeed} onChange={(e)=> setEditFeed(e.target.value)}/>
                    </FormGroup>
                    <Button className="updatebtn" type="submit" >Update the Review</Button>
                </Form>
            </ModalBody>
        </Modal>
        </div>
    )
}

export default ReviewUpdate;