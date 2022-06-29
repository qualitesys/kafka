console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java 89 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Thread"
 , "c2" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setStateListener(StreamThread.StateListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "State"
 , "c2" : "state()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setState(State)"
 , "c3" : "8"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "stillRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "inErrorState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "stillInitializing()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GlobalStreamThread"
 , "c2" : "GlobalStreamThread(ProcessorTopology;StreamsConfig;Consumer<byte[],byte[]>;StateDirectory;long;StreamsMetricsImpl;Time;String;StateRestoreListener;java.util.function.Consumer<Throwable>)"
 , "c3" : "1"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "4"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setUncaughtExceptionHandler(java.util.function.Consumer<Throwable>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resize(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StateConsumer"
 , "c2" : "initialize()"
 , "c3" : "1"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeStateConsumer(StateConsumer;boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "shutdown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,Metric>"
 , "c2" : "consumerMetrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.streams.processor.internals.GlobalStreamThread.this" }
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
 , "c4" : "32"
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
 , "c4" : "9"
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
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method setStateListener arguments StreamThread.StateListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method setState arguments State  newState"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#97"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00097] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String  'Unexpected state transition from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String  'Unexpected state transition from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String  'State transition from {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#122"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00122] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#128"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00128] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#134"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00134] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.GlobalStreamThread@POLYN224059 the MagicNumber/String  'global-stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.GlobalStreamThread@POLYN224059 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00165] The class StateConsumer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00190] For method initialize list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.GlobalStreamThread time_millisecondsN227385"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00199] For method pollAndUpdate list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.GlobalStreamThread time_millisecondsN227849"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method close arguments boolean  wipeStateStore"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.StateConsumer.close@POLYN228096 the MagicNumber/String  'Failed to close global consumer due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Error happened during initialization of the global state store; this thread has shutdown.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Updating global state failed due to inconsistent local state. Will attempt to clean up the local state. You can restart KafkaStreams to recover from this error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Updating global state failed. You can restart KafkaStreams to launch a new GlobalStreamThread to recover from this error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Error happened while maintaining global state store. The streams application or client will now close to ERROR.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Shutting down' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Failed to close state maintainer due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String  'Shutdown complete' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method setUncaughtExceptionHandler arguments java.util.function.Consumer&lt;Throwable &gt;  streamsUncaughtExceptionHandler"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00295] For method resize arguments long  cacheSize"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  'Bootstrapping global state failed due to inconsistent local state. Will attempt to clean up the local state. You can restart KafkaStreams to recover from this error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  'Bootstrapping global state failed. You can restart KafkaStreams to recover from this error.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  'Exception caught during initialization of GlobalStreamThread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00363] For method closeStateConsumer arguments StateConsumer  stateConsumer|boolean  wipeStateStore"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.closeStateConsumer@POLYN233238 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.closeStateConsumer@POLYN233238 the MagicNumber/String  'Failed to close state consumer due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#374"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00374] Lock statement on synchronized method start"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String  'Initialization for the global stream thread failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.closeStateConsumer@POLYN233238"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.GlobalStreamThread@POLYN224059"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.stillRunning@POLYN223589"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.inErrorState@POLYN223743"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.stillInitializing@POLYN223897"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00340] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String 'Bootstrapping global state failed due to inconsistent local state. Will attempt to clean up the local state. You can restart KafkaStreams to recover from this error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String 'Bootstrapping global state failed. You can restart KafkaStreams to recover from this error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00354] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00357] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00358] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String 'Exception caught during initialization of GlobalStreamThread' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00360] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.initialize@POLYN231239 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#364"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00364] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.closeStateConsumer@POLYN233238 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00368] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.closeStateConsumer@POLYN233238 the MagicNumber/String 'Failed to close state consumer due to the following error:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#228"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00228] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Error happened during initialization of the global state store; this thread has shutdown.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 1L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 1L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Updating global state failed due to inconsistent local state. Will attempt to clean up the local state. You can restart KafkaStreams to recover from this error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00261] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Updating global state failed. You can restart KafkaStreams to launch a new GlobalStreamThread to recover from this error.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Error happened while maintaining global state store. The streams application or client will now close to ERROR.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Shutting down' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Failed to close state maintainer due to the following error:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.run@POLYN228480 the MagicNumber/String 'Shutdown complete' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String 'Unexpected state transition from {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String ' to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String 'Unexpected state transition from ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String 'State transition from {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.setState@POLYN222410 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.GlobalStreamThread@POLYN224059 the MagicNumber/String 'global-stream-thread [%s] ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.GlobalStreamThread@POLYN224059 the MagicNumber/String 1L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00377] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00378] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStreamThread.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN233664 the MagicNumber/String 'Initialization for the global stream thread failed' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
