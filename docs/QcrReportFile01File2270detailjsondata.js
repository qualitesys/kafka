console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java 97 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#75"
 , "c1" : "ProduceBenchWorker"
 , "c2" : "ProduceBenchWorker(String;ProduceBenchSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#81"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00409"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#409"
 , "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "2"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.svg" }

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
 , "c4" : "33"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "46"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
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
 , "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  'ProducerBenchWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  '{}: Activating ProduceBenchWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  'ProduceBenchWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00104] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  'You must specify at least one active topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN204790 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecordsCallback.onCompletion@POLYN207677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecordsCallback.onCompletion@POLYN207677 the MagicNumber/String  'SendRecordsCallback: error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#164"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00164] Lock statement on synchronized method delay"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method delay arguments long  amount"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument activePartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String  'produce-bench-transaction-id-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  'Exception on final future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  'SendRecords' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  'Sent {} total record(s) in {} ms.  status: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String  'Beginning transaction.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String  'Committing transaction.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String  'Aborting transaction.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#313"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00313] For method recordDuration arguments long  durationMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.run@POLYN216822 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN217117 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN217117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN217117 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#409"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00409] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  'ProduceBenchWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  '{}: Deactivating ProduceBenchWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.sendMessage@POLYN215191"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String 'Exception on final future' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String 'SendRecords' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00261] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00264] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String 'Sent {} total record-s- in {} ms.  status: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00268] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String 'Beginning transaction.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String 'Committing transaction.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00285] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String 'Aborting transaction.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00289] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN214236 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String 10000 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String 30 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String 30 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN209860 the MagicNumber/String 'produce-bench-transaction-id-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String 'ProducerBenchWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String '{}: Activating ProduceBenchWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String 'ProduceBenchWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN203870 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00411] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String 'ProduceBenchWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00413] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String '{}: Deactivating ProduceBenchWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00414] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00418] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00419] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN219949 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
