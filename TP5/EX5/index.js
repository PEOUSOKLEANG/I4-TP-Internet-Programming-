const bookList = document.getElementsByClassName("right-bar")[0];
const wrapper=document.getElementsByClassName("wrapper")[0];
const bookDetail=document.getElementById("bookDetail")

generateBookList();
function generateBookList() {
    bookList.innerHTML=`<div class="loader-wrapper"><iframe id="loader" src="loader.html" frameborder="0"></iframe></div>`
    fetch('https://jsonplaceholder.typicode.com/photos').then(async (respone) => {
        let data = await respone.json();
        bookList.innerHTML='';
        let i = 0;

        for (let c of data) {
            const bgc=backGroundRandom();
            bookList.innerHTML += `
                                    <div class="book">
                                        <div style="background-color:${bgc}; color:white">150 x 150</div>
                                        <div>${c.title}</div>
                                        <div>Album ID: ${c.albumId}</div>
                                        <div>category: 1</div>
                                        <div><a id="${c.id}" data-color="${bgc}" style="color: blue;" href="#" onClick="seeDetail(this)">see</a></div>
                                    </div>
                                    `
            if (i == 1000) break;
            i++;
        }
    })
}

function seeDetail(node) {
    
    const id = node.id;
    const bgc=node.dataset.color;
    console.log(bgc)
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(async(res)=>{
        const data=await res.json();
        bookDetail.innerHTML=`
            <div>
                <strong>${data.title}</strong>
                <p>${data.albumId}</p>
                <p>Resize brower windows</p>
            </div>
            <div>
                <div>${id}</div>
                <div style="background-color:${bgc}; color:white">150 x 150</div>
            </div>`
        bookDetail.style.display="block"
    })
}

function backGroundRandom(){
    return `hsl(${Math.floor(Math.random()*360)+1}, ${Math.floor(Math.random()*100)+1}%, ${Math.floor(Math.random()*100)+1}%)`;
}