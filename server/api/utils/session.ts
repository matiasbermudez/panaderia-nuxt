import { createHmac , timingSafeEqual } from "node:crypto";

const COOKIE_NAME = 'panaderia_session'
const SESSION_DURATION = 60 * 60 * 24 // 1 day in seconds

function sign(value: string, secret: string) {
  return createHmac('sha256', secret).update(value).digest('base64url')
}

export function createSession( secret : string){
    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION

    const payload = `admin:${expiresAt}`
    const signature = sign(payload, secret)

    return {
        value : `${payload}:${signature}`,
        expiresAt,
    }
}

export function verifySession(
  value: string | undefined,
  secret: string,
) {
  if (!value) return false

  const parts = value.split(':')

  if (parts.length !== 3) return false

  const [role, expires, signature] = parts

   if (!role || !expires || !signature) {
     return false
   }

const payload = `${role}:${expires}`

  if (role !== 'admin') return false

  const expiresAt = Number(expires)

  if (
    !Number.isSafeInteger(expiresAt) ||
    expiresAt <= Math.floor(Date.now() / 1000)
  ) {
    return false
  }

  const expected = sign(payload, secret)

  const actualBuffer = Buffer.from(signature)
  const expectedBuffer = Buffer.from(expected)

  if (actualBuffer.length !== expectedBuffer.length) {
    return false
  }

  return timingSafeEqual(actualBuffer, expectedBuffer)
}

export { COOKIE_NAME }