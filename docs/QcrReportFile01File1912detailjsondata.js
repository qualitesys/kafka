console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java 26 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.metrics.ProcessorNodeMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.metrics.ProcessorNodeMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProcessorNodeMetrics"
 , "c2" : "ProcessorNodeMetrics()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "suppressionEmitSensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "skippedIdempotentUpdatesSensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "processAtSourceSensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "forwardSensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "e2ELatencySensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "emitFinalLatencySensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "emittedRecordsSensor(String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "throughputParentSensor(String;String;String;String;String;RecordingLevel;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "throughputSensor(String;String;String;String;String;String;RecordingLevel;StreamsMetricsImpl;Sensor...)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.svg" }

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
 , "c4" : "6"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class ProcessorNodeMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method suppressionEmitSensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method skippedIdempotentUpdatesSensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method processAtSourceSensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00098] For method processAtSourceSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_taskLevelSensorN198461"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method forwardSensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00124] For method forwardSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor throughputParentSensorN199283"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method e2ELatencySensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00150] For method e2ELatencySensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_nodeLevelSensorN200035|java.util.Map&lt;String,String&gt; streamsMetrics_nodeLevelTagMapN200267"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.processor.internals.metrics.ProcessorNodeMetrics.e2ELatencySensor@POLYN199740 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method emitFinalLatencySensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00169] For method emitFinalLatencySensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_nodeLevelSensorN200911|java.util.Map&lt;String,String&gt; streamsMetrics_nodeLevelTagMapN201143"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.processor.internals.metrics.ProcessorNodeMetrics.emitFinalLatencySensor@POLYN200616 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method emittedRecordsSensor arguments String  threadId|String  taskId|String  processorNodeId|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00187] For method emittedRecordsSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_nodeLevelSensorN201765|java.util.Map&lt;String,String&gt; streamsMetrics_nodeLevelTagMapN201997"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.metrics.ProcessorNodeMetrics.emittedRecordsSensor@POLYN201470 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method throughputParentSensor arguments String  threadId|String  taskId|String  metricNamePrefix|String  descriptionOfRate|String  descriptionOfCount|RecordingLevel  recordingLevel|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00205] For method throughputParentSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_taskLevelSensorN202597|java.util.Map&lt;String,String&gt; streamsMetrics_nodeLevelTagMapN202799"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00211] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method throughputSensor arguments String  threadId|String  taskId|String  processorNodeId|String  metricNamePrefix|String  descriptionOfRate|String  descriptionOfCount|RecordingLevel  recordingLevel|StreamsMetricsImpl  streamsMetrics|Sensor  ...parentSensors"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00225] For method throughputSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_nodeLevelSensorN203458|java.util.Map&lt;String,String&gt; streamsMetrics_nodeLevelTagMapN203704"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/ProcessorNodeMetrics.java.html#232"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00232] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
