from pygments import highlight
from pygments.style import Style
from pygments.lexers import Python3Lexer
from pygments.token import Keyword, Name, Comment, String, Error, \
     Number, Operator, Generic, Literal
from pygments.formatters import HtmlFormatter

# step 1: define custom style
# class Operandi(Style):
#     background_color = "#f2f2f2"
#     styles = {
#         Keyword:                '#531ab6',
#         Keyword.Constant:       '#0000b0',
#         Keyword.Type:           '#005f5f',
#         Name.Builtin:           '#8f0075',
#         Name.Function:          '#721045',
#         Name.Variable:          '#005077',
#         String:                 '#3548cf',
#         Literal:                '#0000b0',
#         Operator:               '#000',
#         Comment:                '#595959',
#     }

# # step 2: apply custom style
# formatter = HtmlFormatter(style=Operandi, full=True)  # embed Style inside HTML (self-contained, no external CSS-file
# # formatter.noclasses = True  # inline style to each element directly

# print(formatter.get_style_defs('.highlight'))

class Operandi(Style):
    background_color = "#111"
    styles = {
        Comment:                '#989898',
        Keyword:                '#b6a0ff',
        Keyword.Constant:       '#00bcff',
        Keyword.Type:           '#6ae4b9',
        Name.Builtin:           '#f78fe7',
        Name.Function:          '#feacd0',
        Name.Variable:          '#00d3d0',
        String:                 '#79a8ff',
        Literal:                '#00bcff',
        Operator:               '#fff',
    }

# step 2: apply custom style
formatter = HtmlFormatter(style=Operandi, full=True)  # embed Style inside HTML (self-contained, no external CSS-file
# formatter.noclasses = True  # inline style to each element directly

print(formatter.get_style_defs('.highlight'))

