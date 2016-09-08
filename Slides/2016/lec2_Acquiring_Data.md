title: Object to Data - Lecture 2
output:  /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching/Objects_to_Data/Slides/html/lecture2.html

--

# From Object to Data
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Week 2 - 12/09/2015

--

### Today

+ Part 1:
	+ Fry's Seven Steps
	+ Primitives
	+ Source Criticism
+ Part 2:
	+ Acquiring Data
	+ Data Structures

--

### Question

+ Question from Honours student at DH course:
	+ Did painters paint outdoors more after invention of paint tubes?
+ How would you go about answering this?

--

### What Is The Question

+ Ben Fry:
	+ "All data problems begin with a question and end with a narrative construct that provides a clear answer." [which may or may not be true].
		+ [Fry's 7 Steps Paper](https://docs.google.com/file/d/0Bw6gfqK2v6PjbXlwcDJFcXBYT3c/edit)

--

### What Is The Question

+ Ben Fry:
	+ "All data problems begin with a question and end with a narrative construct that provides a clear answer."
	+ "One of the most important (and least technical) skills in understanding data is asking good questions."
		+ Second most important (and least technical) skills in understanding data is knowing that you are asking good questions.

--

### From Question to Narrative

+ This is the hard part
	+ think of necessary steps
	+ translate thinking steps in performative steps
	+ critically analyse performative steps
	+ interpret and reflect on results
+ This is a non-linear process! 
	+ Also: empirical science 101

--

### Algorithmic Thinking

+ Seven steps according to Fry
	+ Step 0: **question**
	+ Step 1: **acquiring data**
	+ Steps 2-4: parsing, filtering, mining 
	+ Steps 5-7: presenting, refining, interacting 

--

### Questions, Primitives, Narratives

+ Question from Honours student at DH course:
	+ Did painters paint outdoors more after invention of paint tubes?
+ Use primitives to work towards an answer
	+ small building blocks lead to *impressive things*
	+ building blocks shape narrative

--

### Primitives

+ **Unsworth**: selecting, sampling, representing, annotating, comparing, discovering, referring, illustrating
	+ [Unsworth's Scholarly Primitives](http://jefferson.village.virginia.edu/~jmu2m/Kings.5-00/primitives.html)
+ **Bradley**: collecting, structuring, selecting, filtering, annotating, transforming
	+ John Bradley of UCL

--

### Primitives

+ **Unsworth**: selecting, sampling, representing, annotating, comparing, discovering, referring, illustrating
+ **Bradley**: collecting, structuring, selecting, filtering, annotating, transforming
+ **Fry**: acquiring, parsing, filtering, mining, representing, refining, interacting

--

### Primitives

+ **Unsworth**: selecting, sampling, representing, annotating, comparing, discovering, referring, illustrating
+ **Bradley**: collecting, structuring, selecting, filtering, annotating, transforming
+ **Fry**: acquiring, parsing, filtering, mining, representing, refining, interacting
+ **Unix**: curl, wget, awk, sed, grep, find, sort, uniq

--

### (Re)presenting

+ What is meant by "representation"?
+ Complex!
	+ To reconstruct, present and/or characterise in a clear and structured way.
	+ What are the problems with representation?
+ Options

--

### Source Criticism

+ Source: 
	+ materials you study
	+ or provider of materials
	+ both need to be scrutinised
+ Critically look at method of acquiring data
	+ what did you get?
	+ what didn't you get and why? 
	+ missing, not existing, wrong method, ...
	+ interesting example: [Orbis](http://orbis.stanford.edu/)

--

### Google N-gram Viewer

+ Google Books corpus reflects cultural history
	+ [Ngram Viewer](https://books.google.com/ngrams/graph?content=pizza%2Chamburger%2Chot+dog&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cpizza%3B%2Cc0%3B.t1%3B%2Chamburger%3B%2Cc0%3B.t1%3B%2Chot%20dog%3B%2Cc0) to study word usage over time
	+ Why is N-gram viewer a good/bad source for such studies?

--

### Google N-gram Viewer

+ Google Books corpus reflects cultural history
	+ [Ngram Viewer](https://books.google.com/ngrams/graph?content=pizza%2Chamburger%2Chot+dog&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cpizza%3B%2Cc0%3B.t1%3B%2Chamburger%3B%2Cc0%3B.t1%3B%2Chot%20dog%3B%2Cc0) to study word usage over time
	+ Why is N-gram viewer a good/bad source for such studies?
	+ Joanna Guldi studied [variants of 'to walk' in literature of 1700-1900](https://books.google.com/ngrams/graph?content=lounging%2Cstrolling%2Clurching%2Cdodging%2Cwaddling%2Ctrudging&year_start=1700&year_end=2000&corpus=0&smoothing=3&share=&direct_url=t1%3B%2Clounging%3B%2Cc0%3B.t1%3B%2Cstrolling%3B%2Cc0%3B.t1%3B%2Clurching%3B%2Cc0%3B.t1%3B%2Cdodging%3B%2Cc0%3B.t1%3B%2Cwaddling%3B%2Cc0%3B.t1%3B%2Ctrudging%3B%2Cc0) 
	+ [COHA](http://corpus.byu.edu/coha/) offers more control

--

### Selecting & Sampling

+ Scholarly primitives
	+ difference between selecting and sampling?
	+ related to another primitive: *presenting*
+ How to select/sample paintings for the following question:
	+ Did painters paint outdoors more after invention of paint tubes?

--

### Selection Problem

+ [ePistolarium](http://ckcc.huygens.knaw.nl/epistolarium/#)
	+ investigate circulation of knowledge in network of 17th scientiests
	+ [Nodegoat](http://nodegoat.net/): software for dynamic network mapping
	+ [Mapping the Republic of Letters](http://web.stanford.edu/group/toolingup/rplviz/)

--

# Part 2: Acquiring Data

--

### Getting Data

+ Many methods
	+ download packaged data set
	+ modify/merge existing corpora/datasets
	+ create data (generators, algorithmic art)
	+ scrape web pages
	+ use APIs
	+ crowdsourcing

--

### Web Scraping 

+ Scraping
	+ The 'old way', but...
	+ APIs often limited to metadata
	+ standard scraping tool: [Wget](https://www.gnu.org/software/wget/)
	+ mirror website: 
		+ wget -w 2 -m http://www.lyricsfreak.com
	+ serious tool: [Heritrix](https://webarchive.jira.com/wiki/display/Heritrix/Heritrix)
	+ [Scrapy](http://scrapy.org/) (Python library)

--

### Scraping Etiquette

+ Good behaviour:
	+ limit bandwidth and requests/second
	+ sites have own rules on what is acceptable
	+ f.i. look at robots.txt (http://www.lyricsfreak.com/robots.txt)
	+ continued bad behaviour often results in blocked IP

--

### APIs

+ programmatic access (preferred by most sites)
	+ data returned in structured form (JSON, XML)
	+ example from [Rijksmuseum](https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?format=json&key=TZ6co7v8)
	+ request: URL with query parameters
	+ format: api_url?param1=value1&param2=value2
	+ example: [http://api.nytimes.com/svc/search/v2/articlesearch.json?q=humanities&api-key=6c208c379cac770e9c0900819ad9ad74:10:67186206](http://api.nytimes.com/svc/search/v2/articlesearch.json?q=humanities&api-key=6c208c379cac770e9c0900819ad9ad74:10:67186206)

--

### Application Programmers Interface

+ Broad range of sources:
	+ [NY Times](http://developer.nytimes.com/docs) (newspaper archive 1850--2014)
	+ [EchoNest](http://developer.echonest.com/docs/v4/index.html) (music database)
	+ [Koninklijke Bibliotheek](http://www.loc.gov/standards/sru/) (historical collections)
	+ [Marvel Comics](http://developer.marvel.com/documentation/generalinfo) (comics, characters, stories)
	+ [Rijksmuseum](http://rijksmuseum.github.io/) (collection, events)
	+ Many, many more: Europeana, Facebook, Twitter, governments, ...


--

### Koninklijke Bibliotheek

+ [SRU](http://www.loc.gov/standards/sru/) (Search/Retrieve via URL)
	+ [Early Dutch Books Online](http://www.earlydutchbooksonline.nl/en/edbo)
	+ KB SRU [returns XML](http://jsru.kb.nl/sru/sru?version=1.2&maximumRecords=50&operation=searchRetrieve&startRecord=1&recordSchema=ddd&x-collection=DPO_boekdeel&query=%28date%20within%20%221760%201791%22%29)

--

### Command Line Interface

+ The terminal is an API
	+ interface to applications and data on your computer
	+ Commands provide programmatic interface to Unix tools 

--

### Crowdsourcing

+ let crowd create data around objects
	+ gather annotations, links
	+ gather images: [Go Van Gogh](http://www.govangogh.org)
	+ General platforms: [Crowdflower](http://www.crowdflower.com/), [Mechanical Turk](https://www.mturk.com/mturk/welcome)
	+ Research-oriented: [Zooniverse](https://www.zooniverse.org/#humanities), [Vele Handen](https://velehanden.nl/)
	+ Source crticism?

--

### Storing Data

+ JSON:
	+ online or offline database
	+ online DBs: [Redis](http://redis.io/), [Firebase](https://www.firebase.com/)
	+ or in files (use [jq](http://stedolan.github.io/jq/) to parse from command line)
+ CSV
+ XML/HTML, TXT

--

### Data Structures

+ Tree-based formats
	+ [XML](http://msdn.microsoft.com/en-us/library/hf9hbf87%28v=vs.110%29.aspx), [HTML](http://www.clearboth.org/wp-content/uploads/2011/06/A-visual-DOM-tree-representation-of-an-HTML-document.gif), [JSON](https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?format=json&key=TZ6co7v8), Books, films?
+ Matrix/table format
	+ CSV/TSV, spreadsheets
+ Sequential/linear data formats
	+ text, audio video, data streams (MPEG, ...)
+ *Rhizomatic*
	+ networks 

--

### Navigating Trees

+ Folder structure on hard drive is a tree
	+ *cd* command: jump from branch to branch
	+ working directory versus data directory
+ URLs on the web are paths in trees
	+ http://www.nos.nl/economie/
	+ http://www.nos.nl/sport/
	+ http://www.nos.nl/sport/voetbal
+ Hyperlinks allow jumping, connect branches in same or different tree

--

### Paths in JSON/XML/HTML

+ How do you refer to elements in JSON or XML data?
	+ there is always a *root* element
	+ elements inside are descendents/children
	+ parent/child relationships form tree with branches and leaves
	+ JSON: [artObject.makers[0].name](https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?format=json&key=TZ6co7v8)
	+ XML: [/books/book/pubdate](http://msdn.microsoft.com/en-us/library/hf9hbf87%28v=vs.110%29.aspx)

--

### CSV/TSV

+ Rows and Columns
	+ lines with field separators for Unix command line tools
	+ grep works on whole line
	+ awk can work in individal columns
	+ see last week’s [tutorial on analysing film reviews](http://humanities.uva.nl/~mkoolen1/teaching/#/FOtD/2015/exercises/lab1_exercise3)

--

### Next

+ Week 2
	+ 09/09 No lab, [tutorial online: scripting, iteration](http://humanities.uva.nl/~mkoolen1/teaching/#/FOtD/2015/exercises/lab2_exercise2)
	+ If installing doesn’t work: [Koding.com](https://koding.com)
	+ Additional materials: [Programming Historian](http://programminghistorian.org/lessons/), [Digital research with Unix command line tools](http://williamjturkel.net/how-to/) by William J, Turkel
+ Week 3
	+ 14/09 Parsing objects into sebments
	+ 16/09 Lab: R, text analysis and mapping
	

