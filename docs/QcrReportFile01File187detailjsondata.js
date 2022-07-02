console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "InvalidOffsetException"
 , "c2" : "org.apache.kafka.clients.consumer.NoOffsetForPartitionException"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.NoOffsetForPartitionException" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NoOffsetForPartitionException"
 , "c2" : "NoOffsetForPartitionException(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "NoOffsetForPartitionException"
 , "c2" : "NoOffsetForPartitionException(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "2"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.svg" }

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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.clients.consumer.NoOffsetForPartitionException.NoOffsetForPartitionException@POLYN164195 the MagicNumber/String  'Undefined offset with no reset policy for partition: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/NoOffsetForPartitionException.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.clients.consumer.NoOffsetForPartitionException.NoOffsetForPartitionException@POLYN164443 the MagicNumber/String  'Undefined offset with no reset policy for partitions: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
