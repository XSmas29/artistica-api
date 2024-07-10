import { Server } from 'socket.io'
import { createServer } from 'http'
import { Express } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import * as env from 'env-var'
import { Roles } from './types'
import { ChatMessage } from '@entity/ChatMessage.entity'
import { parse } from 'path'
import { uploadFile } from './files'
import { Server as HTTPServer } from 'http'

const createIOInstance = (httpServer: HTTPServer) => {
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

    socket.on('send_message', async data => {
      console.log(data)

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
      socket.broadcast.emit('broadcast_message', data)
    })
  })
}

export default createIOInstance

