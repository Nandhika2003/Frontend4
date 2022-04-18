const data = async() => {
    var inputCategory = document.querySelector('.form').value;
    const response = await fetch(`https://inshortsapi.vercel.app/news?category=${inputCategory}`)
    const result = await response.json();

    for(i = 0; i<50; i++) {
        document.querySelector('.container').innerHTML += `<div class='element'>
            <div class='title'>${result.data[i].title}</div>
            <div class='content'>${result.data[i].content}</div>
            <div class='end'>${result.data[i].author}</div>
            <div class='end'>${result.data[i].date}</div>
        </div>`    
    }  
}

function fun(){
    document.querySelector('.container').innerHTML='';
    data()
}
