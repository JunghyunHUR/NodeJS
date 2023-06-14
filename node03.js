const goToSchool = () => {
    console.log("학원에 갑니다.");
}

const arriveAtSchool = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ct = Math.floor(Math.random()*2);
            if(ct === 1){
                resolve("학원에 도착했습니다.");
            }else{
                reject("오늘 날씨가 좋아서 땡땡이 칩니다.");
            }
        }, 1000);
    })    
}

const study = () => {
    console.log("열심히 공부를 합니다.");
}

const res = () => {
    console.log("부원장님이 전화를 합니다.");
}
goToSchool();
arriveAtSchool()
.then((res) => {
    console.log(res);
    study();
})
.catch((err) => {
    console.log(err);
    res();
});