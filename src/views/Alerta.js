import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import bgImage from '../../assets/background.png'

const SMTP_CONFIG = require('../config/smpt')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth:{
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls:{
        rejectUnauthorized: false
    }
})

export default function Alerta(props){

    async function run(){
        const mailSent = await transporter.sendMail({
            text: "Texto do email",
            subject: "Assunt do email",
            from: "Safe Girl <safegirlgps1@gmail.com>",
            to:['brunobispoo25@gmail.com']
        })

        console.log(mailSent)
    }

    return(
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.backgroundImage}>
            <Text onPress={()=>run}>Alertar</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height: null,
        width:'100%',
    }
  });