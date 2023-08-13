import re
def is_strong_password(password):
    if len(password) < 8:
        return False
    
    if not re.search(r'[A-Z]',  password):
        return False
    
    if not re.search(r'\d', password):
        return False

    return True

def test_strong_password_from_file():
    with open("passwords.txt", "r") as dataFile:
        passwords = dataFile.read().splitlines()

    for password in passwords:
        assert is_strong_password(password) == True