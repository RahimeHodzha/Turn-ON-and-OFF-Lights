// Function to turn on the light (change image and text color)
function turnOnLight() {
    // Change the text color to red
    document.getElementById('demo').style.color = 'red';

    // Change the image source to the bulb on image
    document.getElementById('myImage').src = './pic_bulbon.gif';
}

// Function to turn off the light (change image and text color)
function turnOffLight() {
    // Change the text color back to default (black or other)
    document.getElementById('demo').style.color = 'black';

    // Change the image source to the bulb off image
    document.getElementById('myImage').src = './pic_bulboff.gif';
}
