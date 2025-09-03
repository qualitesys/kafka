console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java 3 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Processor<K,V>"
 , "c2" : "org.apache.kafka.streams.processor.AbstractProcessor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.AbstractProcessor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#33"
 , "c1" : "AbstractProcessor"
 , "c2" : "AbstractProcessor()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#36"
 , "c1" : "void"
 , "c2" : "init(ProcessorContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#47"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#56"
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
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
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
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method init arguments ProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00047] Valued method close is empty or contains only a return. Interface segregation for Processor<K,V>"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00047] In the class AbstractProcessor which implements the interface(s) Processor<K,V>, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedProcessor<K,V>"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/AbstractProcessor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
