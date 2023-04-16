import type { ClientRequest } from "http";

const fetchClient = async (url: string, options: RequestInit = {}) => {
    const { method = 'GET', headers = {}, body } = options
    
    const requestOptions: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    };

    if (body) {
        requestOptions.body = JSON.stringify(body)
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        const errors = await response.json()
        throw new Error(errors.message || 'Something went wrong')
    }

    if (response.status == 204) {
        return null
    }
    return response
}
class fetchClientInstance {
    private baseURL: string;
    constructor(baseURL: string) {
        this.baseURL = baseURL
    }
    get(url: string, options: RequestInit | void) {
        return fetchClient(baseURL + url, { ...options, method: 'GET'}).then(res => res?.json())
    }
    post(url: string, body: BodyInit | null, options: RequestInit | void) {
        return fetchClient(baseURL + url, { ...options, method: 'POST', body})
    }
    put(url: string, body: BodyInit | null, options: RequestInit | void) {
        return fetchClient(baseURL + url, { ...options, method: 'PUT', body})
    }
    patch(url: string, body: BodyInit | null, options: RequestInit | void) {
        return fetchClient(baseURL + url, { ...options, method: 'PATCH', body})
    }
    delete(url: string, options: RequestInit | void) {
    return fetchClient(baseURL + url, { ...options, method: 'DELETE'})
    }
}
const baseURL = process.env.VITE_BACKEND_URL || 'https://localhost:8080/api'
const instance = new fetchClientInstance(baseURL)

export default instance