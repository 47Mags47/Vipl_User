import sass

class Compiler():
    def __init__(self):
        pass
    def compilation(self):
        # sass.compile(filename='app.sass')
        with open('web/style/app.sass', 'r') as sass_file:  
            sass_code = sass_file.read()
            css_code = sass.compile(string=sass_code, indented=True, source_map_contents=True, output_style='compressed')
        with open('web/style/style.css', 'w') as css_file:
            css_file.write(css_code)
            
if __name__ == '__main__':
    test = Compiler()
    test.compilation()