console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "TopicNameExtractor<K,V>"
 , "c2" : "org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#31"
 , "c1" : "StaticTopicNameExtractor"
 , "c2" : "StaticTopicNameExtractor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#35"
 , "c1" : "String"
 , "c2" : "extract(K;V;RecordContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#40"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#45"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#57"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method extract arguments K  key|V  value|RecordContext  recordContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor.toString@POLYN155362 the MagicNumber/String  'StaticTopicNameExtractor(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor.toString@POLYN155362 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00049] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor.equals@POLYN155510 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor.equals@POLYN155510 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.processor.internals.StaticTopicNameExtractor.equals@POLYN155510 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StaticTopicNameExtractor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
