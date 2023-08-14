# EMAIL VALIDATOR APP

This Email Validator App is a simple tool that allows you to check whether an email address is valid or not.<br>
It utilizes an [Email Check API](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain) from RapidAPI to perform the email validation process.<br>
You can use this app to quickly determine the validity of an email address and whether its domain is disposable or not.
The user interface of this Email Validator App has been designed to resemble the UI of a similar project showcased in one of RapidAPI's blogs. 
I was inspired by their design and wanted to replicate a visually appealing and user-friendly interface for this app.

## Getting Started
1. Create a RAPID API Account
2. Subscribe to Test:
> ![screen](https://github.com/AnouarElKihal/email-validator/assets/68613907/3fa331e6-0536-481f-9308-02d96b26b4a2)

3. Replace YOUR_EMAIL_CHECK_API_KEY in the javascript file:
```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_EMAIL_CHECK_API_KEY',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
}
```

## Features
- Validate the format and syntax of an email address.
- Check if the email address domain is a disposable domain.
- Get instant feedback on whether the email is valid or not.

## Live Application
You can find it online at this url: [email-validator.eabug.repl.co](https://email-validator.eabug.repl.co/)
> ![email-validator-screen](https://github.com/AnouarElKihal/email-validator/assets/68613907/9b40f3f4-ee5d-48e6-ac7d-0a7ee15e6b69)

