const express = require('express')
const cors = require('cors')
const mqtt = require('mqtt')
const app = express()

app.use(cors())
app.use(express.json())

var client = mqtt.connect("mqtt://54.179.27.128:1883");

client.on('connect', function () {  
    console.log('connect done')
});

app.post('/api/bulb', (req, res, next) => {
    console.log(req.body)
    const { name, state } = req.body
    
    switch(name){
        case 'l1':
            var payload = {
                l1: state
            }
            client.publish('duoq-test', JSON.stringify(payload), { qos: 1 });
            break;
        case 'l2':
            var payload = {
                l2: state
            }
            client.publish('duoq-test', JSON.stringify(payload), { qos: 1 });
            break;
        case 'l3':
            var payload = {
                l3: state
            }
            client.publish('duoq-test', JSON.stringify(payload), { qos: 1 });
            break;
        case 'l4':
            var payload = {
                l4: state
            }
            client.publish('duoq-test', JSON.stringify(payload), { qos: 1 });
            break;
    }

    res.json({ success: true })
})

app.listen(5000, () => {
    console.log('server start on port: 5000')
})