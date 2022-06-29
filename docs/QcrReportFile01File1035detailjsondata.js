console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java 10 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MirrorConnectorConfig"
 , "c2" : "org.apache.kafka.connect.mirror.MirrorTaskConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.MirrorTaskConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MirrorTaskConfig"
 , "c2" : "MirrorTaskConfig(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "taskTopicPartitions()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "taskConsumerGroups()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "MirrorMetrics"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00023] For method taskTopicPartitions list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; getListN166626"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.connect.mirror.MirrorTaskConfig.taskTopicPartitions@POLYN166530 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00033] For method taskConsumerGroups list of called methods Object monObjet|java.util.Set&lt;String&gt; getListN167136"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.mirror.MirrorTaskConfig.taskConsumerGroups@POLYN167040 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorTaskConfig.MirrorTaskConfig@POLYN166323"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorTaskConfig.metrics@POLYN167447"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorTaskConfig.taskConsumerGroups@POLYN167040"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorTaskConfig.taskTopicPartitions@POLYN166530"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.connect.mirror.MirrorTaskConfig.taskConsumerGroups@POLYN167040 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorTaskConfig.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.connect.mirror.MirrorTaskConfig.taskTopicPartitions@POLYN166530 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
