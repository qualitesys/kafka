console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java 4 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Processor<K,V>"
 , "c2" : "org.apache.kafka.streams.processor.AbstractProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.AbstractProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#10"
 , "c1" : "AbstractProcessor"
 , "c2" : "AbstractProcessor()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#13"
 , "c1" : "void"
 , "c2" : "init(ProcessorContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#19"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#24"
 , "c1" : "ProcessorContext"
 , "c2" : "context()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00006"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class AbstractProcessor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method init arguments ProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#19"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00019] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#19"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00019] Void method close is empty or contains only a return. Interface segregation"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.svg" }

};
console.log('leListeStr 99 main end');
