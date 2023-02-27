let input= document.getElementById("get-input");
let result=document.getElementById("result");

// let search= document.getElementById("search-btn"); (1)

function getresult(){
    let url=`https://api.genderize.io/?name=${input.value}`;
    result.innerHTML=`
        <div class="delay">Loading.....</div>
        `;
    fetch(url).then(async(resp)=> {     
        let data= await resp.json();
        console.log(data);

        result.innerHTML=`
        <div class="loading">
            <div>${data.name}</div>
            <div>${data.gender}</div>
            <div>${data.probability*100}%</div>
        </div>
        `;
    });
}
 
// search.addEventListener("click",getresult);(2)
// window.addEventListener("load",getresult);(3)

// when we set button with id to get data ;  we most let (1) and call (2) &(3) 