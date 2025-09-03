console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ConsumerRebalanceListener"
 , "c2" : "org.apache.kafka.clients.consumer.internals.NoOpConsumerRebalanceListener"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.NoOpConsumerRebalanceListener" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#27"
 , "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00027] Valued method onPartitionsAssigned is empty or contains only a return. Interface segregation for ConsumerRebalanceListener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00027] In the class NoOpConsumerRebalanceListener which implements the interface(s) ConsumerRebalanceListener, the method onPartitionsAssigned is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedConsumerRebalanceListener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00030] Valued method onPartitionsRevoked is empty or contains only a return. Interface segregation for ConsumerRebalanceListener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00030] In the class NoOpConsumerRebalanceListener which implements the interface(s) ConsumerRebalanceListener, the method onPartitionsRevoked is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedConsumerRebalanceListener"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
