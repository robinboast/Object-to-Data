author: Marijn Koolen
title: Object to Data - Lecture 1
output: /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching/Objects_to_Data/Slides/html/lab2_exploring.html


--

# From Object to Data
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Week 2 - 09/09/2015

--

### Why Now?

+ Gathering data is often not the fun part
+ Why is this so early in the course?
	+ so you can start gathering data for your own projects a.s.a.p.
	+ it’s one of the most important parts

--

### Scripting

+ step-by-step procedures
	+ algorithms!

--

### Why Scripting?

- fits perfectly with the 7 stages of data-driven research
- flexibility: specific tools rarely fit your specific RQ, you hit the limits of specific tools very quickly
- transparency: you can see the individual steps, better understanding of what your actually doing
- automation: avoid having to repeatedly click through sequences of menu options and buttons
- modification: it’s easy to experiment with different choices and rerun the whole process
- criticism: it’s easy to show others how you’ve gone from initial data to the outcome of the last step
- reproducibility: you or others can easily reproduce the process with the same data and the same script/recipe
- understanding: helps you develop computational thinking skills
--

### Command Line Tools

+ repeat use of AWK and SED
	+ bin years in periods
	+ explore keywords per period
	+ explore co-occurrence of keywords
	+ network of keyword relations

--

### Crawling Web Pages

+ Extract links from NY Times data set
	+ articles have links to other pages
	+ extract links and *scrape* them

--

### Data Structures

+ Different structures good for different things
	+ Lists, stacks, queues
	+ Key/Value stores: 
		+ Hashes, associative arrays, dictionaries
		+ lists are indexed dictionaries
	+ Trees: hard drive, URLs, HTML files, books
+ What kind of data structure is an image file?

--

+ Tool building
	+ small tools, data set specific
	+ research question specific
	+ naming tools: language gap
	+ awk, iterations, for loops
+ Network visualisation
	+ iGraph, Gephi
+ Paring JSON
	+ jq
