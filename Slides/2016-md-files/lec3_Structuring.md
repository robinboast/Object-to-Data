title: Object to Data - Lecture 3
output: /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching/Objects_to_Data/Object-to-Data/Slides/html/lecture3.html

--

# From Object to Data
## Parsing Data and Evaluation
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Week 3 - 19/09/2015

--

### Programme

+ Part 1: Lab Tutorials
+ Part 2: Parsing
+ Part 3: Ramsey and Patterns
+ Part 4: Regular Expressions

--

# Part 1. Lab Tutorials

--

### Tutorials

+ Mark Down Language
+ UNIX for POETs
+ Scraping exercise
+ Swirl

--

### Proposals

+ Deadline next Monday
+ Plan and draft proposal early
	+ ask questions!
	+ test on peers!

--

# Part 2. Parsing

--

### Parsing

+ Segmenting data into meaningful units
	+ [removing irrelevant data](http://cdn.londonandpartners.com/images/explorer-map/tubemap-2012-12.png)
	+ many decisions (and interpretations)
	+ consequences? justifications?
    + meaningful unit isn’t stable unit, depends on interpretation
+ Which Unix tools perform parsing?

--

### Parsing

+ Segmenting data into meaningful units
	+ [removing irrelevant data](http://cdn.londonandpartners.com/images/explorer-map/tubemap-2012-12.png)
	+ many decisions (and interpretations)
	+ consequences? justifications?
    + meaningful unit isn’t stable unit, depends on interpretation
+ Which Unix tools perform parsing?
	+ GREP
	+ AWK
	+ [Perl](http://perl-begin.org/learn/) (not UNIX, but a programming language)
--

### Parsing and Hermeneutics

+ Does parsing happen in traditional humanities research?

--

### Parsing and Hermeneutics

+ Does parsing happen in traditional humanities research?
	+ focus in specific aspects
	+ choose specific perspective
	+ a form of parsing and filtering?
+ Digital approach explicates technique

--

### Representation

+ How do you represent objects?
	+ text by words, phrases, concepts, themes, motifs, ...
	+ film by scenes, shots, frames, characters
	+ music by rhythm, beat, pitch, phrases
	+ painting by regions, figures, colours
	+ event by subevents, time frames, locations, agents, patients, activities
+ all have 'syntactical' structure?

--

### Parsing Structured Data

+ NY Times API data is ‘structured’
    + data with fields and values
    + meaning added with field names
	+ easy for machines to read
+ Tools allow easy manipulation

--

### Parsing Structured Data

+ Example of Parsing Data?

--

### Parsing Structured Data

+ Databases
    + data with fields and values
    + meaning added with field names
	+ easy for machines to read
+ Querying
	+ Library Catalogue

--

### Parsing Structured Data

+ Highly structured data
+ Limited to field context search (not really)
+ Also limited questions

--

### Parsing Text Data

+ Text data is messy
	+ 'unstructured'
	+ difficult for machines to read
	+ hard to parse (=segment into meaningful units)
+ But there are many great tools:
	+ [Stanford parser](http://nlp.stanford.edu/software/lex-parser.shtml), [Python NLTK](http://www.nltk.org/), [R Text Mining](http://tm.r-forge.r-project.org/)
	+ API: [OpeNER](http://www.opener-project.eu/)
+ With [surprising applications](http://dh2011abstracts.stanford.edu/xtf/view?docId=tei/ab-168.xml;query=;brand=default)
+ More on Wednesday

--

### Evaluation

+ Parsing allows qualitative and quantitative analysis
    + does accuracy of parsing matter?
    + how do we establish accuracy?
+ E.g. word frequency counts and usage over time
    + what margin of errors is acceptable?
    + depends on what you’re using data for
    + systematic errors introduce bias

--

### Precision and Recall

+ Quantitative indicators of accuracy
    + **Precision**: what fraction of parsed segments is correct unit?
    + **Recall**: what fraction of units in the data is parsed correctly?
+ Tool criticism:
	+ does output of alternative versions of tool results in same interpretation of output?

--

### Beyond Text

+ Parse music as pitch intervals between subsequent notes
	+ can classify genres according to interval distribution
    + project by Aline Honingh and Rens Bod
+ Concept Detection in Video
    + [Mediamill](https://ivi.fnwi.uva.nl/isis/mediamill/index.php)

--

# Part 3. Ramsey and Patterns

--

### Ramsay’s StageGraph

+ Tool built for specific purpose
    + explore scenes in plays as networks
    + allow interaction, zoom, refine, filter (!)
    + requires choices
    + requires transparency of choices and assumptions
    + not a neutral tool (do they exist?)
+ [Gephi](http://gephi.github.io/) is generic network visualization tool
	+ [American Actor networks in 50s and 70s](http://humanities.uva.nl/~mkoolen1/materials/Historical_Networks_2015/actors.50s_70s.html)

--

### Fishing Expeditions

+ Scientific method:
    + **Potter**: “... go to the data only when one is testing a clearly stated hypothesis”
+ Actual scientific practice
    + **Ramsay**: “I tried to think of things that naturally form themselves into graph structures.”

--

### Dubious Methodology

+ Ramsay: fishing dubious for science, not for humanities
    + *serendipity is the process*
    + fishing is actually exploration?
    + why dubious for science?

--

### Data mining

+ searching for suggestive patterns?
    + exploration, discovery
    + inexact science
    + topic modelling (week 5)
+ [Author profiling](http://watson-pi-demo.mybluemix.net/)

--

# Part 4. Regular Expressions

--

### Regular Expressions

+ Pattern matching alphabet
	+ search, filter, replace
	+ tr/[A-Z]/[a-z]/
	+ tr -sc ‘[A-Z][a-z]’ ‘[\012\*]’
	+ Unix tool *grep*
+ First developed in 1950s
	+ used by many data manipulation tools
+ Many tutorials, including: [Learn Regex the hard way](http://regex.learncodethehardway.org/book/)

--

### Short Regex Tutorial

+ To convince you that this is useful
	+ a short [Regular Expressions tutorial](http://humanities.uva.nl/~mkoolen1/teaching/#/FOtD/2015/exercises/lab3_grep_commands)

--

### Wrap Up

+ Parsing is the process of segmenting data in meaningful units
	+ many tools for text
	+ some for music, speech, video, images
+ Quality of parsing determines upper-bound quality of research
+ Regular Expressions used worldwide for data analysis

--

### Next

+ Wednesday 16/09/2014:
	+ R tutorials, mapping, geocoding, text analysis
+ Monday 21/09/2014:
    + Review of your proposed projects


