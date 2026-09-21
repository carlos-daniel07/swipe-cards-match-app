let isAnimating = false
let pullDeltaX = 0 // distancia que la card se esta arrastrando
const DECISION_THRESHOLD = 80;

function startDrag(e) {
    if (isAnimating) return

    // obtener el primer elemento 
    const actualCard = e.target.closest('article')
    if(!actualCard) return


    // obtener posicion inicial de mouse o dedo
    const startX = e.pageX ?? e.touches[0].pageX
    console.log(startX);

    // escuchar cuando el mouse o touch se esta moviendo
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);

    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });

    function onMove(event) {
        // posicion actual
        const currentX = event.pageX ?? event.touches[0].pageX
        // distancia recorrida
        pullDeltaX = currentX - startX

        if (pullDeltaX === 0) return

        // indicar que se esta animando
        isAnimating = true

        // caulcular la rotacion de la card usando la distancia
        const deg = pullDeltaX / 10

        // aplicar la transformacion de la card
        actualCard.style.transform = `translate(${pullDeltaX}px) rotate(${deg}deg)`

        // cambiar el cursor
        actualCard.style.cursor = 'grabbing'

        //cambiar opacidad de acuerdo a la informacion
        const opacity = Math.abs(pullDeltaX) / 100
        const isRight = pullDeltaX > 0

        const choiceEl = isRight 
            ? actualCard.querySelector('.choice.like') 
            : actualCard.querySelector('.choice.nope')
        
            choiceEl.style.opacity = opacity
    }

    function onEnd(event) {

        // remover los event listener
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onEnd)

        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onEnd)

        // saber si el usuario tomo una desicion
        const decisionMade = Math.abs(pullDeltaX) >= DECISION_THRESHOLD

        if (decisionMade) {
            const goRight = pullDeltaX >= 0
            const goLeft = !goRight

            // agregar la clase de acuerdo a la decision
            actualCard.classList.add(goRight ? 'go-right' : 'go-left')
            actualCard.addEventListener("transitionend", ()=>{
                actualCard.remove()
            })
        } else {
            actualCard.classList.add('reset')
            actualCard.querySelector('.choice.like').style.opacity = 0
            actualCard.querySelector( '.choice.nope').style.opacity = 0
            actualCard.classList.remove('go-right', 'go-left')
        }

        // resetear variables
        actualCard.addEventListener('transitionend', ()=>{
            actualCard.removeAttribute('style')
            actualCard.classList.remove('reset')

            pullDeltaX = 0
            isAnimating = false
        })
    }
}


document.addEventListener('mousedown', startDrag)
document.addEventListener('touchstart', startDrag, { passive: true })