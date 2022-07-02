console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java 13 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskSpec"
 , "c2" : "org.apache.kafka.trogdor.workload.ConfigurableProducerSpec"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ConfigurableProducerSpec" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigurableProducerSpec"
 , "c2" : "ConfigurableProducerSpec(long;long;String;String;Optional<FlushGenerator>;ThroughputGenerator;PayloadGenerator;PayloadGenerator;Map<String,String>;Map<String,String>;Map<String,String>;TopicsSpec;int)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "producerNode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "bootstrapServers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<FlushGenerator>"
 , "c2" : "flushGenerator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PayloadGenerator"
 , "c2" : "keyGenerator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PayloadGenerator"
 , "c2" : "valueGenerator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ThroughputGenerator"
 , "c2" : "throughputGenerator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "producerConf()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "commonClientConf()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "adminClientConf()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicsSpec"
 , "c2" : "activeTopic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "activePartition()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00122] The argument activeTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method newController arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method newTaskWorker arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.newTaskWorker@POLYN197851"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerSpec.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerSpec.ConfigurableProducerSpec@POLYN194168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
