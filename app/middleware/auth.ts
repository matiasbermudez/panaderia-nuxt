
export default defineNuxtRouteMiddleware(async () => {
  try {
    const requestFetch = useRequestFetch()

    await requestFetch('/api/auth/me')
  } catch {
    return navigateTo('/login')
  }
})
