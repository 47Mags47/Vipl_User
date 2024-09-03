# // Этот файл отвечает за связь front-end и back-end частей приложения
# // Функции в данном файле доступны в JS и выполняются на back-end

import eel

from back.classes.DB import DB
db = DB()

from back.upload import upload
from back.readpage import readpage
from back.saveFile import saveFile

@eel.expose
def upload_py():
    return upload()

@eel.expose
def getValidations():
    return db.getValidation()

@eel.expose
def readpage_py(name):
    return readpage(name)

@eel.expose
def saveFile_py(data, dialog = False):
    return saveFile(data, dialog)