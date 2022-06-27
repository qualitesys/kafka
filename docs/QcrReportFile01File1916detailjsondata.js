console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java 7 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.metrics.TopicMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.metrics.TopicMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "consumedSensor(String;String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Sensor"
 , "c2" : "producedSensor(String;String;String;String;StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.svg" }

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
 , "c4" : "2"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class TopicMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method consumedSensor arguments String  threadId|String  taskId|String  processorNodeId|String  topic|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00029] For method consumedSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_topicLevelSensorN167062"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method producedSensor arguments String  threadId|String  taskId|String  processorNodeId|String  topic|StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00053] For method producedSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_topicLevelSensorN167807"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/metrics/TopicMetrics.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
