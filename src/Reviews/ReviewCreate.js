function postReview() {
    function displayMine() {
        console.log("displayMine Function Called");
        const accessToken = localStorage.getItem('SessionToken');

        fetch(`http://localhost:3000/review/create`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }),
            body: JSON.stringify(newFeedback)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayMine();

                let display = document.getElementById('reviews');
                for (i = 0; i = display.childNodes.length; i++) {
                    display.removeChild(display.firstChild)
                }

                if (data.length === 0) {
                    let display = document.getElementById('reviews');
                    let header = document.createElement('h5');

                    display.appendChild(header);
                    header.textContent = "You haven't made any posts yet!";
                    header.setAttribute("class", "noPosts")
                } else {
                    for(i = 0; i < data.length; i++) {
                        let display = document.getElementById('reviews');
                        let card = documnet.createElement('div');
                        let body = document.createElement('div');
                        let header = document.createElement('h5');
                        let subtitle = document.createElement('h6');
                        let para = document.createElement('p');
                        let editBtn = document.createElement('button');
                        let deleteBtn = document.createElement('button');

                        let current = data[i];
                        let movie = current.movie;
                        let date = current.date;
                        let feedback = current.feedback;

                        header.textContent = movie;
                        subtitle.textContent = date;
                        para.textContent = feedback;
                        editBtn.textContent = "Edit";

                        display.appendChild(card);
                        card.appendChild(body);
                        body.appendChild(header);
                        body.appendChild(subtitle);
                        body.appendChild(para);
                        body.appendChild(editBtn);

                    }
                }
            })
            .catch (err => {
                console.error(err)
            })
    }
        let movie = document.getElementById('movie').value;
        let date = document.getElementById('date').value;
        let feedback = document.getElementById('feedback').value;

        let newFeedback = {
            review: {
                movie: movie,
                date: date,
                feedback: feedback
            }
        }
    }