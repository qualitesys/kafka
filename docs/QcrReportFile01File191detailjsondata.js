console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java 1 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "InvalidOffsetException"
 , "c2" : "org.apache.kafka.clients.consumer.OffsetOutOfRangeException"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.OffsetOutOfRangeException" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OffsetOutOfRangeException"
 , "c2" : "OffsetOutOfRangeException(Map<TopicPartition,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetOutOfRangeException"
 , "c2" : "OffsetOutOfRangeException(String;Map<TopicPartition,Long>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "offsetOutOfRangePartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "partitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/OffsetOutOfRangeException.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.clients.consumer.OffsetOutOfRangeException.OffsetOutOfRangeException@POLYN144823 the MagicNumber/String  'Offsets out of range with no configured reset policy for partitions: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
