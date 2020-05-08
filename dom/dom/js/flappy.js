function newElement(tagName, className) {
    const elem = document.createElement(tagName) // variável elem irá receber um nó
    elem.className = className //define class para nó específico 
    return elem //<tagName class="className"></tagName>
}


//função que irá criar barreiras
function Barrier(reverse = false) { // parâmetro define se barreira é reversa ou não, definindo a sequência da borda e do corpo
    // iremos instanciar a função para termos mais de uma barreira
    this.element = newElement('div', 'barrier') // <div class="barrier"></div>

    const border = newElement('div', 'border') // criando div quer será borda sup do cano da barreira
    const body = newElement('div', 'body') // criando div que será  corpo do cano da barreira

    // verifica ordem de elemento baseado no boolean reverse e add respeitando o critério de ordem de borda ou corpo
    this.element.appendChild(reverse ? body : border) // <div class="barriers"> (<div class="body"></div>) </div>
    this.element.appendChild(reverse ? border : body) // <div class="barriers"> (<div class="border"></div>) </div>

    // seta altura passada como parâmetro.
    this.setHeight = height => body.style.height = `${height}px`//altera a altura somente do body

}


function PairOfBarriers(height, aperture, posX) {
    this.element = newElement('div', 'pair-of-barriers') // <div class="pair-of-barriers"></div>

    this.upper = new Barrier(true) // <div class="barrier"> (<div class="body"></div>) </div>
    this.low = new Barrier(false)  // <div class="barrier"> (<div class="border"></div)' </div>

    // add na div class="pair-of-barriers". Lembrando que o element é um objeto que está sendo modificado na classe Barrier
    this.element.appendChild(this.upper.element) // <div class="pair-of-barriers"> <div class="barrier"> <div class="body"> </div> </div> </div>
    this.element.appendChild(this.low.element) // <div class="pair-of-barriers"> <div class="barrier"> '<div class="border"></div>' </div> </div>

    //sortea posição abertura
    this.apertureDraw = () => {
        const heightUpper = Math.random() * (height - aperture) // posiciona abertura de forma randômica
        const heightLow = height - aperture - heightUpper
        // instância da função Barrier recebe valor aqui, posicionando elemento
        this.upper.setHeight(heightUpper)
        this.low.setHeight(heightLow)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.apertureDraw()
    this.setX(posX)
}

/* teste 2
const b = new PairOfBarriers(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.element)
*/

// controla as barreiras: fazendo scrolling, calculando distância entre elas
function Barriers(height, width, aperture, distance, alertPoint) {
    this.pairs = [
        new PairOfBarriers(height, aperture, width), //último parâmetro começa fora da viewport do jogo, no caso a largura da tela do jogo
        new PairOfBarriers(height, aperture, width + distance), // segunda barreira com altura e abertura igual a de cima, porém com acréscimo de distância da primeira.
        new PairOfBarriers(height, aperture, width + distance * 2), // distância da segunda
        new PairOfBarriers(height, aperture, width + distance * 3) // distância da terceira
    ]
  
    // animação/movimentação das barreiras
    const deslocation = 3
    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - deslocation) // deslocando barreira na tela. setInterval() chama essa função num intervalo de tempo determinado

            // elemento ao sair da tela
            if(pair.getX() < -pair.getWidth()) { // determina posX em que a barreira sair da tela do jogo
                pair.setX(pair.getX() + distance * this.pairs.length) // posX atual + espaço + quant.de barreiras. Fazendo que a barreira atual vá para o ínicio novamente, ficando todas em loop.
                pair.apertureDraw()
            }

            const half = width / 2 // meio da tela
            const passedHalf = pair.getX() + distance >= half // atribui true ou false ao passar pelo meio da tela
                && pair.getX() < half

             // retorna true se barreira passou pelo meio da tela   
                if(passedHalf)  alertPoint() // dispara função de progresso, incrementando progresso  
        })
    } 
}


