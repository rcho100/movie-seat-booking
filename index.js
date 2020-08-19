const seatingArea = document.querySelector('.seating-area')


// Seat click event
seatingArea.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')
    }
})
