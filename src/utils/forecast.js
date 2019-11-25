const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/8eb1126b765e5c28217ce9bf599b4673/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`

    request({ url, json: true }, (connectionError, response) => {
        const { error, daily, currently } = response.body

        if (connectionError) {
            callback('There was an error connecting to the weather service!', undefined)
        } else if (error) {
            callback('Couldn\'t find the location you were searching for. Please try again.', undefined)
        } else {
            callback(undefined, `${daily.data[0].summary} It is currently ${currently.temperature} degrees out with a high of ${daily.data[0].temperatureMax} and a low of ${daily.data[0].temperatureMin}. There is a ${currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast