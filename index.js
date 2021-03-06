const seatingArea = document.querySelector('.seating-area')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const showSelect = document.querySelector('.show')
const count = document.getElementById('count')
const total = document.getElementById('total')

populateUI();

let ticketPrice = +showSelect.value

//Save selected show index & price
const setShowData = (showIndex, showPrice) => {
    localStorage.setItem('selectedShowIndex', showIndex)
    localStorage.setItem('selectedShowPrice', showPrice)
}

//Update total and count
const updateSelectedCountAndTotal = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex ))
    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

//Get data from localStorage & populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedShowIndex  = localStorage.getItem('selectedShowIndex')

    if (selectedShowIndex !== null) {
        showSelect.selectedIndex = selectedShowIndex
    }
}

//Show select event
showSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value
    setShowData(e.target.selectedIndex, e.target.value)
    updateSelectedCountAndTotal()
})

// Seat click event
seatingArea.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')

        updateSelectedCountAndTotal()
    }
})

// Initial count and total set
updateSelectedCountAndTotal()