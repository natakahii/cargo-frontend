with open('src/App.jsx', 'r') as f:
    lines = f.readlines()

with open('src/App.jsx', 'w') as f:
    f.writelines(lines[:18])

print('App.jsx fixed - kept only first 18 lines')
