console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java 75 rule violations " 
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
 , "c5" : "00056"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#56"
 , "c1" : "ConfigurableProducerWorker"
 , "c2" : "ConfigurableProducerWorker(String;ConfigurableProducerSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#62"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00287"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#287"
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
 , "c4" : "16"
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00041] The class ConfigurableProducerWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  'ConfigurableProducerWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  '{}: Activating ConfigurableProducerWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  'ConfigurableProducerWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00077] The class Prepare contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  'Can only run against 1 topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.Prepare.run@POLYN191539 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00106] The class SendRecordsCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecordsCallback.onCompletion@POLYN194129 the MagicNumber/String  'SendRecordsCallback: error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00126] The class SendRecords contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195121 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195121 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.SendRecords@POLYN195121 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  'Exception on final future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  'SendRecords' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  'Sent {} total record(s) in {} ms.  status: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.call@POLYN196470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.SendRecords.sendMessage@POLYN198057 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method recordDuration arguments long  durationMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00210] The class StatusUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.run@POLYN199471 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN199766 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN199766 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.StatusUpdater.update@POLYN199766 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00237] The class StatusData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  'ConfigurableProducerWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  '{}: Deactivating ConfigurableProducerWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String 'ConfigurableProducerWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String '{}: Activating ConfigurableProducerWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String 'ConfigurableProducerWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.start@POLYN190619 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00289] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String 'ConfigurableProducerWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String '{}: Deactivating ConfigurableProducerWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00292] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.trogdor.workload.ConfigurableProducerWorker.stop@POLYN202277 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ConfigurableProducerWorker.java.svg" }

};
console.log('leListeStr 99 main end');
