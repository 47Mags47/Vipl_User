def readpage(name):
    file = open(f"./web/pages/{name}.html", "r", encoding='UTF-8')
    return file.read()
    
if(__name__ == '__main__'):
    readpage('main')