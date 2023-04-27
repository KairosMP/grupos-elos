require('dotenv');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  port: process.env.HOST_PORT,
  auth: {
    user: process.env.HOST_USER,
    pass: process.env.HOST_PASS,
  },
});

const sender = {
  name: 'usuario',
  email: 'sender@teste.com',
};

const receiver = {
  email: 'bar@example.com',
};

const mailContent = {
  subject: 'hello email',
  text: ' Clube POP - Ativação de Cadastro Mensagem: Estamos muito felizes pelo seu interesse em usar nosso cartão, agora falta pouco. Basta você clicar no link abaixo e confirmar os seus dados cadastrais. Link para ativação de seu cartão',
  html: ' <body><h1>Clube POP - Ativação de Cadastro</h1> <p>Estamos muito felizes pelo seu interesse em usar nosso cartão, agora falta pouco. Basta você clicar no link abaixo e confirmar os seus dados cadastrais.</p><br> <a href="#"><button>Ative o seu cartão</button></a></body>',
};

async function sendMail(transporter, sender, receiver, mailContent) {
  const mail = await transporter.sendMail({
    from: `"${sender.name}" ${sender.email}`,
    to: `${receiver.email}`,
    subject: `${mailContent.subject}`,
    text: `${mailContent.text}`,
    html: `${mailContent.html}`,
  });

  console.log('Email enviado: ', mail.messageId);
  console.log('URL do Ethereal:', nodemailer.getTestMessageUrl(mail));
}

async function mail() {
  try {
    await sendMail(transporter, sender, receiver, mailContent);
  } catch (err) {
    console.error(err);
  }
}

module.exports = mail;