// função que carrega imagem de pássaro, add nó no html e controla movimentação
function Bird(heightGame) {
    let flying = false

    this.element = newElement('img', 'bird') // cria um novo nó de elemento. <img class="bird"></img>
    this.element.src = 'imgs/passaro.png' // <img class="bird" src="imgs/passaro.png"></img>

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0]) // pega a posição Y
    this.setY = y => this.element.style.bottom = `${y}px` // seta a posição Y

    window.onkeydown = e => flying = true // qualquer tecla pressionada dispara evento que retorna flying = true
    window.onkeyup = e => flying = false // ao soltar a tecla dispara evento que retorna flying = false

    // animação/movimentação do pássaro
    this.animate = () => {
        const newY = this.getY() + (flying ? 8 : -5) // movimentação positiva ou negativa a depender da varíavel booleana   
        const maxHeight = heightGame - this.element.clientHeight // altura máxima do pássaro dentro da tela 

        if (newY <= 0) { // impede que pássaro saia da tela abaixo
            this.setY(0)
        }
        else if (newY >= maxHeight) { // impede que pássaro saia da tela acima
            this.setY(maxHeight)
        }
        else { // se não ocorrer nenhuma das restrições acima, permite movimentação do pássaro
            this.setY(newY)
        }
    }

    this.setY(heightGame / 2) // posição inicial do pássaro
}


// função que seta progresso
function Progress() {
    this.element = newElement('span', 'progress') // add nó na tela para mostrar o progresso
    this.updatePoints = points => { // função é disparada 
        this.element.innerHTML = points // incrementa progress na tela
    }
    this.updatePoints(0) // pontos iniciais
}

 //teste 3
    // const barriers = new Barriers(700, 1200, 200, 400)
    // const bird = new Bird(700)
    // const gameArea = document.querySelector('[wm-flappy]')
    
    // gameArea.appendChild(bird.element)
    // gameArea.appendChild(new Progress().element)
    // barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))
    // //chamando função animar dentro de um temporizador
    // setInterval(() => {
    //     barriers.animate()
    //     bird.animate()
    // }, 20)


// função que identifica sobreposição de elementos
function sobreposion(elementA, elementB) {
    const a = elementA.getBoundingClientRect() // variável recebe exata dimensões em pixels do elementA
    const b = elementB.getBoundingClientRect() // variável recebe exata dimensões em pixels do elementb

    const horizontal = a.left + a.width >= b.left 
        && b.left + b.width >= a.left // retorna true quando as dimensões de a ou b se chocam na horizontal

    const vertical = a.top + a.height >= b.top 
        && b.top + b.height >= a.top // retorna true quando as dimensões de a ou b se chocam na vertical

    return horizontal && vertical // retorna true se ocorrer choque na horizontal e vertical
}  


// função que retorna true ou false para colisão do pássaro com as barreiras
function colision(bird, barriers) {
    let colision = false
    barriers.pairs.forEach(pairOfBarriers => { // percorre o array de barreiras
        if(!colision) { // cada par de barreira verificar se colidiu ou não
            const upper = pairOfBarriers.upper.element 
            const low = pairOfBarriers.low.element
            colision = sobreposion(bird.element, upper) //seta true caso haja colisão entre pássaro e barreiras
                || sobreposion(bird.element, low)
        }
    })

    return colision
}


// função principal que carrega os elementos na tela do jogo, determinando os parâmetros para as funções auxuliares funcionarem
function FlappyBird() { 
    let points = 0

    const gameArea = document.querySelector('[wm-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400, 
        () => progress.updatePoints(++points))
    const bird = new Bird(height)

    gameArea.appendChild(progress.element)
    gameArea.appendChild(bird.element)
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))

    this.start = () => {
        // loop do jogo
        const time = setInterval(()=> {
            barriers.animate()
            bird.animate()

            if(colision(bird, barriers)) {
                clearInterval(time)
            }

        }, 20)
    }
}
// instancinando função, acessando seu método para iniciar game
new FlappyBird().start()