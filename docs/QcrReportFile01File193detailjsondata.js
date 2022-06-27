console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractPartitionAssignor"
 , "c2" : "org.apache.kafka.clients.consumer.RangeAssignor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.RangeAssignor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<MemberInfo>>"
 , "c2" : "consumersPerTopic(Map<String,Subscription>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<TopicPartition>>"
 , "c2" : "assign(Map<String,Integer>;Map<String,Subscription>)"
 , "c3" : "5"
 , "c4" : "17"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method consumersPerTopic arguments Map&lt;String ,Subscription &gt;  consumerMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument consumerMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00025] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00026] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00027] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method assign arguments Map&lt;String ,Integer &gt;  partitionsPerTopic|Map&lt;String ,Subscription &gt;  subscriptions"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00035] For method assign list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.TopicPartition&gt; AbstractPartitionAssignor_partitionsN188554"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument partitionsPerTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument subscriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.consumer.RangeAssignor.assign@POLYN187088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.clients.consumer.RangeAssignor.assign@POLYN187088 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.consumer.RangeAssignor.assign@POLYN187088 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.consumer.RangeAssignor.assign@POLYN187088 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/RangeAssignor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.consumer.RangeAssignor.assign@POLYN187088 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
