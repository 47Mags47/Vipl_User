from tkinter import filedialog, Tk
import csv

def upload():
    root = Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)
    path = filedialog.askopenfilename(parent = root, title = "Открыть файл", filetypes = (("CSV Files", "*.csv"),))
    
    data = []
    with open(path, encoding='CP866') as csvf:
        headers = ['id', 'fam', 'ima', 'otch', 'accord', 'summ', 'pasp', 'date', 'snils']
        csvReader = csv.DictReader(csvf, fieldnames = headers, delimiter=';', quotechar=';')
        for i, row in enumerate(csvReader):
            data.append(row)
    return data

if(__name__ == '__main__'):
    upload()