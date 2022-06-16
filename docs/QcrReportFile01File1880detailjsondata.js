console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java 52 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.xml" 
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
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
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class TaskExecutor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method process arguments int  maxNumRecords|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.processor.internals.TaskExecutor.process@POLYN202312 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.processor.internals.TaskExecutor.process@POLYN202312 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method processTask arguments Task  task|int  maxNumRecords|long  begin|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Successfully processed task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Could not complete processing records for %s due to the following exception; will move to next task and retry later' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Failed to process stream task {} since it got migrated to another thread already. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Will trigger a new rebalance and close all tasks as zombies together.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Failed to process stream task %s due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.processor.internals.TaskExecutor.processTask@POLYN203397 the MagicNumber/String  'Failed to process stream task %s due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method commitTasksAndMaybeUpdateCommittableOffsets arguments Collection&lt;Task &gt;  tasksToCommit|Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  consumedOffsetsAndMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument consumedOffsetsAndMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitTasksAndMaybeUpdateCommittableOffsets@POLYN206041 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitTasksAndMaybeUpdateCommittableOffsets@POLYN206041 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method commitOffsetsOrTransaction arguments Map&lt;Task ,Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  offsetsPerTask"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument offsetsPerTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00156] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Committing task offsets {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Committing task %s failed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Committing task(s) %s failed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Consumer committing offsets failed, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'indicating the corresponding thread is no longer part of the group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Committing task(s) %s failed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN207433 the MagicNumber/String  'Error encountered committing offsets via consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method updateTaskCommitMetadata arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  allOffsets"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#216"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00216] The argument allOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitSuccessfullyProcessedTasks@POLYN212086 the MagicNumber/String  'Streams encountered an error when processing tasks.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.processor.internals.TaskExecutor.commitSuccessfullyProcessedTasks@POLYN212086 the MagicNumber/String  ' Will commit all previously successfully processed tasks {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00250] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00254] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00258] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN212686 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN212686 the MagicNumber/String  'Failed to punctuate stream task {} since it got migrated to another thread already. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN212686 the MagicNumber/String  'Will trigger a new rebalance and close all tasks as zombies together.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN212686 the MagicNumber/String  'Failed to punctuate stream task {} due to the following error:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskExecutor.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.processor.internals.TaskExecutor.punctuate@POLYN212686 the MagicNumber/String  'Failed to punctuate stream task {} due to the following error:' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
