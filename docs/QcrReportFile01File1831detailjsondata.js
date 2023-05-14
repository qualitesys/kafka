console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TimestampExtractor"
 , "c2" : "org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#55"
 , "c1" : "long"
 , "c2" : "extract(ConsumerRecord&lt;Object,Object&gt;;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#73"
 , "c1" : "long"
 , "c2" : "onInvalidTimestamp(ConsumerRecord&lt;Object,Object&gt;;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method extract arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  partitionTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method extract list of called methods Object monObjet|long record_timestampN155986"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp.extract@POLYN155816 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method onInvalidTimestamp arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  recordTimestamp|long  partitionTime"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
