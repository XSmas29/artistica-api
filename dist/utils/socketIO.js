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
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env = __importStar(require("env-var"));
const createIOInstance = (httpServer) => {
    const socketIO = new socket_io_1.Server(httpServer, {
        cors: {
            origin: '*',
        },
        transports: ['websocket']
    });
    socketIO.use((socket, next) => {
        const token = socket.handshake.auth.token;
        if (!token || token === 'null')
            next(new Error('authentication error'));
        jsonwebtoken_1.default.verify(token, env.get('JWT_SECRET').required().asString(), (err, decoded) => {
            // if (err) throw err;
            if (err)
                return next(new Error('authentication error'));
        });
        next();
    });
    socketIO.on('connection', socket => {
        console.log(`a user connected to socket ${socket.id}`);
        socket.on('disconnect', socket => {
            console.log(`a user disconnected from socket ${socket}`);
        });
        socket.on('connect_to_chat', args => {
            console.log(args);
        });
        socket.on('send_message', (data) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(data);
            // let path = ''
            // const imageData = data.image
            // if (imageData) {
            //   const { ext } = parse(imageData.filename)
            //   path = `img_${data.chat_id}_${Date.now().toString()}${ext}`
            //   await uploadFile(imageData, `chat/${data.chat_id}`, path)
            // }
            // const chatMessage = ChatMessage.create({
            //   chat: data.chat_id,
            //   user: data.sender_id,
            //   message: data.message,
            //   image: imageData ? path : undefined,
            // })
            // await chatMessage.save().then(msg => {
            //   socketIO.emit('broadcast_message', msg)
            // })
            socket.broadcast.emit('broadcast_message', data);
        }));
    });
};
exports.default = createIOInstance;
