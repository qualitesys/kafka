console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TimestampExtractor"
 , "c2" : "org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "long"
 , "c2" : "extract(ConsumerRecord<Object,Object>;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "onInvalidTimestamp(ConsumerRecord<Object,Object>;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class ExtractRecordMetadataTimestamp contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method extract arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  partitionTime"
}} 
,
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.streams.processor.ExtractRecordMetadataTimestamp.extract@POLYN174694 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/ExtractRecordMetadataTimestamp.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method onInvalidTimestamp arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  recordTimestamp|long  partitionTime"
}} 
]
};
console.log('leListeStr 99 main end');
