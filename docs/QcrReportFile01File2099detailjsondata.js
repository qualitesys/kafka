console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Runnable"
 , "c2" : "org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RocksDBMetricsRecordingTrigger"
 , "c2" : "RocksDBMetricsRecordingTrigger(Time)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addMetricsRecorder(RocksDBMetricsRecorder)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeMetricsRecorder(RocksDBMetricsRecorder)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "metricsRecorderName(RocksDBMetricsRecorder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class RocksDBMetricsRecordingTrigger contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method addMetricsRecorder arguments RocksDBMetricsRecorder  metricsRecorder"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument metricsRecorder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String  'RocksDB metrics recorder for store \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String  '\' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String  ' has already been added. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String  'This is a bug in Kafka Streams.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method removeMetricsRecorder arguments RocksDBMetricsRecorder  metricsRecorder"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument metricsRecorder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  'No RocksDB metrics recorder for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  '\' of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  ' could be found. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String  'This is a bug in Kafka Streams.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method metricsRecorderName arguments RocksDBMetricsRecorder  metricsRecorder"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument metricsRecorder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.metricsRecorderName@POLYN167593 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.run@POLYN167816"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String 'RocksDB metrics recorder for store \'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#22"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00022] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String ' has already been added. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#22"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00022] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String '\' of task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00023] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.addMetricsRecorder@POLYN166470 the MagicNumber/String 'This is a bug in Kafka Streams.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00032] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String 'No RocksDB metrics recorder for store ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String ' could be found. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String '\' of task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String '\'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/metrics/RocksDBMetricsRecordingTrigger.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.streams.state.internals.metrics.RocksDBMetricsRecordingTrigger.removeMetricsRecorder@POLYN167060 the MagicNumber/String 'This is a bug in Kafka Streams.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
