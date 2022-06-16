console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java 42 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.xml" 
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class Tasks contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method setMainConsumer arguments Consumer&lt;byte[] ,byte[] &gt;  mainConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method handleNewAssignmentAndCreateTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasksToCreate|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasksToCreate|Set&lt;TaskId &gt;  assignedActiveTasks|Set&lt;TaskId &gt;  assignedStandbyTasks"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method maybeCreateTasksFromNewTopologies arguments Set&lt;String &gt;  currentNamedTopologies"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method createTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  activeTasksToCreate|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  standbyTasksToCreate"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument activeTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument standbyTasksToCreate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN204925 the MagicNumber/String  'Attempted to create an active task that we already own: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN204925 the MagicNumber/String  'Attempted to create a standby task that we already own: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method convertActiveToStandby arguments StreamTask  activeTask|Set&lt;TopicPartition &gt;  partitions|Map&lt;TaskId ,RuntimeException &gt;  taskCloseExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument activeTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN207061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN207061 the MagicNumber/String  'Attempted to convert unknown active task to standby task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method convertStandbyToActive arguments StandbyTask  standbyTask|Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument standbyTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN208414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN208414 the MagicNumber/String  'Attempted to convert unknown standby task to stream task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method updateInputPartitionsAndResume arguments Task  task|Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.Tasks.updateInputPartitionsAndResume@POLYN209336 the MagicNumber/String  'Update task {} inputPartitions: current {}, new {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method cleanUpTaskProducerAndRemoveTask arguments TaskId  taskId|Map&lt;TaskId ,RuntimeException &gt;  taskCloseExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument taskCloseExceptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.Tasks.cleanUpTaskProducerAndRemoveTask@POLYN210405 the MagicNumber/String  'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method closeAndRemoveTaskProducerIfNeeded arguments Task  activeTask"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#202"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00202] The argument activeTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method removeTaskBeforeClosing arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method activeTasksForInputPartition arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method standbyTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.processor.internals.Tasks.standbyTask@POLYN212500 the MagicNumber/String  'Standby task unknown: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method task arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.Tasks.task@POLYN212840 the MagicNumber/String  'Task unknown: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method tasks arguments Collection&lt;TaskId &gt;  taskIds"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#283"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00283] For method owned arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method streamsProducerForTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00311] For method addToSuccessfullyProcessed arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method removeTaskFromCuccessfullyProcessedBeforeClosing arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#324"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00324] For method addTask arguments Task  task"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#324"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00324] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
