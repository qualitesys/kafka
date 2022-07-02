console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java 20 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.clients.producer.internals.KafkaProducerMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.KafkaProducerMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaProducerMetrics"
 , "c2" : "KafkaProducerMetrics(Metrics)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordFlush(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordInit(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordBeginTxn(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordSendOffsets(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordCommitTxn(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordAbortTxn(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordMetadataWait(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "newLatencySensor(String;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "MetricName"
 , "c2" : "metricName(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeMetric(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class KafkaProducerMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in flush in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in initTransactions in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in beginTransaction in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in sendOffsetsToTransaction in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in commitTransaction in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent in abortTransaction in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.producer.internals.KafkaProducerMetrics.KafkaProducerMetrics@POLYN173950 the MagicNumber/String  'Total time producer has spent waiting on topic metadata in nanoseconds.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method recordFlush arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method recordInit arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method recordBeginTxn arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method recordSendOffsets arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method recordCommitTxn arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method recordAbortTxn arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method recordMetadataWait arguments long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method newLatencySensor arguments String  name|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00106] For method newLatencySensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor metrics_sensorN176508"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method metricName arguments String  name|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/KafkaProducerMetrics.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method removeMetric arguments String  name"
}} 
]
};
console.log('leListeStr 99 main end');
