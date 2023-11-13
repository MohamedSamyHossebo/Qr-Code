# Login QR Code Demo

This is a simple demonstration of a web page that allows users to generate QR codes containing login information and scan QR codes to retrieve the information.

## Getting Started

1. Clone or download the repository.

```bash
git clone https://github.com/MohamedSamyHossebo/Qr-Code
```

2. Open the `index.html` file in a web browser.

## Usage

1. Open the web page (`index.html`) in a web browser.

2. Enter your username and password in the respective input fields.

3. Click the "Generate QR Code" button to generate a QR code containing the entered login information.

4. The generated QR code will be displayed in the designated area on the page.

5. Optionally, click the "Clear Inputs" button to clear the username, password, and the displayed QR code.

6. To generate a new QR code, click the "Generate New QR Code" button.

7. In the "Scan QR Code" section, use the camera feed to scan a QR code.

8. If the scanned QR code contains valid JSON representing login information, an alert will display the username and password.

## Dependencies

- [qrcode.js](https://github.com/davidshimjs/qrcodejs): Library for generating QR codes.
- [instascan](https://github.com/schmich/instascan): Library for scanning QR codes using the camera.

## Contributing

Contributions are welcome. Please fork the repository, make changes, and submit a pull request.
