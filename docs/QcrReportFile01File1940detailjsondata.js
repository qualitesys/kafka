console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java 69 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.TaskExecutor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.TaskExecutor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#56"
 , "c1" : "TaskExecutor"
 , "c2" : "TaskExecutor(Tasks;TaskExecutionMetadata;ProcessingMode;boolean;LogContext)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#72"
 , "c1" : "int"
 , "c2" : "process(int;Time)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#94"
 , "c1" : "long"
 , "c2" : "processTask(Task;int;long;Time)"
 , "c3" : "3"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#144"
 , "c1" : "int"
 , "c2" : "commitTasksAndMaybeUpdateCommittableOffsets(Collection&lt;Task&gt;;Map&lt;Task,Map&lt;TopicPartition,OffsetAndMetadata&gt;&gt;)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#177"
 , "c1" : "void"
 , "c2" : "commitOffsetsOrTransaction(Map&lt;Task,Map&lt;TopicPartition,OffsetAndMetadata&gt;&gt;)"
 , "c3" : "8"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00250"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#250"
 , "c1" : "void"
 , "c2" : "updateTaskCommitMetadata(Map&lt;TopicPartition,OffsetAndMetadata&gt;)"
 , "c3" : "5"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00262"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#262"
 , "c1" : "void"
 , "c2" : "commitSuccessfullyProcessedTasks()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00275"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#275"
 , "c1" : "int"
 , "c2" : "punctuate()"
 , "c3" : "4"
 , "c4" : "11"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method process arguments int  maxNumRecords|Time  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method process list of called methods Object monObjet|long time_millisecondsN191944"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.processor.internals.TaskExecutor.process@POLYN191600 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.processor.internals.TaskExecutor.process@POLYN191600 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method processTask arguments Task  task|int  maxNumRecords|long  begin|Time  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Successfully processed task {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Could not complete processing records for %s due to the following exception; will move to next task and retry later' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Failed to process stream task {} since it got migrated to another thread already. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Will trigger a new rebalance and close all tasks as zombies together.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Failed to process stream task %s due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String  'Failed to process stream task %s due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method commitTasksAndMaybeUpdateCommittableOffsets arguments Collection&lt;Task &gt;  tasksToCommit|Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  consumedOffsetsAndMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00144] For method commitTasksAndMaybeUpdateCommittableOffsets list of called methods Object monObjet|java.util.Map task_prepareCommitN195797"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument consumedOffsetsAndMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitTasksAndMaybeUpdateCommittableOffsets@POLYN195329 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitTasksAndMaybeUpdateCommittableOffsets@POLYN195329 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method commitOffsetsOrTransaction arguments Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  offsetsPerTask"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00177] For method commitOffsetsOrTransaction list of called methods Object monObjet|java.util.Collection offsetsPerTask_valuesN198419"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument offsetsPerTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00190] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Committing task offsets {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Committing task %s failed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Committing task(s) %s failed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Consumer committing offsets failed, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'indicating the corresponding thread is no longer part of the group' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Committing task(s) %s failed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN196721 the MagicNumber/String  'Error encountered committing offsets via consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method updateTaskCommitMetadata arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  allOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#250"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00250] The argument allOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00253] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitSuccessfullyProcessedTasks@POLYN201424 the MagicNumber/String  'Streams encountered an error when processing tasks.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitSuccessfullyProcessedTasks@POLYN201424 the MagicNumber/String  ' Will commit all previously successfully processed tasks {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00286] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00290] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00294] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String  'Failed to punctuate stream task {} since it got migrated to another thread already. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String  'Will trigger a new rebalance and close all tasks as zombies together.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String  'Failed to punctuate stream task {} due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String  'Failed to punctuate stream task {} due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Successfully processed task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Could not complete processing records for %s due to the following exception; will move to next task and retry later' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Failed to process stream task {} since it got migrated to another thread already. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Will trigger a new rebalance and close all tasks as zombies together.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Failed to process stream task %s due to the following error:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN192685 the MagicNumber/String 'Failed to process stream task %s due to the following error:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String 'Failed to punctuate stream task {} since it got migrated to another thread already. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String 'Will trigger a new rebalance and close all tasks as zombies together.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String 'Failed to punctuate stream task {} due to the following error:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN202024 the MagicNumber/String 'Failed to punctuate stream task {} due to the following error:' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
