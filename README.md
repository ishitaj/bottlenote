# bottleNote - Language Learning Note-Taking Application
--------------------------------------------------------
By Ishita Jain

## What's with the name?
*BOTTLENOSE DOLPHINS* have the longest memory in our Animal Kingdom! Don't ever forget a word with the bottleNote Note-Taking app for language-learners. You can capture words in multiple languages with their definitions and context.

## What can I try?
You can try the app with the superuser credentials set at the time of 
```
python manage.py createsuperuser
```.

1. *Homepage* - informational start page
2. *Login/ Authentication* - you would need the superuser username and password to log into the app
3. *Note Page* - This is the core of the app. You can perform the following actions on this page:
    i. *View your old notes* - The notes have been grouped alphabetically. And by color. Different languages have different colors so that you can view notes of your language groups without having to click anywhere
    ii. *Add a new note via the form at the bottom* - The note will take its correct place on submit along with the other notes with the same language.
    iii. *Delete Note* - Removes the note from the frontend as well as the database.
4. *Reset Password*
5. *Logout*

## Project Decisions and Reasons
The project has been built in *Python with Django* for the backend API and *reactJS* for the frontend. For the database, *sqlite* has been used. *Webpack* has been used as the build tool.

## Future Work

## Quickstart guide to run the application
```
1. git clone or download the project
2. cd bottleNote-master
3. Create virtual environment
4. Activate your virtual environment
5. `pip install -Ur requirements.txt`
6. `npm install`
7. `npm run build`
8. `npm run watch`
```
### Create database
```
python manage.py migrate
```

### Create user
```
python manage.py createsuperuser
```

### Runserver
```
python manage.py runserver
```

## NotePage

![Alt text](assets/js/public/NotePage.png?raw=true "NotePage")
