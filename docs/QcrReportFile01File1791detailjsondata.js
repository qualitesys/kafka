console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java 4 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ExtractRecordMetadataTimestamp"
 , "c2" : "org.apache.kafka.streams.processor.UsePartitionTimeOnInvalidTimestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.UsePartitionTimeOnInvalidTimestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "long"
 , "c2" : "onInvalidTimestamp(ConsumerRecord<Object,Object>;long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.html#12"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00012] For method onInvalidTimestamp arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  recordTimestamp|long  partitionTime"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.streams.processor.UsePartitionTimeOnInvalidTimestamp.onInvalidTimestamp@POLYN169835 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.streams.processor.UsePartitionTimeOnInvalidTimestamp.onInvalidTimestamp@POLYN169835 the MagicNumber/String  'Could not infer new timestamp for input record ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/UsePartitionTimeOnInvalidTimestamp.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.streams.processor.UsePartitionTimeOnInvalidTimestamp.onInvalidTimestamp@POLYN169835 the MagicNumber/String  ' because partition time is unknown.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
