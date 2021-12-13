const myLibrary = [];

function Book(title, author, pages, status, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
}

Book.prototype.info = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
}



hobbit = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')

console.log(hobbit.info());

function addBookToLibrary(){

}

//adds the record to the table after clicking "Submit" button
const addBook = (function() {
    let current_id = 1
    return function() {
    //gets the input from the input fields and then clears the fields
    const record_title = document.getElementById("title").value
    const record_author = document.getElementById("author").value
    const record_pages = document.getElementById("pages").value
    const record_status = document.querySelector('input[name="status"]:checked').value

    //create the book object
    newBook = new Book(record_title, record_author, record_pages, 'read', current_id)
    console.log(newBook)

    //clear the input fields
    document.getElementById('title').value = ''
    document.getElementById('author').value = '' 
    document.getElementById('pages').value = '' 
    document.querySelector('input[name="status"]:checked').checked = false;

    //add a new row to the table based on the input field
    const tbl = document.querySelector('tbody')
    const row = document.querySelector('tr')
    const nextRow = document.createElement('tr')
    nextRow.setAttribute('id', current_id)
    tbl.appendChild(nextRow)
    //finds the row with the current id and adds the records (title, author...) there
    currentRow = document.getElementById(current_id)

    const nextRowElement1 = document.createElement('td')
    const nextRowElement2 = document.createElement('td')
    const nextRowElement3 = document.createElement('td')
    const nextRowElement4 = document.createElement('td')
    const nextRowElement5 = document.createElement('td')
    const nextRowElement6 = document.createElement('td')

    nextRowElement1.textContent = `${record_title}`
    nextRowElement2.textContent = `${record_author}`
    nextRowElement3.textContent = `${record_pages}`
    nextRowElement4.textContent = `${record_status}`

    //create buttons to change status and remove and add them to each row
    btn_status = document.createElement('button')
    btn_status.innerHTML = "switch";
    btn_status.onclick = () => {
        if (nextRowElement4.textContent === 'Read') {
            nextRowElement4.textContent = 'Not read yet'
        }
        else if (nextRowElement4.textContent === 'Not read yet') {
            nextRowElement4.textContent = 'Read'
        }

    }
   


    nextRowElement5.appendChild(btn_status)

    btn_remove = document.createElement('button')
    btn_remove.innerHTML = "remove";
    btn_remove.setAttribute('id', current_id)
    btn_remove.onclick = (e) => {
        let target_id = e.target.getAttribute('id')
        let target = e.target
        console.log(target_id)
        console.log(target)
        let row_to_remove = target.closest("tr")
        row_to_remove.remove();
        
    }


    nextRowElement6.appendChild(btn_remove)

    currentRow.appendChild(nextRowElement1)
    currentRow.appendChild(nextRowElement2)
    currentRow.appendChild(nextRowElement3)
    currentRow.appendChild(nextRowElement4)
    currentRow.appendChild(nextRowElement5)
    currentRow.appendChild(nextRowElement6)

    //prepares for the next iteration
    current_id ++;
    return current_id;
    }
})();