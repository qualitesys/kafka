console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractPartitionAssignor"
 , "c2" : "org.apache.kafka.clients.consumer.RoundRobinAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.RoundRobinAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#104"
 , "c1" : "Map<String,List<TopicPartition>>"
 , "c2" : "assign(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#125"
 , "c1" : "List<TopicPartition>"
 , "c2" : "allPartitionsSorted(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#141"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00104] For method assign list of called methods Object monObjet|java.lang.String partition_topicN188797"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method allPartitionsSorted arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00125] For method allPartitionsSorted list of called methods Object monObjet|V partitionsPerTopic_getN189924"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument partitionsPerTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.consumer.RoundRobinAssignor.allPartitionsSorted@POLYN189274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.RoundRobinAssignor.assign@POLYN187584"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
