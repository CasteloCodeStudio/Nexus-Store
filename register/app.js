document.addEventListener('DOMContentLoaded', () => {
    new TypeIt (".animated", {
        speed: 200,
        
        loop: true
    }).type('smartphone ').delete(11).type('notebook ').delete(10)
    
    .go()
})