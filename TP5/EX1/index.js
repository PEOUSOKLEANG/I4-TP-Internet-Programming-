let click = document.getElementById("enter");
let result = document.getElementById("result");
  


function getresult (){

    let url=('https://www.boredapi.com/api/activity');
    result.innerHTML=`
        <div class="delay">Loading.....</div>
        `;
    fetch(url).then((resp)=>resp.json()).then((data)=>{
        result.innerHTML=`
            <div class="box">
                <div>${data.activity}</div>
                <div><i class='bx bxs-purchase-tag-alt'></i> <b>Type</b>: ${data.type}</div>
                <div><i class='bx bxs-group' ></i> <b>Participartion</b>: ${data.participants}</div>
                <div><i class='bx bxs-dollar-circle' ></i> <b>Price</b>: ${data.price}</div>
                <div><i class='bx bx-link-alt'></i> <b>Link</b>: ${data.link}</div>
            </div>
        `;
    });
}
