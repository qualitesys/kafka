console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java 148 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RocksDBMetricsRecorder"
 , "c2" : "RocksDBMetricsRecorder(String;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "storeName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskId"
 , "c2" : "taskId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StreamsMetricsImpl;TaskId)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addValueProviders(String;RocksDB;Cache;Statistics)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyDbAndCacheAndStatistics(String;RocksDB;Cache;Statistics)"
 , "c3" : "6"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyConsistencyOfValueProvidersAcrossSegments(String;Object;Object;String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initSensors(StreamsMetricsImpl;RocksDBMetricContext)"
 , "c3" : "1"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initGauges(StreamsMetricsImpl;RocksDBMetricContext)"
 , "c3" : "1"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "Gauge<BigInteger>"
 , "c2" : "gaugeToComputeSumOfProperties(String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Gauge<BigInteger>"
 , "c2" : "gaugeToComputeBlockCacheMetrics(String)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "longToBytes(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeValueProviders(String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "record(long)"
 , "c3" : "4"
 , "c4" : "72"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "computeHitRatio(long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "computeAvg(long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.svg" }

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
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "98"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
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
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class RocksDBMetricsRecorder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00053] The class DbAndCacheAndStatistics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.DbAndCacheAndStatistics.DbAndCacheAndStatistics@POLYN236709 the MagicNumber/String  'database instance must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.DbAndCacheAndStatistics.DbAndCacheAndStatistics@POLYN236709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.DbAndCacheAndStatistics.maybeCloseStatistics@POLYN237273 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.RocksDBMetricsRecorder@POLYN238660 the MagicNumber/String  '[RocksDB Metrics Recorder for %s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method init arguments StreamsMetricsImpl  streamsMetrics|TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'Streams metrics must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'task ID must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'Metrics recorder is re-initialised with different task: previous task is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  ' whereas current task is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  '. This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'Metrics recorder is re-initialised with different Streams metrics. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.init@POLYN239365 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method addValueProviders arguments String  segmentName|RocksDB  db|Cache  cache|Statistics  statistics"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  'Adding metrics recorder of task {} to metrics recording trigger' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  'Value providers for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  ' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  ' has been already added. This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.addValueProviders@POLYN240735 the MagicNumber/String  'Adding value providers for store {} of task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method verifyDbAndCacheAndStatistics arguments String  segmentName|RocksDB  db|Cache  cache|Statistics  statistics"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument cache is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'statistics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'cache' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'DB instance for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  ' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  ' was already added for another segment as a value provider. This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'Caches for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  ' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  ' are either not all distinct or do not all refer to the same cache. This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyDbAndCacheAndStatistics@POLYN241839 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method verifyConsistencyOfValueProvidersAcrossSegments arguments String  segmentName|Object  newValueProvider|Object  oldValueProvider|String  valueProviderName"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument valueProviderName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' for segment ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' is' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' not ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  'null although the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' of another segment in this metrics recorder is' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  ' not ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  'null. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  'This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.verifyConsistencyOfValueProvidersAcrossSegments@POLYN243215 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method initSensors arguments StreamsMetricsImpl  streamsMetrics|RocksDBMetricContext  metricContext"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00202] For method initSensors list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_bytesWrittenToDatabaseSensorN244760|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_bytesReadFromDatabaseSensorN244875|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_memtableBytesFlushedSensorN244990|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_memtableHitRatioSensorN245105|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_memtableAvgFlushTimeSensorN245220|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_memtableMinFlushTimeSensorN245335|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_memtableMaxFlushTimeSensorN245450|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_writeStallDurationSensorN245565|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_blockCacheDataHitRatioSensorN245680|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_blockCacheIndexHitRatioSensorN245795|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_blockCacheFilterHitRatioSensorN245910|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_bytesWrittenDuringCompactionSensorN246025|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_bytesReadDuringCompactionSensorN246140|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_compactionTimeAvgSensorN246255|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_compactionTimeMinSensorN246370|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_compactionTimeMaxSensorN246485|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_numberOfOpenFilesSensorN246600|org.apache.kafka.common.metrics.Sensor RocksDBMetrics_numberOfFileErrorsSensorN246715"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method initGauges arguments StreamsMetricsImpl  streamsMetrics|RocksDBMetricContext  metricContext"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#338"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00338] For method gaugeToComputeSumOfProperties arguments String  propertyName"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00343] Assigning instead of comparing on result=result.add(new BigInteger(1,longToBytes(valueProvider.db.getAggregatedLongProperty(ROCKSDB_PROPERTIES_PREFIX+propertyName)))) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeSumOfProperties@POLYN250136 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeSumOfProperties@POLYN250136 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeSumOfProperties@POLYN250136 the MagicNumber/String  'Error recording RocksDB metric ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00356] For method gaugeToComputeBlockCacheMetrics arguments String  propertyName"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00362] Assigning instead of comparing on result=new BigInteger(1,longToBytes(valueProvider.db.getAggregatedLongProperty(ROCKSDB_PROPERTIES_PREFIX+propertyName))) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00369] Assigning instead of comparing on result=result.add(new BigInteger(1,longToBytes(valueProvider.db.getAggregatedLongProperty(ROCKSDB_PROPERTIES_PREFIX+propertyName)))) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeBlockCacheMetrics@POLYN250963 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeBlockCacheMetrics@POLYN250963 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeBlockCacheMetrics@POLYN250963 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.gaugeToComputeBlockCacheMetrics@POLYN250963 the MagicNumber/String  'Error recording RocksDB metric ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#383"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00383] For method longToBytes arguments long  data"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.longToBytes@POLYN252081 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#389"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00389] For method removeValueProviders arguments String  segmentName"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  'Removing value providers for store {} of task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  'No value providers for store \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  '\' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  ' could be found. This is a bug in Kafka Streams. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  'Please open a bug report under https://issues.apache.org/jira/projects/KAFKA/issues' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.removeValueProviders@POLYN252406 the MagicNumber/String  'Removing metrics recorder for store {} of task {} from metrics recording trigger' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#408"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00408] For method record arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00457] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00462] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  'Recording metrics for store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#490"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00490] For method computeHitRatio arguments long  hits|long  misses"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.computeHitRatio@POLYN260074 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.computeHitRatio@POLYN260074 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#497"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00497] For method computeAvg arguments long  sum|long  count"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.computeAvg@POLYN260409 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.computeAvg@POLYN260409 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00409] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 'Recording metrics for store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00411] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00412] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#413"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00413] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00414] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00415] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00418] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00419] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00420] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00421] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00422] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00423] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00425] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00426] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00429] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00430] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00433] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String 0.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00434] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecorder.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecorder.record@POLYN253283 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
