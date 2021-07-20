// import React, {useState}from 'react';
// import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

// const ReviewUpdate = (props) => {
//     const [editMovie, setEditMovie] = useState(props.reviewToUpdate.movie);
//     const [editDate, setEditDate] = useState(props.reviewToUpdate.date);
//     const [editFeed, setEditFeed] = useState(props.reviewToUpdate.feedback);

//     const reviewUpdate = (event, review) => {
//         console.log("hello");
//         event.preventDefault();
//         fetch(`http://localhost:3000/review/update/${props.reviewToUpdate.id}`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 review:{
//                     movie: editMovie, 
//                     date:editDate, 
//                     feedback: editFeed
//                 }
//             }),
                    
//             headers: new Headers({
//                 'Content-type': 'application/json',
//                 'Authorization': `Bearer ${props.token}`
//             })
//         }).then((res)=>{
//             props.fetchReviews();
//             props.updateOff();
//         })
//     }

//     return(
//         <Modal isOpen={true}>
//             <ModalHeader>Log a Review</ModalHeader>
//             <ModalBody>
//                 <Form onSubmit={reviewUpdate}>
//                     <FormGroup>
//                         <Label htmlFor="feedback">Edit Feedback</Label>
//                         <Input name="feedback" value={editFeed} onChange={(e)=> setEditFeed(e.target.value)}/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor="movie">Edit Movie Title</Label>
//                         <Input name="movie" value={editMovie} onChange={(e)=> setEditMovie(e.target.value)}/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor="date">Edit Date of the Review</Label>
//                         <Input name="date" value={editDate} onChange={(e)=> setEditDate(e.target.value)}>
//                         </Input>
//                     </FormGroup>
//                     <Button type="submit">Update the Review</Button>
//                 </Form>
//             </ModalBody>
       

//         </Modal>
//     )
// }

// export default ReviewUpdate;