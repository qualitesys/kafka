console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java 324 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractTaskProcessorNodePunctuator"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StreamTask"
 , "c2" : "StreamTask(TaskId;Set<TopicPartition>;ProcessorTopology;Consumer<byte[],byte[]>;TaskConfig;StreamsMetricsImpl;StateDirectory;ThreadCache;Time;ProcessorStateManager;RecordCollector;InternalProcessorContext;LogContext)"
 , "c3" : "4"
 , "c4" : "35"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,RecordQueue>"
 , "c2" : "createPartitionQueues()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isActive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeIfNeeded()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addPartitionsForOffsetReset(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeRestoration(java.util.function.Consumer<Set<TopicPartition>>)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "suspend()"
 , "c3" : "6"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeTopology()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resume()"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "prepareCommit()"
 , "c3" : "8"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "findOffset(TopicPartition)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "committableOffsetsAndMetadata()"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "postCommit(boolean)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearCommitStatuses()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "extractPartitionTimes()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeClean()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeDirty()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateInputPartitions(Set<TopicPartition>;Map<String,List<String>>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeCleanAndRecycleState()"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeWriteCheckpoint(boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateClean()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeAllSensors()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(boolean)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isProcessable(long)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "process(long)"
 , "c3" : "8"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "doProcess(long)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordProcessBatchTime(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordProcessTimeRatioAndBufferSize(long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getStacktraceString(RuntimeException)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "punctuate(ProcessorNode<?,?,?,?>;long;PunctuationType;Punctuator)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateProcessorContext(ProcessorNode<?,?,?,?>;long;ProcessorRecordContext)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "checkpointableOffsets()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetOffsetsIfNeededAndInitializeMetadata(java.util.function.Consumer<Set<TopicPartition>>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeTaskTimeAndProcessorMetadata(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "purgeableOffsets()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeTopology()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addRecords(TopicPartition;Iterable<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Cancellable"
 , "c2" : "schedule(long;PunctuationType;Punctuator)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Cancellable"
 , "c2" : "schedule(long;long;PunctuationType;Punctuator)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybePunctuateStreamTime()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybePunctuateSystemTime()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeRecordE2ELatency(long;long;String)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestCommit()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "commitRequested()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InternalProcessorContext"
 , "c2" : "processorContext()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "commitNeeded()"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "changelogOffsets()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "committedOffsets()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,Long>"
 , "c2" : "highWaterMark()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitToSuspend()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Long>"
 , "c2" : "timeCurrentIdlingStarted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateCommittedOffsets(TopicPartition;Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateEndOffsets(TopicPartition;Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasRecordsQueued()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RecordCollector"
 , "c2" : "recordCollector()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "getNonEmptyTopicPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "totalBytesBuffered()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numBuffered()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "streamTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.svg" }

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
 , "c4" : "95"
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
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
 , "c4" : "151"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument topology is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument stateMgr is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument processorContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.processor.internals.StreamTask.StreamTask@POLYN309263 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.StreamTask.StreamTask@POLYN309263 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.StreamTask.StreamTask@POLYN309263 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.StreamTask.isActive@POLYN314423 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeIfNeeded@POLYN314654 the MagicNumber/String  'Initialized' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method addPartitionsForOffsetReset arguments Set&lt;TopicPartition &gt;  partitionsForOffsetReset"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method completeRestoration arguments java.util.function.Consumer&lt;Set&lt;TopicPartition &gt; &gt;  offsetResetter"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String  'Restored and ready to run' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String  ' while completing restoration for active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String  ' while completing restoration for active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  'Suspended running' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  'Skip suspending since state is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  ' while suspending active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String  ' while suspending active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00302] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String  'Closing processor topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Skip resuming since state is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Deleted check point file upon resuming with EOS enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Encountered error while deleting the checkpoint file due to this exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Resumed to restoring state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  ' while resuming active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String  ' while resuming active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  'Prepared {} task for committing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  'Skipped preparing {} task for commit since there is nothing to commit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  ' while preparing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  ' for committing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  ' while preparing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String  ' for committing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method findOffset arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00386] For method findOffset list of called methods Object monObjet|Long partitionGroup_headRecordOffsetN321266"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.processor.internals.StreamTask.findOffset@POLYN321166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#405"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00405] For method committableOffsetsAndMetadata list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.TopicPartition,Long&gt; extractPartitionTimesN322307|Long findOffsetN322775"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00426] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.streams.processor.internals.StreamTask.committableOffsetsAndMetadata@POLYN321836 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.streams.processor.internals.StreamTask.committableOffsetsAndMetadata@POLYN321836 the MagicNumber/String  ' while getting committable offsets for active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.processor.internals.StreamTask.committableOffsetsAndMetadata@POLYN321836 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.processor.internals.StreamTask.committableOffsetsAndMetadata@POLYN321836 the MagicNumber/String  ' while post committing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#444"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00444] For method postCommit arguments boolean  enforceCheckpoint"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  'Skipped writing checkpoint for {} task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  'Finalized commit for {} task with enforce checkpoint {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  'Finalized commit for {} task with eos {} enforce checkpoint {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  ' while post committing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String  ' while post committing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.streams.processor.internals.StreamTask.clearCommitStatuses@POLYN324906 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.streams.processor.internals.StreamTask.clearCommitStatuses@POLYN324906 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.streams.processor.internals.StreamTask.clearCommitStatuses@POLYN324906 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.streams.processor.internals.StreamTask.clearCommitStatuses@POLYN324906 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.streams.processor.internals.StreamTask.closeClean@POLYN325703 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.streams.processor.internals.StreamTask.closeClean@POLYN325703 the MagicNumber/String  'Closed clean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.streams.processor.internals.StreamTask.closeDirty@POLYN326028 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.streams.processor.internals.StreamTask.closeDirty@POLYN326028 the MagicNumber/String  'Closed dirty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#511"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00511] For method updateInputPartitions arguments Set&lt;TopicPartition &gt;  topicPartitions|Map&lt;String ,List&lt;String &gt; &gt;  allTopologyNodesToSourceTopics"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.streams.processor.internals.StreamTask.updateInputPartitions@POLYN326309 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String  ' while recycling active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String  ' while recycling active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String  'Closed clean and recycled state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#548"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00548] For method maybeWriteCheckpoint arguments boolean  enforceCheckpoint"
}} 
,
{ "ligne" : {
   "c1" : "00562"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.streams.processor.internals.StreamTask.validateClean@POLYN328407 the MagicNumber/String  'Tried to close clean but there was pending uncommitted data, this means we failed to' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.streams.processor.internals.StreamTask.validateClean@POLYN328407 the MagicNumber/String  ' commit and should close as dirty instead' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.streams.processor.internals.StreamTask.validateClean@POLYN328407 the MagicNumber/String  'Tried to close dirty task as clean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#576"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00576] For method close arguments boolean  clean"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'partition group close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'state manager close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00605"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#605"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00605] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'record collector close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00612"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00612] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'Skip closing since state is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'Illegal state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  ' while closing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  'Unknown state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  ' while closing active task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00624] In method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00631] For method isProcessable arguments long  wallClockTime"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00631] For method isProcessable list of called methods Object monObjet|boolean partitionGroup_readyToProcessN331437"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String  'Stream task {} is already in {} state, skip processing it.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#638"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00638] In method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00659"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#659"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00659] For method process arguments long  wallClockTime"
}} 
,
{ "ligne" : {
   "c1" : "00659"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#659"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00659] For method process list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.StampedRecord partitionGroup_nextRecordN332360"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00683"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00683] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#692"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00692] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00701"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#701"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00701] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00706"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#706"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00706] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  'Exception caught in process. taskId=%s, processor=%s, topic=%s, partition=%d, offset=%d, stacktrace=%s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00716"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#716"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00716] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#723"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00723] In method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#727"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00727] For method doProcess arguments long  wallClockTime"
}} 
,
{ "ligne" : {
   "c1" : "00730"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00730] In method org.apache.kafka.streams.processor.internals.StreamTask.doProcess@POLYN334520 the MagicNumber/String  'Start processing one record [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00750] In method org.apache.kafka.streams.processor.internals.StreamTask.doProcess@POLYN334520 the MagicNumber/String  'Completed processing one record [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#754"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00754] For method recordProcessBatchTime arguments long  processBatchTime"
}} 
,
{ "ligne" : {
   "c1" : "00759"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#759"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00759] For method recordProcessTimeRatioAndBufferSize arguments long  allTaskProcessMs|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.streams.processor.internals.StreamTask.recordProcessTimeRatioAndBufferSize@POLYN336143 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00765"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#765"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00765] For method getStacktraceString arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "00766"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#766"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00766] In method org.apache.kafka.streams.processor.internals.StreamTask.getStacktraceString@POLYN336526 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00772] In method org.apache.kafka.streams.processor.internals.StreamTask.getStacktraceString@POLYN336526 the MagicNumber/String  'Encountered error extracting stacktrace from this exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#780"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00780] For method punctuate arguments ProcessorNode&lt;? ,? ,? ,? &gt;  node|long  timestamp|PunctuationType  type|Punctuator  punctuator"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#780"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00780] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00784"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#784"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00784] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00785] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  '%sCurrent node is not null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  'Punctuating processor {} with timestamp {} and punctuation type {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  '%sException caught while punctuating processor '%s'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00810"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00810] In method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00815"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#815"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00815] For method updateProcessorContext arguments ProcessorNode&lt;? ,? ,? ,? &gt;  currNode|long  wallClockTime|ProcessorRecordContext  recordContext"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#830"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00830] In method org.apache.kafka.streams.processor.internals.StreamTask.checkpointableOffsets@POLYN339537 the MagicNumber/String  'Checkpointable offsets {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#835"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00835] For method resetOffsetsIfNeededAndInitializeMetadata arguments java.util.function.Consumer&lt;Set&lt;TopicPartition &gt; &gt;  offsetResetter"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#835"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00835] The argument offsetResetter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00841"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00841] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.streams.processor.internals.StreamTask.resetOffsetsIfNeededAndInitializeMetadata@POLYN340153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#853"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00853] In method org.apache.kafka.streams.processor.internals.StreamTask.resetOffsetsIfNeededAndInitializeMetadata@POLYN340153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00858"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#858"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00858] In method org.apache.kafka.streams.processor.internals.StreamTask.resetOffsetsIfNeededAndInitializeMetadata@POLYN340153 the MagicNumber/String  'Encountered {} while trying to fetch committed offsets, will retry initializing the metadata in the next loop.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00859"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#859"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00859] In method org.apache.kafka.streams.processor.internals.StreamTask.resetOffsetsIfNeededAndInitializeMetadata@POLYN340153 the MagicNumber/String  '\nConsider overwriting consumer config {} to a larger value to avoid timeout errors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00866"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#866"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00866] In method org.apache.kafka.streams.processor.internals.StreamTask.resetOffsetsIfNeededAndInitializeMetadata@POLYN340153 the MagicNumber/String  'task [%s] Failed to initialize offsets for %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#870"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00870] For method initializeTaskTimeAndProcessorMetadata arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsetsAndMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#870"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00870] For method initializeTaskTimeAndProcessorMetadata list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.TopicPartitionMetadata TopicPartitionMetadata_decodeN342625|long committedTimestampAndMeta_partitionTimeN342744|org.apache.kafka.streams.processor.internals.ProcessorMetadata committedTimestampAndMeta_processorMetadataN343080"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#870"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00870] The argument offsetsAndMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00873"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#873"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00873] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00874] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00877] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00883"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00883] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00876"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#876"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00876] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00880"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#880"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00880] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String  'A committed timestamp was detected: setting the partition time of partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00881"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#881"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00881] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String  ' to {} in stream task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00886] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String  'No committed timestamp was found in metadata for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String  'No committed offset for partition {}, therefore no timestamp can be found for this partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#902"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00902] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.streams.processor.internals.StreamTask.purgeableOffsets@POLYN343853 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#914"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00914] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTopology@POLYN344575 the MagicNumber/String  'Initializing processor nodes of the topology' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.streams.processor.internals.StreamTask.initializeTopology@POLYN344575 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00927] For method addRecords arguments TopicPartition  partition|Iterable&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00927] For method addRecords list of called methods Object monObjet|int partitionGroup_addRawRecordsN345471"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00931] In method org.apache.kafka.streams.processor.internals.StreamTask.addRecords@POLYN345272 the MagicNumber/String  'Added records into the buffered queue of partition {}, new queue size is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00937] In method org.apache.kafka.streams.processor.internals.StreamTask.addRecords@POLYN345272 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#943"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00943] For method schedule arguments long  interval|PunctuationType  type|Punctuator  punctuator"
}} 
,
{ "ligne" : {
   "c1" : "00947"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.streams.processor.internals.StreamTask.schedule@POLYN346116 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00952"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#952"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00952] In method org.apache.kafka.streams.processor.internals.StreamTask.schedule@POLYN346116 the MagicNumber/String  'Unrecognized PunctuationType: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#957"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00957] For method schedule arguments long  startTime|long  interval|PunctuationType  type|Punctuator  punctuator"
}} 
,
{ "ligne" : {
   "c1" : "00958"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#958"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00958] In method org.apache.kafka.streams.processor.internals.StreamTask.schedule@POLYN346940 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00959] In method org.apache.kafka.streams.processor.internals.StreamTask.schedule@POLYN346940 the MagicNumber/String  '%sCurrent node is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00973"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00973] In method org.apache.kafka.streams.processor.internals.StreamTask.schedule@POLYN346940 the MagicNumber/String  'Unrecognized PunctuationType: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00978"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#978"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00978] For method maybePunctuateStreamTime list of called methods Object monObjet|long partitionGroup_streamTimeN348138|boolean streamTimePunctuationQueue_mayPunctuateN348351"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00984] In method org.apache.kafka.streams.processor.internals.StreamTask.maybePunctuateStreamTime@POLYN348058 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.streams.processor.internals.StreamTask.maybePunctuateStreamTime@POLYN348058 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#997"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00997] For method maybePunctuateSystemTime list of called methods Object monObjet|boolean systemTimePunctuationQueue_mayPunctuateN348947"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.streams.processor.internals.StreamTask.maybePunctuateSystemTime@POLYN348787 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1009"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01009] For method maybeRecordE2ELatency arguments long  recordTimestamp|long  now|String  nodeName"
}} 
,
{ "ligne" : {
   "c1" : "01011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1011"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01011] In method org.apache.kafka.streams.processor.internals.StreamTask.maybeRecordE2ELatency@POLYN349197 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01012] In method org.apache.kafka.streams.processor.internals.StreamTask.maybeRecordE2ELatency@POLYN349197 the MagicNumber/String  'Requested to record e2e latency but could not find sensor for node ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1020"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01020] In method org.apache.kafka.streams.processor.internals.StreamTask.requestCommit@POLYN349851 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1037"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01037] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350382 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1041"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01041] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "01044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01044] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  'TaskId: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01046] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1049"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01049] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01055] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  'Partitions [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1060"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01060] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01061] In method org.apache.kafka.streams.processor.internals.StreamTask.toString@POLYN350638 the MagicNumber/String  ']\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1075"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1086"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1072"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01072] In method org.apache.kafka.streams.processor.internals.StreamTask.commitNeeded@POLYN352111 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1082"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01082] In method org.apache.kafka.streams.processor.internals.StreamTask.commitNeeded@POLYN352111 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1083"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01083] In method org.apache.kafka.streams.processor.internals.StreamTask.commitNeeded@POLYN352111 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1084"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01084] In method org.apache.kafka.streams.processor.internals.StreamTask.commitNeeded@POLYN352111 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01125] In method org.apache.kafka.streams.processor.internals.StreamTask.transitToSuspend@POLYN354027 the MagicNumber/String  'Suspended {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01135] For method updateCommittedOffsets arguments TopicPartition  topicPartition|Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "01139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01139] For method updateEndOffsets arguments TopicPartition  topicPartition|Long  offset"
}} 
,
{ "ligne" : {
   "c1" : "01144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01144] In method org.apache.kafka.streams.processor.internals.StreamTask.hasRecordsQueued@POLYN354862 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01168] The class RecordQueueCreator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01181] For method createQueue arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01181] For method createQueue list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.SourceNode&lt;?,?&gt; topology_sourceN356108|long source_getTimestampExtractorN356424"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01181] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01183] In method org.apache.kafka.streams.processor.internals.StreamTask.RecordQueueCreator.createQueue@POLYN355978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01185] In method org.apache.kafka.streams.processor.internals.StreamTask.RecordQueueCreator.createQueue@POLYN355978 the MagicNumber/String  'Topic is unknown to the topology. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01186] In method org.apache.kafka.streams.processor.internals.StreamTask.RecordQueueCreator.createQueue@POLYN355978 the MagicNumber/String  'This may happen if different KafkaStreams instances of the same application execute different Topologies. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01187] In method org.apache.kafka.streams.processor.internals.StreamTask.RecordQueueCreator.createQueue@POLYN355978 the MagicNumber/String  'Note that Topologies are only identical if all operators are added in the same order.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01192] In method org.apache.kafka.streams.processor.internals.StreamTask.RecordQueueCreator.createQueue@POLYN355978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.doProcess@POLYN334520"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.closeClean@POLYN325703"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.closeDirty@POLYN326028"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.transitToSuspend@POLYN354027"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.maybeWriteCheckpoint@POLYN328115"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.initializeTopology@POLYN344575"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.addRecords@POLYN345272"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.checkpointableOffsets@POLYN339537"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.initializeIfNeeded@POLYN314654"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamTask.updateInputPartitions@POLYN326309"
}} 
,
{ "ligne" : {
   "c1" : "00660"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#660"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00660] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00662] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#669"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00669] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00670] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00683"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#683"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00683] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#688"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00688] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00692"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#692"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00692] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00697] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00701"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#701"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00701] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00706"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#706"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00706] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String 'Exception caught in process. taskId=%s, processor=%s, topic=%s, partition=%d, offset=%d, stacktrace=%s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00716"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#716"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00716] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00720] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#723"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00723] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.process@POLYN332061 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00730"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#730"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00730] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.doProcess@POLYN334520 the MagicNumber/String 'Start processing one record [{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00750] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.doProcess@POLYN334520 the MagicNumber/String 'Completed processing one record [{}]' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#582"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00582] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'partition group close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#599"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00599] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'state manager close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00605"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#605"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00605] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'record collector close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00612"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#612"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00612] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'Skip closing since state is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00618] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String ' while closing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00618] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00621] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String ' while closing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00621"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00621] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00624"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#624"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00624] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.close@POLYN329219 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeClean@POLYN325703 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeClean@POLYN325703 the MagicNumber/String 'Closed clean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#506"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00506] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeDirty@POLYN326028 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#507"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00507] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeDirty@POLYN326028 the MagicNumber/String 'Closed dirty' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00371] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String 'Prepared {} task for committing' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00374] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String 'Skipped preparing {} task for commit since there is nothing to commit' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00379] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String ' for committing' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00379] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String ' while preparing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#379"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00379] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String ' for committing' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String ' while preparing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.prepareCommit@POLYN319971 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "01125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#1125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01125] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.transitToSuspend@POLYN354027 the MagicNumber/String 'Suspended {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String 'Closing processor topology' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00305] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00309] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeTopology@POLYN317699 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String 'Suspended running' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String 'Skip suspending since state is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00284] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String ' while suspending active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00284] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String ' while suspending active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.suspend@POLYN316560 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00534] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String ' while recycling active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#534"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00534] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00536] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String ' while recycling active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#536"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00536] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00543] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.closeCleanAndRecycleState@POLYN326785 the MagicNumber/String 'Closed clean and recycled state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String 'Skipped writing checkpoint for {} task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String 'Finalized commit for {} task with enforce checkpoint {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#464"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00464] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String 'Finalized commit for {} task with eos {} enforce checkpoint {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#469"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00469] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String ' while post committing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00469"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#469"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00469] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00472] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String ' while post committing active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#472"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00472] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.postCommit@POLYN323605 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00784"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00784] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00785"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#785"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00785] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String '%sCurrent node is not null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00792] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String 1L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00793] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#794"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00794] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00800] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String 'Punctuating processor {} with timestamp {} and punctuation type {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00808"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#808"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00808] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String '%sException caught while punctuating processor '%s'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00810"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#810"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00810] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.punctuate@POLYN337323 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#914"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00914] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTopology@POLYN344575 the MagicNumber/String 'Initializing processor nodes of the topology' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00920] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTopology@POLYN344575 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String 'Restored and ready to run' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String ' while completing restoration for active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String ' while completing restoration for active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.completeRestoration@POLYN315530 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00931] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.addRecords@POLYN345272 the MagicNumber/String 'Added records into the buffered queue of partition {}, new queue size is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00937] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.addRecords@POLYN345272 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#830"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00830] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.checkpointableOffsets@POLYN339537 the MagicNumber/String 'Checkpointable offsets {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeIfNeeded@POLYN314654 the MagicNumber/String 'Initialized' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00876"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#876"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00876] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00880"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00880] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String 'A committed timestamp was detected: setting the partition time of partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00881"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#881"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00881] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String ' to {} in stream task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#886"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00886] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String 'No committed timestamp was found in metadata for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#894"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00894] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.initializeTaskTimeAndProcessorMetadata@POLYN342033 the MagicNumber/String 'No committed offset for partition {}, therefore no timestamp can be found for this partition' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00636] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String 'Stream task {} is already in {} state, skip processing it.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00638"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#638"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00638] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00644"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#644"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00644] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.isProcessable@POLYN330975 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00322] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Skip resuming since state is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00332] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Deleted check point file upon resuming with EOS enabled' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Encountered error while deleting the checkpoint file due to this exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#338"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00338] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Resumed to restoring state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00343] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String ' while resuming active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00343] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Illegal state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00346] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String ' while resuming active task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00346] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.resume@POLYN318537 the MagicNumber/String 'Unknown state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamTask.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.streams.processor.internals.StreamTask.updateInputPartitions@POLYN326309 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
