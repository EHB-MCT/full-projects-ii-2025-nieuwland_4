const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from "public" folder

// Contactpersonen to email mapping
const contactMap = {
  "1": "bichiran.kln@gmail.com",
  "2": "stefanie@example.com",
  "3": "wendy@example.com",
  "4": "ludo@example.com"
};

app.post('/send', async (req, res) => {
  const { naamOuder, naamLln, klas, telnmr, ontvanger, bericht } = req.body;

  const toEmail = contactMap[ontvanger];
  if (!toEmail) {
    return res.status(400).send('Invalid contactpersoon');
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,         // Your email
      pass: process.env.EMAIL_PASS     // Your app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: 'Nieuw contactformulier verzonden',
    html: `
      <h3>Nieuw bericht van de schoolwebsite</h3>
      <p><strong>Naam ouder:</strong> ${naamOuder}</p>
      <p><strong>Naam leerling:</strong> ${naamLln}</p>
      <p><strong>Klas:</strong> ${klas}</p>
      <p><strong>Telefoonnummer:</strong> ${telnmr}</p>
      <p><strong>Bericht:</strong><br>${bericht}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Bericht verzonden!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Fout bij verzenden');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
