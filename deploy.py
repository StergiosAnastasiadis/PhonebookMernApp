import os

print('CommitMsg', end=':')
commitMsg = input()

os.system('git add .')
os.system('git commit -m "{}"'.format(commitMsg))
os.system('git push -u origin master')
