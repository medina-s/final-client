function displayAll() {
    console.log("displayAll Function Called");

    fetch(`http://localhost:3000/review/`, {
    method: "GET",
    headers: new Headers({
        "Content-Type": "application/json",
    })
})
    .then(response => response.json())
    .then(data => {
    console.log(data);

    let display = document.getElementById('reviews');
    for (i = 0; i = display.childNodes.length; i++) {
        display.removeChild(display.firstChild)
    }

    if (data.length === 0) {
        let display = document.getElementById('reviews');
        let header = document.createElement('h5');

    display.appendChild(header);
    header.textContent = "You have not submitted any reviews yet!";
    header.setAttribute("class", "noReviews")
    } else {
        for(i =0; i < data.length; i++){
        let display = document.getElementById('reviews');
        let card = document.createElement('div');
        let body = document.createElement('div');
        let header = document.createElement('h5');
        let subtitle = document.createElement('h6');
        let para = document.createElement('p');

        let current = data[i];
        let title = current.title;
        let date = current.date;
        let entry = current.entry;

        header.textContent = title;
        subtitle.textContent = date;
        para.textContent = entry;

        display.appendChild(card);
        card.appendChild(body);
        body.appendChild(header);
        body.appendChild(subtitle);
        body.appendChild(para);

        card.setAttribute('id', current.id);
        card.setAttribute('class', 'card');
        body.setAttribute('class', 'card-body');
        header.setAttribute('class', 'card-title');
        subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
        para.setAttribute('class', 'card-text');

        }
    }
})
    .catch(err => {
        console.error(err)
    })
}