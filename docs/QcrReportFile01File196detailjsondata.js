console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java 10 rule violations " 
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
 , "c5" : "00021"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#21"
 , "c1" : "Map<String,List<TopicPartition>>"
 , "c2" : "assign(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#42"
 , "c1" : "List<TopicPartition>"
 , "c2" : "allPartitionsSorted(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#58"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00021] For method assign list of called methods Object monObjet|java.lang.String partition_topicN187867"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00034] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method allPartitionsSorted arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument partitionsPerTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.consumer.RoundRobinAssignor.allPartitionsSorted@POLYN188344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.RoundRobinAssignor.assign@POLYN186654"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RoundRobinAssignor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
