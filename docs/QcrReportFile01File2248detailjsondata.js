console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java 69 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.ConfigurableProducerWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ConfigurableProducerWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#78"
 , "c1" : "ConfigurableProducerWorker"
 , "c2" : "ConfigurableProducerWorker(String;ConfigurableProducerSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#84"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00312"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#312"
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
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.svg" }

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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "44"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  'ConfigurableProducerWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  '{}: Activating ConfigurableProducerWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  'ConfigurableProducerWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN191201 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  'Can only run against 1 topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN192121 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00138] For method onCompletion list of called methods Object monObjet|long Time_SYSTEM_millisecondsN194829"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194711 the MagicNumber/String  'SendRecordsCallback: error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195703 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195703 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195703 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00181] For method call list of called methods Object monObjet|long Time_SYSTEM_millisecondsN197139"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  'Exception on final future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  'SendRecords' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  'Sent {} total record(s) in {} ms.  status: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.sendMessage@POLYN198639 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00227] For method recordDuration arguments long  durationMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.run@POLYN200053 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00248] For method update list of called methods Object monObjet|org.apache.kafka.trogdor.workload.Histogram.Summary histogram_summarizeN200431"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN200348 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN200348 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN200348 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00312] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  'ConfigurableProducerWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  '{}: Deactivating ConfigurableProducerWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202859 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194711"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.sendMessage@POLYN198639"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194711 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194711 the MagicNumber/String 'SendRecordsCallback: error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.sendMessage@POLYN198639 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00193] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String 'Exception on final future' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String 'SendRecords' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00205] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00208] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String 'Sent {} total record-s- in {} ms.  status: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN197052 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
