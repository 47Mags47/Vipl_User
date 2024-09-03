def saveFile(data, dialog = False):
    import csv
    import os
    from tkinter import filedialog
    
    if dialog:
        file_name = filedialog.asksaveasfilename(filetypes=(("CSV Files", "*.csv"),))
        file_name = file_name + '.csv'
    else:
        if not os.path.isdir('files'):
            os.mkdir('files')
        file_name = 'files/tmp.csv'
        
    if not file_name:
        return
        
    with open(file_name, 'w', newline='', encoding='CP866') as file:
        headers = ['id', 'fam', 'ima', 'otch', 'accord', 'summ', 'pasp', 'date', 'snils']
        writer = csv.DictWriter(file, fieldnames=headers)
        
        writer.writeheader()
        for row in data:
            writer.writerow(row)
    
if(__name__ == '__main__'):
    saveFile(data = {})