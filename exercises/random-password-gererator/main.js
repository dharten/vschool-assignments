function generatePassword(length) {
        characters = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*QWERTYUIOPASDFGHJKLZXCVBNM",
        returnedValue = "";
    for (var i = 0, n = characters.length; i < length; i++) {
        returnedValue += characters.charAt(Math.floor(Math.random() * n));
    }
    console.log(returnedValue);
}

generatePassword(128);
