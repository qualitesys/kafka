console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.InternalTopicProperties"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.InternalTopicProperties" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#9"
 , "c1" : "InternalTopicProperties"
 , "c2" : "InternalTopicProperties(Integer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#13"
 , "c1" : "Optional<Integer>"
 , "c2" : "getNumberOfPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#17"
 , "c1" : "InternalTopicProperties"
 , "c2" : "empty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#22"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.streams.processor.internals.InternalTopicProperties.empty@POLYN142250 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.streams.processor.internals.InternalTopicProperties.toString@POLYN142390 the MagicNumber/String  'InternalTopicProperties{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.streams.processor.internals.InternalTopicProperties.toString@POLYN142390 the MagicNumber/String  'numberOfPartitions=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.processor.internals.InternalTopicProperties.toString@POLYN142390 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.html#17"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00017] Public method empty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopicProperties.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
