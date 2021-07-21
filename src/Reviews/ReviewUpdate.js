import React, {useState}from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ReviewUpdate = (props) => {
    // const [editMovie, setEditMovie] = useState(props.reviewToUpdate.movie);
    // const [editDate, setEditDate] = useState(props.reviewToUpdate.date);
    // const [editFeed, setEditFeed] = useState(props.reviewToUpdate.feedback);

    // const reviewUpdate = (event, review) => {
    //     console.log("hello");
    //     event.preventDefault();
    //     fetch(`http://localhost:3000/review/update/${props.review.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             review:{
    //                 movie: editMovie, 
    //                 date:editDate, 
    //                 feedback: editFeed
    //             }
    //         }),
                    
    //         headers: new Headers({
    //             'Content-type': 'application/json',
    //             'Authorization': `Bearer ${props.sessionToken}`
    //         })
    //     }).then((res)=>{
    //         props.fetchReviews();
    //         props.updateOff();
    //     })
    // }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        // <Modal isOpen={true}>
        //     <ModalHeader>Update a Review</ModalHeader>
        //     <ModalBody>
        //         <Form onSubmit={reviewUpdate}>
        //             <FormGroup>
        //                 <Label htmlFor="feedback">Edit Feedback</Label>
        //                 <Input name="feedback" value={editFeed} onChange={(e)=> setEditFeed(e.target.value)}/>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlFor="movie">Edit Movie Title</Label>
        //                 <Input name="movie" value={editMovie} onChange={(e)=> setEditMovie(e.target.value)}/>
        //             </FormGroup>
        //             <FormGroup>
        //                 <Label htmlFor="date">Edit Date of the Review</Label>
        //                 <Input name="date" value={editDate} onChange={(e)=> setEditDate(e.target.value)}>
        //                 </Input>
        //             </FormGroup>
        //             <Button type="submit" onClick={ReviewUpdate}>Update the Review</Button>
        //         </Form>
        //     </ModalBody>
        <div>
        <Button color="danger" onClick={toggle}>Review</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{props.review.id}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
        // </Modal>


    )
}

export default ReviewUpdate;