console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java 111 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.SustainedConnectionWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.SustainedConnectionWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#74"
 , "c1" : "SustainedConnectionWorker"
 , "c2" : "SustainedConnectionWorker(String;SustainedConnectionSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#80"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "6"
 , "c4" : "27"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#386"
 , "c1" : "Optional<SustainedConnection>"
 , "c2" : "findConnectionToMaintain()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00490"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#490"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "3"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "33"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "64"
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
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00046] The class SustainedConnectionWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  'SustainedConnectionWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  '{}: Activating SustainedConnectionWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  'StatusUpdaterWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  'SustainedConnectionWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00130] The class ClaimableConnection contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method needsRefresh arguments long  milliseconds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ClaimableConnection.claim@POLYN220401 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ClaimableConnection.completeRefresh@POLYN220625 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.MetadataSustainedConnection@POLYN221017 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.refresh@POLYN221689 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.refresh@POLYN221689 the MagicNumber/String  'Error while refreshing sustained AdminClient connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.closeQuietly@POLYN222538 the MagicNumber/String  'AdminClient' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.closeQuietly@POLYN222538 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN223180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN223180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN223180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN224378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN224378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN224378 the MagicNumber/String  'Error while refreshing sustained KafkaProducer connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN226379 the MagicNumber/String  'KafkaProducer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN226379 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN226379 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN226379 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN227026 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN227026 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN227026 the MagicNumber/String  'latest' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN227026 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN227026 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN228292 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN228292 the MagicNumber/String  50 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN228292 the MagicNumber/String  'Error while refreshing sustained KafkaConsumer connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN230034 the MagicNumber/String  'KafkaConsumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN230034 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN230034 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00367] The class MaintainLoop contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00372] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MaintainLoop.run@POLYN230375 the MagicNumber/String  'Aborted thread while maintaining sustained connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#386"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00386] Lock statement on synchronized method findConnectionToMaintain"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00386] For method findConnectionToMaintain list of called methods Object monObjet|long SustainedConnectionWorker_SYSTEM_TIME_millisecondsN231215"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00397] The class StatusUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.StatusUpdater.run@POLYN231683 the MagicNumber/String  'Aborted test while running StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.StatusUpdater.run@POLYN231683 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00419] The class StatusData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00490"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#490"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00490] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00504"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#504"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00504] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  'SustainedConnectionWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  '{}: Deactivating SustainedConnectionWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00514"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 'SustainedConnectionWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String '{}: Activating SustainedConnectionWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 'StatusUpdaterWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 'SustainedConnectionWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN216558 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#491"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00491] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#492"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00492] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String 'SustainedConnectionWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00494] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String '{}: Deactivating SustainedConnectionWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#500"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00500] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00502] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00503] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00506] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#512"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00512] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#513"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00513] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00514"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN235054 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
