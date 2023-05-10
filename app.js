const allzone = document.getElementById('allzone')
const currentTime = document.getElementById('currentTime')

currentTime.innerText = new Date().toLocaleString('en-us', 
{ timeStyle: 'full'})

fetch('worldclock.json')
.then( res => res.json())
.then( data => {
    data.map( e => {
        const option = document.createElement('option')
        option.innerText = e.timezone
        allzone.appendChild(option)
    })
})
.catch( err => console.log(err))

allzone.oninput = () => setInterval( () => time(), 1000)

const time = () => {
    const ctime = new Date().toLocaleString('en-us', {
        timeZone: allzone.value, timeStyle: 'full'
    })

    currentTime.innerText = ctime
}