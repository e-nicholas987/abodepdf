var nextBtn = document.getElementById('next-btn')
var invalidAdd = document.getElementById('invalid-add')
var userInput = document.getElementById('username');
var username = []
var emailAddress = document.getElementById('email-address')
var userBox = document.getElementById('user-box')
var passBox = document.getElementById('pass-box')
var back = document.getElementById('back-arrow')
var signInBtn = document.getElementById('sign-in-btn')
var passInput = document.getElementById('password')
var invalidPass = document.getElementById('invalid-pass')
var username2 = document.getElementById('username2')


nextBtn.addEventListener('click',  (e) =>{
    e.preventDefault();
    username.push(userInput.value)
    console.log('clicked')
    console.log(username)
    if (userInput.value===''){
        invalidAdd.classList.remove('hide')
        userInput.classList.add('input-invalid')
    } else {
    
    userBox.classList.add('hide')
    passBox.classList.remove('hide')
    emailAddress.textContent = username
    username2.value=username
    
    }
     
})

back.addEventListener('click', () => {
    console.log('clicked')
    userBox.classList.remove('hide')
    passBox.classList.add('hide')
    username = []
})

signInBtn.addEventListener('click', (e) =>{
    if (passInput.value === ''){
        e.preventDefault()
    invalidPass.classList.remove('hide')
        passInput.classList.add('input-invalid')

} 
})
