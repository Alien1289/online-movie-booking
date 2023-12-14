let totalTranslation = 0;
let loopTranslation = 0;
let count = 0;
let email = ""
let phone = ""
let seats = ""
document.getElementById('book-now').style['display'] = 'none'
document.getElementById('confirmation').style['display'] = 'none'
document.getElementById('booking-details').style['display'] = 'none'


document.getElementById('clockwise').addEventListener('click', function () {
    let movieArray = document.getElementsByClassName('movie')
    for (let i = 0; i < movieArray.length; i++) {
        if (document.getElementsByClassName('movie')[i].getAttribute('status') === 'active' && i < movieArray.length - 5) {
            // setTimeout(function(){
            totalTranslation += 0.3; // Increment by the width of one movie
            document.getElementById('movies-view-section').style.transform = `translateX(-${totalTranslation}%)`;
            document.getElementsByClassName('movie')[i].setAttribute('status', 'inactive')
            document.getElementsByClassName('movie')[i + 5].setAttribute('status', 'active')
            break;
        }
        // }, 1000)

    }
})

document.getElementById('anti-clockwise').addEventListener('click', function () {
    let movieArray = document.getElementsByClassName('movie')
    for (let i = 0; i < movieArray.length; i++) {
        if (document.getElementsByClassName('movie')[i].getAttribute('status') === 'active') {
            // setTimeout(function(){
            if (i > 0) {
                totalTranslation -= 0.3; // Increment by the width of one movie
            document.getElementById('movies-view-section').style.transform = `translateX(-${totalTranslation}%)`
                document.getElementsByClassName('movie')[i + 4].setAttribute('status', 'inactive')
                document.getElementsByClassName('movie')[i - 1].setAttribute('status', 'active')
                break;
            }else{
                break;
            }
        }
        // }, 1000)

    }

})

let movieArray = document.getElementsByClassName('movie')

for (let i = 0;i < movieArray.length;i++){
    let movieUniq = document.getElementsByClassName('movie')[i]
    attachingFunctionToMovie(movieUniq)
}


function attachingFunctionToMovie(movieUniq){
    movieUniq.addEventListener('click', function(){
        document.getElementById('book-now').style['display'] = 'block'
        document.getElementById('content').style['display'] = 'none'
        document.getElementById('instructions').style['display'] = 'none'
        
        const srcAttribute = movieUniq.querySelector('img').getAttribute('src');
        const title = movieUniq.querySelector('span').innerText
        
        document.getElementById('movie-to-book-img').setAttribute('src', srcAttribute)
        document.getElementById('movie-to-book-title').innerText = title


        for (let i = 0;i < 32;i++){
            let newChair = document.createElement('div')
            newChair.innerText = i + 1
            newChair.setAttribute('class', 'chair')
            newChair.style['borderWidth'] = '0px'
            if (i < 10){
                newChair.style['background-color'] = 'red'
            }else{
                newChair.style['background-color'] = 'green'
            }
            attachingFunctionToChairs(newChair)
            document.getElementById("booking-chairs").appendChild(newChair)
        }

        document.getElementById('screen').style['display'] = 'block'
    })
}





function attachingFunctionToChairs(newChair){
        newChair.addEventListener('click', function(){
            if(newChair.style['background-color'] == 'green'){
                if (newChair.style['borderWidth'] == '0px'){
                    newChair.style['borderWidth'] = '3px'
                }else{
                    newChair.style['borderWidth'] = '0px'
                }
            }
        })
    }


document.getElementById('book-now').addEventListener('click', function(){
    let arr =document.getElementsByClassName('chair')
    for (let val of arr){
        if (val.style['borderWidth'] === '3px'){
            formDetails()
            break;
        }
    }

    function formDetails(){
        document.getElementById('bookingUi').style['display'] = 'none'
    document.getElementById('confirmation').style['display'] = 'block'
    let bookedSeatsDisplay = []
    for (let value of arr){
        if (value.style['borderWidth'] === '3px'){
            bookedSeatsDisplay.push(value.innerText)
        }
    }
    seats = bookedSeatsDisplay.join(",")
    document.getElementById('confirmation-info').innerText = `Confirm your booking for seat numbers: ${bookedSeatsDisplay.join(",")}`
    }
    
})

document.getElementById('email').addEventListener('input', function(){
    email = document.getElementById('email').value
})

document.getElementById('phone').addEventListener('input', function(){
    phone = document.getElementById('phone').value
})

document.getElementById('purchase').addEventListener('click', function(e){
    e.preventDefault()

    if(email !== '' && phone !== ''){
        document.getElementById('confirmation').style['display'] = 'none'
    document.getElementById('booking-details').style['display'] = 'block'
    document.getElementById('display').innerHTML = 
     `<h1>Booking Success 🎉🎁</h1>
     <span id = "final-info">Booking Details</span>
     <br/>
     <span>Seats: ${seats}</span>
     <br/>
     <span>Phone number: ${phone}</span>
     <br/>
     <span>Email: ${email}</span>
     `
    }
    
})