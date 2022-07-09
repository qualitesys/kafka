console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html" 
 , "texte" : "File streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java 205 rule violations " 
 , "fic2"  : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Closeable"
 , "c2" : "org.apache.kafka.streams.TopologyTestDriver"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TopologyTestDriver" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TopologyTestDriver"
 , "c2" : "TopologyTestDriver(Topology)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyTestDriver"
 , "c2" : "TopologyTestDriver(Topology;Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyTestDriver"
 , "c2" : "TopologyTestDriver(Topology;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyTestDriver"
 , "c2" : "TopologyTestDriver(Topology;Properties;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyTestDriver"
 , "c2" : "TopologyTestDriver(InternalTopologyBuilder;Properties;long)"
 , "c3" : "1"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "logIfTaskIdleEnabled(StreamsConfig)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "StreamsMetricsImpl"
 , "c2" : "setupMetrics(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setupTopology(InternalTopologyBuilder;StreamsConfig)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setupGlobalTask(Time;StreamsConfig;StreamsMetricsImpl;ThreadCache)"
 , "c3" : "4"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setupTask(StreamsConfig;StreamsMetricsImpl;ThreadCache;TaskConfig)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,?extendsMetric>"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pipeRecord(String;long;byte[];byte[];Headers)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enqueueTaskRecord(String;TopicPartition;long;byte[];byte[];Headers)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeAllProcessableWork()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commit(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processGlobalRecord(TopicPartition;long;byte[];byte[];Headers)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateSourceTopicNameRegexPattern(String)"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartition"
 , "c2" : "getInputTopicOrPatternPartition(String)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "captureOutputsAndReEnqueueInternalResults()"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "advanceWallClockTime(Duration)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Queue<ProducerRecord<byte[],byte[]>>"
 , "c2" : "getRecordsQueue(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "producedTopicNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerRecord<byte[],byte[]>"
 , "c2" : "readRecord(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getQueueSize(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,StateStore>"
 , "c2" : "getAllStateStores()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "getStateStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "getStateStore(String;boolean)"
 , "c3" : "7"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfBuiltInStore(StateStore)"
 , "c3" : "6"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "5"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.png" 

 , "ligneplantuml" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.svg" }

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
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "118"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00109] The class TopologyTestDriver contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN400159 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#168"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00168] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN400838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  'dummy-bootstrap-host:0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  'dummy-topology-test-driver-app-id-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  'topology-test-driver ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN401417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method logIfTaskIdleEnabled arguments StreamsConfig  streamsConfig"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00242] For method logIfTaskIdleEnabled list of called methods Object monObjet|Long streamsConfig_getLongN405033"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#242"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00242] The argument streamsConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  'Detected {} config in use with TopologyTestDriver (set to {}ms).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  ' This means you might need to use TopologyTestDriver#advanceWallClockTime()' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  ' or enqueue records on all partitions to allow Steams to make progress.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  ' TopologyTestDriver will log a message each time it cannot process enqueued' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.TopologyTestDriver.logIfTaskIdleEnabled@POLYN404932 the MagicNumber/String  ' records due to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method setupMetrics arguments StreamsConfig  streamsConfig"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#256"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00256] The argument streamsConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.streams.TopologyTestDriver.setupMetrics@POLYN405440 the MagicNumber/String  'test-client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method setupTopology arguments InternalTopologyBuilder  builder|StreamsConfig  streamsConfig"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00285] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.TopologyTestDriver.setupTopology@POLYN406519 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#293"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00293] For method setupGlobalTask arguments Time  mockWallClockTime|StreamsConfig  streamsConfig|StreamsMetricsImpl  streamsMetrics|ThreadCache  cache"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00300] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN407491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#339"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00339] For method setupTask arguments StreamsConfig  streamsConfig|StreamsMetricsImpl  streamsMetrics|ThreadCache  cache|TaskConfig  taskConfig"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#339"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00339] The argument streamsConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00406] For method pipeRecord arguments String  topicName|long  timestamp|byte[]  key|byte[]  value|Headers  headers"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00406] For method pipeRecord list of called methods Object monObjet|org.apache.kafka.common.TopicPartition getInputTopicOrPatternPartitionN412661"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.streams.TopologyTestDriver.pipeRecord@POLYN412436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.streams.TopologyTestDriver.pipeRecord@POLYN412436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.streams.TopologyTestDriver.pipeRecord@POLYN412436 the MagicNumber/String  'Unknown topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.streams.TopologyTestDriver.pipeRecord@POLYN412436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.streams.TopologyTestDriver.pipeRecord@POLYN412436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#428"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00428] For method enqueueTaskRecord arguments String  inputTopic|TopicPartition  topicOrPatternPartition|long  timestamp|byte[]  key|byte[]  value|Headers  headers"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#429"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00429] The argument topicOrPatternPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.streams.TopologyTestDriver.enqueueTaskRecord@POLYN413553 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.streams.TopologyTestDriver.enqueueTaskRecord@POLYN413553 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.streams.TopologyTestDriver.enqueueTaskRecord@POLYN413553 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00466] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  'Due to the {} configuration, there are currently some records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  ' that cannot be processed. Advancing wall-clock time or' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  ' enqueuing records on the empty topics will allow' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.streams.TopologyTestDriver.completeAllProcessableWork@POLYN414530 the MagicNumber/String  ' Streams to process more.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#479"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00479] For method commit arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.streams.TopologyTestDriver.commit@POLYN415434 the MagicNumber/String  'dummy-app-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00487] For method processGlobalRecord arguments TopicPartition  globalInputTopicPartition|long  timestamp|byte[]  key|byte[]  value|Headers  headers"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#487"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00487] The argument globalInputTopicPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.streams.TopologyTestDriver.processGlobalRecord@POLYN415878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.streams.TopologyTestDriver.processGlobalRecord@POLYN415878 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.streams.TopologyTestDriver.processGlobalRecord@POLYN415878 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00508] For method validateSourceTopicNameRegexPattern arguments String  inputRecordTopic"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.streams.TopologyTestDriver.validateSourceTopicNameRegexPattern@POLYN416778 the MagicNumber/String  'Topology add source of type String for topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.streams.TopologyTestDriver.validateSourceTopicNameRegexPattern@POLYN416778 the MagicNumber/String  ' cannot contain regex pattern for input record topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.streams.TopologyTestDriver.validateSourceTopicNameRegexPattern@POLYN416778 the MagicNumber/String  ' and hence cannot process the message.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#518"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00518] For method getInputTopicOrPatternPartition arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00524"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.streams.TopologyTestDriver.getInputTopicOrPatternPartition@POLYN417337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00534] For method captureOutputsAndReEnqueueInternalResults list of called methods Object monObjet|org.apache.kafka.common.TopicPartition getInputTopicOrPatternPartitionN418838"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00543] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00545] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00546] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.streams.TopologyTestDriver.captureOutputsAndReEnqueueInternalResults@POLYN418147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.streams.TopologyTestDriver.captureOutputsAndReEnqueueInternalResults@POLYN418147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#572"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00572] For method advanceWallClockTime arguments Duration  advance"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#572"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00572] The argument advance is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00573"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00573] In method org.apache.kafka.streams.TopologyTestDriver.advanceWallClockTime@POLYN419829 the MagicNumber/String  'advance cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.streams.TopologyTestDriver.advanceWallClockTime@POLYN419829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00578"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.streams.TopologyTestDriver.advanceWallClockTime@POLYN419829 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00583"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#583"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00583] For method getRecordsQueue arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.streams.TopologyTestDriver.getRecordsQueue@POLYN420487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.streams.TopologyTestDriver.getRecordsQueue@POLYN420487 the MagicNumber/String  'Unrecognized topic: {}, this can occur if dynamic routing is used and no output has been ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00587"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.streams.TopologyTestDriver.getRecordsQueue@POLYN420487 the MagicNumber/String  'sent to this topic yet. If not using a TopicNameExtractor, check that the output topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00588"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.streams.TopologyTestDriver.getRecordsQueue@POLYN420487 the MagicNumber/String  'is correct.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#621"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00621] For method readRecord arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#621"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00621] For method readRecord list of called methods Object monObjet|Queue&lt;ProducerRecord&lt;byte[],byte[]&gt;&gt; getRecordsQueueN424091"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#623"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00623] In method org.apache.kafka.streams.TopologyTestDriver.readRecord@POLYN423910 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00624] In method org.apache.kafka.streams.TopologyTestDriver.readRecord@POLYN423910 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#630"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00630] The argument keyDeserializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#631"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00631] The argument valueDeserializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00634"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00634] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  'Uninitialized topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00637] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  'Empty topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#646"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00646] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#647"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00647] The argument keySerializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#648"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00648] The argument valueSerializer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00658"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00658] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  'Provided `TestRecord` does not have a timestamp and no timestamp overwrite was provided via `time` parameter.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00664] For method getQueueSize arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00664] For method getQueueSize list of called methods Object monObjet|Queue&lt;ProducerRecord&lt;byte[],byte[]&gt;&gt; getRecordsQueueN427233"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.streams.TopologyTestDriver.getQueueSize@POLYN427058 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.streams.TopologyTestDriver.getQueueSize@POLYN427058 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#673"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00673] For method isEmpty arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.streams.TopologyTestDriver.isEmpty@POLYN427461 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00681"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00681] In method org.apache.kafka.streams.TopologyTestDriver.getAllStateStores@POLYN428392 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00687"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#687"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00687] For method getStateStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429583 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00691] For method getStateStore arguments String  name|boolean  throwForBuiltInStores"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00691] For method getStateStore list of called methods Object monObjet|org.apache.kafka.streams.processor.StateStore globalStateManager_getStoreN430447"
}} 
,
{ "ligne" : {
   "c1" : "00693"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#693"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00693] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00705"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#705"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00705] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00714"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.streams.TopologyTestDriver.getStateStore@POLYN429761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00717"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#717"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00717] For method throwIfBuiltInStore arguments StateStore  stateStore"
}} 
,
{ "ligne" : {
   "c1" : "00717"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#717"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00717] The argument stateStore is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00719] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  ' is a timestamped key-value store and should be accessed via `getTimestampedKeyValueStore()`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#723"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00723] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  ' is a key-value store and should be accessed via `getKeyValueStore()`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  ' is a timestamped window store and should be accessed via `getTimestampedWindowStore()`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00731"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  ' is a window store and should be accessed via `getWindowStore()`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  'Store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00736"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00736] In method org.apache.kafka.streams.TopologyTestDriver.throwIfBuiltInStore@POLYN430773 the MagicNumber/String  ' is a session store and should be accessed via `getSessionStore()`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00743"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#743"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00743] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00745"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00745] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  'Method #getTimestampedKeyValueStore() should be used to access a TimestampedKeyValueStore.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00761"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#761"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00761] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00763] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  'Method #getTimestampedWindowStore() should be used to access a TimestampedWindowStore.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00766"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#766"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00766] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00772] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00773"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#773"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00773] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00779"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00779] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00780] In method org.apache.kafka.streams.TopologyTestDriver the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00794] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00785] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  'Found some records that cannot be processed due to the' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00801] In method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String  ' {} configuration during TopologyTestDriver#close().' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00810"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00810] The class MockChangelogRegister contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00814"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#814"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00814] For method register arguments TopicPartition  partition|ProcessorStateManager  stateManager"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#819"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00819] For method unregister arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00824] The class MockTime contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#830"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00830] In method org.apache.kafka.streams.TopologyTestDriver.MockTime.MockTime@POLYN439547 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#830"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00830] In method org.apache.kafka.streams.TopologyTestDriver.MockTime.MockTime@POLYN439547 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00849"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#849"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00849] For method sleep arguments long  ms"
}} 
,
{ "ligne" : {
   "c1" : "00850"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.streams.TopologyTestDriver.MockTime.sleep@POLYN440278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#851"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00851] In method org.apache.kafka.streams.TopologyTestDriver.MockTime.sleep@POLYN440278 the MagicNumber/String  'Sleep ms cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00858"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#858"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00858] For method waitObject arguments Object  obj|Supplier&lt;Boolean &gt;  condition|long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00871"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#871"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00871] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#877"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00877] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#882"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00882] For method put arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#888"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00888] For method putIfAbsent arguments K  key|V  value"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#894"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00894] For method putAll arguments List&lt;KeyValue&lt;K ,V &gt; &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00901"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#901"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00901] For method delete arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#944"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00944] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#950"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00950] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#955"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00955] For method put arguments K  key|V  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#962"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00962] For method fetch arguments K  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00969"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#969"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00969] For method backwardFetch arguments K  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00976"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#976"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00976] For method fetch arguments K  keyFrom|K  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#985"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00985] For method backwardFetch arguments K  keyFrom|K  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#993"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00993] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00999"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#999"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00999] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.streams.TopologyTestDriver.TestDriverProducer.TestDriverProducer@POLYN447612 the MagicNumber/String  'TopologyTestDriver-StreamThread-1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.streams.TopologyTestDriver.TestDriverProducer.TestDriverProducer@POLYN447612 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.streams.TopologyTestDriver.TestDriverProducer.TestDriverProducer@POLYN447612 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01045"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1045"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01045] For method commitTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  consumerGroupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.TopologyTestDriver.captureOutputsAndReEnqueueInternalResults@POLYN418147"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.TopologyTestDriver.commit@POLYN415434"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.TopologyTestDriver.getQueueSize@POLYN427058"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00785] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00788"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00788] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#791"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00791] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00793] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00799] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00800] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String 'Found some records that cannot be processed due to the' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#801"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00801] In the recursive method org.apache.kafka.streams.TopologyTestDriver.close@POLYN437865 the MagicNumber/String ' {} configuration during TopologyTestDriver#close--.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#548"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00548] In the recursive method org.apache.kafka.streams.TopologyTestDriver.captureOutputsAndReEnqueueInternalResults@POLYN418147 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00559] In the recursive method org.apache.kafka.streams.TopologyTestDriver.captureOutputsAndReEnqueueInternalResults@POLYN418147 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#481"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00481] In the recursive method org.apache.kafka.streams.TopologyTestDriver.commit@POLYN415434 the MagicNumber/String 'dummy-app-id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00666] In the recursive method org.apache.kafka.streams.TopologyTestDriver.getQueueSize@POLYN427058 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00668] In the recursive method org.apache.kafka.streams.TopologyTestDriver.getQueueSize@POLYN427058 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/test-utils/src/main/java/org/apache/kafka/streams/TopologyTestDriver.java.html#397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00397] In the recursive method org.apache.kafka.streams.TopologyTestDriver.setupTask@POLYN409824 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
