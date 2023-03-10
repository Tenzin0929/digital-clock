function clock(event) {
    
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    
    document.querySelector("#hour").innerHTML = `${hours} :`;
    document.querySelector("#minute").innerHTML = `${mins} :`;
    document.querySelector("#second").innerHTML = `${secs}`;
    
    event.preventDefault();
}
setInterval(clock, 1000);