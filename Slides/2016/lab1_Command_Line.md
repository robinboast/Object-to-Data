title: Exploring Data - Lab Session 1
output:  /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching/Objects_to_Data/Slides/html/lab1_commline.html

--

# From Object to Data
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Lab session 1 - Exploring Data
## Week 1 - 02/09/2014

--

### Unix Command Line

+ Unix Command Line Tools
	+ functional composition
	+ 'do only one thing and do it well'
	+ document, automate, repeat
	+ Makefiles and scripts
+ Basics, you'll come back to this

--

### Unix Command Line

+ Unix Command Line Tools
	+ functional composition
	+ 'do only one thing and do it well'
	+ document, automate, repeat
	+ Makefiles and scripts
+ Basics, you'll come back to this
	+ again and again and again and ...

--

### Advantages of Command Line

+ Shows individual steps
	+ understand building blocks, process
	+ more control
+ Scripting
	+ combination of commands in order, a recipe or *algorithm*
	+ also documents, stores 'state' (Bradley)
	+ reveals current understanding of researcher

--

### Unix and Permissions

+ Access to files is done through permissions
	+ three levels: you, group, others
	+ three actions: read, write, execute
	+ shell scripts need execute permissions 
	+ type: *chmod u+x myscript.sh*
	+ to see permissions of files, type: *ls -l*

--

### Filtering and Selecting

+ large dataset contains many stories
	+ what to focus on?
	+ inspect set, locate interest
	+ select and filter
	+ work on small set to get story
	+ back to larger set to find more

--

### Tools for Filtering and Selecting

+ Unix tools:
	+ streaming: **cat**, **less**, **more**
	+ selecting: **grep**, **awk**
	+ filtering: **sed**, **uniq**
	+ sorting: **sort**
+ Each has parameters

--

### Methods and Tools

+ It's not about the specific tools
	+ it's about the method and a way of thinking
	+ with most tools you do the same things
	+ only a small number of building blocks (primitives)
	+ Unix tools help you think in primitives
	+ think about affordance of tools

--

### No Sugar Coating

+ No perfect situations
+ You have to do
	+ (acquiring), preprocessing
	+ parsing, filtering
	+ transformations, aggregations
	+ visualisations
+ self-sufficiency is key

--

### Command Line Environment

+ Get familiar with command line environment
	+ start with the [Command Line Crash Course](http://cli.learncodethehardway.org/book/)
	+ make sure you know how to move around your hard drive

--

### Command Line Tutorials

+ There are tons of tutorials
	+ [Unix for Poets](http://wordpress.let.vupr.nl/cltldraft/files/2013/08/UnixforPoets.pdf)
	+ [Intro for Mac Os X terminals](http://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855)
	+ [Introduction to the UNIX Operating System](http://www.ee.surrey.ac.uk/Teaching/Unix/)
	+ just type *unix command line tutorial* into Google
