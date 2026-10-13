import { deleteCookie } from 'h3'
import { COOKIE_NAME } from '../utils/session'

export default defineEventHandler((event) => {
  deleteCookie(event, COOKIE_NAME, {
    path: '/',
  })

  return { success: true }
})