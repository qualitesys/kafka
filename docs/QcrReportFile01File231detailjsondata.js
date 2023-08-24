console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Partitioner"
 , "c2" : "org.apache.kafka.clients.producer.RoundRobinPartitioner"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.RoundRobinPartitioner" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#40"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#53"
 , "c1" : "int"
 , "c2" : "partition(String;Object;byte[];Object;byte[];Cluster)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#67"
 , "c1" : "int"
 , "c2" : "nextValue(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#72"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.svg" }

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
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
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
 , "c4" : "3"
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
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method partition arguments String  topic|Object  key|byte[]  keyBytes|Object  value|byte[]  valueBytes|Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00053] For method partition list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_partitionsForTopicN161704|int partitions_sizeN161800|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_availablePartitionsForTopicN161986|int Utils_toPositiveN162160"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method nextValue arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.clients.producer.RoundRobinPartitioner.nextValue@POLYN162482 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00040] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00040] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00072] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00072] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/RoundRobinPartitioner.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
