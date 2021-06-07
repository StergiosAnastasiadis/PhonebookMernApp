import os

print('CommitMsg', end=':')
commitMsg = input()

os.system('git add .')
print('-------------------------')
os.system('git commit -m ' + commitMsg)
print('-------------------------')
os.system('git push -u origin master')
