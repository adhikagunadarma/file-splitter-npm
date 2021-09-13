# What is this?

NPM Package that will split file into multiple fragments
# Installation

`npm i file-splitter --save`

Then...

`import {fileSplitter} from file-splitter`

# Use case

`return fileSplitter(file, 3)`

## Options

File Splitter have 2 arguments, which the second one is optional : 

* *file* - File type that will be splitted
* *fragment_size* - Fragment size that the file wished to be splitted in MB(Defaults to 3 MB)

