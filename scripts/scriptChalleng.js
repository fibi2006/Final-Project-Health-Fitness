

function increaseProgress(card) {
    const today = new Date().toISOString().split('T')[0];
    const title = card.querySelector('.card-title-fitness').textContent.trim();
    const key = `challenge_${title.replace(/\s+/g, '')}`;

    
    let state = JSON.parse(localStorage.getItem(key)) || { progress: 0, lastUpdate: null, completed: false };

  
    if (state.completed || state.lastUpdate === today) return;

   
    state.progress = Math.min(state.progress + 10, 100);
    state.lastUpdate = today;

    if (state.progress === 100) state.completed = true;

   
    localStorage.setItem(key, JSON.stringify(state));


    updateCardUI(card, state);
}

function updateCardUI(card, state) {
    const progressBar = card.querySelector('.progress-bar');
    const button = card.querySelector('button');

    progressBar.style.width = `${state.progress}%`;
    progressBar.textContent = `${state.progress}%`;

    if (state.completed) {
        progressBar.classList.add('bg-success');
        button.textContent = 'Completed';
        button.disabled = true;
    }
}

function loadChallengeState() {
    const cards = document.querySelectorAll('.card-fitness');

    cards.forEach(card => {
        const title = card.querySelector('.card-title-fitness').textContent.trim();
        const key = `challenge_${title.replace(/\s+/g, '')}`;
        const state = JSON.parse(localStorage.getItem(key)) || { progress: 0, lastUpdate: null, completed: false };

     
        updateCardUI(card, state);

        const button = card.querySelector('button');
        if(button){
            button.addEventListener('click', (e) => {
                e.preventDefault();
                increaseProgress(card);
            });
        }
    });
}


window.addEventListener('DOMContentLoaded', loadChallengeState);
