console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java 375 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.TaskManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.TaskManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TaskManager"
 , "c2" : "TaskManager(Time;ChangelogReader;UUID;String;StreamsMetricsImpl;ActiveTaskCreator;StandbyTaskCreator;TopologyMetadata;Admin;StateDirectory)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setMainConsumer(Consumer<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "totalProducerBlockedTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UUID"
 , "c2" : "processId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyMetadata"
 , "c2" : "topologyMetadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRebalanceInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRebalanceStart(Set<String>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRebalanceComplete()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "handleCorruption(Set<TaskId>)"
 , "c3" : "4"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeDirtyAndRevive(Collection<Task>;boolean)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleAssignment(Map<TaskId,Set<TopicPartition>>;Map<TaskId,Set<TopicPartition>>)"
 , "c3" : "15"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleCloseAndRecycle(Set<Task>;Set<Task>;Set<Task>;Map<TaskId,Set<TopicPartition>>;Map<TaskId,Set<TopicPartition>>;LinkedHashMap<TaskId,RuntimeException>)"
 , "c3" : "12"
 , "c4" : "30"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "tryToCompleteRestoration(long;java.util.function.Consumer<Set<TopicPartition>>)"
 , "c3" : "8"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRevocation(Collection<TopicPartition>)"
 , "c3" : "14"
 , "c4" : "33"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareCommitAndAddOffsetsToMap(Set<Task>;Map<Task,Map<TopicPartition,OffsetAndMetadata>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleLostAll()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Long>"
 , "c2" : "getTaskOffsetSums()"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "tryToLockAllNonEmptyTaskDirectories()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "releaseLockedDirectoriesForTasks(Set<TaskId>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "releaseLockedUnassignedTaskDirectories()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "sumOfChangelogOffsets(TaskId;Map<TopicPartition,Long>)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeTaskDirty(Task)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeTaskCloseClean(Task)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "shutdown(boolean)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeAndCleanUpTasks(Collection<Task>;Collection<Task>;boolean)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "tryCloseCleanActiveTasks(Collection<Task>;boolean;AtomicReference<RuntimeException>)"
 , "c3" : "8"
 , "c4" : "46"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "tryCloseCleanStandbyTasks(Collection<Task>;boolean;AtomicReference<RuntimeException>)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Set<TaskId>"
 , "c2" : "activeTaskIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TaskId>"
 , "c2" : "standbyTaskIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Task>"
 , "c2" : "tasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Task>"
 , "c2" : "notPausedTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Task>"
 , "c2" : "activeTaskMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Task>"
 , "c2" : "activeTaskIterable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Stream<Task>"
 , "c2" : "activeTaskStream()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TaskId,Task>"
 , "c2" : "standbyTaskMap()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Task>"
 , "c2" : "standbyTaskIterable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Stream<Task>"
 , "c2" : "standbyTaskStream()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "commitAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addRecordsToTasks(ConsumerRecords<byte[],byte[]>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "nonEmptyPartitions()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "commit(Collection<Task>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maybeCommitActiveTasksPerUserRequested()"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "commitTasksAndMaybeUpdateCommittableOffsets(Collection<Task>;Map<Task,Map<TopicPartition,OffsetAndMetadata>>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateTaskEndMetadata(TopicPartition;Long)"
 , "c3" : "4"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleTopologyUpdates()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeCloseTasksFromRemovedTopologies(Set<String>)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getInputBufferSizeInBytes()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "process(int;Time)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordTaskProcessRatio(long;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "punctuate()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybePurgeCommittedRecords()"
 , "c3" : "6"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString(String)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<MetricName,Metric>"
 , "c2" : "producerMetrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "producerClientIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TaskId>"
 , "c2" : "lockedTaskDirectories()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeWrapAndSetFirstException(AtomicReference<RuntimeException>;RuntimeException;TaskId)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeAndMaybeSwallow(boolean;Runnable;java.util.function.Consumer<RuntimeException>;java.util.function.Consumer<RuntimeException>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeAndMaybeSwallow(boolean;Runnable;String;Logger)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "needsInitializationOrRestoration()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addTask(Task)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "99"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "23"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "32"
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
 , "c4" : "58"
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
 , "c4" : "124"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00056] The class TaskManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument topologyMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method setMainConsumer arguments Consumer&lt;byte[] ,byte[] &gt;  mainConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method handleRebalanceStart arguments Set&lt;String &gt;  subscribedTopics"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceStart@POLYN362597 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceComplete@POLYN362872 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method handleCorruption arguments Set&lt;TaskId &gt;  corruptedTasks"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument corruptedTasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  'Some additional tasks were found corrupted while trying to commit, these will be added to the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  'tasks to clean and revive: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  'Hit TimeoutException when committing all non-corrupted tasks, these will be closed and revived' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method closeDirtyAndRevive arguments Collection&lt;Task &gt;  taskWithChangelogs|boolean  markAsCorrupted"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00195] For method closeDirtyAndRevive list of called methods Object monObjet|java.util.Collection&lt;org.apache.kafka.common.TopicPartition&gt; task_changelogPartitionsN365751"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00209] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00220] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00229] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00230] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String  'Error flushing cache for corrupted task {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String  'Error suspending corrupted task {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String  'Expected the current consumer assignment {} to contain the input partitions {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String  'Will proceed to recover.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method handleAssignment arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasks|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasks"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument activeTasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#250"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00250] The argument standbyTasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00301] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00302] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00303] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00305] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00307] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  'Handle new assignment with:\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  '\tNew active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  '\tNew standby tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  '\tExisting active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  '\tExisting standby tasks: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  'Hit exceptions while closing / recycling tasks: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  'Unexpected failure to close ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  ' task(s) [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  ']. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  'First unexpected exception (for task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String  ') follows.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#330"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00330] For method handleCloseAndRecycle arguments Set&lt;Task &gt;  tasksToRecycle|Set&lt;Task &gt;  tasksToCloseClean|Set&lt;Task &gt;  tasksToCloseDirty|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasksToCreate|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasksToCreate|LinkedHashMap&lt;TaskId ,RuntimeException &gt;  taskCloseExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#330"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00330] The argument tasksToRecycle is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#331"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00331] The argument tasksToCloseClean is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#332"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00332] The argument tasksToCloseDirty is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#333"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00333] The argument activeTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#334"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00334] The argument standbyTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#335"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00335] The argument taskCloseExceptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00350] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00365] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00366] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00384] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00385] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00398] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00399] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00401] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00402] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00404] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00405] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'Tasks to close-dirty should be empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'Task {} should have been committed when it was suspended, but it reports non-empty ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'offsets {} to commit; this means it failed during last commit and hence should be closed dirty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'Failed to checkpoint task %s. Attempting to close remaining tasks before re-throwing:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String  'Failed to recycle task %s cleanly. Attempting to close remaining tasks before re-throwing:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00420] For method tryToCompleteRestoration arguments long  now|java.util.function.Consumer&lt;Set&lt;TopicPartition &gt; &gt;  offsetResetter"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00420] For method tryToCompleteRestoration list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; changelogReader_completedChangelogsN378349"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00428] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00434] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00453] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00432"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  'Could not initialize task {} since: {}; will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  'Could not complete restoration for %s due to the following exception; will retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00481] For method handleRevocation arguments Collection&lt;TopicPartition &gt;  revokedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00548] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00563] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00574] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'The following revoked partitions {} are missing from the current task partitions. It could ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'potentially be due to race condition of consumer detecting the heartbeat failure, or the tasks ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'have been cleaned up by the handleAssignment callback.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00524"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Some tasks were corrupted when trying to commit offsets, these will be cleaned and revived: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Timed out while trying to commit all tasks during revocation, these will be cleaned and revived' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Exception caught while committing those revoked tasks ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Exception caught while post-committing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00562"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Exception caught while post-committing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  'Caught the following exception while trying to suspend revoked task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00585] For method prepareCommitAndAddOffsetsToMap arguments Set&lt;Task &gt;  tasksToPrepare|Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  consumedOffsetsPerTask"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#586"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00586] The argument consumedOffsetsPerTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00589] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#593"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00593] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00596] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.streams.processor.internals.TaskManager.handleLostAll@POLYN385737 the MagicNumber/String  'Closing lost active tasks as zombies.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00623] For method getTaskOffsetSums list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.streams.processor.TaskId,Long&gt; task_changelogOffsetsN387559|java.io.File stateDirectory_checkpointFileForN387990"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00630] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00633"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00633] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00640"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00640] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00645] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00632] The same method call task.state() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.streams.processor.internals.TaskManager.getTaskOffsetSums@POLYN386713 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00632] In method org.apache.kafka.streams.processor.internals.TaskManager.getTaskOffsetSums@POLYN386713 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00635"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00635] In method org.apache.kafka.streams.processor.internals.TaskManager.getTaskOffsetSums@POLYN386713 the MagicNumber/String  'Skipping to encode apparently stateless (or non-logged) offset sum for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.streams.processor.internals.TaskManager.getTaskOffsetSums@POLYN386713 the MagicNumber/String  'Exception caught while trying to read checkpoint for task %s:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00661"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00661] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00662] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00664] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00671] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00671] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.streams.processor.internals.TaskManager.tryToLockAllNonEmptyTaskDirectories@POLYN388877 the MagicNumber/String  'Temporarily locked unassigned task {} for the upcoming rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#678"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00678] For method releaseLockedDirectoriesForTasks arguments Set&lt;TaskId &gt;  tasksToUnlock"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#678"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00678] The argument tasksToUnlock is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00681"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00681] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00693"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#693"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00693] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00701"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#701"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00701] For method sumOfChangelogOffsets arguments TaskId  id|Map&lt;TopicPartition ,Long &gt;  changelogOffsets"
}} 
,
{ "ligne" : {
   "c1" : "00701"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#701"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00701] The argument changelogOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00713"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#713"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00713] In method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#715"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00715] In method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String  'Expected not to get a sentinel offset, but got: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00719] In method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String  'Sum of changelog offsets for task {} overflowed, pinning to Long.MAX_VALUE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00729"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#729"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00729] For method closeTaskDirty arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00729"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#729"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00729] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.streams.processor.internals.TaskManager.closeTaskDirty@POLYN392269 the MagicNumber/String  'Error flushing caches of dirty task {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.streams.processor.internals.TaskManager.closeTaskDirty@POLYN392269 the MagicNumber/String  'Error suspending dirty task {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#747"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00747] For method completeTaskCloseClean arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#747"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00747] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00752"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#752"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00752] For method shutdown arguments boolean  clean"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#753"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00753] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00763] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  'Ignoring an exception while unlocking remaining task directories.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00769"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00769] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00770] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  'Ignoring an exception while closing thread producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00780] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  'Ignoring an exception while unlocking remaining task directories.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00785] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String  'Unexpected exception while closing task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00791"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#791"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00791] For method closeAndCleanUpTasks arguments Collection&lt;Task &gt;  activeTasks|Collection&lt;Task &gt;  standbyTasks|boolean  clean"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String  'Ignoring an exception while closing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String  ' producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00813"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#813"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00813] In method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00819"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#819"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00819] For method tryCloseCleanActiveTasks arguments Collection&lt;Task &gt;  activeTasksToClose|boolean  clean|AtomicReference&lt;RuntimeException &gt;  firstException"
}} 
,
{ "ligne" : {
   "c1" : "00821"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#821"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00821] The argument firstException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00834"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#834"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00834] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00840"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#840"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00840] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00843] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00847"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00847] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00864"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00864] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00901"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#901"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00901] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00906] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00848"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#848"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00848] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00865"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#865"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00865] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  'Exception caught while post-committing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00877] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  'Exception caught while committing tasks during shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00889"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00889] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#902"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00902] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  'Exception caught while clean-closing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#907"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00907] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  'Exception caught while clean-closing task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#908"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00908] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00917"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#917"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00917] For method tryCloseCleanStandbyTasks arguments Collection&lt;Task &gt;  standbyTasksToClose|boolean  clean|AtomicReference&lt;RuntimeException &gt;  firstException"
}} 
,
{ "ligne" : {
   "c1" : "00932"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#932"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00932] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00935"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00935] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanStandbyTasks@POLYN402379 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#996"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00996] For method addRecordsToTasks arguments ConsumerRecords&lt;byte[] ,byte[] &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#996"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00996] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00998] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01000"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1001"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01001] In method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String  'Unable to locate active task for received-record partition {}. Current tasks: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01002"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01002] In method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String  '&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String  'Task was unexpectedly missing for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1014"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01014] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1020"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01020] For method commit arguments Collection&lt;Task &gt;  tasksToCommit"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.streams.processor.internals.TaskManager.commit@POLYN407523 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN408338 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1045"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01045] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN408338 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1049"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01049] For method commitTasksAndMaybeUpdateCommittableOffsets arguments Collection&lt;Task &gt;  tasksToCommit|Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  consumedOffsetsAndMetadata"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.streams.processor.internals.TaskManager.commitTasksAndMaybeUpdateCommittableOffsets@POLYN408823 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1058"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01058] For method updateTaskEndMetadata arguments TopicPartition  topicPartition|Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1060"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01060] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01076] In method org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN409858 the MagicNumber/String  'Proactively unsubscribing from all topics due to empty topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1083"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01083] For method maybeCloseTasksFromRemovedTopologies arguments Set&lt;String &gt;  currentNamedTopologies"
}} 
,
{ "ligne" : {
   "c1" : "01083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1083"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01083] The argument currentNamedTopologies is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01099] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN410256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01106] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN410256 the MagicNumber/String  'Caught the following exception while closing tasks from a removed topology:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01111] In method org.apache.kafka.streams.processor.internals.TaskManager.getInputBufferSizeInBytes@POLYN411756 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01119] For method process arguments int  maxNumRecords|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "01123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01123] For method recordTaskProcessRatio arguments long  totalProcessLatencyMs|long  now"
}} 
,
{ "ligne" : {
   "c1" : "01134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01134] For method maybePurgeCommittedRecords list of called methods Object monObjet|org.apache.kafka.clients.admin.DeleteRecordsResult adminClient_deleteRecordsN413911"
}} 
,
{ "ligne" : {
   "c1" : "01147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.streams.processor.internals.TaskManager.maybePurgeCommittedRecords@POLYN412820 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01140] In method org.apache.kafka.streams.processor.internals.TaskManager.maybePurgeCommittedRecords@POLYN412820 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01141] In method org.apache.kafka.streams.processor.internals.TaskManager.maybePurgeCommittedRecords@POLYN412820 the MagicNumber/String  'Previous delete-records request has failed: {}. Try sending the new request now' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01153] In method org.apache.kafka.streams.processor.internals.TaskManager.maybePurgeCommittedRecords@POLYN412820 the MagicNumber/String  'Sent delete-records request: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01161] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414220 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01164] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "01166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01166] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  'TaskManager\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01167] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  '\tMetadataState:\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01168] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  '\tTasks:\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01171] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  '\t\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01173] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01175] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01177] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01177] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  'active' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01177] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  'standby' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01177] In method org.apache.kafka.streams.processor.internals.TaskManager.toString@POLYN414339 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01194] For method maybeWrapAndSetFirstException arguments AtomicReference&lt;RuntimeException &gt;  firstException|RuntimeException  exception|TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "01194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1194"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01194] The argument firstException is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01199] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeWrapAndSetFirstException@POLYN415997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01201] In method org.apache.kafka.streams.processor.internals.TaskManager.maybeWrapAndSetFirstException@POLYN415997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01205] For method executeAndMaybeSwallow arguments boolean  clean|Runnable  runnable|java.util.function.Consumer&lt;RuntimeException &gt;  actionIfClean|java.util.function.Consumer&lt;RuntimeException &gt;  actionIfNotClean"
}} 
,
{ "ligne" : {
   "c1" : "01206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1206"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01206] The argument runnable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1207"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01207] The argument actionIfClean is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01208] The argument actionIfNotClean is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[01210] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "01220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01220] For method executeAndMaybeSwallow arguments boolean  clean|Runnable  runnable|String  name|Logger  log"
}} 
,
{ "ligne" : {
   "c1" : "01223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01223] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01230] In method org.apache.kafka.streams.processor.internals.TaskManager.executeAndMaybeSwallow@POLYN417175 the MagicNumber/String  'Ignoring error in unclean {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01238] For method addTask arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "01160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01160] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01205] Public method executeAndMaybeSwallow is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.closeTaskDirty@POLYN392269"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN410256"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedDirectoriesForTasks@POLYN389934"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.prepareCommitAndAddOffsetsToMap@POLYN384616"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleLostAll@POLYN385737"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanStandbyTasks@POLYN402379"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedUnassignedTaskDirectories@POLYN390595"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.tryToLockAllNonEmptyTaskDirectories@POLYN388877"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.TaskManager@POLYN360537"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.activeTaskIds@POLYN403526"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.activeTaskIterable@POLYN404715"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN409858"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN408338"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.maybeWrapAndSetFirstException@POLYN415997"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.needsInitializationOrRestoration@POLYN417596"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.producerClientIds@POLYN415758"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.producerMetrics@POLYN415636"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.standbyTaskIds@POLYN403750"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.standbyTaskIterable@POLYN405359"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.totalProducerBlockedTime@POLYN362251"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskManager.updateTaskEndMetadata@POLYN409225"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String 'Handle new assignment with:\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String '\tNew active tasks: {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String '\tNew standby tasks: {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00254] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String '\tExisting active tasks: {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String '\tExisting standby tasks: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String 'Hit exceptions while closing / recycling tasks: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00311] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String 'Unexpected failure to close ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00312] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String ' task-s- [' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00312] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String ']. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String '- follows.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleAssignment@POLYN367548 the MagicNumber/String 'First unexpected exception -for task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00337] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'Tasks to close-dirty should be empty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#352"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00352] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'Task {} should have been committed when it was suspended, but it reports non-empty ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00353] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'offsets {} to commit; this means it failed during last commit and hence should be closed dirty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00363] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'Failed to checkpoint task %s. Attempting to close remaining tasks before re-throwing:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00386] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00405] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCloseAndRecycle@POLYN372424 the MagicNumber/String 'Failed to recycle task %s cleanly. Attempting to close remaining tasks before re-throwing:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00735] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeTaskDirty@POLYN392269 the MagicNumber/String 'Error flushing caches of dirty task {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#741"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00741] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeTaskDirty@POLYN392269 the MagicNumber/String 'Error suspending dirty task {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01099] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN410256 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01106] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeCloseTasksFromRemovedTopologies@POLYN410256 the MagicNumber/String 'Caught the following exception while closing tasks from a removed topology:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00792] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#807"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00807] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00808] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String ' producer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00808] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String 'Ignoring an exception while closing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00813"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#813"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00813] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeAndCleanUpTasks@POLYN395090 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00487] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#501"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00501] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'The following revoked partitions {} are missing from the current task partitions. It could ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#502"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00502] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'potentially be due to race condition of consumer detecting the heartbeat failure, or the tasks ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#503"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00503] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'have been cleaned up by the handleAssignment callback.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00524"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#524"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00524] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Some tasks were corrupted when trying to commit offsets, these will be cleaned and revived: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#529"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00529] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00531] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Timed out while trying to commit all tasks during revocation, these will be cleaned and revived' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#535"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00535] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#537"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00537] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Exception caught while committing those revoked tasks ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#538"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00538] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00547] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#549"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00549] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Exception caught while post-committing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00562"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#562"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00562] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00564] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Exception caught while post-committing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00575"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#575"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00575] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String 'Caught the following exception while trying to suspend revoked task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00580] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleRevocation@POLYN379772 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00210] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String 'Error flushing cache for corrupted task {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00218] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#221"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00221] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String 'Error suspending corrupted task {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String 'Expected the current consumer assignment {} to contain the input partitions {}. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.closeDirtyAndRevive@POLYN365503 the MagicNumber/String 'Will proceed to recover.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String 'Some additional tasks were found corrupted while trying to commit, these will be added to the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String 'tasks to clean and revive: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String 'Hit TimeoutException when committing all non-corrupted tasks, these will be closed and revived' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00188] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleCorruption@POLYN363136 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#604"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00604] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleLostAll@POLYN385737 the MagicNumber/String 'Closing lost active tasks as zombies.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#845"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00845] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00848"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#848"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00848] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#863"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00863] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00865"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#865"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00865] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String 'Exception caught while post-committing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00872] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#877"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00877] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#888"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00888] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String 'Exception caught while committing tasks during shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00889"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#889"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00889] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#902"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00902] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String 'Exception caught while clean-closing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00904] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00907"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#907"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00907] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String 'Exception caught while clean-closing task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#908"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00908] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanActiveTasks@POLYN396669 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#929"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00929] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryCloseCleanStandbyTasks@POLYN402379 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#668"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00668] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToLockAllNonEmptyTaskDirectories@POLYN388877 the MagicNumber/String 'Temporarily locked unassigned task {} for the upcoming rebalance' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01000"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1000"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01000] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1001"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01001] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String 'Unable to locate active task for received-record partition {}. Current tasks: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01002"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1002"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01002] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String '&amp;gt;' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1003"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01003] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.addRecordsToTasks@POLYN406007 the MagicNumber/String 'Task was unexpectedly missing for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1076"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01076] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN409858 the MagicNumber/String 'Proactively unsubscribing from all topics due to empty topology' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01038] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN408338 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1045"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01045] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN408338 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01199] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeWrapAndSetFirstException@POLYN415997 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#1201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01201] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.maybeWrapAndSetFirstException@POLYN415997 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00753"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#753"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00753] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00762] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00763"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#763"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00763] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String 'Ignoring an exception while unlocking remaining task directories.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00769"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00769] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00770] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String 'Ignoring an exception while closing thread producer.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00780] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#781"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00781] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String 'Ignoring an exception while unlocking remaining task directories.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00785] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#786"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00786] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN393202 the MagicNumber/String 'Unexpected exception while closing task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00702] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00713"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00713] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00715] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String 'Expected not to get a sentinel offset, but got: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#719"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00719] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00720] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.sumOfChangelogOffsets@POLYN391120 the MagicNumber/String 'Sum of changelog offsets for task {} overflowed, pinning to Long.MAX_VALUE' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00421] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00432"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#432"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00432] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String 'Could not initialize task {} since: {}; will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00433] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00457"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String 'Could not complete restoration for %s due to the following exception; will retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#462"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00462] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00467"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskManager.java.html#467"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00467] In the recursive method org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN377036 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
