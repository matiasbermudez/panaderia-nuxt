export default defineNuxtRouteMiddleware(async () => {
  try {
    const requestFetch = useRequestFetch()

    await requestFetch('/api/auth/me')

    return navigateTo('/admin')
  } catch {
    // No está autenticado: puede entrar al login.
  }
})