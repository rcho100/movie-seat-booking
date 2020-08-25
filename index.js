const seatingArea = document.querySelector('.seating-area')
const showSelect = document.querySelector('.show')
const count = document.getElementById('count')
const total = document.getElementById('total')

let ticketPrice = +showSelect.value

//Update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

//Show select event
showSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})

// Seat click event
seatingArea.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    }
})
