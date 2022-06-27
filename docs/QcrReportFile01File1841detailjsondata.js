console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java 235 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "StateManager"
 , "c2" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "storeChangelogTopic(String;String;String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorStateManager"
 , "c2" : "ProcessorStateManager(TaskId;TaskType;boolean;LogContext;StateDirectory;ChangelogRegister;Map<String,String>;Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerStateStores(List<StateStore>;InternalProcessorContext)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerGlobalStateStores(List<StateStore>)"
 , "c3" : "2"
 , "c4" : "2"
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
   "c1" : "void"
 , "c2" : "initializeStoreOffsetsFromCheckpoint(boolean)"
 , "c3" : "15"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeRegisterStoreWithChangelogReader(String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TopicPartition>"
 , "c2" : "getAllChangelogTopicPartitions()"
 , "c3" : "3"
 , "c4" : "3"
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
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "StateStore"
 , "c2" : "getStore(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Collection<TopicPartition>"
 , "c2" : "changelogPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "markChangelogAsCorrupted(Collection<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "changelogOffsets()"
 , "c3" : "3"
 , "c4" : "3"
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
   "c1" : "boolean"
 , "c2" : "changelogAsSource(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "StateStoreMetadata"
 , "c2" : "storeMetadata(TopicPartition)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restore(StateStoreMetadata;List<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flushCache()"
 , "c3" : "10"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recycle()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionTaskType(TaskType;LogContext)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateChangelogOffsets(Map<TopicPartition,Long>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkpoint()"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartition"
 , "c2" : "getStorePartition(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isLoggingEnabled(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StateStoreMetadata"
 , "c2" : "findStore(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "checkpointableOffsetFromChangelogOffset(Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "changelogOffsetFromCheckpointedOffset(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartition"
 , "c2" : "registeredChangelogPartitionFor(String)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "changelogFor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteCheckPointFileIfEOSEnabled()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.svg" }

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
 , "c4" : "59"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "11"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "108"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "22"
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
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00042] The class ProcessorStateManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00044] The class StateStoreMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN252451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN252451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN252451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN252451 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN252451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN253000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN253000 the MagicNumber/String  'Log enabled store should always provide a restore callback upon registration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.StateStoreMetadata@POLYN253000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method setOffset arguments Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.toString@POLYN254138 the MagicNumber/String  'StateStoreMetadata (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.toString@POLYN254138 the MagicNumber/String  ' : ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata.toString@POLYN254138 the MagicNumber/String  ' @ ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method storeChangelogTopic arguments String  prefix|String  storeName|String  namedTopology"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.storeChangelogTopic@POLYN255213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.storeChangelogTopic@POLYN255213 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.storeChangelogTopic@POLYN255213 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.storeChangelogTopic@POLYN255213 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#158"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00158] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument stateDirectory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.ProcessorStateManager@POLYN255744 the MagicNumber/String  'Created state store manager for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method registerStateStores arguments List&lt;StateStore &gt;  allStores|InternalProcessorContext  processorContext"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#178"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00178] The argument processorContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00184] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStateStores@POLYN256991 the MagicNumber/String  'Registered state store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method registerGlobalStateStores arguments List&lt;StateStore &gt;  stateStores"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerGlobalStateStores@POLYN257673 the MagicNumber/String  'Register global stores {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method getGlobalStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method initializeStoreOffsetsFromCheckpoint arguments boolean  storeDirIsEmpty"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Loaded offsets from the checkpoint file: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Tried to initialize store offsets for corrupted store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Should not initialize offsets for a corrupted task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'State store {} is not logged and hence would not be restored' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Initializing to the starting offset for changelog {} of in-memory state store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'State store {} initialized from checkpoint with offset {} at changelog {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'State store {} did not find checkpoint offsets while stores are not empty, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'since under EOS it has the risk of getting uncommitted data in stores we have to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'treat it as a task corruption error and wipe out the local state of task {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'before re-bootstrapping' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'State store {} did not find checkpoint offset, hence would ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'default to the starting offset at changelog {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Skipping re-initialization of offset from checkpoint for recycled store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  'Some loaded checkpoint offsets cannot find their corresponding state stores: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String  '%sError loading and deleting checkpoint file when creating the state manager' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#267"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00267] For method maybeRegisterStoreWithChangelogReader arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.getAllChangelogTopicPartitions@POLYN261579 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00289] For method registerStore arguments StateStore  store|StateRestoreCallback  stateRestoreCallback|CommitCallback  commitCallback"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00289] For method registerStore list of called methods Object monObjet|String store_nameN262301|boolean isLoggingEnabledN263152"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#289"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00289] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  '%sIllegal store name: %s, which collides with the pre-defined ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  'checkpoint file name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  '%sStore %s has already been registered.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  'The registered state restore callback is also implementing the state restore listener interface, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  'which is not expected and would be ignored' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String  'Registered state store {} to its state manager' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00331] For method getStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.getStore@POLYN263773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#343"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00343] For method markChangelogAsCorrupted arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#343"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00343] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.markChangelogAsCorrupted@POLYN264201 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.markChangelogAsCorrupted@POLYN264201 the MagicNumber/String  'Some partitions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.markChangelogAsCorrupted@POLYN264201 the MagicNumber/String  ' are not contained in the store list of task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.markChangelogAsCorrupted@POLYN264201 the MagicNumber/String  ' marking as corrupted, this is not expected' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.changelogOffsets@POLYN264935 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.changelogOffsets@POLYN264935 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.changelogOffsets@POLYN264935 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.changelogOffsets@POLYN264935 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#378"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00378] For method changelogAsSource arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#388"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00388] For method storeMetadata arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#388"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00388] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.storeMetadata@POLYN265863 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#398"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00398] For method restore arguments StateStoreMetadata  storeMetadata|List&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  restoreRecords"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#398"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00398] For method restore list of called methods Object monObjet|org.apache.kafka.streams.processor.ProcessorContext adaptN266878"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#398"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00398] The argument storeMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#398"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00398] The argument restoreRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.restore@POLYN266195 the MagicNumber/String  'Restoring ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.restore@POLYN266195 the MagicNumber/String  ' which is not registered in this state manager, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.restore@POLYN266195 the MagicNumber/String  'this should not happen.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.restore@POLYN266195 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.restore@POLYN266195 the MagicNumber/String  '%sException caught while trying to restore state from %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00433] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00440] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  'Flushing all stores registered in the state manager: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  'Flushing store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  '%sFailed to flush state store %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  'Failed to flush state store {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00462] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00466"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00466] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00468] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00469] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00472] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00475] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  'Flushing all store caches registered in the state manager: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  'Flushed cache or buffer {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  '%sFailed to flush cache of store %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  'Failed to flush cache of store {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00506] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00510] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00513] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  'Closing its state manager and all the registered state stores: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  'Closing store {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  '%sFailed to close state store %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  'Failed to close state store {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#532"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00532] For method recycle list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.TopicPartition&gt; getAllChangelogTopicPartitionsN272735"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.recycle@POLYN272521 the MagicNumber/String  'Recycling state for {} task {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#539"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00539] For method transitionTaskType arguments TaskType  newType|LogContext  logContext"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#539"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00539] For method transitionTaskType list of called methods Object monObjet|org.slf4j.Logger logContext_loggerN273239"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#539"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00539] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.transitionTaskType@POLYN272838 the MagicNumber/String  'Tried to recycle state for task type conversion but new type was the same.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.transitionTaskType@POLYN272838 the MagicNumber/String  'Transitioning state manager for {} task {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#553"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00553] For method updateChangelogOffsets arguments Map&lt;TopicPartition ,Long &gt;  writtenOffsets"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#553"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00553] For method updateChangelogOffsets list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.ProcessorStateManager.StateStoreMetadata findStoreN273820"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#553"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00553] The argument writtenOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00555] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.updateChangelogOffsets@POLYN273540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.updateChangelogOffsets@POLYN273540 the MagicNumber/String  'State store {} updated to written offset {} at changelog {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#567"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00567] For method checkpoint list of called methods Object monObjet|long checkpointableOffsetFromChangelogOffsetN275188"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00574] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  '%sException caught while trying to checkpoint store, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  'changelog partition %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00584] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#593"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00593] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  'Writing checkpoint: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  'Failed to write offset checkpoint file to [{}].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  ' This may occur if OS cleaned the state.dir in case when it located in ${java.io.tmpdir} directory.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  ' This may also occur due to running multiple instances on the same machine using the same state dir.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String  ' Changing the location of state.dir may resolve the problem.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00605"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#605"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00605] For method getStorePartition arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00612"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#612"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00612] For method isLoggingEnabled arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.isLoggingEnabled@POLYN276015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#618"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00618] For method findStore arguments TopicPartition  changelogPartition"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#618"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00618] The argument changelogPartition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#623"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00623] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.findStore@POLYN276181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00624] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.findStore@POLYN276181 the MagicNumber/String  'Multiple state stores are found for changelog partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.findStore@POLYN276181 the MagicNumber/String  ', this should never happen: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.findStore@POLYN276181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00628"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.findStore@POLYN276181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#632"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00632] For method checkpointableOffsetFromChangelogOffset arguments Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00633] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpointableOffsetFromChangelogOffset@POLYN276928 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#637"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00637] For method changelogOffsetFromCheckpointedOffset arguments long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.changelogOffsetFromCheckpointedOffset@POLYN277107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#641"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00641] For method registeredChangelogPartitionFor arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00643"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#643"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00643] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  'State store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00645] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  ' for which the registered changelog partition should be' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  ' retrieved has not been registered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00649"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#649"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00649] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  'Registered state store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00651"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  ' does not have a registered changelog partition.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registeredChangelogPartitionFor@POLYN277286 the MagicNumber/String  ' This may happen if logging is disabled for the state store.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00658"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#658"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00658] For method changelogFor arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.recycle@POLYN272521"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStateStores@POLYN256991"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.ProcessorStateManager@POLYN255744"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerGlobalStateStores@POLYN257673"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ProcessorStateManager.updateChangelogOffsets@POLYN273540"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#497"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00497] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String 'Closing its state manager and all the registered state stores: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00501] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00507] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String 'Closing store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#517"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00517] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String '%sFailed to close state store %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#519"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00519] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String 'Failed to close state store {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00526] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.close@POLYN270888 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String '%sIllegal store name: %s, which collides with the pre-defined ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00299] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String 'checkpoint file name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String '%sStore %s has already been registered.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00308] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String 'The registered state restore callback is also implementing the state restore listener interface, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00309] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String 'which is not expected and would be ignored' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00327] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStore@POLYN262144 the MagicNumber/String 'Registered state store {} to its state manager' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String 'Flushing all store caches registered in the state manager: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#471"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00471] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String 'Flushed cache or buffer {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#473"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00473] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#479"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00479] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String '%sFailed to flush cache of store %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#484"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00484] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String 'Failed to flush cache of store {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#489"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00489] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flushCache@POLYN269115 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#428"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00428] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String 'Flushing all stores registered in the state manager: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00434] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String 'Flushing store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00438] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00444] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String '%sFailed to flush state store %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#446"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00446] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String 'Failed to flush state store {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00451] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.flush@POLYN267797 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#533"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00533] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.recycle@POLYN272521 the MagicNumber/String 'Recycling state for {} task {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerStateStores@POLYN256991 the MagicNumber/String 'Registered state store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.ProcessorStateManager@POLYN255744 the MagicNumber/String 'Created state store manager for task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00571] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#576"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00576] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String '%sException caught while trying to checkpoint store, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#577"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00577] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String 'changelog partition %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00584"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00584] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#593"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00593] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String 'Writing checkpoint: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00597] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String 'Failed to write offset checkpoint file to [{}].' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#598"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00598] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String ' This may occur if OS cleaned the state.dir in case when it located in ${java.io.tmpdir} directory.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00599] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String ' This may also occur due to running multiple instances on the same machine using the same state dir.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00600] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.checkpoint@POLYN274263 the MagicNumber/String ' Changing the location of state.dir may resolve the problem.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00207] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Loaded offsets from the checkpoint file: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Tried to initialize store offsets for corrupted store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Should not initialize offsets for a corrupted task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'State store {} is not logged and hence would not be restored' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00218] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Initializing to the starting offset for changelog {} of in-memory state store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00220] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00225] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'State store {} initialized from checkpoint with offset {} at changelog {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'State store {} did not find checkpoint offsets while stores are not empty, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'since under EOS it has the risk of getting uncommitted data in stores we have to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00234] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'treat it as a task corruption error and wipe out the local state of task {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'before re-bootstrapping' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00239] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'State store {} did not find checkpoint offset, hence would ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00240] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'default to the starting offset at changelog {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Skipping re-initialization of offset from checkpoint for recycled store {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String 'Some loaded checkpoint offsets cannot find their corresponding state stores: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#262"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00262] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN258207 the MagicNumber/String '%sError loading and deleting checkpoint file when creating the state manager' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.registerGlobalStateStores@POLYN257673 the MagicNumber/String 'Register global stores {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00557] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.updateChangelogOffsets@POLYN273540 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ProcessorStateManager.java.html#560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00560] In the recursive method org.apache.kafka.streams.processor.internals.ProcessorStateManager.updateChangelogOffsets@POLYN273540 the MagicNumber/String 'State store {} updated to written offset {} at changelog {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
