const functions = require('firebase-functions');
const admin=require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

const {SENDER_EMAIL,SENDER_PASSWORD}= process.env;

exports.sendEmailArticleToUser=functions.database.ref('/forum/{pushId}').onWrite(async (change)=>{
    
    const snapshot = change.after;
    const val=snapshot.val();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'anciensccitours@gmail.com',
            pass:'ccitours2020',
        }
    });

    authData.sendMail({
        from :'anciensccitours@gmail.com',
        to: val.email,
        subject: val.author+', votre article a été crée avec succés!',
        text:``,
        html:'Bonjour '+ val.author +',\n Nous vous confirmons la création de votre article sur le forum des Anciens CCI.'
                                        +' \n Veuillez-trouver çi-dessous un aperçu de votre article:'
                                        +' \n ' + val.title
                                        +' \n ' + val.author
                                        +' \n ' + val.text
                                        +' \n '
                                        +' \n Nous vous remercions pour votre participation !'
                                        +'\n De la part de AnciensCCI',

        }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));
        
 });

 exports.sendEmailArticleToAdmin=functions.database.ref('/forum/{pushId}').onWrite(async (change)=>{
    
    const snapshot = change.after;
    const val=snapshot.val();
    let authData=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'anciensccitours@gmail.com',
            pass:'ccitours2020',
        }
    });

    authData.sendMail({
        from :'anciensccitours@gmail.com',
        to:'anciensccitours@gmail.com',
        subject:'Notification d\'Ajout d\'un nouveau article',
        text:``,
        html:'Bonjour '+ ', \n Un nouveau article a été crée avec succés par ' + val.author + ' sur le forum des Anciens CCI.'
                                     +' \n'+ 'Veuillez-trouver çi-dessous un aperçu de votre article :'
                                     +' \n ' + val.title
                                     +' \n ' + val.author
                                     +' \n ' + val.text
                                     +' \n '
                                     +' \n Nous vous remercions pour votre participation !'
                                     +'\n De la part de AnciensCCI',
        
        }).then(res=>console.log('successfully sent that mail')).catch(err=>console.log(err));
        
 });