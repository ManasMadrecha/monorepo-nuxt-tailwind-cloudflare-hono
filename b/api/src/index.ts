import { Hono } from 'hono'
import type{ D1Database } from '@cloudflare/workers-types'

export interface Env {
  Bindings: {
    DB: D1Database
  },
  Variables: {
    API_TOKEN: string
  }
}

const app = new Hono<Env>()

app.get('/',
  (c) => {
    return c.json({ text: 'Hello Hono!' })
  })

export default app