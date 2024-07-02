import { Server } from 'socket.io'
import { createServer } from 'http'
import { Express } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import * as env from 'env-var'
import { Roles } from './types'
import { ChatMessage } from '@entity/ChatMessage.entity'

const createIOInstance = (app: Express) => {
  const httpServer = createServer(app)

  const socketIO = new Server(httpServer, {
    cors: {
      origin: '*',
    },
    transports: ['websocket']
  })

  socketIO.use((socket, next) => {
    const token = socket.handshake.auth.token
    if (!token || token === 'null') next(new Error('authentication error'))
    jwt.verify(token, env.get('JWT_SECRET').required().asString(), (err: jwt.VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
      // if (err) throw err;
      if (err) return next(new Error('authentication error'))
    })
    
    next()
  })

  socketIO.on('connection', socket => {
    console.log(`a user connected to socket ${socket.id}`)

    socket.on('disconnect', socket => {
      console.log(`a user disconnected from socket ${socket}`)
    })
    
    socket.on('connect_to_chat', args => {
      console.log(args) 
    })

    socket.on('send_message', async args => {
      const chatMessage = ChatMessage.create({
        chat: args.chat_id,
        user: args.sender_id,
        message: args.message,
        image: args.image,
      })

      await chatMessage.save().then(msg => {
        socketIO.emit('broadcast_message', msg)
      })
    })
  })

  return {
    httpServer,
    socketIO,
  }
}

export default createIOInstance

