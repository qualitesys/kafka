console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java 174 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.RoundTripWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.RoundTripWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#105"
 , "c1" : "RoundTripWorker"
 , "c2" : "RoundTripWorker(String;RoundTripWorkloadSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#111"
 , "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00441"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#441"
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "58"
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
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "85"
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
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  'RoundTripWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  '{}: Activating RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  'RoundTripWorker%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  'Can't have targetMessagesPerSec &amp;lt;= 0.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  'You must specify at least one active topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.trogdor.workload.RoundTripWorker.Prepare.run@POLYN214356 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#184"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00184] Lock statement on synchronized method addFailed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method addFailed arguments long  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#188"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00188] Lock statement on synchronized method frontier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#192"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00192] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN218083 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN218083 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN218083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToSendTracker.next@POLYN218083 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  1024L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  'producer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  'all' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.ProducerRunnable@POLYN218730 the MagicNumber/String  105000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00250] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  '{}: Starting RoundTripWorker#ProducerRunnable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  '{}: Got exception when sending message {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  'ProducerRunnable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  '{}: ProducerRunnable is exiting.  messagesSent={}; uniqueMessagesSent={}; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String  'ackedSends={}/{}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#292"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00292] Lock statement on synchronized method addPending"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#292"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00292] For method addPending arguments long  messageIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#296"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00296] Lock statement on synchronized method removePending"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method removePending arguments long  messageIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.removePending@POLYN223631 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.removePending@POLYN223631 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#305"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00305] Lock statement on synchronized method totalReceived"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#312"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00312] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN223996 the MagicNumber/String  '{}: consumer waiting for {} message(s), starting with: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN223996 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String  'consumer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String  'round-trip-consumer-group-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String  105000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String  100000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00354] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00355] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00356] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00384] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00386] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00356] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: Starting RoundTripWorker#ConsumerRunnable.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  50 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: Consumer received the full count of {} unique messages.  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  'Waiting for all {} sends to be acked...' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: all sends have been acked.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: Consumer got WakeupException' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: Consumer got TimeoutException' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  'ConsumerRunnable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  '{}: ConsumerRunnable is exiting.  Invoked poll {} time(s).  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String  'messagesReceived = {}; uniqueMessagesReceived = {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.trogdor.workload.RoundTripWorker.StatusUpdater.run@POLYN229520 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00441] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  'RoundTripWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  '{}: Deactivating RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  'producer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00455"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String  '{}: Deactivated RoundTripWorker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN223996"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String 'consumer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00332] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String 'round-trip-consumer-group-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String 'earliest' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String 105000 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00335] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.ConsumerRunnable@POLYN225016 the MagicNumber/String 100000 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00345] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00346] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00348] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: Starting RoundTripWorker#ConsumerRunnable.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00351] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00354] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 50 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#364"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00364] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: Consumer received the full count of {} unique messages.  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 'Waiting for all {} sends to be acked...' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#372"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00372] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: all sends have been acked.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00374] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00385] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: Consumer got WakeupException' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00387] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: Consumer got TimeoutException' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00391] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 'ConsumerRunnable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String '{}: ConsumerRunnable is exiting.  Invoked poll {} time-s-.  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ConsumerRunnable.run@POLYN226287 the MagicNumber/String 'messagesReceived = {}; uniqueMessagesReceived = {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String '{}: Starting RoundTripWorker#ProducerRunnable.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00260] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String '{}: Got exception when sending message {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 'ProducerRunnable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00277] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String '{}: ProducerRunnable is exiting.  messagesSent={}; uniqueMessagesSent={}; ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ProducerRunnable.run@POLYN220398 the MagicNumber/String 'ackedSends={}/{}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN223996 the MagicNumber/String '{}: consumer waiting for {} message-s-, starting with: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.ToReceiveTracker.log@POLYN223996 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String 'RoundTripWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String '{}: Activating RoundTripWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String 'RoundTripWorker%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.start@POLYN213235 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00442] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00442] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#443"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00443] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String 'RoundTripWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00445] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String '{}: Deactivating RoundTripWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00446] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String 'consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String 'producer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00451] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00452] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00453] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00455"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#455"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00455] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.trogdor.workload.RoundTripWorker.stop@POLYN230830 the MagicNumber/String '{}: Deactivated RoundTripWorker.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/RoundTripWorker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
