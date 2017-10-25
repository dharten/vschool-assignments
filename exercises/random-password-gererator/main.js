function generatePassword(length) {
        characters = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*QWERTYUIOPASDFGHJKLZXCVBNM",
        returnedValue = "";
    for (var i = 0; i < length; i++) {
        returnedValue += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(returnedValue);
}

generatePassword(26);
