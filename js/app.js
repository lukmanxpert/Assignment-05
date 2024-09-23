// variables
const donateBtn = document.getElementById('donate-btn')
const historyBtn = document.getElementById('history-btn')
const historySection = document.getElementById('history-section');
const cardsSection = document.getElementById('cards-section')

// donate and history button functions

historyBtn.addEventListener('click', function(){
    historySection.classList.remove('hidden');
    cardsSection.classList.add('hidden');
    historyBtn.classList.add('bg-primary');
    donateBtn.classList.remove('bg-primary');
})

donateBtn.addEventListener('click', function(){
    historySection.classList.add('hidden');
    cardsSection.classList.remove('hidden');
    donateBtn.classList.add('bg-primary');
    historyBtn.classList.remove('bg-primary');
})


