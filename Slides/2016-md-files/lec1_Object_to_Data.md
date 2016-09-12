title: Object to Data - Lecture 1
output: /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching/Objects_to_Data/Object-to-Data/Slides/html/lecture1.html

--

# From Object to Data
## Lecture 1 - Introduction
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Week 1 - 05/09/2015

--

### Programme

+ Objects as Data
+ Course Setup
	+ Who's who?

--

# Part 1: Objects as Data

--

### Objects as Data

+ Object can be considered holistically
	+ but also as data point
	+ or collection of data points
+ Object can be anything
	+ textual, visual, auditive, conceptual
	+ or a mix of these

--

### Digital Objects

+ Digitised vs. Born-Digital
+ Digitised object is an index of original
	+ consists of zeros and ones (not really)
	+ machine readable
+ Born-Digital is original (or is it?)
	+ digital objects can be copied without loss of information
	+ distinction between original and copy?

--

### Data

+ What is data?
	+ [dictionary](http://dictionary.reference.com/browse/data?s=t): 'Data is a plural of datum, which is originally a Latin noun meaning "something given."'
+ This course is liberal in interpreting objects and data
	+ include events, people, practices
	+ anything that can be represented as data

--

### Change in Methodology

+ Analysis by interpretation: [Visual analysis in Art History](https://twp.duke.edu/uploads/assets/visual_analysis.pdf)
+ Analysis by computer: [Color analysis of paintings](http://blog.martinbellander.com/post/115411125748/the-colors-of-paintings-blue-is-the-new-orange), [computational analysis](http://www.technologyreview.com/view/538801/how-machine-vision-solved-one-of-the-great-mysteries-of-20th-century-surrealist-art/) of [creativity](http://arxiv.org/abs/1506.04356)


--

### Data-Driven Research

+ Different view on humanities material
	+ way of thinking about object, method and research
+ Roles of data:
	1. focus: subject of research
	2. support: part of argumentation
	3. illustration: shed light on research
	4. transformation: manipulable referents

--

### Experimentation

+ Empirical
	+ interpretations naturally become hypotheses
	+ hypothesis, test, result conclusion
	+ measurable, repeatable (document steps)
	+ open to scrutiny and criticism, but also to collaboration

--

### Ecartico

+ [Biographical database on people involved cultural industries in the low countries](http://www.vondel.humanities.uva.nl/ecartico/)
	+ data-oriented perspective on art and cultural history
	+ visualisations of data points

--

### Namescape

+ [Mapping the Onymic Landscape](http://blog.namescape.nl/)
	+ investigate use of names in novels
	+ many visualisation tools

--

### Storycenter

+ Measuring Emotion
	+ Narrative Transportation in film
	+ data from interviews (transportation, suspense)
	+ data from face reader software: [FaceReader](http://www.vicarvision.nl/facereader/online-facereader-demo)
+ How does experience align with expression?

--

### Data Criticism

+ Can data set provide answers?
	+ depends
		+ from question to data set
		+ from data set to question
	+ need to understand data set (what's in there, what's not), methods and tools
+ Digital source criticism
	+ very important to understand digital objects/data

--

### What Is The Question

+ "All data problems begin with a question and end with a narrative construct that provides a clear answer."

+ "One of the most important (and least technical) skills in understanding data is asking good questions."

--

### Big Data, Small Data

+ Size matters
	+ determines possible analyses
	+ few data allow micro-analysis
	+ many data allow macro-analysis
	+ Very quality dependent
	+ [Moretti's analysise of literary genres](http://www.scottbot.net/HIAL/wp-content/uploads/2013/04/moretti_graphs_figure9_lowres1.jpg)

--

### Interaction Models

+ Bradley identifies 4 models:
	+ conduit, transformation, markup, object manipulation
	+ where does digital, data-driven research fit?

--

### Digital Against Interpretation?

+ Digital research doesn't take away the magic and the wonderful, but adds to it!
	+ no 'acts of sorcery' (Bradley)
	+ each step requires interpretation

--

### Digital Against Interpretation?

+ Digital research doesn't take away the magic and the wonderful, but adds to it!
	+ no 'acts of sorcery' (Bradley)
	+ each step requires interpretation
	+ any research without interpretation is bad research

--

# Part 2: Course Admin

--

### Who's Who?

+ Introduce yourself
	+ background: name, study, year, ...
	+ experience/interests in digital humanities
	+ experience/interests in data-driven research
	+ expectations about this course?

--

### Course Setup

+ Structure
	+ 7 weeks, lecture + lab sessions
	+ technical exercises
	+ data-driven research project
	+ build project portfolio 

--

### Course Resources

+ We are not on BlackBoard
	+ All course resources are on GitHub
		+ [Course GitHub Repository](https://github.com/robinboast/Object-to-data)
	+ You will need a (free) GitHub account
		+ Help for this in Lab 1 

--

### Week By Week

1. Intro
2. Acquiring Data
3. Parsing and Filtering Data
4. DH in Practice projects (T.B.A.)
5. Transforming Data
6. Visualising and Presenting Data
7. Interpretation + Presentations

--

### Projects

+ Portfolio
	+ full data-driven research project
	+ individual proposals (week 4),
	+ groups pick proposal as collaborative project
+ Available data:
	+ data from [NY Times API](http://developer.nytimes.com/io-docs) with query [*humanities*](http://api.nytimes.com/svc/search/v2/articlesearch.json?q=humanities&api-key=6c208c379cac770e9c0900819ad9ad74:10:67186206)
	+ Novels and reader reviews
	+ Rijksmusem object descriptions
+ Or gather your own

--

### Grading

+ three grades:
	+ hand in proposal: 21 Sept.
	+ hand in preliminary portfolio: 02 Oct.
	+ hand in final portfolio: 23 Oct.
+ final grade weighted average (20% +20% + 60%)
	+ allowed to update everything for final portfolio

--

### Lab sessions

+ Wednesdays 15:00 - 17:00 in BG1 0.04
	+ small assignments to introduce tools
	+ and working on portfolio
	+ proposals are individual, projects are collaborative
	+ I'm available for questions, feedback

--

### Technicalities

+ We'll work with two tools, see [course website](http://humanities.uva.nl/~mkoolen1/teaching/#/FOtD/2015/tools):
	+ Unix command line tools
		+ combining primitives (Unsworth)
	+ [R](http://cran.xl-mirror.nl/) (plus [RStudio](https://www.rstudio.com/))
+ Another popular tool in Digital Humanities: 
	+ [Python](http://fbkarsdorp.github.io/python-course/) (but we’ll skip that)
+ We'll occasionally work with other tools
	+ visualisation tools, text analysis tools
	
--

### No Sugar Coating

+ Get familiar with:
	+ Unix command line tools
	+ data formats: JSON, XML, HTML, CSV
	+ constructing data processing pipelines
	+ scripting
+ Bring your own laptop
	+ so you can work wherever, whenever

--

### Command Line

+ Available for all Operating Systems
	+ 'Terminal' on Linux and Mac Os X
	+ bit hidden in Windows (please use [Cygwin](http://www.cygwin.com/))
	+ [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
		+ ignore Powershell, use Cygwin

--

### Wednesday

+ Getting familiar with command line and data sets
	+ Prepare: [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
	+ Also look at [Unix for Poets](http://www.cs.upc.edu/~padro/Unixforpoets.pdf)
	+ download [NY Times API data](http://cleverdon.hum.uva.nl/marijn/nytimes/nytimes_API_data.zip) and [Guardian API data](http://cleverdon.hum.uva.nl/marijn/OtD/guardian_API_data.zip) from the course website and explore them

--

### Next Week

+ Acquiring data
	+ APIs, scraping, crowdsourcing
	+ read Ben Fry - [Seven stages of visualizing data](https://docs.google.com/file/d/0Bw6gfqK2v6PjbXlwcDJFcXBYT3c)


