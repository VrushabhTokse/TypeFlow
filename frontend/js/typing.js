// Audio Context for typing sound
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function playClickSound(type = 'correct') {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    if (type === 'correct') {
        // Soft mechanical click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.03);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);
    } else if (type === 'incorrect') {
        // Dull thud / harsh low pitch for error
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.08);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    } else if (type === 'backspace') {
        // Quick high-pitched tick for backspace
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.02);
        gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.02);
    }
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    const duration = type === 'incorrect' ? 0.08 : (type === 'backspace' ? 0.02 : 0.03);
    osc.stop(audioCtx.currentTime + duration);
}

let currentText = '';
let textArray = [];
let currentIndex = 0;
let errors = 0;
let timer = null;
let timeLeft = 30;
let initialTime = 30;
let isPlaying = false;
let currentLevel = 'Beginner';
let isLessonMode = false;
let isCustomMode = false;
let customTextString = "";
let currentLessonId = 1;

// DOM Elements
const textWrapper = document.getElementById('text-wrapper');
const hiddenInput = document.getElementById('hidden-input');
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const restartBtn = document.getElementById('restart-btn');
const configBtns = document.querySelectorAll('.config-btn');
const resultModal = document.getElementById('result-modal');

function generateText() {
    if (isLessonMode) {
        const lesson = getLessonById(currentLessonId);
        currentText = lesson ? lesson.text : "Lesson not found.";
    } else if (isCustomMode) {
        currentText = customTextString || "Please provide custom text.";
    } else {
        // Generate text from paragraphs file
        currentText = typeof getRandomParagraph === 'function' ? getRandomParagraph() : "The quick brown fox jumps over the lazy dog.";
    }
    
    // Normalize typography to standard ASCII to prevent frustrating typing errors
    currentText = currentText
        .replace(/[\u2018\u2019]/g, "'") // smart single quotes
        .replace(/[\u201C\u201D]/g, '"') // smart double quotes
        .replace(/[\u2013\u2014]/g, "-") // en and em dashes
        .replace(/\u2026/g, "...");      // ellipsis
        
    // Create HTML for each character
    textWrapper.innerHTML = '';
    textArray = currentText.split('');
    textArray.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('char');
        if (index === 0) span.classList.add('current-char');
        textWrapper.appendChild(span);
    });
    updateVirtualKeyboard();
}

function initTest() {
    clearInterval(timer);
    isPlaying = false;
    currentIndex = 0;
    errors = 0;
    if (isLessonMode) {
        initialTime = 300; // Give plenty of time for lessons
    }
    timeLeft = initialTime;
    
    timerEl.innerText = isLessonMode ? '∞' : timeLeft;
    wpmEl.innerText = '0';
    accuracyEl.innerText = '100%';
    hiddenInput.value = '';
    
    generateText();
    hiddenInput.focus();
}

function startTimer() {
    if (isPlaying) return;
    isPlaying = true;
    timer = setInterval(() => {
        timeLeft--;
        if (!isLessonMode) timerEl.innerText = timeLeft;
        updateStats();

        if (timeLeft <= 0 && !isLessonMode) {
            endTest();
        }
    }, 1000);
}

function updateStats() {
    const timeElapsed = initialTime - timeLeft;
    if (timeElapsed === 0) return;

    const charsTyped = currentIndex;
    const correctChars = charsTyped - errors;
    
    // WPM = (Total characters / 5) / time in minutes
    const wpm = Math.round(((charsTyped / 5) / timeElapsed) * 60);
    wpmEl.innerText = wpm > 0 ? wpm : 0;

    const accuracy = charsTyped === 0 ? 100 : Math.round((correctChars / charsTyped) * 100);
    accuracyEl.innerText = `${accuracy}%`;
}

