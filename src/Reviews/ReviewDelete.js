import React from 'react';
import {Button, Table} from 'reactstrap';

const ReviewDelete = (props) => {
    const deleteReview = (review) => {
        fetch(`http://localhost:3000/log/delete/${review.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => props.fetchReview())
    }

    // const reviewMapper = () => {
    //     return props.reviews.map((review, index) => {
    //         return(
    //             <tr key={index}>
    //                 <th scope="row">{review.id}</th>
    //                 <td>{review.movie}</td>
    //                 <td>{review.date}</td>
    //                 <td>{review.feedback}</td>
    //                 <td><Button color="warning" onClick={() => {props.editUpdateReview(review); props.updateOn()}}>Update</Button>
    //                 <Button color="danger" onClick={() => {deleteReview(review)}}>Delete</Button>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // }


    return(
    <>
        <h3>Review History</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Movie</th>
                    <th>Date </th>
                    <th>Feedback</th>
                </tr>
            </thead>
            <tbody>
                {/* {reviewMapper()} */}
            </tbody>
        </Table>
    </>
    );
};

export default ReviewDelete;