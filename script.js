const apiUrl = 'https://simpsons-quotes-api.herokuapp.com/quotes';
const card = document.getElementById('simpson');
const mybtn = document.querySelector(".mybtn")

fetchApi = () => {
    axios.get(apiUrl)
        .then(res => res.data)
        .then(simpson => {
            
            const dataToHtml = `
                <h1>${simpson[0].character}</h1>
                <img src="${simpson[0].image}" />
                <p>${simpson[0].quote}</p>
            `;

            card.innerHTML = dataToHtml;
        })
}

fetchApi();

const extraSection = document.getElementById('extra-section');
const btn = document.getElementById('extra-btn');
const apiUrl2 = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${Math.floor(Math.random())}`;


let arrayOfSimpsons = [];
fetchApi2 = () => {
    
    axios.get(apiUrl)
        .then(res => res.data)
        .then(simpson => {
            arrayOfSimpsons.push( `
                <div class="content">
                    <h1>${simpson[0].character}</h1>
                    <img src="${simpson[0].image}" />
                    <p>${simpson[0].quote}</p>
                    <button class="mybtn">remove</button>
                </div>
            `);

           for(let i=0; i<arrayOfSimpsons.length; i++) {
               extraSection.innerHTML += arrayOfSimpsons[i]
           }
        }) 
}

btn.addEventListener('click', fetchApi2);


