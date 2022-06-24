console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java 144 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.RoundTripWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.RoundTripWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RoundTripWorker"
 , "c2" : "RoundTripWorker(String;RoundTripWorkloadSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop(Platform)"
 , "c3" : "2"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.svg" }

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
 , "c4" : "23"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "85"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00053] The class RoundTripWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  'RoundTripWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  '{}: Activating RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  'RoundTripWorker%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00112] The class Prepare contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  'Can't have targetMessagesPerSec &amp;lt;= 0.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  'You must specify at least one active topic.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN228186 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00150] The class ToSendTrackerResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00160] The class ToSendTracker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#169"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00169] Lock statement on synchronized method addFailed"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method addFailed arguments long  index"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#173"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00173] Lock statement on synchronized method frontier"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#177"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00177] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN231913 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN231913 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN231913 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN231913 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00190] The class ProducerRunnable contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  1024L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  'producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN232560 the MagicNumber/String  105000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  '{}: Starting RoundTripWorker#ProducerRunnable.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  '{}: Got exception when sending message {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  'ProducerRunnable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  '{}: ProducerRunnable is exiting.  messagesSent={}; uniqueMessagesSent={}; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN234228 the MagicNumber/String  'ackedSends={}/{}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00272] The class ToReceiveTracker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#277"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00277] Lock statement on synchronized method addPending"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#277"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00277] For method addPending arguments long  messageIndex"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#281"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00281] Lock statement on synchronized method removePending"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#281"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00281] For method removePending arguments long  messageIndex"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.removePending@POLYN237451 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.removePending@POLYN237451 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#290"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00290] Lock statement on synchronized method totalReceived"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#297"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00297] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00301] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN237816 the MagicNumber/String  '{}: consumer waiting for {} message(s), starting with: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN237816 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00310] The class ConsumerRunnable contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN238816 the MagicNumber/String  'consumer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN238816 the MagicNumber/String  'round-trip-consumer-group-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN238816 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN238816 the MagicNumber/String  105000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN238816 the MagicNumber/String  100000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00339] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00340] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00341] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00369] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00371] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00341] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: Starting RoundTripWorker#ConsumerRunnable.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  50 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: Consumer received the full count of {} unique messages.  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  'Waiting for all {} sends to be acked...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: all sends have been acked.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: Consumer got WakeupException' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: Consumer got TimeoutException' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  'ConsumerRunnable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  '{}: ConsumerRunnable is exiting.  Invoked poll {} time(s).  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN240087 the MagicNumber/String  'messagesReceived = {}; uniqueMessagesReceived = {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00385] The class StatusUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.trogdor.workload.RoundTripWorker.StatusUpdater.run@POLYN243320 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00403] The class StatusData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00426] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  'RoundTripWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  '{}: Deactivating RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  'producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String  '{}: Deactivated RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String 'RoundTripWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String '{}: Activating RoundTripWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String 'RoundTripWorker%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN227065 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00428] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String 'RoundTripWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00430] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String '{}: Deactivating RoundTripWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00433] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00434] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String 'consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00435] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String 'producer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00438] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#439"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00439] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00441] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN244630 the MagicNumber/String '{}: Deactivated RoundTripWorker.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
