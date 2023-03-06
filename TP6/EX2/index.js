if (!localStorage.getItem('tmpPunnreayPage')) { localStorage.setItem('tmpPunnreayPage', 0); }
console.log(localStorage.getItem('tmpPunnreayPage'))
let scrollerEle = document.getElementById("scroller");


let currPageNum = 0;
let dataLoading = false;

let dataToInner = "";
const onLoadData = (page) => {
    dataLoading = true;
    if (localStorage.getItem('tmpPunnreayPage') > currPageNum) {
        const getData = localStorage.getItem(`punnreayPage${currPageNum}`);
            let myLocalData = JSON.parse(getData);
            myLocalData.forEach(element => {
                    dataToInner += `
                <div class="wrapper bg-white w-full p-[2.5vh]">
                    <div>🛩: <span class="font-bold">${element.airline[0].name} - ${element.airline[0].country}</span></div>
                    <div>🙂: ${element["name"]}</div>
                </div>
                `
            });

        currPageNum++;
        scrollerEle.innerHTML = dataToInner;
        dataLoading = false;
    } else {
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`)
            .then(async (res) => {
                let dataInfo = await res.json();
                let data = dataInfo.data
                localStorage.setItem(`punnreayPage${page}`, JSON.stringify(data));
                data.forEach(element => {
                    
                    dataToInner += `
                <div class="wrapper bg-white w-full p-[2.5vh]">
                    <div>🛩: <span class="font-bold">${element.airline[0].name} - ${element.airline[0].country}</span></div>
                    <div>😀: ${element["name"]}</div>
                </div>
                `
                });
                scrollerEle.innerHTML = dataToInner;
                currPageNum++;
                localStorage.setItem(`tmpPunnreayPage`, currPageNum);
                dataLoading = false;
            });
    }


    scrollerEle.addEventListener("scroll", (event) => {
        const { scrollTop, clientHeight, scrollHeight } = scrollerEle;
        if ((clientHeight + scrollTop) >= scrollHeight * 0.95) {
            if (!dataLoading) {
                onLoadData(currPageNum);
            }
        }
    });

}

onLoadData(currPageNum);
