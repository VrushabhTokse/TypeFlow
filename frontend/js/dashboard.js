document.addEventListener('DOMContentLoaded', async () => {
    const user = await api.getMe();
    
    if (!user) {
        // Redirect to login if not authenticated
        window.location.href = 'auth.html';
        return;
    }

    document.getElementById('username-display').innerText = user.username;

    loadStats();
    loadHistory();

    async function loadStats() {
        try {
            const stats = await api.getStats();
            document.getElementById('highest-wpm').innerText = stats.highestWpm || 0;
            document.getElementById('avg-wpm').innerText = stats.averageWpm || 0;
            document.getElementById('total-tests').innerText = stats.totalTests || 0;
        } catch (err) {
            console.error('Failed to load stats', err);
        }
    }

    async function loadHistory() {
        try {
            const history = await api.getHistory();
            const tbody = document.getElementById('history-body');
            
            if (history.length === 0) {
                tbody.innerHTML = '<tr><td colspan="6" class="text-center">No test history available. Play a test to see results here!</td></tr>';
                return;
            }

            tbody.innerHTML = '';
            history.forEach(item => {
                const tr = document.createElement('tr');
                const date = new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric',
                    hour: '2-digit', minute:'2-digit'
                });
                
                tr.innerHTML = `
                    <td>${date}</td>
                    <td><span class="level-badge ${item.level.toLowerCase()}">${item.level}</span></td>
                    <td>${item.durationSeconds}s</td>
                    <td class="font-bold text-primary">${item.wpm}</td>
                    <td>${item.accuracy}%</td>
                    <td class="text-error">${item.errorsCount}</td>
                `;
                tbody.appendChild(tr);
            });
        } catch (err) {
            console.error('Failed to load history', err);
            document.getElementById('history-body').innerHTML = '<tr><td colspan="6" class="text-center text-error">Failed to load history.</td></tr>';
        }
    }
});
