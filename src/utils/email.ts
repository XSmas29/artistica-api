import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import * as env from 'env-var'
import { GmailTokenError } from './errors'

export class GmailService {
  client_id: string
  client_secret: string
  redirect_uri: string
  refresh_token: string

  oAuthClient = new google.auth.OAuth2()
  
  constructor() {
    this.client_id = env.get('GOOGLE_CLIENT_ID').required().asString()
    this.client_secret = env.get('GOOGLE_CLIENT_SECRET').required().asString()
    this.redirect_uri = env.get('GOOGLE_REDIRECT_URI').required().asString()
    this.refresh_token = env.get('GOOGLE_REFRESH_TOKEN').required().asString()
    this.oAuthClient = new google.auth.OAuth2(
      this.client_id,
      this.client_secret,
      this.redirect_uri
    )
    this.oAuthClient.setCredentials({ refresh_token: this.refresh_token })
  }

  async sendConfirmationMail(email: string, hash: string) {
    const access_token = await this.oAuthClient.getAccessToken()
    console.log('access token: ', access_token.token)
    if (!access_token.token) {
      throw new GmailTokenError('Gagal mendapatkan access token')
    } else {
      
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'bumantara.surya2213@gmail.com',
          clientId: this.client_id,
          clientSecret: this.client_secret,
          refreshToken: this.refresh_token,
          accessToken: access_token.token,
        },
      })
      const mailOptions = {
        from: 'bumantara.surya2213@gmail.com',
        to: email,
        subject: 'Konfirmasi Akun Artistica Jewelry',
        text: 'Klik link berikut untuk konfirmasi email',
        html: this.getConfirmationMailContent(hash),
      }

      await transport.sendMail(mailOptions).catch(err => {
        throw new GmailTokenError(err.message)
      }).then(() => {
        console.log('Email sent')
      })
    }
  }

  getConfirmationMailContent(hash: string) {
    return `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          *{
            font-family: 'Poppins', sans-serif;
          }
          body {
            background-color: #F4F4F4;
          }
          .container {
            border: 1px solid #D8D8D8;
            border-radius:10px;
            width: 360px;
            padding: 10px 30px 40px 30px;
            margin: 80px auto;
            background-color: #FFFFFF
          }
          .title {
            font-weight: 900;
            font-size: 36px;
          }
          .button {
            padding: 20px 36px;
            font-size: 24px;
            border-radius: 8px;
            background-color: #000000;
            color: #FFFFFF;
          }
          .subtitle {
            margin: 4px 0px;
            font-weight:100
          }
          .logo {
            padding-top: 25px;
          }
          .action {
            text-decoration: none;
            margin-top: 60px;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <table>
            <tr>
              <th>
                <p class="title">Verifikasi Email Anda</p>
              </th>
            </tr>
            <tr>
              <th>
                <p class="subtitle">Klik tombol dibawah ini untuk mengaktifkan akun anda</p>
              </th>
            </tr>
            <tr>
              <th>
                <div class="action">
                  <a class="button" style="text-decoration:none;color:#ffffff" href="${env.get('CLIENT').asUrlString()}verify?code=${hash}" target="_blank">
                    Verifikasi
                  </a>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `
  }

  getResetPasswordMailContent(hash: string) {
    return `
    <html>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          *{
            font-family: 'Poppins', sans-serif;
          }
          body {
            background-color: #F4F4F4;
          }
          .container {
            border: 1px solid #D8D8D8;
            border-radius:10px;
            width: 360px;
            padding: 10px 30px 40px 30px;
            margin: 80px auto;
            background-color: #FFFFFF
          }
          .title {
            font-weight: 900;
            font-size: 36px;
          }
          .button {
            padding: 20px 36px;
            font-size: 24px;
            border-radius: 8px;
            background-color: #000000;
            color: #FFFFFF;
          }
          .subtitle {
            margin: 4px 0px;
            font-weight:100
          }
          .logo {
            padding-top: 25px;
          }
          .action {
            text-decoration: none;
            margin-top: 60px;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <table>
            <tr>
              <th>
                <p class="title">Reset Password Anda</p>
              </th>
            </tr>
            <tr>
              <th>
                <p class="subtitle">Klik tombol dibawah ini untuk mengubah password anda</p>
              </th>
            </tr>
            <tr>
              <th>
                <div class="action">
                  <a class="button" style="text-decoration:none;color:#ffffff" href="${env.get('CLIENT').asUrlString()}change-password?code=${hash}" target="_blank">
                    Ubah Password
                  </a>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `
  }

  async sendResetPasswordLink(email: string, hash: string) {
    const access_token = await this.oAuthClient.getAccessToken()
    console.log('access token: ', access_token.token)
    if (!access_token.token) {
      throw new GmailTokenError('Gagal mendapatkan access token')
    } else {
      
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'bumantara.surya2213@gmail.com',
          clientId: this.client_id,
          clientSecret: this.client_secret,
          refreshToken: this.refresh_token,
          accessToken: access_token.token,
        },
      })
      const mailOptions = {
        from: 'bumantara.surya2213@gmail.com',
        to: email,
        subject: 'Reset Password Akun Artistica Jewelry',
        text: 'Klik link berikut untuk reset password anda',
        html: this.getResetPasswordMailContent(hash),
      }

      await transport.sendMail(mailOptions).catch(err => {
        throw new GmailTokenError(err.message)
      }).then(() => {
        console.log('Email sent')
      })
    }
  }
}

