"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const env = __importStar(require("env-var"));
const errors_1 = require("./errors");
class GmailService {
    constructor() {
        this.oAuthClient = new googleapis_1.google.auth.OAuth2();
        this.client_id = env.get('GOOGLE_CLIENT_ID').required().asString();
        this.client_secret = env.get('GOOGLE_CLIENT_SECRET').required().asString();
        this.redirect_uri = env.get('GOOGLE_REDIRECT_URI').required().asString();
        this.refresh_token = env.get('GOOGLE_REFRESH_TOKEN').required().asString();
        this.oAuthClient = new googleapis_1.google.auth.OAuth2(this.client_id, this.client_secret, this.redirect_uri);
        this.oAuthClient.setCredentials({ refresh_token: this.refresh_token });
    }
    sendConfirmationMail(email, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const access_token = yield this.oAuthClient.getAccessToken();
            console.log('access token: ', access_token.token);
            if (!access_token.token) {
                throw new errors_1.GmailTokenError('Gagal mendapatkan access token');
            }
            else {
                const transport = nodemailer_1.default.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: 'bumantara.surya2213@gmail.com',
                        clientId: this.client_id,
                        clientSecret: this.client_secret,
                        refreshToken: this.refresh_token,
                        accessToken: access_token.token,
                    },
                });
                const mailOptions = {
                    from: 'bumantara.surya2213@gmail.com',
                    to: email,
                    subject: 'Konfirmasi Akun Artistica Jewelry',
                    text: 'Klik link berikut untuk konfirmasi email',
                    html: this.getConfirmationMailContent(hash),
                };
                yield transport.sendMail(mailOptions).catch(err => {
                    throw new errors_1.GmailTokenError(err.message);
                }).then(() => {
                    console.log('Email sent');
                });
            }
        });
    }
    getConfirmationMailContent(hash) {
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
    `;
    }
    getResetPasswordMailContent(hash) {
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
    `;
    }
    sendResetPasswordLink(email, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const access_token = yield this.oAuthClient.getAccessToken();
            console.log('access token: ', access_token.token);
            if (!access_token.token) {
                throw new errors_1.GmailTokenError('Gagal mendapatkan access token');
            }
            else {
                const transport = nodemailer_1.default.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: 'bumantara.surya2213@gmail.com',
                        clientId: this.client_id,
                        clientSecret: this.client_secret,
                        refreshToken: this.refresh_token,
                        accessToken: access_token.token,
                    },
                });
                const mailOptions = {
                    from: 'bumantara.surya2213@gmail.com',
                    to: email,
                    subject: 'Reset Password Akun Artistica Jewelry',
                    text: 'Klik link berikut untuk reset password anda',
                    html: this.getResetPasswordMailContent(hash),
                };
                yield transport.sendMail(mailOptions).catch(err => {
                    throw new errors_1.GmailTokenError(err.message);
                }).then(() => {
                    console.log('Email sent');
                });
            }
        });
    }
}
exports.GmailService = GmailService;
