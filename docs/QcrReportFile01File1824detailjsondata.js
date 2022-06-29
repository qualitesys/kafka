console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java 126 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "GlobalStateManager"
 , "c2" : "org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "GlobalStateManagerImpl"
 , "c2" : "GlobalStateManagerImpl(LogContext;Time;ProcessorTopology;Consumer<byte[],byte[]>;StateDirectory;StateRestoreListener;StreamsConfig)"
 , "c3" : "3"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setGlobalProcessorContext(InternalProcessorContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "initialize()"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "getGlobalStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "getStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "File"
 , "c2" : "baseDir()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerStore(StateStore;StateRestoreCallback;CommitCallback)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "List<TopicPartition>"
 , "c2" : "topicPartitionsForStore(StateStore)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restoreState(StateRestoreCallback;List<TopicPartition>;Map<TopicPartition,Long>;String;RecordConverter)"
 , "c3" : "9"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getGlobalConsumerOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maybeUpdateDeadlineOrThrow(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateChangelogOffsets(Map<TopicPartition,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkpoint()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "TaskType"
 , "c2" : "taskType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "changelogOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "changelogFor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.svg" }

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
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "16"
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
 , "c4" : "41"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00045] The class GlobalStateManagerImpl contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument stateDirectory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.GlobalStateManagerImpl@POLYN224895 the MagicNumber/String  'dummy' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method setGlobalProcessorContext arguments InternalProcessorContext  globalProcessorContext"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String  'Failed to read checkpoints for global state globalStores' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String  'Encountered a topic-partition in the global checkpoint file not associated with any global' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String  ' state store, topic-partition: {}, checkpoint file: {}. If this topic-partition is no longer valid,' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String  ' an application reset and state store directory cleanup will be required.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String  'Encountered a topic-partition not associated with any global state store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method getGlobalStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.getGlobalStore@POLYN228677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method getStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method registerStore arguments StateStore  store|StateRestoreCallback  stateRestoreCallback|CommitCallback  ignored"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  'Restoring state for global store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  'Global Store %s has already been registered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  'Trying to register store %s that is not a known global store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  'The stateRestoreCallback provided for store %s was null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String  'Failed to get offsets for partitions %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method topicPartitionsForStore arguments StateStore  store"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00200] For method topicPartitionsForStore list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.TopicPartition&gt; retryUntilSuccessOrThrowOnTaskTimeoutN231377"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#200"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00200] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String  'Failed to get partitions for topic %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String  'There are no partitions available for topic %s when initializing global store %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00222] For method restoreState arguments StateRestoreCallback  stateRestoreCallback|List&lt;TopicPartition &gt;  topicPartitions|Map&lt;TopicPartition ,Long &gt;  highWatermarks|String  storeName|RecordConverter  recordConverter"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00222] For method restoreState list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.RecordBatchingStateRestoreCallback StateRestoreCallbackAdapter_adaptN233451"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#224"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00224] The argument highWatermarks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument recordConverter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00232] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00242] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00256] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00263] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00264] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00256] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00263] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00264] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#281"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00281] For method getGlobalConsumerOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.getGlobalConsumerOffset@POLYN235300 the MagicNumber/String  'Failed to get position for partition %s. The broker may be transiently unavailable at the moment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#291"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00291] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00298] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  'Retrying is disabled. You can enable it by setting `%s` to a value larger than zero.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#316"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00316] For method maybeUpdateDeadlineOrThrow arguments long  currentDeadlineMs"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN236394 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN236394 the MagicNumber/String  'Global task did not make progress to restore state within %d ms. Adjust `%s` if needed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00338] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00342] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String  'Flushing all global globalStores registered in the state manager' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String  'Flushing global store={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String  'Failed to flush global state store %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String  ' to have been initialized' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00365] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  'Closing global storage engine {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  'Failed to close global state store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  'Failed to close global state store:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  '. Reason: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  'Skipping to close non-initialized store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String  'Exceptions caught during close of 1 or more global state globalStores\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method updateChangelogOffsets arguments Map&lt;TopicPartition ,Long &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00395] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String  'Failed to write offset checkpoint file to {} for global stores: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String  ' This may occur if OS cleaned the state.dir in case when it is located in the (default) ${java.io.tmpdir}/kafka-streams directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String  ' Changing the location of state.dir may resolve the problem' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00420] For method changelogFor arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN236394"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.GlobalStateManagerImpl@POLYN224895"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.getStore@POLYN228924"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.updateChangelogOffsets@POLYN239797"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN232274 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN236394 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.maybeUpdateDeadlineOrThrow@POLYN236394 the MagicNumber/String 'Global task did not make progress to restore state within %d ms. Adjust `%s` if needed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.GlobalStateManagerImpl@POLYN224895 the MagicNumber/String 'dummy' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String 'Failed to write offset checkpoint file to {} for global stores: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00405] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String ' This may occur if OS cleaned the state.dir in case when it is located in the -default- ${java.io.tmpdir}/kafka-streams directory.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00406] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.checkpoint@POLYN239985 the MagicNumber/String ' Changing the location of state.dir may resolve the problem' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#362"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00362] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 'Closing global storage engine {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 'Failed to close global state store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 'Failed to close global state store:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00369] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String '. Reason: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00371] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String '\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00375] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 'Skipping to close non-initialized store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00379] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00380] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.close@POLYN238193 the MagicNumber/String 'Exceptions caught during close of 1 or more global state globalStores\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00335] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String 'Flushing all global globalStores registered in the state manager' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00340] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String 'Flushing global store={}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String 'Failed to flush global state store %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String ' to have been initialized' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.flush@POLYN237135 the MagicNumber/String 'Expected ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String 'Failed to read checkpoints for global state globalStores' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String 'Encountered a topic-partition in the global checkpoint file not associated with any global' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String ' state store, topic-partition: {}, checkpoint file: {}. If this topic-partition is no longer valid,' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String ' an application reset and state store directory cleanup will be required.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.initialize@POLYN227277 the MagicNumber/String 'Encountered a topic-partition not associated with any global state store' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String 'Restoring state for global store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String 'Global Store %s has already been registered' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String 'Trying to register store %s that is not a known global store' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String 'The stateRestoreCallback provided for store %s was null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN229158 the MagicNumber/String 'Failed to get offsets for partitions %s. The broker may be transiently unavailable at the moment.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String 'Failed to get partitions for topic %s. The broker may be transiently unavailable at the moment.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateManagerImpl.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.topicPartitionsForStore@POLYN231132 the MagicNumber/String 'There are no partitions available for topic %s when initializing global store %s' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
