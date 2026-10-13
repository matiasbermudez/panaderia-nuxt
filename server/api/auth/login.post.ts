import { setCookie } from 'h3'
import { createSession, COOKIE_NAME } from '../utils/session' 


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body ?? {}
  console.log(body)

  if (  email !== 'maildetest@hotmail.com' || password !== 'passworddetest1234') {
    
    throw createError({
      statusCode: 401,
      statusMessage: 'Credenciales incorrectas',
    })
  }
  const config = useRuntimeConfig(event)

  if (!config.sessionSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Session secret not configured',
    })
  }

  const session = createSession(config.sessionSecret)
  setCookie(event, COOKIE_NAME, session.value, {
    httpOnly: true,
    secure: !import.meta.dev,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60,
  })

  return { success: true }
})