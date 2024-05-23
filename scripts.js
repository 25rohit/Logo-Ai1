// Mock function to simulate AI logo generation
function generateAILogos() {
    const aiLogosContainer = document.getElementById('ai-logos');
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/150?text=AI+Logo+${i}`;
        aiLogosContainer.appendChild(img);
    }
}

document.addEventListener('DOMContentLoaded', generateAILogos);
