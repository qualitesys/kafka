console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java 6 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConsumerRebalanceListener"
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
 , "c2" : "onPartitionsAssigned(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
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
 , "c3" : "QC-JAV000005[00027] Void method onPartitionsAssigned is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00027] Void method onPartitionsAssigned is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00030] Void method onPartitionsRevoked is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00030] Void method onPartitionsRevoked is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/NoOpConsumerRebalanceListener.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
