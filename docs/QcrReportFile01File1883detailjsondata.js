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
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN206857 the MagicNumber/String  'Attempted to create an active task that we already own: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.processor.internals.Tasks.createTasks@POLYN206857 the MagicNumber/String  'Attempted to create a standby task that we already own: ' should be converted to const"
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
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument activeTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN208993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.processor.internals.Tasks.convertActiveToStandby@POLYN208993 the MagicNumber/String  'Attempted to convert unknown active task to standby task: ' should be converted to const"
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
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument standbyTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN210346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/Tasks.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.processor.internals.Tasks.convertStandbyToActive@POLYN210346 the MagicNumber/String  'Attempted to convert unknown standby task to stream task: ' should be converted to const"
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
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.processor.internals.Tasks.updateInputPartitionsAndResume@POLYN211268 the MagicNumber/String  'Update task {} inputPartitions: current {}, new {}' should be converted to const"
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
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.Tasks.cleanUpTaskProducerAndRemoveTask@POLYN212337 the MagicNumber/String  'Failed to close task %s cleanly. Attempting to close remaining tasks before re-throwing:' should be converted to const"
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
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.streams.processor.internals.Tasks.standbyTask@POLYN214432 the MagicNumber/String  'Standby task unknown: ' should be converted to const"
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
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.Tasks.task@POLYN214772 the MagicNumber/String  'Task unknown: ' should be converted to const"
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
]
};
console.log('leListeStr 99 main end');
