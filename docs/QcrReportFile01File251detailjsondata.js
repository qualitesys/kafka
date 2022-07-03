console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.TxnPartitionMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.TxnPartitionMap" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TxnPartitionEntry"
 , "c2" : "get(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TxnPartitionEntry"
 , "c2" : "getOrCreate(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "contains(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "lastAckedOffset(TopicPartition)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "OptionalInt"
 , "c2" : "lastAckedSequence(TopicPartition)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startSequencesAtBeginning(TopicPartition;ProducerIdAndEpoch)"
 , "c3" : "1"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class TxnPartitionMap contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method get arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String  'Trying to get the sequence number for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String  ', but the sequence number was never set for this partition.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method getOrCreate arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method contains arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method lastAckedOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.lastAckedOffset@POLYN171747 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method lastAckedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.lastAckedSequence@POLYN172199 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method startSequencesAtBeginning arguments TopicPartition  topicPartition|ProducerIdAndEpoch  newProducerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00057] For method startSequencesAtBeginning list of called methods Object monObjet|org.apache.kafka.common.utils.PrimitiveRef.IntRef PrimitiveRef_ofIntN172774|org.apache.kafka.clients.producer.internals.TxnPartitionEntry getN172870"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN172643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00020] In the recursive method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String 'Trying to get the sequence number for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#22"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00022] In the recursive method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN170916 the MagicNumber/String ', but the sequence number was never set for this partition.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
