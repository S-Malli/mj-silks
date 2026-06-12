import { env } from '@/config/env'

/**
 * Minimal fetch wrapper for the future backend API (`VITE_API_URL`).
 * Feature modules (auth, cart, orders, etc.) should build their own
 * `*Api.js` services on top of this client rather than calling
 * `fetch` directly, so auth headers and error handling stay consistent.
 */
export async function apiRequest(path, { method = 'GET', body, headers, ...rest } = {}) {
  const response = await fetch(`${env.apiUrl}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  })

  if (!response.ok) {
    const error = new Error(`Request to ${path} failed with status ${response.status}`)
    error.status = response.status
    throw error
  }

  if (response.status === 204) return null
  return response.json()
}
