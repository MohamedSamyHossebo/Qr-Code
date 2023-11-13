
function generateQRCode() {
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    var data = {
        username: username,
        password: password,
    };

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: JSON.stringify(data),
        width: 128,
        height: 128,
    });

}

// Function to print the QR code
function printQRCode() {
    // Trigger the print dialog
    window.print();

    // Reset the QR code content after printing
    resetQRCode();
}

// Function to reset the QR code content
function resetQRCode() {
    document.getElementById("qrcode").innerHTML = "";
}
// Function to cleare the inputs 
function clearInputs() {
    document.getElementById("usernameInput").value = "";
    document.getElementById("passwordInput").value = "";
    resetQRCode();
}

// Initialize QR code scanner
var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {
    try {
        var userData = JSON.parse(content);
        alert("Username: " + userData.username + "\nPassword: " + userData.password);
    } catch (error) {
        alert("Invalid QR code content");
    }
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No cameras found.');
    }
}).catch(function (e) {
    console.error(e);
});