console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java 178 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "134"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method setStateListener arguments StreamThread.StateListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method setPartitionAssignedTime arguments long  lastPartitionAssignedMs"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method setState arguments State  newState"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#117"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00117] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'Ignoring request to transit from PENDING_SHUTDOWN to {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'only DEAD state is a valid next state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'Ignoring request to transit from DEAD to {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'no valid next state after DEAD' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'Unexpected state transition from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'Unexpected state transition from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  'State transition from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN348685 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#155"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00155] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method create arguments TopologyMetadata  topologyMetadata|StreamsConfig  config|KafkaClientSupplier  clientSupplier|Admin  adminClient|UUID  processId|String  clientId|StreamsMetricsImpl  streamsMetrics|Time  time|StreamsMetadataState  streamsMetadataState|long  cacheSizeBytes|long  maxBufferSizeBytes|StateDirectory  stateDirectory|StateRestoreListener  userStateRestoreListener|int  threadIdx|Runnable  shutdownErrorHook|BiConsumer&lt;Throwable ,Boolean &gt;  streamsUncaughtExceptionHandler"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument topologyMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#227"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00227] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#228"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00228] The argument clientSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN353716 the MagicNumber/String  '-StreamThread-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN353716 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN353716 the MagicNumber/String  'Creating restore consumer client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN353716 the MagicNumber/String  'Creating consumer client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN353716 the MagicNumber/String  'none' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#346"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00346] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#347"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00347] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#349"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00349] The argument mainConsumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#355"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00355] The argument topologyMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN358453 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN358453 the MagicNumber/String  'dummyGroupId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN358453 the MagicNumber/String  'dummyClientId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN358453 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.streams.processor.internals.StreamThread.InternalConsumerConfig.InternalConsumerConfig@POLYN363901 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN364334 the MagicNumber/String  'Starting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN364334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN364334 the MagicNumber/String  'StreamThread already shutdown. Not running' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN364334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN364334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00503] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00506] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00508] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00509] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00521] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00523"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00523] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Shutting down thread with empty topology.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Triggering the followup rebalance scheduled for {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Scheduled probing rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Detected the states of tasks ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  ' are corrupted. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Will close the task as dirty and re-create and bootstrap from scratch.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Active task(s) got corrupted. Triggering a rebalance.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Active tasks corrupted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Broker unexpectedly doesn't support requireStable flag on version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Shutting down because the Kafka cluster seems to be on a too old version. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  'Setting {}=\'{}\'/\'{}\' requires broker version 2.5 or higher.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN365311 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#531"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00531] For method setStreamsUncaughtExceptionHandler arguments BiConsumer&lt;Throwable ,Boolean &gt;  streamsUncaughtExceptionHandler"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeSendShutdown@POLYN368497 the MagicNumber/String  'Detected that shutdown was requested. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeSendShutdown@POLYN368497 the MagicNumber/String  'All clients in this app will now begin to shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeSendShutdown@POLYN368497 the MagicNumber/String  'Shutdown requested' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00543] For method waitOnThreadState arguments StreamThread.State  targetState|long  timeoutMs"
}} 
,
{ "ligne" : {
   "c1" : "00545"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#545"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00545] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00554"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00554] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00555] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  'Cannot transit to {} within {}ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.streams.processor.internals.StreamThread.waitOnThreadState@POLYN368838 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00577] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#580"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00580] For method sendShutdownRequest arguments AssignorError  assignorError"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#580"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00580] The argument assignorError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#584"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00584] For method handleTaskMigrated arguments TaskMigratedException  e"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.streams.processor.internals.StreamThread.handleTaskMigrated@POLYN370326 the MagicNumber/String  'Detected that the thread is being fenced. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.streams.processor.internals.StreamThread.handleTaskMigrated@POLYN370326 the MagicNumber/String  'This implies that this thread missed a rebalance and dropped out of the consumer group. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00587"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.streams.processor.internals.StreamThread.handleTaskMigrated@POLYN370326 the MagicNumber/String  'Will close out all assigned tasks and rejoin the consumer group.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00602"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#602"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00602] For method resizeCacheAndBufferMemory arguments long  cacheSize|long  maxBufferSize"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  'Thread state is already {}, skipping the run once call after poll request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00639"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00640] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00645] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  'Processing tasks with {} iterations.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00649"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#649"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00649] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  'Processed {} records with {} iterations; invoking punctuators if necessary' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00676"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#676"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00676] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  '{} punctuators ran.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00684"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00686"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#686"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00686] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  'Committed all active tasks {} and standby tasks {} in {}ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00696"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00700"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00700] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00700"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00700] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00707] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  'Processed {} total records, ran {} punctuators, and committed {} total tasks since the last update' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00729"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00729] In method org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN372077 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  'State is {}; initializing tasks if necessary' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00746] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  'Restoration took {} ms for all tasks {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  'Initialization call done. State is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00759"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#759"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00759] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  'Idempotently invoking restoration logic in state {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00765"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#765"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00765] In method org.apache.kafka.streams.processor.internals.StreamThread.initializeAndRestorePhase@POLYN378078 the MagicNumber/String  'Idempotent restore call done. Thread state has not changed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00771"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00771] In method org.apache.kafka.streams.processor.internals.StreamThread.checkForTopologyUpdates@POLYN379506 the MagicNumber/String  'StreamThread has detected an update to the topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00779"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00779] In method org.apache.kafka.streams.processor.internals.StreamThread.checkForTopologyUpdates@POLYN379506 the MagicNumber/String  'Updating consumer subscription following topology update' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  'Invoking poll on main Consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  'Unexpected state {} during normal iteration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  'Unexpected state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  ' during normal iteration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00823"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  'Main Consumer poll completed in {} ms and fetched {} records from partitions {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#835"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00835] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  'Buffered records size {} bytes exceeds {}. Pausing the consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.streams.processor.internals.StreamThread.pollPhase@POLYN380027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#851"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00851] For method pollRequests arguments Duration  pollTime"
}} 
,
{ "ligne" : {
   "c1" : "00865"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#865"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00865] For method resetOffsets arguments Set&lt;TopicPartition &gt;  partitions|Exception  cause"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00872] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00876"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#876"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00876] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'Setting topic '{}' to consume from {} offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'Setting topic '{}' to consume from {} offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00882"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'latest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00885] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00886] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'No custom setting defined for topic '{}' using original config '{}' for offset reset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00886] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'earliest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00887] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'latest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'No custom setting defined for topic '{}' using original config '{}' for offset reset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'latest' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'Unable to locate topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  ' in the topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00912"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#912"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00912] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00915"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#915"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00915] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'No valid committed offset found for input [%s] and no valid reset policy configured.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00916] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  ' You need to set configuration parameter \'auto.offset.reset\' or specify a topic specific reset ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00917"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00917] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'policy via StreamsBuilder#stream(..., Consumed.with(Topology.AutoOffsetReset)) or ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  'StreamsBuilder#table(..., Consumed.with(Topology.AutoOffsetReset))' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00922"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.streams.processor.internals.StreamThread.resetOffsets@POLYN383701 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#930"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00930] For method addToResetList arguments TopicPartition  partition|Set&lt;TopicPartition &gt;  partitions|String  logMessage|String  resetPolicy|Set&lt;String &gt;  loggedTopics"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#930"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00930] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#930"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00930] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#930"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00930] The argument loggedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#943"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00943] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN387669 the MagicNumber/String  'Committing all active tasks {} and standby tasks {} since {}ms has elapsed (commit interval is {}ms)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#955"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00955] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN387669 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00961"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00961] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN387669 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00962] In method org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN387669 the MagicNumber/String  'Unable to commit as we are in the middle of a rebalance, will try again when it completes.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00979"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.streams.processor.internals.StreamThread.advanceNowAndComputeLatency@POLYN389363 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00984] In method org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN389821 the MagicNumber/String  'Informed to shut down' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00988"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN389821 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00992"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#992"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00992] For method completeShutdown arguments boolean  cleanRun"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Shutting down' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Failed to close task manager due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Failed to unregister thread due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1013"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01013] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Failed to close changelog reader due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Failed to close consumer due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1026"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01026] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Failed to close restore consumer due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN390181 the MagicNumber/String  'Shutdown complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1042"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01042] For method updateThreadMetadata arguments String  adminClientId"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1057"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01057] For method updateThreadMetadata arguments Map&lt;TaskId ,Task &gt;  activeTasks|Map&lt;TaskId ,Task &gt;  standbyTasks"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1057"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01057] The argument activeTasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1058"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01058] The argument standbyTasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01108] In method org.apache.kafka.streams.processor.internals.StreamThread.toString@POLYN395198 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01112] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "01113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01113] In method org.apache.kafka.streams.processor.internals.StreamThread.toString@POLYN395457 the MagicNumber/String  '\tStreamsThread threadId: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01113] In method org.apache.kafka.streams.processor.internals.StreamThread.toString@POLYN395457 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01121] In method org.apache.kafka.streams.processor.internals.StreamThread.requestLeaveGroupDuringShutdown@POLYN395810 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThread.java.html#1141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01141] For method setNow arguments long  now"
}} 
]
};
console.log('leListeStr 99 main end');
