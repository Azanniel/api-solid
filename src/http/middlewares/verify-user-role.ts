import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVerify: 'ADMIN' | 'MEMBER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { role } = request.user

      if (role !== roleToVerify) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    } catch (error) {
      return reply.status(401).send({ message: 'Unauthorized' })
    }
  }
}
