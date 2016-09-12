Lab 2 - Exploration
Ask yourself: 'What are the key concepts'
========================================================
author: Alan Mark Berg
date: September 2016
autosize: true

Looking Back
========================================================
- Installed software
- Small set of commands that work together
- Git hub tutorial
- First online R Tutorial (datacamp)
- **STATUS**

Current Issues
========================================================
- Do we all now have a working environment?
  - Commandline simulator: http://bellard.org/jslinux/
- Expect you to do your homework [8 hours]
  - I am avialable during the labs to support
  - Email questions
  - **Be proactive**

What is happening Today
========================================================
1. Learning Mark Down Language - 15 minutes
2. UNIX for POETs - 45 minutes 
3. Scraping exercise - 45 minutes
4. Swirl - 10 minutes
5. Homework

Mark Down Language
========================================================
Online editor for demo: http://dillinger.io

1. Review cheatsheet in Rstudio
2. Create Repo for the Labs named Data2Object
3. Create a file called lab2.md in repo
  - Add metadata

UNIX for POETs
========================================================

1. http://www.cs.upc.edu/~padro/Unixforpoets.pdf
  - Test commands and make sure you understand
  - Write up in Lab2.md
  - Bible: http://monolith.sourceforge.net/genesis.txt

Guttenburg Project
========================================================
- https://www.gutenberg.org
- http://www.gutenberg.org/robot/harvest
- http://webapps.stackexchange.com/questions/12311/how-to-download-all-english-books-from-gutenberg

WGET & CURL
========================================================
- **wget**: - Can archive whole websites
  - robots.txt 
  - Don't be greedy
  - http://www.thegeekstuff.com/2009/09/the-ultimate-wget-download-guide-with-15-awesome-examples/
- **curl**: https://en.wikipedia.org/wiki/CURL

Terminology SOAP
========================================================
- Oh dear do we really have to talk about SOAP and REST
- SOAP - XML - Heavy weight - Dinosaur
- REST - Paths & JSON
- Parameters - Old fashioned ?p1=value&p2=value
- AJAX - HTML calls to REST
- OAUTH - Authentication. Can use keys
- API - Application Interface

Gotcha's
========================================================
- Keystuff - Silent failing
  - https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?format=json&key=TZ6co7v8
- Various versions of API or API can do more than you think
  - https://en.wikipedia.org/wiki/RTFM

JSON
========================================================
- http://www.w3schools.com/json/
<pre>
{"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}
</pre>

JSON
========================================================

http://api.nytimes.com/svc/search/v2/articlesearch.json?q=humanities&api-key=6c208c379cac770e9c0900819ad9ad74:10:67186206

## VERY BAD PRACTICE ##

Scraping
========================================================
- Download stuff and clean up - Wget, CURL
- Cleaner to use an API
  - Normally REST
  - Requires Key management for OAUTH2
  - Clean == Reliable

You will learn painfully
========================================================
- Much work with unclean data **80%**
- Less work if you use an API
- Computers are fast and can process a lot
- **THINK ABOUT YOUR DATA***

Final Commandline example
========================================================
Until 1.5
http://humanities.uva.nl/~mkoolen1/teaching/#/FOtD/2015/exercises/lab1_exercise3

Adding commands together
========================================================
<pre>
vi example.sh
echo start
echo finish
chmod 755 example.sh
bash ./example.sh
</pre>


Your Exercise for scraping (1)
========================================================
- Download a large number of Guternburg text files
- Choose a keyword such as humanities
- Which book has the most keyword?
- Which books has the least?
- Write the solution in your lab2.md 
- [Optional] Expand the number of keywords

Your Exercise for scraping (2)
========================================================
- Visit the Internet and make a list of **20 API** resources for humanity.

Your Exercise for scraping (3)
========================================================
- Get an API Key for New York Times
  - https://developer.nytimes.com/signup
- Create a larger set of keywords
- Read https://data-gov.tw.rpi.edu/wiki/How_to_use_New_York_Times_Article_Search_API
- Use wget to download to a file one query for **all** your humanities keywords (in one request)
- Write a UNIX script to scrape all URL's


So I want to explore R further
========================================================
- Swirl() - http://swirlstats.com/students.html
- Courses include:
  - https://github.com/swirldev/swirl_courses#swirl-courses
  - Especially the cleaning work.

BONUS
========================================================
## Twitter in R

-Setting up Keys: https://www.r-bloggers.com/setting-up-the-twitter-r-package-for-text-analytics/

- Search for examples of **twitterR*
- Add working examples to **GIST**
- Link to Gist examples in lab2.md

Homework
========================================================
1. Type *unix command line tutorial* into Google
  - chmod, ls, mkdir, touch, man, rm.
    - Practice
2. Finish all Exercises
3. Scaping exercises (1),(2),(3)
4. Review the swirl courses.

## Optional
5. Start a swirl course.
6. Twitter


