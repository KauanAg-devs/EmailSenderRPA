import nodemailer from 'nodemailer'

class MailSender {

  constructor({ user, pass }) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass } 
    });
  }

  to({ reciever, subject, text }) {
    const mailOptions = {
      from: this.transporter.options.auth.user,
      to: reciever,
      subject,
      text
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) return console.log(error);
      console.log('Email sent: ' + info.response); 
    });
  }


}

export default MailSender