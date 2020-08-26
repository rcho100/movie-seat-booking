const seatingArea = document.querySelector('.seating-area')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const showSelect = document.querySelector('.show')
const count = document.getElementById('count')
const total = document.getElementById('total')

let ticketPrice = +showSelect.value

//Save selected show index & price
const setShowData = (showIndex, showPrice) => {
    localStorage.setItem('selectedShowIndex', showIndex)
    localStorage.setItem('selectedShowPrice', showPrice)
}

//Update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex ))
    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

//Show select event
showSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setShowData(e.target.selectedIndex, e.target.value)
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
