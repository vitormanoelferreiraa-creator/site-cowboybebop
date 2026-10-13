let userBalance = 50000;
let audioCtx = null;

// Clock Updater
setInterval(() => {
    const now = new Date();
    const year = now.getFullYear() + 400; // 2071 style
    const timeStr = now.toTimeString().split(' ')[0];
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.innerText = `${year}-10-24 ${timeStr}`;
    }
}, 1000);

// Tab Switcher
function switchTab(tabId) {
    document.querySelectorAll('.view-content').forEach(el => el.classList.add('hidden'));
    const targetView = document.getElementById('view-' + tabId);
    if (targetView) targetView.classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('border-bebop-amber', 'text-bebop-amber', 'bg-amber-950/20');
        btn.classList.add('border-transparent', 'text-bebop-muted');
    });
    const activeBtn = document.getElementById('tab-' + tabId);
    if (activeBtn) {
        activeBtn.classList.remove('border-transparent', 'text-bebop-muted');
        activeBtn.classList.add('border-bebop-amber', 'text-bebop-amber', 'bg-amber-950/20');
    }
    playBeep(600, 0.03);
}

// Spotify Embed Update
function updateSpotifyEmbed() {
    const inputVal = document.getElementById('spotifyUrlInput').value.trim();
    if (!inputVal) return;

    let embedUrl = inputVal;
    if (inputVal.includes('open.spotify.com') && !inputVal.includes('/embed/')) {
        embedUrl = inputVal.replace('open.spotify.com/', 'open.spotify.com/embed/');
    }
    if (!embedUrl.includes('theme=0')) {
        embedUrl += (embedUrl.includes('?') ? '&' : '?') + 'theme=0';
    }

    const spotifyIframe = document.getElementById('spotifyIframe');
    if (spotifyIframe) spotifyIframe.src = embedUrl;
    playBeep(700, 0.05);
}

// Real-time Link Sync
function saveLinks() {
    const github = document.getElementById('input-github')?.value;
    const linkedin = document.getElementById('input-linkedin')?.value;
    const portfolio = document.getElementById('input-portfolio')?.value;
    const instagram = document.getElementById('input-instagram')?.value;

    if (document.getElementById('quick-github')) document.getElementById('quick-github').href = github || '#';
    if (document.getElementById('quick-linkedin')) document.getElementById('quick-linkedin').href = linkedin || '#';
    if (document.getElementById('quick-portfolio')) document.getElementById('quick-portfolio').href = portfolio || '#';
    if (document.getElementById('quick-instagram')) document.getElementById('quick-instagram').href = instagram || '#';
}

// Retro Beep Sound FX generator
function playBeep(freq, duration) {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
}

let isAudioPlaying = false;
function toggleAudio() {
    isAudioPlaying = !isAudioPlaying;
    const btnText = document.getElementById('bgmText');
    const icon = document.getElementById('bgmIcon');
    if (isAudioPlaying) {
        if (btnText) btnText.innerText = "SYNTH ACTIVE";
        if (icon) icon.className = "fa-solid fa-pause";
        playBeep(440, 0.1);
    } else {
        if (btnText) btnText.innerText = "SYNTH RADIO";
        if (icon) icon.className = "fa-solid fa-play";
        playBeep(220, 0.1);
    }
}

window.onload = () => {
    saveLinks();
};