async function endTest() {
    clearInterval(timer);
    isPlaying = false;
    hiddenInput.blur();
    updateStats();

    const finalWpm = parseInt(wpmEl.innerText);
    const finalAccuracy = parseInt(accuracyEl.innerText);
    const totalChars = currentIndex;

    // Show Modal
    document.getElementById('final-wpm').innerText = finalWpm;
    document.getElementById('final-accuracy').innerText = `${finalAccuracy}%`;
    document.getElementById('final-chars').innerText = totalChars;
    document.getElementById('final-errors').innerText = errors;
    
    const msgEl = document.getElementById('motivational-message');
    if (finalWpm > 60) msgEl.innerText = "Exceptional typing skills! You're a pro.";
    else if (finalWpm > 40) msgEl.innerText = "Great job! Keep practicing to reach the next level.";
    else msgEl.innerText = "Good effort! Consistency is the key to improving your speed.";

    // Show/Hide Certificate Section
    const certSection = document.getElementById('certificate-section');
    const validDurations = [30, 60, 120];
    if (isLessonMode || (!isCustomMode && validDurations.includes(initialTime))) {
        if (certSection) certSection.style.display = 'block';
    } else {
        if (certSection) certSection.style.display = 'none';
    }

    const nextLessonBtn = document.getElementById('modal-next-lesson');
    if (isLessonMode) {
        // Save progress locally
        let completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
        if (!completed.includes(currentLessonId) && finalAccuracy >= 80) {
            completed.push(currentLessonId);
            localStorage.setItem('completedLessons', JSON.stringify(completed));
        }
        
        // Show next button if there's a next lesson
        if (getLessonById(currentLessonId + 1)) {
            nextLessonBtn.style.display = 'inline-flex';
        } else {
            nextLessonBtn.style.display = 'none';
        }
    } else {
        if (nextLessonBtn) nextLessonBtn.style.display = 'none';
    }

    resultModal.classList.add('active');

    // Save result if logged in
    try {
        await api.saveResult({
            wpm: finalWpm,
            accuracy: finalAccuracy,
            totalCharacters: totalChars,
            errorsCount: errors,
            durationSeconds: initialTime,
            level: currentLevel
        });
    } catch (err) {
        console.log("Could not save result (maybe not logged in)");
    }
}

