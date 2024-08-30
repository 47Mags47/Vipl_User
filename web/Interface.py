from web.style.Compiler import Compiler
sass_compiler = Compiler()
sass_compiler.compilation()

import eel
eel.init('web')
eel.start('index.html', size=(1300, 800))