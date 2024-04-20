import SendEmail from "./service/service.js";
import dotenv from 'dotenv';

dotenv.config({path: '.env'})

const account = {
    user: process.env.user!, 
    pass: process.env.pass!
}

new SendEmail(account).to({ 
  
  receiver: 'someExample@gmail.com', 
  subject: 'Assunto do Email', 
  text: 'Conteúdo do Email' 
});


