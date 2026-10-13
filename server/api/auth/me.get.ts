
import { getCookie } from 'h3'
import {
  verifySession,
  COOKIE_NAME,
} from '../utils/session'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const session = getCookie(event, COOKIE_NAME)

  if (
    !config.sessionSecret ||
    !verifySession(session, config.sessionSecret)
  ) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No autenticado',
    })
  }

  return {
    authenticated: true,
    user: {
      email: 'maildetest@hotmail.com',
      role: 'admin',
    },
  }
})
