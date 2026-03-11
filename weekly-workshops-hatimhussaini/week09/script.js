// Get references
const output = document.getElementById('quote-output');
const button = document.getElementById('get-quote');

// Task 1: Announce status in a live region here
// const status = document.getElementById('quoteStatus');
const qstatus = document.getElementById('quoteStatus'); 

document.getElementById('get-quote').addEventListener('click', () => {
    // Task 1: Update status live region here with "Loading..."
    qstatus.textContent = 'Loading...'; // Visual feedback only for now
    // Disable button during fetch
    button.disabled = true;

    fetch('https://api.quotable.io/random')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch quote.');
            return res.json();
        })
        .then(data => {
            output.textContent = `"${data.content}" — ${data.author}`;
            button.disabled = false;

            // Task 1: Update status live region here with "Quote loaded"
            qstatus.textContent = 'Quote loaded'; // Visual feedback only for now
        })
        .catch(err => {
            output.textContent = "Failed to load quote.";
            console.error(err);

            // Task 1: Optional: add failure message to status region
            qstatus.textContent = 'Failed to load quote';
            button.disabled = false;
        });
});
// document.getElementById('get-quote').addEventListener('click', fetchQuote);
document.getElementById('clear-quote').addEventListener('click', () => {
    output.textContent = '';
    qstatus.textContent = ''; 
    // Task 1: Clear status live region if applicable
});

// Task 2: Add event listener for custom keyboard-accessible button here
const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', fetchQuote);
refreshBtn.addEventListener('keydown', (e) => {
    // Task 2: Trigger the quote fetch function here
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        refreshBtn.click();
    }});
// Task 3: Add modal open/close and focus logic here
const modal = document.getElementById('modal');
const openModal = document.getElementById('openmodal');
const closeModal = document.getElementById('closemodal');

openModal.addEventListener('click', () => {
    modal.hidden = false;
    modal.setAttribute("tabindex", "-1");
    modal.focus();
});
closeModal.addEventListener('click', () => {
    modal.hidden = true;
    openModal.focus();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
        modal.hidden = true;
        openModal.focus();
    }
});

// Task 4: Add arrow key navigation logic for list items here
const listItems = document.querySelectorAll('#quotelist li');
const displayList = document.getElementById('selected-quote');

listItems.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown' && listItems[index + 1]) {
            listItems[index + 1].focus();
        }
        if (e.key === 'ArrowUp' && listItems[index - 1]) {
            listItems[index - 1].focus();
        }
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            SelectItem(item);
        }
    });

    item.addEventListener('click', () => {
        SelectItem(item);
    });
});


function SelectItem(selected) {
    listItems.forEach(item => {
        item.classList.remove('selected');
        item.setAttribute('aria-selected', 'false');
    });

    selected.classList.add('selected');
    selected.setAttribute('aria-selected', 'true');
    displayList.textContent = `Selected: ${selected.textContent}`;
}
