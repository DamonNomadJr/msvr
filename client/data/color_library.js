export function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

export function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

export function colorFromString(str) {
    let int = Math.abs(hashCode(str));
    let hue = int % 360;
    let result = [0, 0, 0, 1];
    new THREE.Color(`hsla(${hue}, 35%, 50%)`).toArray(result);
    return result;
}

export function hexColorFromString(str) {
    return "#" + intToRGB(hashCode(str));
}