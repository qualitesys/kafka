console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.TxnPartitionMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.TxnPartitionMap" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#33"
 , "c1" : "TxnPartitionEntry"
 , "c2" : "get(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#42"
 , "c1" : "TxnPartitionEntry"
 , "c2" : "getOrCreate(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#46"
 , "c1" : "boolean"
 , "c2" : "contains(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#50"
 , "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#54"
 , "c1" : "OptionalLong"
 , "c2" : "lastAckedOffset(TopicPartition)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#63"
 , "c1" : "OptionalInt"
 , "c2" : "lastAckedSequence(TopicPartition)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#72"
 , "c1" : "void"
 , "c2" : "startSequencesAtBeginning(TopicPartition;ProducerIdAndEpoch)"
 , "c3" : "1"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
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
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method get arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630 the MagicNumber/String  'Trying to get the sequence number for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630 the MagicNumber/String  ', but the sequence number was never set for this partition.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method getOrCreate arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method contains arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method lastAckedOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.lastAckedOffset@POLYN162463 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method lastAckedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.lastAckedSequence@POLYN162917 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method startSequencesAtBeginning arguments TopicPartition  topicPartition|ProducerIdAndEpoch  newProducerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method startSequencesAtBeginning list of called methods Object monObjet|org.apache.kafka.common.utils.PrimitiveRef.IntRef PrimitiveRef_ofIntN163496|org.apache.kafka.clients.producer.internals.TxnPartitionEntry getN163594"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163363 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TxnPartitionMap.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
