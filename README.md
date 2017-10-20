# bottleNote - Language Learning Note-Taking Application
--------------------------------------------------------
By Ishita Jain

![Alt text](assets/js/public/NotePage.png?raw=true "NotePage")

## What's with the name?
**BOTTLENOSE DOLPHINS** have the longest memory in our Animal Kingdom! Don't ever forget a word with the bottleNote Note-Taking app for language-learners. You can capture words in multiple languages with their definitions and context.

## What can I try?
You can try the app with the superuser credentials set at the time of 
```
python manage.py createsuperuser
```

1. **Homepage** - informational start page
2. **Login / Authentication** - you would need the superuser username and password to log into the app
3. **Note Page** - This is the core of the app. You can perform the following actions on this page:
    i. **View your old notes** - The notes have been grouped alphabetically. And by color. Different languages have different colors so that you can view notes of your language groups without having to click anywhere
    ii. **Add a new note via the form at the bottom** - The note will take its correct place on submit along with the other notes with the same language
    iii. **Delete Note** - Removes the note from the frontend as well as the database
4. **Reset Password** - Change password form for changing user password
5. **Logout** - Logs the user out

## Project Decisions and Reasons
The project has been built in **Python with Django** for the backend API and **reactJS** for the frontend. For the database, **sqlite** has been used. **Webpack** has been used as the build tool. The data is cached for super fast loading.

1. *All notes on one page instead of groups appearing first and then entering a specific language to view notes* - 
I chose to keep all notes on one page to minimize clicks and ensure maximum readability of the notes to enable quick learnign by revisiting words.
2. *Grouping using alphabetical order on language as well as unique color for each language* - 
This helps the user easily identify Notes of the same language while also enabling quick browsing throughout the list.
3. *Delete button on each Note element* - 
The delete button has been added on each note on the top right for quick accessibility. The edit button can be added just beside the delete.
4. *Storing a local list of items or a cache store for seamless user experience* - 
To make sure that the user doesn't have to wait to be catered to, a cache is maintained containing the Note data. On load, post and delete, the Note list status is updated in the cache store for quick access.
5. *Database choice* - 
Sqlite has been used for the small scale project. Though searching and indexing can become much faster with powerful databases like postGres or mySQL. If updates are limited, a No-SQL database having user clusters might also prove useful.
6. *Separation of concerns* - 
As the backend API and Frontend are two different mini apps talking to each other, scaling can be made effective by distributing the Application and the Database on different servers and adding a load balancing layer to monitor request rate. That will allow usage of independent resources.
7. *Limited testing done*
Basic tests have been done for the Note model, serializer and view. Frontend can be tested using selenium.

## TODOs / Future Work
1. Social OAuth integration for login.
2. HTML Editors like tinyMCE or nicEdit for textareas. This would enable url link and image capturing.
3. Interesting analytics for the user like average number of words added per month. The application can also alert the user if the number of words learnt in the current month falls below the average.
4. Parts of speech tagging to help the user understand grammar of the language along with vocabulary.
5. Suggestion of synonyms, antonyms, idioms, proverbs or famous sayings containing the word
6. Sentiment analysis via NLP to identify the emotion of the word in the given context - positive or negative.
7. Google Translate API for learning words from native language to foreign language
8. Dictionary API to auto fill meaning
9. Pronunciation audio of the word added automatically from google translate
10. Store pronunciation audio file of the word by the user.
11. Searching and Filtering notes
12. Making Notes shareable across users and to external resources to enable learning groups


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
