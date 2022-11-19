console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java 2 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ExtractRecordMetadataTimestamp"
 , "c2" : "org.apache.kafka.streams.processor.LogAndSkipOnInvalidTimestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.LogAndSkipOnInvalidTimestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.html#14"
 , "c1" : "long"
 , "c2" : "onInvalidTimestamp(ConsumerRecord<Object,Object>;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
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
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method onInvalidTimestamp arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  recordTimestamp|long  partitionTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.streams.processor.LogAndSkipOnInvalidTimestamp.onInvalidTimestamp@POLYN153253 the MagicNumber/String  'Input record {} will be dropped because it has an invalid (negative) timestamp.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/LogAndSkipOnInvalidTimestamp.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
