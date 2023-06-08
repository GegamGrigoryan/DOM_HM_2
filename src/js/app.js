document.addEventListener('DOMContentLoaded', () => {

    (function () {
        const citations = [
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
            h.textContent = citations[i++]
        }, 5000);
    }());

    function ascent() {
        const cell = document.querySelectorAll('.cell')
        let img = document.createElement('img');
        img.src = "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-Samurai-japan-icongeek26-linear-colour-icongeek26.png"
        img.style.width = '100%';
        img.style.height = '100%';

        setInterval(() => {
            let i = Math.floor(Math.random() * (cell.length - 1))
            cell[i].appendChild(img)
            cell[i].style = 'border:2px solid #f1a825'
        }, 1000);
    }
    ascent()
    
})

