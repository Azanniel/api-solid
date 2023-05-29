import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('executou')

    return {
      teardown() {},
    }
  },
}