// Event Listeners
if (textWrapper) {
    textWrapper.addEventListener('click', () => {
        hiddenInput.focus();
    });

    hiddenInput.addEventListener('input', (e) => {
        startTimer();
        const inputVal = hiddenInput.value;
        
        let soundType = 'correct';
        if (inputVal.length < currentIndex) {
            soundType = 'backspace';
        } else if (inputVal.length > 0) {
            const lastCharTyped = inputVal[inputVal.length - 1];
            const targetChar = textArray[inputVal.length - 1];
            if (lastCharTyped !== targetChar) {
                soundType = 'incorrect';
            }
        }
        playClickSound(soundType);

        const chars = textWrapper.querySelectorAll('.char');

        // Reset all classes
        chars.forEach(c => c.className = 'char');

        errors = 0;
        let typedCorrectly = 0;

        for (let i = 0; i < inputVal.length; i++) {
            if (i >= chars.length) break;

            if (inputVal[i] === textArray[i]) {
                chars[i].classList.add('correct');
                typedCorrectly++;
            } else {
                chars[i].classList.add('incorrect');
                errors++;
            }
        }

        currentIndex = inputVal.length;

        // Add current-char to the next char
        if (currentIndex < chars.length) {
            chars[currentIndex].classList.add('current-char');
        } else {
            endTest();
        }

        updateVirtualKeyboard();

        // Scroll text automatically to keep current character in view
        if (currentIndex < chars.length) {
            const currentCharEl = chars[currentIndex];
            if (currentCharEl) {
                currentCharEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    restartBtn.addEventListener('click', initTest);
    
    document.getElementById('modal-restart').addEventListener('click', () => {
        resultModal.classList.remove('active');
        initTest();
    });

    // Config setup
    configBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.closest('.config-btn');
            if (!target) return;
            if (target.id === 'custom-nav-btn' || target.id === 'lessons-nav-btn') return;

            isLessonMode = false; // Switch back to practice mode
            isCustomMode = false; // Disable custom mode
            
            // Handle active state
            target.parentElement.querySelectorAll('.config-btn').forEach(b => b.classList.remove('active'));
            target.classList.add('active');

            if (target.dataset.level) {
                currentLevel = target.dataset.level;
            }
            if (target.dataset.time) {
                initialTime = parseInt(target.dataset.time);
            }
            initTest();
        });
    });

    // Lessons UI
    const lessonsBtn = document.getElementById('lessons-nav-btn');
    const lessonsModal = document.getElementById('lessons-modal');
    const closeLessons = document.getElementById('close-lessons');
    const lessonsContainer = document.getElementById('lessons-container');
    const nextLessonBtn = document.getElementById('modal-next-lesson');

    if (lessonsBtn && lessonsModal) {
        lessonsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            renderLessons();
            lessonsModal.classList.add('active');
        });

        closeLessons.addEventListener('click', () => {
            lessonsModal.classList.remove('active');
        });

        if (nextLessonBtn) {
            nextLessonBtn.addEventListener('click', () => {
                currentLessonId++;
                resultModal.classList.remove('active');
                initTest();
            });
        }
    }

    function renderLessons() {
        if (!lessonsContainer) return;
        lessonsContainer.innerHTML = '';
        const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');

        typingLessons.forEach(category => {
            const catDiv = document.createElement('div');
            catDiv.className = 'lesson-category';
            
            const title = document.createElement('h3');
            title.innerText = category.category;
            catDiv.appendChild(title);

            const listDiv = document.createElement('div');
            listDiv.className = 'lesson-list';

            category.lessons.forEach(lesson => {
                const item = document.createElement('div');
                item.className = 'lesson-item';
                if (completed.includes(lesson.id)) item.classList.add('completed');
                if (isLessonMode && currentLessonId === lesson.id) item.classList.add('active-lesson');
                
                item.innerHTML = `<div>Lesson ${lesson.id}</div><div style="font-size: 0.8em; color: var(--text-secondary); margin-top: 4px;">${lesson.title}</div>`;
                
                item.addEventListener('click', () => {
                    isLessonMode = true;
                    currentLessonId = lesson.id;
                    lessonsModal.classList.remove('active');
                    initTest();
                });

                listDiv.appendChild(item);
            });

            catDiv.appendChild(listDiv);
            lessonsContainer.appendChild(catDiv);
        });
    }

    // Custom Text UI
    const customTextBtn = document.getElementById('custom-nav-btn');
    const customTextModal = document.getElementById('custom-text-modal');
    const closeCustomModal = document.getElementById('close-custom-modal');
    const startCustomBtn = document.getElementById('start-custom-btn');
    const customTextInput = document.getElementById('custom-text-input');
    const customTimeInput = document.getElementById('custom-time-input');

    if (customTextBtn && customTextModal) {
        customTextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            customTextModal.classList.add('active');
        });

        closeCustomModal.addEventListener('click', () => {
            customTextModal.classList.remove('active');
        });

        startCustomBtn.addEventListener('click', () => {
            const txt = customTextInput.value.trim();
            const time = parseInt(customTimeInput.value);
            
            if (txt) {
                isCustomMode = true;
                isLessonMode = false;
                customTextString = txt;
                if (time > 0) initialTime = time;
                
                customTextModal.classList.remove('active');
                
                // Clear active states on other config buttons
                configBtns.forEach(b => b.classList.remove('active'));
                customTextBtn.classList.add('active');
                
                initTest();
            } else {
                alert("Please paste or type some text to practice.");
            }
        });
    }

    // Virtual Keyboard & Finger Logic
    function updateVirtualKeyboard() {
        const keys = document.querySelectorAll('.vk-key');
        if (keys.length === 0) return; // Keyboard not in DOM

        keys.forEach(k => k.classList.remove('active'));
        document.querySelectorAll('.finger').forEach(f => f.classList.remove('active-finger'));

        if (currentIndex >= textArray.length) return;

        let targetChar = textArray[currentIndex];
        let isShift = false;
        let keyToHighlight = targetChar.toLowerCase();

        // Symbols that require shift
        const shiftMap = {
            '~': '`', '!': '1', '@': '2', '#': '3', '$': '4', '%': '5',
            '^': '6', '&': '7', '*': '8', '(': '9', ')': '0', '_': '-',
            '+': '=', '{': '[', '}': ']', '|': '\\', ':': ';', '"': "'",
            '<': ',', '>': '.', '?': '/'
        };

        if (shiftMap[targetChar]) {
            isShift = true;
            keyToHighlight = shiftMap[targetChar];
        } else if (targetChar !== targetChar.toLowerCase() && targetChar.match(/[A-Z]/)) {
            isShift = true;
        }

        if (isShift) {
            const shiftKey = document.querySelector('.vk-shift-l');
            if (shiftKey) shiftKey.classList.add('active');
        }

        const targetEl = document.querySelector(`.vk-key[data-key="${keyToHighlight}"]`);
        if (targetEl) targetEl.classList.add('active');

        // Finger Mapping Logic
        const fingerMap = {
            '`': 'left-pinky', '1': 'left-pinky', 'q': 'left-pinky', 'a': 'left-pinky', 'z': 'left-pinky',
            '2': 'left-ring', 'w': 'left-ring', 's': 'left-ring', 'x': 'left-ring',
            '3': 'left-middle', 'e': 'left-middle', 'd': 'left-middle', 'c': 'left-middle',
            '4': 'left-index', '5': 'left-index', 'r': 'left-index', 't': 'left-index', 'f': 'left-index', 'g': 'left-index', 'v': 'left-index', 'b': 'left-index',
            ' ': 'right-thumb',
            '6': 'right-index', '7': 'right-index', 'y': 'right-index', 'u': 'right-index', 'h': 'right-index', 'j': 'right-index', 'n': 'right-index', 'm': 'right-index',
            '8': 'right-middle', 'i': 'right-middle', 'k': 'right-middle', ',': 'right-middle',
            '9': 'right-ring', 'o': 'right-ring', 'l': 'right-ring', '.': 'right-ring',
            '0': 'right-pinky', '-': 'right-pinky', '=': 'right-pinky', 'p': 'right-pinky', '[': 'right-pinky', ']': 'right-pinky', '\\': 'right-pinky', ';': 'right-pinky', '\'': 'right-pinky', '/': 'right-pinky'
        };

        let fingerId = fingerMap[keyToHighlight];
        
        if (isShift) {
            // Highlight opposite pinky for shift key
            if (fingerId && fingerId.startsWith('right')) {
                const leftShiftPinky = document.getElementById('left-pinky');
                if (leftShiftPinky) leftShiftPinky.classList.add('active-finger');
            } else if (fingerId && fingerId.startsWith('left')) {
                const rightShiftPinky = document.getElementById('right-pinky');
                if (rightShiftPinky) rightShiftPinky.classList.add('active-finger');
            }
        }

        if (fingerId) {
            const fingerEl = document.getElementById(fingerId);
            if (fingerEl) fingerEl.classList.add('active-finger');
        }
    }

    // Certificate Generation Logic
    const downloadCertBtn = document.getElementById('download-cert-btn');
    const verifyCertBtn = document.getElementById('verify-cert-btn');
    
    if (verifyCertBtn) {
        verifyCertBtn.addEventListener('click', () => {
            const certIdEl = document.getElementById('cert-id-display');
            if (certIdEl) {
                const currentId = certIdEl.innerText.replace('ID: ', '');
                if (currentId && currentId !== 'TF-XXX-000') {
                    alert(`✅ Certificate ${currentId} is VALID and verified on the TypeFlow secure ledger.`);
                } else {
                    alert(`❌ Please download a certificate first to verify it.`);
                }
            }
        });
    }

    if (downloadCertBtn) {
        downloadCertBtn.addEventListener('click', () => {
            if (typeof html2canvas === 'undefined') {
                alert("Rendering library is still loading. Please try again in a moment.");
                return;
            }

            const nameInput = document.getElementById('cert-name-input').value.trim();
            const nameToDisplay = nameInput || "Guest Typist";
            
            // Populate template
            document.getElementById('cert-name-display').innerText = nameToDisplay;
            document.getElementById('cert-wpm').innerText = document.getElementById('final-wpm').innerText;
            document.getElementById('cert-acc').innerText = document.getElementById('final-accuracy').innerText.replace('%', '');
            
            const descEl = document.getElementById('cert-assessment-desc');
            if (descEl) {
                if (isLessonMode) {
                    const lesson = getLessonById(currentLessonId);
                    const title = lesson ? lesson.title : `Lesson ${currentLessonId}`;
                    descEl.innerHTML = `Has successfully completed <strong style="color: #fff;">Lesson ${currentLessonId}: ${title}</strong> with the following outstanding results:`;
                } else {
                    descEl.innerHTML = `Has successfully completed a <strong style="color: #fff;">${initialTime}</strong> second typing assessment with the following outstanding results:`;
                }
            }
            
            const today = new Date();
            document.getElementById('cert-date').innerText = today.toLocaleDateString();

            // Generate Unique Certificate ID
            const nameParts = nameToDisplay.split(' ');
            let initials = 'GT';
            if (nameParts.length >= 2) {
                initials = (nameParts[0][0] + nameParts[nameParts.length-1][0]).toUpperCase();
            } else if (nameParts[0].length >= 2) {
                initials = nameParts[0].substring(0, 2).toUpperCase();
            }
            const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
            const hash = Math.random().toString(36).substring(2, 6).toUpperCase();
            const certId = `TF-${initials}-${dateStr}-${hash}`;
            
            const certIdDisplay = document.getElementById('cert-id-display');
            if (certIdDisplay) certIdDisplay.innerText = "ID: " + certId;

            const certElement = document.getElementById('certificate-template');
            
            // Generate Canvas
            const originalBtnText = downloadCertBtn.innerHTML;
            downloadCertBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
            downloadCertBtn.disabled = true;

            html2canvas(certElement, {
                scale: 2, // High resolution
                backgroundColor: "#0f172a",
                logging: false
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `TypeFlow_Certificate_${nameToDisplay.replace(/\s+/g, '_')}.png`;
                link.href = canvas.toDataURL("image/png");
                link.click();
                
                downloadCertBtn.innerHTML = originalBtnText;
                downloadCertBtn.disabled = false;
            }).catch(err => {
                console.error("Certificate generation failed:", err);
                downloadCertBtn.innerHTML = originalBtnText;
                downloadCertBtn.disabled = false;
                alert("Failed to generate certificate.");
            });
        });
    }

    // Initial setup
    initTest();
}
