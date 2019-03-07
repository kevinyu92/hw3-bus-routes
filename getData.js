var fetch = require('node-fetch');

var url = "https://api-v3.mbta.com/vehicles?api_key=dd61a37a76fe444aa485740f28250656&filter[route]=1&include=trip"


var fetchData = function() {
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json.data[0])
            return json.data[0]
        })
}
setInterval(fetchData,15000)

module.exports = fetchData;