let variasimagens = [
    'baleia.jpeg',
    'baleia2.jpeg',
    'baleia3.jpg',
    'baleia4.jpeg',
    'baleia5.jpg'
]

let counter = 0;

let corpo = document.querySelector('.body')

let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText) 

let imagem = document.createElement('img')
imagem.setAttribute('src', variasimagens[counter])

let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText)

function init() {
    console.log(before, next)
    corpo.appendChild(before)
    corpo.appendChild(imagem)
    corpo.appendChild(next)
}

before.addEventListener('click', function() {
    if (counter > 0) {
        counter = counter - 1;
    }
    imagem.setAttribute('src', variasimagens[counter])
})
next.addEventListener('click', function() {
    if (counter < 4) {
        counter = counter + 1;
    }
    imagem.setAttribute('src', variasimagens[counter])
})

init()