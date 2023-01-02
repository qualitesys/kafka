console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java 13 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.task.NoOpTaskWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.task.NoOpTaskWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#33"
 , "c1" : "NoOpTaskWorker"
 , "c2" : "NoOpTaskWorker(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#38"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#46"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  errorFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN145371 the MagicNumber/String  '{}: Activating NoOpTask.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN145371 the MagicNumber/String  'active' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN145811 the MagicNumber/String  '{}: Deactivating NoOpTask.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN145811 the MagicNumber/String  'done' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN145371"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN145811"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN145371 the MagicNumber/String '{}: Activating NoOpTask.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.trogdor.task.NoOpTaskWorker.start@POLYN145371 the MagicNumber/String 'active' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN145811 the MagicNumber/String '{}: Deactivating NoOpTask.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.trogdor.task.NoOpTaskWorker.stop@POLYN145811 the MagicNumber/String 'done' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/task/NoOpTaskWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
