console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java 50 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.Tasks"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.Tasks" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Tasks"
 , "c2" : "Tasks(LogContext;TopologyMetadata;ActiveTaskCreator;StandbyTaskCreator)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setMainConsumer(Consumer<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleNewAssignmentAndCreateTasks(Map<TaskId,Set<TopicPartition>>;Map<TaskId,Set<TopicPartition>>;Set<TaskId>;Set<TaskId>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeCreateTasksFromNewTopologies(Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "void"
 , "c2" : "createTasks(Map<TaskId,Set<TopicPartition>>;Map<TaskId,Set<TopicPartition>>)"
 , "c3" : "10"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "convertActiveToStandby(StreamTask;Set<TopicPartition>;Map<TaskId,RuntimeException>)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "convertStandbyToActive(StandbyTask;Set<TopicPartition>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateInputPartitionsAndResume(Task;Set<TopicPartition>)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cleanUpTaskProducerAndRemoveTask(TaskId;Map<TaskId,RuntimeException>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reInitializeThreadProducer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeThreadProducerIfNeeded()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeAndRemoveTaskProducerIfNeeded(Task)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeTaskBeforeClosing(TaskId)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Task"
 , "c2" : "activeTasksForInputPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Task"
 , "c2" : "standbyTask(TaskId)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Task"
 , "c2" : "task(TaskId)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "tasks(Collection<TaskId>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "activeTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "allTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "notPausedActiveTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "notPausedTasks()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c2" : "activeTaskMap()"
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
   "c1" : "Map<TaskId,Task>"
 , "c2" : "tasksPerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "owned(TaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StreamsProducer"
 , "c2" : "streamsProducerForTask(TaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StreamsProducer"
 , "c2" : "threadProducer()"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "Consumer<byte[],byte[]>"
 , "c2" : "mainConsumer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Task>"
 , "c2" : "successfullyProcessed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addToSuccessfullyProcessed(Task)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeTaskFromCuccessfullyProcessedBeforeClosing(Task)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearSuccessfullyProcessed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addTask(Task)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class Tasks contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method setMainConsumer arguments Consumer&lt;byte[] ,byte[] &gt;  mainConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method handleNewAssignmentAndCreateTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasksToCreate|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasksToCreate|Set&lt;TaskId &gt;  assignedActiveTasks|Set&lt;TaskId &gt;  assignedStandbyTasks"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method maybeCreateTasksFromNewTopologies arguments Set&lt;String &gt;  currentNamedTopologies"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method createTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasksToCreate|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasksToCreate"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00088] For method createTasks list of called methods Object monObjet|double taskToBeCreated_getKeyN211553"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument activeTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument standbyTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN210713 the MagicNumber/String  'Attempted to create an active task that we already own: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN210713 the MagicNumber/String  'Attempted to create a standby task that we already own: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method convertActiveToStandby arguments StreamTask  activeTask|Set&lt;TopicPartition &gt;  partitions|Map&lt;TaskId ,RuntimeException &gt;  taskCloseExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00128] For method convertActiveToStandby list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.StandbyTask standbyTaskCreator_createStandbyTaskFromActiveN213905"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument activeTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN212849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN212849 the MagicNumber/String  'Attempted to convert unknown active task to standby task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method convertStandbyToActive arguments StandbyTask  standbyTask|Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00147] For method convertStandbyToActive list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.StreamTask activeTaskCreator_createActiveTaskFromStandbyN214612"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument standbyTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN214212 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN214212 the MagicNumber/String  'Attempted to convert unknown standby task to stream task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method updateInputPartitionsAndResume arguments Task  task|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.processor.internals.Tasks.updateInputPartitionsAndResume@POLYN215134 the MagicNumber/String  'Update task {} inputPartitions: current {}, new {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method cleanUpTaskProducerAndRemoveTask arguments TaskId  taskId|Map&lt;TaskId ,RuntimeException &gt;  taskCloseExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#178"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00178] The argument taskCloseExceptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.Tasks.cleanUpTaskProducerAndRemoveTask@POLYN216203 the MagicNumber/String  'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method closeAndRemoveTaskProducerIfNeeded arguments Task  activeTask"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00198] The argument activeTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method removeTaskBeforeClosing arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method activeTasksForInputPartition arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method standbyTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.streams.processor.internals.Tasks.standbyTask@POLYN218308 the MagicNumber/String  'Standby task unknown: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method task arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.Tasks.task@POLYN218648 the MagicNumber/String  'Task unknown: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method tasks arguments Collection&lt;TaskId &gt;  taskIds"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#293"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00293] For method owned arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#297"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00297] For method streamsProducerForTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#321"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00321] For method addToSuccessfullyProcessed arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#325"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00325] For method removeTaskFromCuccessfullyProcessedBeforeClosing arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#334"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00334] For method addTask arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#334"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00334] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.Tasks.clear@POLYN217911"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.Tasks.cleanUpTaskProducerAndRemoveTask@POLYN216203"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.Tasks.updateInputPartitionsAndResume@POLYN215134"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.streams.processor.internals.Tasks.cleanUpTaskProducerAndRemoveTask@POLYN216203 the MagicNumber/String 'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.streams.processor.internals.Tasks.updateInputPartitionsAndResume@POLYN215134 the MagicNumber/String 'Update task {} inputPartitions: current {}, new {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
