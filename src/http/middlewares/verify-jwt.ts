import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  try {
    if (!request.headers.authorization) {
      throw new Error('Access token invalid')
    }

    await request.jwtVerify()
  } catch (error) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}
