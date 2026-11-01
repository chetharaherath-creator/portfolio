import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const CONTACTS_FILE = path.join(__dirname, 'messages.json');

// Ensure storage file exists
if (!fs.existsSync(CONTACTS_FILE)) {
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Chethara Portfolio Backend API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Profile endpoint
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Herath Mudiyanselage Dona Chethara Nethini Herath",
    preferredName: "Chethara Herath",
    title: "Software Engineering Intern & UI/UX Designer",
    email: "chetharaherath@gmail.com",
    phone: "0776432400",
    location: "Gampaha, Sri Lanka / Remote",
    linkedin: "https://linkedin.com/in/chethara-herath-51509b350",
    github: "https://github.com/chetharaherath-creator",
    education: {
      degree: "Bachelor of Engineering (BEng), Computer Software Engineering",
      institution: "University of Staffordshire (APIIT)",
      period: "2024 – 2028"
    },
    status: "Actively seeking Software Engineering Internship"
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message.'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const newMessage = {
    id: 'msg_' + Date.now(),
    name,
    email,
    subject: subject || 'Portfolio Inquiry',
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const raw = fs.readFileSync(CONTACTS_FILE, 'utf-8');
    const messages = JSON.parse(raw);
    messages.unshift(newMessage);
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(messages, null, 2));

    console.log(`[New Message Received] from: ${name} <${email}>`);

    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: newMessage
    });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error while recording message.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`✓ Chethara Portfolio Node.js backend listening on http://localhost:${PORT}`);
});
