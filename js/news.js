document.getElementById("readBtn").addEventListener('click', fetchNews);

function fetchNews() {
    fetch('newslist.json')
        .then( response => response.json() )
        .then( newsData =>  {
            document.querySelector('.news-title').innerText = newsData.title;
            document.querySelector('.news-txt').innerText = newsData.txt;
            document.getElementById('newimg').innerHTML = newsData.img;
        } );
}
