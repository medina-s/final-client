function deleteReview(postId) {
console.log(postId);

const fetch_url = `http://localhost:3000/review/delete/${postId}`;
const accessToken = localStorage.getItem('SessionToken');

fetch(fetch_url, {
method: "DELETE",
headers: new Headers({
"Content-Type": "application/json",
"Authorization": `Bearer ${accessToken}`
})
})
.then(response => response.json())
.then(data => {
console.log(data);
displayMine();
})
.catch(err => {
console.error(err)
})
}