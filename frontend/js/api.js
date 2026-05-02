const API_URL = 'http://localhost:5000/api';

const api = {
    async register(username, password) {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Registration failed');
        return data;
    },

    async login(username, password) {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Login failed');
        return data;
    },

    async getMe() {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const res = await fetch(`${API_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) {
            localStorage.removeItem('token');
            return null;
        }
        return await res.json();
    },

    async saveResult(resultData) {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch(`${API_URL}/tests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(resultData)
        });
        if (!res.ok) throw new Error('Failed to save result');
        return await res.json();
    },

    async getHistory() {
        const token = localStorage.getItem('token');
        if (!token) return [];

        const res = await fetch(`${API_URL}/tests/history`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to fetch history');
        return await res.json();
    },

    async getStats() {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const res = await fetch(`${API_URL}/tests/stats`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!res.ok) throw new Error('Failed to fetch stats');
        return await res.json();
    }
};
