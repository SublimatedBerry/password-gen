document.getElementById('generate-button').addEventListener('click', function() {
    var length = document.getElementById('length').value;
    var useSpecialChars = document.getElementById('use_special_chars').checked;
    var useUppercase = document.getElementById('use_uppercase').checked;
    var useLowercase = document.getElementById('use_lowercase').checked;
    var useDigits = document.getElementById('use_digits').checked;

    var characters = '';

    if (!useSpecialChars && !useUppercase && !useLowercase && !useDigits) {
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    } else {
        if (useSpecialChars) {
            characters += '!@#$%^&*()';
        }
        if (useUppercase) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (useLowercase) {
            characters += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (useDigits) {
            characters += '0123456789';
        }
    }

    var password = generatePassword(length, characters);
    document.getElementById('password-display').innerText = password;
    document.getElementById('password-display').style.display = 'block';
});

document.getElementById('copy-button').addEventListener('click', function() {
    var passwordDisplay = document.getElementById('password-display');
    var range = document.createRange();
    range.selectNode(passwordDisplay);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});

function generatePassword(length, characters) {
    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
