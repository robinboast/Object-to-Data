title: Object to Data - Lecture 5
output:  /Users/robinboast/UvA_Teaching/Media_and_Information/2016-2017_Teaching//Objects_to_Data/Slides/html/lecture5.html

--

# From Object to Data
## Topic Modelling
## Robin Boast, Alan Berg
## Information Culture, Digital Humanities Minor 2016/2017
## Week 5 - 03/10/2015

--

### Programme

1. What are topic models?
2. Why use topic models?
3. How do topic models work?

--

# Part 1: What Are Topic Models?

## a general overview

--

### Topic Models

+ Representing topics in collection of documents
    + Use statistics to find topics represented by groups of words
	+ Document is a mix of topics
	+ Topic is a mix of words
+ Documents and words can be directly observed
	+ topics are latent

--

### Illustration 1

![image not found](http://www.4four.us/wordpress/wp-content/uploads/2010/10/result.png)

+ source: [http://www.4four.us/wordpress/wp-content/uploads/2010/10/result.png](http://www.4four.us/wordpress/wp-content/uploads/2010/10/result.png)

--

### Illustration 2

![image not found](http://dig-eh.org/files/2014/07/circ_disciplines-700x386.png)

+ source: [http://dig-eh.org/files/2014/07/circ_disciplines-700x386.png](http://dig-eh.org/files/2014/07/circ_disciplines-700x386.png)

--

### Assumptions

+ Two documents with the same topics will have overlap in words
	+ not literally true, but probabilistically true
+ Single document can consist of many topics
	+ but to different degrees
+ Three elements: words, topics, documents
	+ topics are formed by a selection of words
	+ documents are formed by a selection of topics

--

### Statistical Modeling

+ Given a collection of documents (text or otherwise), the modeling process does two things:
	1. create word probability distribution for topics
	2. create topic probability distribution for documents
+ Both are purely based on frequency and co-occurrence of words

--

### Topic Modelling Software

+ [R LDA package](https://cran.r-project.org/web/packages/lda/index.html) and [LDAvis](https://github.com/cpsievert/LDAvis) for visual exploration
+ [Mallet](http://mallet.cs.umass.edu/index.php):
	+ popular in Digital Humanities community
	+ also does classification, information extraction
+ [topic-modeling-tool](https://code.google.com/p/topic-modeling-tool/): GUI for Mallet, [TMT with RegEx](https://github.com/ulbstic/topic-modeling-tool-FR)
+ Other options:
	+ [GenSim](http://radimrehurek.com/gensim/index.html) (Python library)
	+ [Stanford Topic Modeling Toolbox](http://nlp.stanford.edu/software/tmt/tmt-0.4/)

--

# Part 2: Why Use Topic Models?

## relevance for research

--

### Suggestive Patterns

+ Overcomes problems of keyword search
	+ search with whole dictionary
	+ but words weighted by topical importance
+ Gives insight in topical nature of collection
+ Advantages:
	+ Great for finding suggestive patterns
+ Disadvantages:
	+ Topics can be hard to interpret

--

### Topic Modelling in Digital Humanities

+ Extremely popular, especially in Historical Sciences
    + [Cameron Blevins: Martha Ballard’s diary](http://historying.org/2010/04/01/topic-modeling-martha-ballards-diary/)
    + [Robert K. Nelson: Mining the Dispatch](http://dsl.richmond.edu/dispatch/)
	+ [Scott Weingart: guided tour on TM](http://www.scottbot.net/HIAL/?p=19113)
	+ [Megan Brett: Intro on TM](http://journalofdigitalhumanities.org/2-1/topic-modeling-a-basic-introduction-by-megan-r-brett/)
	+ [Matthew Jockers: blog](http://www.matthewjockers.net/2011/09/29/the-lda-buffet-is-now-open-or-latent-dirichlet-allocation-for-english-majors/)

--

### KB Newspaper Archive

+ Over 80 million articles
	+ organised via formal metadata
	+ *date*, *newspaper title*, *article type*
+ How organised in terms of topics?
+ Sampled collection:
	+ 100,000 articles matching: *groote oorlog* OR *wereldoorlog* OR *europeesche oorlog* OR *1914-1918*
	+ Constrained to period 1918-1940

--

### Examples with KB Newspaper Archive

+ Topics modelled by Mallet:
	+ [topics modelled from World War I](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/topics/WOI.article.100000.top.200.stopped_dutch_all.topics)

--

### Topics in Newspapers

+ Newsarticles on World War One, published during the Interbellum
	+ timeline with three topics:
	+ [socialism, neutrality, secret documents](http://humanities.uva.nl/~mkoolen1/materials/Visualisation_Antwerp_2015/KB_topic_model_images.html)

--

### Interpreting Topics

![Image not found](http://problemsolvingpackard.weebly.com/uploads/1/1/0/2/11023248/6886977_orig.jpg)

--

# Part 3: How Do Topic Models Work?

## the technical details

--

### Two Parts of Technicalities

+ Lots of statistics
	+ we’ll only scratch the surface!
+ Lots of transformations
	+ most of these steps are easy to understand
	+ but also important to understand
	+ need to be aware of them to gain control
+ Do experiments to get feel for what’s meaningful

--

### Transformations

+ Four major steps:
	1. **Text** > preprocessing > **Words**
	2. **Words** > indexing > **Numbers**
	3. **Numbers** > modeling > **Topics**
	4. **Topics** > analysing > **Compositions**
+ We’ll encounter specifc transformations on the way

--

### 1. Preprocessing Text

+ What do the newspaper articles look like?
	+ [scanned page](http://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010669603:mpeg21:a0038)
	+ [after OCR](http://resolver.kb.nl/resolve?urn=ddd:010669603:mpeg21:a0038:ocr)

--

### 2. Indexing Text

+ From words to vectors to indexes

--

### 2a. Text as Vectors

+ text is linear sequence of words
+ can be represented as 
	+ [text’](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/fiets.10.stop.text.html)
	+ [list of words](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/fiets.10.stop.termlist.html)
+ or as a vector of words
	+ [vectors](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/fiets.10.stop.doc_index.html)
+ ‘Easy’ to see which *texts* have *overlap* in words

--

### 2b. Inverted Index

+ Term-document index:
	+ word lists which texts it appears in
	+ index becomes rows of *text vectors*
	+ [inverted index](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/fiets.10.stop.inverted_index.html)
	+ interesting aside: search engine use this for quick lookup!

--

### Parsing & Units of Data

+ Usually words as units
	+ can be anything, but features need high enough frequency of units
	+ trigrams and longer phrases often too sparse
+ Bag of words:
	+ ignores word order, syntax, sentence or paragraph boundaries
    + same with other kinds of data (colours, objects, melodies)

--

### Stopwords

+ Function words and other frequent words carry little meaning in modelled topics
	+ [dominate the inverted index](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/fiets.10.no_stop.inverted_index.html)
	+ remove them to focus on meaningful terms
+ But which words are stopwords?
	+ standard list [Snowball Dutch stopword list](http://snowball.tartarus.org/algorithms/dutch/stop.txt)
	+ domain dependent: make your own

--

### 3. Modeling

+ Topics are latent
	+ Reduce high-dimensional term vector space to low-dimensional 'latent' topic space
	+ Topics represented by prob. dist. over words
	+ Texts represented by prob. dist. over topics
+ Established models:
	+ LSA: Latent Semantic Analysis
	+ LDA: Latent Dirichlet Allocation

--

### Semantic Relatedness

+ Two words co-occurring in a text
	+ signal that they are related
	+ document frequency determines strength of signal
	+ [co-occurrence index](http://cleverdon.hum.uva.nl/marijn/workshops/KB_Mallet_2015/tables/WOI.para.1000.stop.cooc_index.html)
+ Easy to see which *words* are *related*

--

### Frequency vs. Importance

+ How can statistics help identify important words?
+ **TF * IDF** indicates importance of term relative to the document
+ **TF**: Term Frequency
	+ terms *more* frequently in document are more important
+ **IDF**: Inverted Document Frequency
	+ terms in *fewer* documents are more specific

--

### LDA

+ LDA = Latent Dirichlet Allocation
	+ Diri-what?
	+ generative model
	+ [iterative sampling](http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation#Inference) to establish topics, word-topic dist. and topic-document dist.
+ After so many iterations, distributions are stable
	+ done: topics are modelled

--

### 4. Analysing Compositions

+ [LDAvis](https://github.com/cpsievert/LDAvis) is a wonderful tool to visually explore generated topics
	+ [tutorial for visualising topics in film reviews](http://cpsievert.github.io/LDAvis/reviews/reviews.html)
+ [topic-modeling-tool](https://code.google.com/p/topic-modeling-tool/) gives handy output for [analysing compositions](http://cleverdon.hum.uva.nl/marijn/OtD/TMT_output/output_html/all_topics.html)

--

### Wrap Up

+ Topic models are hot in Digital Humanities
	+ suggestive patterns fit humanities perspective
+ Can be difficult to use well
	+ Some guidelines, no guarantees

--

### Next

+ 30/09/2015:
	+ Lab, work on projects
	+ Questions?
+ 05/10/2015:
	+ Portfolio, first version
	+ Lecture - visualisation
	+ Telling stories with data
	+ Reading material: [Jessop](http://llc.oxfordjournals.org/content/23/3/281.full), [Stone](http://www.clir.org/pubs/resources/promoting-digital-scholarship-ii-clir-neh/stone11_11.pdf)

--

# Extra slides

--

### Considerations 1/2

+ Number of documents: 
	+ at least 1000, preferably more
+ Selection of documents:
	+ type dimension: which article types? which newspaper(s)?
	+ topical dimension: filtered by keywords?
	+ temporal dimension: beware language change!
	+ geographical dimension: beware language differences!

--

### Considerations 2/2

+ Number of topics
	+ depends on number of documents
	+ below 10,000 documents: 20-100 topics 
	+ 10,000 and more: 100-500 topics
+ Generic and domain-specific stopwords
+ Units of analysis: words, n-grams, phrases

--

### Narrative Topic Models

+ [Tunes & Tales project](http://www.ehumanities.nl/computational-humanities/tunes-tales/)
	+ Modelling Oral Transmission
	+ Folktales and Songs
	+ Folksong families (stemmata, similarity)
	+ Topic models to category tales according to narrative elements (Propp)

--

### Familiarity with Corpus

+ understanding topic requires understanding the corpus
	+ modelling topics in British history texts is hard if you know little about British history
	+ inexact science: checking usefulness of topics requires corpus knowledge and creativity

--

### Lies, Damned Lies and Statistics

+ Many pretty pictures based on topic modelling
    + what do they mean?
+ Word distributions often seem incoherent
	+ yet most informative topics often perform badly
	+ limited use as evidence, great for discovery (Ramsay)
	+ example of labelling topics
		+ [Pennsylvania Gazette](http://www.ics.uci.edu/~newman/pubs/JASIST_Newman.pdf)

--

### Guidelines

+ Corpus size: >1000 documents
+ Number of topics: 
	+ 20-50 for small corpora (<10kdocs), 50-200 for medium (<100k docs), 200-500 for larger
	+ no clear criteria to determine number of topics
+ models: LSI, pLSI, LDA, pLSI-LDA, ...
	+ Most used is LDA
		+ can generalise to unseen documents

--

### Other Considerations

+ Preprocessing
	+ removal of stopwords, hapaxes (efficiency), punctuation
+ Document lengths
	+ very large texts have many topics?
	+ large texts can be chunked
	+ docs of equal length help comparison

--

### Mixing Languages

+ E.g. non-English texts in mostly English corpus
    + models language instead of topics
+ Three topics modelled on 64,000 song lyrics:
	1. baby like come oh yeah let know gonna m go never get one na re hey love ll wanna man
	2. get like baby know let go ll got gonna love back girl feel away want oh gotta time take hey
	3. na que de y like la m get el te re tu en mi ang yo un ya sa es

--

### Beyond Text

+ In fact, you can use other data points than words
	+ [Ben Schmidt uses lat/long coordinates of Whaling ships to model topics](http://sappingattention.blogspot.de/2012/11/when-you-have-mallet-everything-looks.html)
	+ Topic model of coordinates can be plotted on a map for easy inspection

--

"This is a case where I'm really being saved by the restrictive feature space of data. If I were interpreting these MALLET results as text, I might notice it, for example, but start to tell a just-so story about how transatlantic shipping and Pacific whaling really are connected. (Which they are; but so is everything else.) The absurdity of doing that with geographic data like this is pretty clear; but interpretive leaps are extraordinarily easy to make with texts."

--

### Sub-Topic Modelling

+ Tangherlini & Leonard use sub-topic modelling (STM)
+ Use sub-corpus topics to 'trawl' in larger corpus
	+ generate topics on sub-corpus
	+ score docs in larger corpus
	+ more focus and control on topics

--

### Experimenting with STM

+ Tangherlini & Leonard (2013) ran 3 experiments
	1. model topics on Darwin's books, look for topics in Danish literature
	2. model topics on genre subset, look for unknown works of that genres
    3. model topics on folklore, look for influences in other literature

--

### Control over Topics

+ How can you control topic models?
	+ sub-topic modelling
	+ manual vocabulary
	+ filtering topics
+ Should you control topic models?

--

### Topic Modelling Summary

+ Very interesting technique for humanities
    + suggestive patterns good for interpretation
    + but easy to see connections that aren’t there
    + many examples of do’s and don’ts
    + inexact science, but there are best practices


