def sass_compilation():
    try:
        import sass
        with open('web/style/app.sass', 'r') as sass_file:  
            sass_code = sass_file.read()
            css_code = sass.compile(string=sass_code, indented=True, source_map_contents=True, output_style='compressed')
        with open('web/style/style.css', 'w') as css_file:
            css_file.write(css_code)
    except ValueError:
        print(ValueError)

def web_start():
    import eel
    eel.init('web')
    eel.start('index.html', size=(1300, 800))