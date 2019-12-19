var src = [7.4268672, 125.8389504];

function toDegreesMinutesAndSeconds(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.abs((minutesNotTruncated - minutes) * 60);

    return degrees + "°" + minutes + "\'" + seconds.toFixed(2);
}

function convertDMS(lat, lng) {
    var latitude = toDegreesMinutesAndSeconds(lat);
    var latitudeCardinal = lat >= 0 ? "N" : "S";

    var longitude = toDegreesMinutesAndSeconds(lng);
    var longitudeCardinal = lng >= 0 ? "E" : "W";

    return latitude + "\"" + latitudeCardinal + "\n" + longitude + "\"" + longitudeCardinal;
}

alert(convertDMS(src[0],src[1]));
