let input = document.getElementById("get-input");
let result = document.getElementById("result");

function getresult() {
    let url = `https://api.nationalize.io/?name=${input.value}`;


    result.innerHTML = `
       <div class="delay">
            <div>loading.....</div>      
       </div>
    `;
    fetch(url).then(async (resp) => {

        let data = await resp.json();
        console.log(data);
        let obj = data.country;
        result.innerHTML = "";
        for (let n of obj) {
            result.innerHTML += `
            <div class="loading">
                <div>${n.country_id}</div>
                <div>${n.probability * 100}%</div>
            </div>
            `;
        }
    });

}