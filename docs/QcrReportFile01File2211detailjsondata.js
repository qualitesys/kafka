console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java 82 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TaskWorker"
 , "c2" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProduceBenchWorker"
 , "c2" : "ProduceBenchWorker(String;ProduceBenchSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Platform;WorkerStatusTracker;KafkaFutureImpl<String>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "16"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "46"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00043] The class ProduceBenchWorker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method start arguments Platform  platform|WorkerStatusTracker  status|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  'ProducerBenchWorker is already running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  '{}: Activating ProduceBenchWorker with {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  'ProduceBenchWorkerThread%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00081] The class Prepare contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  'You must specify at least one active topic.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  'Creating ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  'Created ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  ' topic(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.Prepare.run@POLYN224168 the MagicNumber/String  'Prepare' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00116] The class SendRecordsCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecordsCallback.onCompletion@POLYN227055 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecordsCallback.onCompletion@POLYN227055 the MagicNumber/String  'SendRecordsCallback: error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#146"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00146] Lock statement on synchronized method delay"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method delay arguments long  amount"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00155] The class SendRecords contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument activePartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN229238 the MagicNumber/String  10000 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN229238 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN229238 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.SendRecords@POLYN229238 the MagicNumber/String  'produce-bench-transaction-id-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  'Exception on final future' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  'SendRecords' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  'Sent {} total record(s) in {} ms.  status: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN231540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN233614 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN233614 the MagicNumber/String  'Beginning transaction.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN233614 the MagicNumber/String  'Committing transaction.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN233614 the MagicNumber/String  'Aborting transaction.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.takeTransactionAction@POLYN233614 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00295] For method recordDuration arguments long  durationMs"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00300] The class StatusUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.run@POLYN236200 the MagicNumber/String  'StatusUpdater' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN236495 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN236495 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.StatusUpdater.update@POLYN236495 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00330] The class StatusData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#388"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00388] For method stop arguments Platform  platform"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  'ProduceBenchWorker is not running.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  '{}: Deactivating ProduceBenchWorker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String 'ProducerBenchWorker is already running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String '{}: Activating ProduceBenchWorker with {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String 'ProduceBenchWorkerThread%d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.start@POLYN223248 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#390"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00390] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String 'ProduceBenchWorker is not running.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00392] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String '{}: Deactivating ProduceBenchWorker.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#396"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00396] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00397] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/ProduceBenchWorker.java.html#398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00398] In the recursive method org.apache.kafka.trogdor.workload.ProduceBenchWorker.stop@POLYN239327 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
