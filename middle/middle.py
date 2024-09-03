import eel

from back.DB import DB
DB = DB()
validations = DB.getValidation()

from back.upload import upload
from back.readpage import readpage
from back.saveFile import saveFile

@eel.expose
def upload_py():
    return upload()

@eel.expose
def getValidations():
    return validations

@eel.expose
def readpage_py(name):
    return readpage(name)

@eel.expose
def saveFile_py(data, dialog = False):
    return saveFile(data, dialog)