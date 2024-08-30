import eel

from back.upload import upload

@eel.expose
def upload_py():
    return upload()


from back.DB import DB
DB = DB()
validations = DB.getValidation()
print(validations)

@eel.expose
def getValidations():
    return validations
