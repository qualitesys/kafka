console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java 76 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "GlobalStateManager"
 , "c2" : "org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#83"
 , "c1" : "GlobalStateManagerImpl"
 , "c2" : "GlobalStateManagerImpl(LogContext;Time;ProcessorTopology;Consumer&lt;byte[],byte[]&gt;;StateDirectory;StateRestoreListener;StreamsConfig)"
 , "c3" : "3"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#122"
 , "c1" : "void"
 , "c2" : "setGlobalProcessorContext(InternalProcessorContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#127"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "initialize()"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#157"
 , "c1" : "StateStore"
 , "c2" : "getGlobalStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#162"
 , "c1" : "StateStore"
 , "c2" : "getStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#166"
 , "c1" : "File"
 , "c2" : "baseDir()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00171"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#171"
 , "c1" : "void"
 , "c2" : "registerStore(StateStore;StateRestoreCallback;CommitCallback)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00218"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#218"
 , "c1" : "List&lt;TopicPartition&gt;"
 , "c2" : "topicPartitionsForStore(StateStore)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00240"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#240"
 , "c1" : "void"
 , "c2" : "restoreState(StateRestoreCallback;List&lt;TopicPartition&gt;;Map&lt;TopicPartition,Long&gt;;String;RecordConverter)"
 , "c3" : "9"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00299"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#299"
 , "c1" : "long"
 , "c2" : "getGlobalConsumerOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00334"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#334"
 , "c1" : "long"
 , "c2" : "maybeUpdateDeadlineOrThrow(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00352"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#352"
 , "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00373"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#373"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00403"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#403"
 , "c1" : "void"
 , "c2" : "updateChangelogOffsets(Map&lt;TopicPartition,Long&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00408"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#408"
 , "c1" : "void"
 , "c2" : "checkpoint()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00429"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#429"
 , "c1" : "TaskType"
 , "c2" : "taskType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00434"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#434"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "changelogOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00438"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#438"
 , "c1" : "String"
 , "c2" : "changelogFor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "41"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument stateDirectory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.GlobalStateManagerImpl@POLYN208811 the MagicNumber/String  'dummy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method setGlobalProcessorContext arguments InternalProcessorContext  globalProcessorContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN211197 the MagicNumber/String  'Failed to read checkpoints for global state globalStores' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN211197 the MagicNumber/String  'Encountered a topic-partition in the global checkpoint file not associated with any global' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN211197 the MagicNumber/String  ' state store, topic-partition: {}, checkpoint file: {}. If this topic-partition is no longer valid,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN211197 the MagicNumber/String  ' an application reset and state store directory cleanup will be required.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN211197 the MagicNumber/String  'Encountered a topic-partition not associated with any global state store' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method getGlobalStore arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.getGlobalStore@POLYN212601 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method getStore arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method registerStore arguments StateStore  store|StateRestoreCallback  stateRestoreCallback|CommitCallback  ignored"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00171] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  'Restoring state for global store {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  'Global Store %s has already been registered' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  'Trying to register store %s that is not a known global store' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  'The stateRestoreCallback provided for store %s was null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN213082 the MagicNumber/String  'Failed to get offsets for partitions %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method topicPartitionsForStore arguments StateStore  store"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN215060 the MagicNumber/String  'Failed to get partitions for topic %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN215060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN215060 the MagicNumber/String  'There are no partitions available for topic %s when initializing global store %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method restoreState arguments StateRestoreCallback  stateRestoreCallback|List&lt;TopicPartition &gt;  topicPartitions|Map&lt;TopicPartition ,Long &gt;  highWatermarks|String  storeName|RecordConverter  recordConverter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#242"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00242] The argument highWatermarks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#244"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00244] The argument recordConverter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00250] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00259] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00260] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00274] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00281] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00274] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00281] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN216208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN216208 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN216208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00299] For method getGlobalConsumerOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.getGlobalConsumerOffset@POLYN219250 the MagicNumber/String  'Failed to get position for partition %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#309"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00309] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  'Retrying is disabled. You can enable it by setting  %s  to a value larger than zero.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#334"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00334] For method maybeUpdateDeadlineOrThrow arguments long  currentDeadlineMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN220346 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN220346 the MagicNumber/String  'Global task did not make progress to restore state within %d ms. Adjust  %s  if needed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00356] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00360] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN221091 the MagicNumber/String  'Flushing all global globalStores registered in the state manager' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN221091 the MagicNumber/String  'Flushing global store={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN221091 the MagicNumber/String  'Failed to flush global state store %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN221091 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN221091 the MagicNumber/String  ' to have been initialized' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00383] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  'Closing global storage engine {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  'Failed to close global state store {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  'Failed to close global state store:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  '. Reason: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  'Skipping to close non-initialized store {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN222151 the MagicNumber/String  'Exceptions caught during close of 1 or more global state globalStores\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#403"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00403] For method updateChangelogOffsets arguments Map&lt;TopicPartition ,Long &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00413] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN223945 the MagicNumber/String  'Failed to write offset checkpoint file to {} for global stores: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN223945 the MagicNumber/String  ' This may occur if OS cleaned the state.dir in case when it is located in the (default) ${java.io.tmpdir}/kafka-streams directory.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN223945 the MagicNumber/String  ' Changing the location of state.dir may resolve the problem' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method changelogFor arguments String  storeName"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
