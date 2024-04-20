import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';

class MailSender {
  private transporter: Transporter;
  private user: string;

  constructor({ user, pass }: { user: string; pass: string }) {
    this.user = user
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }

  public async to({ receiver, subject, text }: { receiver: string; subject: string; text: string }): Promise<void> {
    const mailOptions: SendMailOptions = {
      from: this.user, 
      to: receiver,
      subject,
      text
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}

export default MailSender;
