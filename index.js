// Global variable to store the QR instance
let qrcode = null;

/**
 * Changes the site theme by updating the body's data-theme attribute
 */
function applyTheme() {
    const theme = document.getElementById('theme-select').value;
    document.body.setAttribute('data-theme', theme);
}

/**
 * Generates the QR Code based on user input
 */
function generateQR() {
    const input = document.getElementById('qr-input').value;
    const display = document.getElementById('qr-display');
    const downloadBtn = document.getElementById('download-btn');

    if (!input.trim()) {
        alert("Please enter a URL or text first!");
        return;
    }

    // Clear the previous QR code display
    display.innerHTML = "";

    // Create a new QR code instance inside the display div
    qrcode = new QRCode(display, {
        text: input,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // Enable the download button
    downloadBtn.disabled = false;
}

/**
 * Logic to download the generated QR code as an image
 */
function downloadQR() {
    const qrImage = document.querySelector('#qr-display img');
    if (qrImage) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'my-qrcode.png';
        link.click();
    }
}