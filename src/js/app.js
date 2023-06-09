// document.addEventListener('DOMContentLoaded', () => {

//     (function () {
//         const citations = [
//             ['Не осознав, кто ты есть, невозможно стать самураем.'],
//             ['Оружие самурая не меч, но его дух, растворённый в пустоте. (вокруг, воздухе, ветре.)'],
//             ['Не нужно ждать все время смерти. Нужно считать, что ты уже мертв.'],
//             ['Катана самурая покоится не в ножнах. Она в его душе.'],
//             ['Меч, даже уроненный со скалы, может убить, прежде чем коснется земли.']
//         ]
//         const h = document.querySelector('h2')
//         let i = 0;
//         h.textContent = citations[i]
//         setInterval(() => {
//             h.textContent = citations[i++]
//         }, 5000);
//     }());
//     function ascent() {
//         const cell = document.querySelectorAll('.cell')
//         let img = document.createElement('img');
//         img.src = "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-Samurai-japan-icongeek26-linear-colour-icongeek26.png"
//         img.style.width = '100%';
//         img.style.height = '100%';
//         setInterval(() => {
//             let i = Math.floor(Math.random() * (cell.length - 1))
//             cell[i].appendChild(img)
//             cell[i].style = 'border:2px solid #f1a825'
//         }, 1000);
//     }
//     ascent()

// })

//Реализация по классам
class Game {
    citations(citations) {
        this.citations = citations;
        citations = [
            ['Не осознав, кто ты есть, невозможно стать самураем.'],
            ['Оружие самурая не меч, но его дух, растворённый в пустоте. (вокруг, воздухе, ветре.)'],
            ['Не нужно ждать все время смерти. Нужно считать, что ты уже мертв.'],
            ['Катана самурая покоится не в ножнах. Она в его душе.'],
            ['Меч, даже уроненный со скалы, может убить, прежде чем коснется земли.']
        ]
        const h = document.querySelector('h2')
        let i = 0;
        h.textContent = citations[i]
        setInterval(() => {
            if (i == (citations.length)) {
                i = 0
            }
            h.textContent = citations[i++]
        }, 5000);
    };
    ascent() {
        const cell = document.querySelectorAll('.cell')
        let img = document.createElement('img');
        img.src = "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-Samurai-japan-icongeek26-linear-colour-icongeek26.png"
        img.style.width = '100%';
        img.style.height = '100%';
        img.classList.add('img-face')

        let samuraiWidth = document.querySelector('.samurai')
        let badSamuraiWidth = document.querySelector('.bad-samurai')
        let samuraiWidthNum = parseInt(samuraiWidth.style.width);
        let badSamuraiWidthNum = parseInt(badSamuraiWidth.style.width);


        setInterval(() => {
            let i = Math.floor(Math.random() * (cell.length))
            if (count != 50) {
                countBad += 10
                cell[i].appendChild(img)
                cell[i].style = 'border:2px solid #f1a825'
                samuraiWidth.style.width = (samuraiWidthNum - count) + '%';
                badSamuraiWidth.style.width = (badSamuraiWidthNum + count) + '%';

            } if (count == 50) {
                // const winner = document.querySelector('.win-name')
                // winner.textContent = "Оды Нобунаги Win"
                // new GameLogic().winReset()
            }
        }, 1000);
    }
}

new Game().citations()
new Game().ascent()

class GameLogic {

    hit() {
        const field = document.querySelector('.playing-Field-container');
        field.addEventListener('click', (event) => {
            event.preventDefault()
            let theTarget = event.target
            let samuraiWidth = document.querySelector('.samurai')
            let badSamuraiWidth = document.querySelector('.bad-samurai')
            let samuraiWidthNum = parseInt(samuraiWidth.style.width);
            let badSamuraiWidthNum = parseInt(badSamuraiWidth.style.width);


            if (theTarget.classList.contains('img-face') && count != 50) {
                countBad - 10;
                count = 10
                samuraiWidth.style.width = (samuraiWidthNum + count) + '%';
                badSamuraiWidth.style.width = (badSamuraiWidthNum - count) + '%';
            }
            if (count == 50) {
                const winner = document.querySelector('.win-name')
                winner.textContent = "Такэды Кацуёри Win"
                this.winReset()
            }

        })
    }
    winReset() {
        let m = document.querySelector('.win-wrp')
        m.classList.add("hiden");
    }
}

new GameLogic().hit()
