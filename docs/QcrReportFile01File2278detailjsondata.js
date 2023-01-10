console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java 71 rule violations " 
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
 , "c5" : "00089"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#89"
 , "c1" : "SustainedConnectionWorker"
 , "c2" : "SustainedConnectionWorker(String;SustainedConnectionSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#95"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "6"
 , "c4" : "27"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00401"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#401"
 , "c1" : "Optional<SustainedConnection>"
 , "c2" : "findConnectionToMaintain()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00505"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#505"
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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
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
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  'SustainedConnectionWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  '{}: Activating SustainedConnectionWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  'StatusUpdaterWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  'SustainedConnectionWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.start@POLYN217928 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method needsRefresh arguments long  milliseconds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ClaimableConnection.claim@POLYN221771 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ClaimableConnection.completeRefresh@POLYN221995 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.MetadataSustainedConnection@POLYN222387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.refresh@POLYN223059 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.refresh@POLYN223059 the MagicNumber/String  'Error while refreshing sustained AdminClient connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.closeQuietly@POLYN223908 the MagicNumber/String  'AdminClient' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MetadataSustainedConnection.closeQuietly@POLYN223908 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN224550 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN224550 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.ProducerSustainedConnection@POLYN224550 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN225748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN225748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.refresh@POLYN225748 the MagicNumber/String  'Error while refreshing sustained KafkaProducer connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN227749 the MagicNumber/String  'KafkaProducer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN227749 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN227749 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ProducerSustainedConnection.closeQuietly@POLYN227749 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN228396 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN228396 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN228396 the MagicNumber/String  'latest' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN228396 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.ConsumerSustainedConnection@POLYN228396 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN229662 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN229662 the MagicNumber/String  50 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.refresh@POLYN229662 the MagicNumber/String  'Error while refreshing sustained KafkaConsumer connection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN231404 the MagicNumber/String  'KafkaConsumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN231404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.ConsumerSustainedConnection.closeQuietly@POLYN231404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00387] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.MaintainLoop.run@POLYN231745 the MagicNumber/String  'Aborted thread while maintaining sustained connections' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#401"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00401] Lock statement on synchronized method findConnectionToMaintain"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00401] For method findConnectionToMaintain list of called methods Object monObjet|long SustainedConnectionWorker_SYSTEM_TIME_millisecondsN232585"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.StatusUpdater.run@POLYN233053 the MagicNumber/String  'Aborted test while running StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.StatusUpdater.run@POLYN233053 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#505"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00505] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00519"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00519] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00507"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  'SustainedConnectionWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  '{}: Deactivating SustainedConnectionWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00518"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00528"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00529"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.trogdor.workload.SustainedConnectionWorker.stop@POLYN236424 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/SustainedConnectionWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
