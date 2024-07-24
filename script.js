let a = document.querySelector("#email");

let b = document.querySelector("#btn");
let c = document.querySelector("#message")
let d = document.querySelector("#message img");

b.addEventListener("click", function() {
     c.innerHTML = " <img src='./load.svg' alt=''>"
    fetch(`https://api.emailvalidation.io/v1/info?apikey=ema_live_YFgXYmGUgLEU0xpWFda3OQDoHpx5AQ8mG9eT9hHN&email=${a.value}`)
    .then(res => res.json())
    // .then(res => JSON.stringify(res))
    .then(data => c.textContent = `"email":${data.email},

    "user":"${data.user}",

    "tag":"${data.tag}",
    
    "domain":"${data.domain}",
    "smtp_check":${data.smtp_check},
    "mx_found":${data.mx_found},
    "did_you_mean":"${data.did_you_mean}",
    "role":${data.role},
    "disposable":${data.disposable},
    "score":${data.score},
    "state":"${data.state}",
    "reason":"${data.reason}",
    "free":${data.free},
    "format_valid":${data.format_valid},
    "catch_all":${data.catch_all}`)
    // .then(res => d.style.opacity = "0%")
    // d.style.opacity = "0%")
})
// let a = document.querySelector("#email").value

// let b = document.querySelector("#btn")
// b.addEventListener("click"),function(){
// fetch(`https://api.emailvalidation.io/v1/info?apikey=ema_live_8hSpjcuAQQWbh3olS8gm8DbmWI9xTD9UHd5SNO8N&email=${a}`)
// .then(res => res.json())
// .then(res => console.log(res));
// }