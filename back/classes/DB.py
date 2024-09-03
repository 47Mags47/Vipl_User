# // Класс DB Отвечает за запросы к БД сервера

# * Метод getValidation возвращает словарь словарей с правилами проверки полей

from mysql.connector import connect, Error
from dotenv import dotenv_values
config = dotenv_values('.env')

class DB():
    def __init__(self):
        try:
            self.connect = connect(
                host=config['DB_HOST'], 
                user=config['DB_USERNAME'], 
                password=config['DB_PASSWORD'], 
                database=config['DB_DATABASE']
            )
            self.cursor = self.connect.cursor()
        except Error as e:
            return
    def close(self):
        self.cursor.close()
        self.connect.close()
        
    def execute(self, sql):
        self.cursor.execute(sql)
        return self.cursor.fetchall()
        
    def getValidation(self):
        sql = '''
            SELECT 
                `glossary__validate_pole`.`name` AS 'pole',
                `main__validate`.`type` AS 'type_id',
                `glossary__validate_type`.`name` AS 'type',
                `main__validate`.`validation` AS 'validation'
            FROM `main__validate` 
            INNER JOIN `glossary__validate_pole` ON `glossary__validate_pole`.`id` = `main__validate`.`pole`
            INNER JOIN `glossary__validate_type` ON `glossary__validate_type`.`id` = `main__validate`.`type`
        '''
        data = self.execute(sql)
    
        results = {}
        for row in data:
            if(row[0] not in results):
                results[row[0]] = {}
            if(row[1] not in results[row[0]]):
                results[row[0]][row[1]] = row[3]
        return results
    
if __name__ == '__main__':
    test = DB()
    validate = test.getValidation()
    print (validate)