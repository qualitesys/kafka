console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java 12 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ExtractRecordMetadataTimestamp"
 , "c2" : "org.apache.kafka.streams.processor.FailOnInvalidTimestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.FailOnInvalidTimestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#15"
 , "c1" : "long"
 , "c2" : "onInvalidTimestamp(ConsumerRecord<Object,Object>;long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method onInvalidTimestamp arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  recordTimestamp|long  partitionTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String  'Input record ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String  ' has invalid (negative) timestamp. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String  'Possibly because a pre-0.10 producer client was used to write this record to Kafka without embedding ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String  'a timestamp, or because the input topic was created before upgrading the Kafka cluster to 0.10+. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String  'Use a different TimestampExtractor to process this data.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00020] In the recursive method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String ' has invalid -negative- timestamp. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00020] In the recursive method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String 'Input record ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String 'Possibly because a pre-0.10 producer client was used to write this record to Kafka without embedding ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#22"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00022] In the recursive method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String 'a timestamp, or because the input topic was created before upgrading the Kafka cluster to 0.10+. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00023] In the recursive method org.apache.kafka.streams.processor.FailOnInvalidTimestamp.onInvalidTimestamp@POLYN152352 the MagicNumber/String 'Use a different TimestampExtractor to process this data.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/FailOnInvalidTimestamp.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
