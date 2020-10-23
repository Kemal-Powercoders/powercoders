const input= document.querySelector('.input');
const newsList= document.querySelector('.news-list');
const button= document.querySelector("button");

button.addEventListener("click", retrieve)

function retrieve(search){

    if (input.value == ''){
        alert('Input field is empty!')
    }

    newsList.innerHTML = ''
    
    search.preventDefault()

    const apiKey = 'f0c083149e6a47c28aed65580e348aa6'
    let topic= input.value;

    let url= `http://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article=>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        }).catch((error)=>{
            console.log(error)
        })
    })
    
    
}