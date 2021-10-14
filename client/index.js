const lightBulbs = document.getElementsByClassName('l')

Array(...lightBulbs).forEach(bulb => {
    bulb.onclick = function () {
        console.log(this.checked)
        fetch('http://localhost:5000/api/bulb', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                state: this.checked ? 'on' : 'off'
            })
        }).then(data => data.json()).then(data => console.log(data))
    }
})