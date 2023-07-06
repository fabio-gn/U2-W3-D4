let primaryImgs = document.getElementById('primary-images');
let secondaryImgs = document.getElementById('secondary-images');
let searchBar = document.querySelector('.form-inline');

const populateCards = function(searchString){
    const URL = `https://api.pexels.com/v1/search?query=${searchString}`
    fetch(URL, {headers : {Authorization: "rBC2xbsoaRY9fHvRGeGDtB6ehQgQmX3nTNqcCGdeFjwHk0cxVqjEF7CV"}})
        .then((res) => {
            if (res.ok){
                return res.json()
            } else {
                throw new Error('errore');
            }
        })
        .then((data)=>{
            console.log(data);
            let cardImgs = document.querySelectorAll('.card img')
            cardImgs.forEach( function(img, i){
                console.log(data.photos[i].src.medium)
            img.setAttribute('src', `${data.photos[i].src.medium}`)
            // let imgId = img.nextSibling;
            // console.log(imgId)
            // imgId.innerText = `${data.photos[i].id}`
            
            })
            // let cardIds = document.querySelectorAll('small .text-muted')
            // cardIds.forEach((id) =>{

            // })
           
        })
        .catch((err)=>{
            console.log(err);
        })

}

const resetCards = function(){
    let cards = document.querySelectorAll('.card svg')
    cards.forEach( (card, i) => {
        
    let img = document.createElement('img')
    img.classList.add('img-responsive', 'immagine-card', 'min-height',)
    card.replaceWith(img)
    })
}

resetCards();

primaryImgs.addEventListener('click', ()=>{
    populateCards('cats')
})
secondaryImgs.addEventListener('click', ()=>{
    populateCards('dogs')
})
searchBar.addEventListener('submit', function(e){
    e.preventDefault();

    let searchField = document.getElementById('search-field');
    populateCards(searchField.value);
})