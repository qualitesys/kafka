console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java 13 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskSpec"
 , "c2" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NetworkPartitionFaultSpec"
 , "c2" : "NetworkPartitionFaultSpec(long;long;List<List<String>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<List<String>>"
 , "c2" : "partitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskController"
 , "c2" : "newController(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "newTaskWorker(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Set<String>>"
 , "c2" : "partitionSets()"
 , "c3" : "4"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.NetworkPartitionFaultSpec@POLYN167666 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method newController arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method newTaskWorker arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.partitionSets@POLYN168788 the MagicNumber/String  'Node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.partitionSets@POLYN168788 the MagicNumber/String  ' appears in more than one partition.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.NetworkPartitionFaultSpec@POLYN167666"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.newController@POLYN168394"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.newTaskWorker@POLYN168566"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.partitionSets@POLYN168788"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.NetworkPartitionFaultSpec@POLYN167666 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.partitionSets@POLYN168788 the MagicNumber/String 'Node ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/NetworkPartitionFaultSpec.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.trogdor.fault.NetworkPartitionFaultSpec.partitionSets@POLYN168788 the MagicNumber/String ' appears in more than one partition.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
