let scrollerEle = document.getElementById("scroller");

let currPageNum = 0;
let dataLoading = false;

let dataToInner = "";
const onLoadData = (page) => {
    dataLoading = true;
    // if(page>)
    console.log("Page " + page);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`)
        .then(async (res) => {
            // loadingTextEle.hidden = true;
            let dataInfo = await res.json();
            let data = dataInfo.data
            data.forEach(element => {
                console.log(element.airline[0].name)
                dataToInner += `
                <div class="wrapper bg-white w-full p-[2.5vh]">
                    <div>🛩: <span class="font-bold">${element.airline[0].name} - ${element.airline[0].country}</span></div>
                    <div>🥰: ${element["name"]}</div>
                </div>
                `
            });
            scrollerEle.innerHTML = dataToInner;
            // dataFromAPI.innerHTML = dataToInner;
            currPageNum++;
            dataLoading = false;
        })
        .then(() => {
            
            scrollerEle.addEventListener("scroll", (event) => {
                const { scrollTop, clientHeight, scrollHeight } = scrollerEle;
                if ((clientHeight + scrollTop) >= scrollHeight * 0.95) {
                    if (!dataLoading) {
                        onLoadData(currPageNum);
                    }
                }
            });
        });

}





onLoadData(currPageNum);