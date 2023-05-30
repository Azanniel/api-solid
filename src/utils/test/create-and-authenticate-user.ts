import { FastifyInstance } from 'fastify'
import request from 'supertest'

interface ResponseAuthBody {
  token: string
}

export async function createAndAuthenticateUser(app: FastifyInstance) {
  await request(app.server).post('/users').send({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '123456',
  })

  const authResponse = await request(app.server).post('/sessions').send({
    email: 'johndoe@example.com',
    password: '123456',
  })

  const { token } = authResponse.body as ResponseAuthBody

  return {
    token,
  }
}
