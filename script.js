// EMAIL VALIDATOR API ==> https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain
// URL EXAMPLE: https://mailcheck.p.rapidapi.com/?domain=demo%40gmail.com

const inputText = document.getElementById("inputText")
const validateBtn = document.getElementById("validateBtn")

const valid = document.getElementById("valid")
const disposable = document.getElementById("disposable")
const domain = document.getElementById("domain")
const text = document.getElementById("text")
const reason = document.getElementById("reason")

let url = ""

const changeUrl = (userInput) => {
    let newInput = userInput.replace("@", "%40")
    url = `https://mailcheck.p.rapidapi.com/?domain=${newInput}`
}

const fetchFunction = (URL) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_EMAIL_CHECK_API_KEY',
            'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
        }
    };
    try {
        fetch(URL, options)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.valid == true) valid.innerText = "True"
            else if (json.valid == false) valid.innerText = "False"
            if (json.disposable == true) disposable.innerText = "True"
            else if (json.disposable == false) disposable.innerText = "False"
            domain.innerText = json.domain
            text.innerText = json.text
            reason.innerText = json.reason
        })
    } catch (error) {
        alert("something went wrong")
        console.error(error);
    }
}

validateBtn.onclick = () => {
    changeUrl(inputText.value)
    fetchFunction(url)
}




