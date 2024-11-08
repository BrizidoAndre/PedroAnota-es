/*
    SIMPLE JS SLIDER
 */

// Adicione um id ao wrapper para referenciar ele e seus slides
const wrapper = document.getElementById('wrapper-1')
const slides = document.querySelectorAll("#wrapper-1 .slide-ex")

// Adicione um id aos botões de ação
const prevBtn = document.getElementById('action-prev-1')
const nextBtn = document.getElementById('action-next-1')

// Adicione uma função que retorne o index atual do slide
function getIndex() {
    return isNaN(parseInt(wrapper.style.getPropertyValue('--current-index'))) ? 0 : parseInt(wrapper.style.getPropertyValue('--current-index'))
}

// Adicione uma função que realize as atividades necessárias ao alterar o slide atual (Desabilitar botões caso preciso & mudar o valor da variável CSS)
function changeIndex(index) {
    console.log(slides.length)
    if (index > 0) {
        prevBtn.removeAttribute('disabled')
    } else {
        prevBtn.setAttribute('disabled', 'disabled')
    }
    if (index < slides.length - 1) {
        nextBtn.removeAttribute('disabled')
    } else {
        nextBtn.setAttribute('disabled', 'disabled')
    }

    wrapper.style.setProperty('--current-index', index)
}

// Defina um valor inicial e chame a função
changeIndex(getIndex())

// Adicione eventos js para a alteração do index atual
nextBtn.addEventListener('click', () => {
    changeIndex(getIndex() + 1)
})

prevBtn.addEventListener('click', () => {
    changeIndex(getIndex() - 1)
})

/*
    NEXT LEVEL JS SLIDER
 */