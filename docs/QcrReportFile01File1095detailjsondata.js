console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java 88 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractWorkerSourceTask"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WorkerSourceTask"
 , "c2" : "WorkerSourceTask(ConnectorTaskId;SourceTask;TaskStatus.Listener;TargetState;Converter;Converter;HeaderConverter;TransformationChain<SourceRecord>;Producer<byte[],byte[]>;TopicAdmin;Map<String,TopicCreationGroup>;CloseableOffsetStorageReader;OffsetStorageWriter;ConnectorOffsetBackingStore;WorkerConfig;ClusterConfigState;ConnectMetrics;ClassLoader;Time;RetryWithToleranceOperator;StatusBackingStore;Executor)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToInitializeTask()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToEnterSendLoop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginSendIteration()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToPollTask()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordDropped(SourceRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<SubmittedRecords.SubmittedRecord>"
 , "c2" : "prepareToSendRecord(SourceRecord;ProducerRecord<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordDispatched(SourceRecord)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "batchDispatched()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordSent(SourceRecord;ProducerRecord<byte[],byte[]>;RecordMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "producerSendFailed(boolean;ProducerRecord<byte[],byte[]>;SourceRecord;Exception)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finalOffsetCommit(boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "commitOffsets()"
 , "c3" : "9"
 , "c4" : "41"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateCommittableOffsets()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeThrowProducerSendException()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.connect.runtime.WorkerSourceTask.this" }
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
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "40"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.runtime.WorkerSourceTask.WorkerSourceTask@POLYN197806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method recordDropped arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.runtime.WorkerSourceTask.recordDropped@POLYN199708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method prepareToSendRecord arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method recordDispatched arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method recordSent arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|RecordMetadata  recordMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method producerSendFailed arguments boolean  synchronous|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|SourceRecord  preTransformRecord|Exception  e"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument producerRecord is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  'Unrecoverable exception trying to send' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  'Ignoring failed record send: {} failed to send record to {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  '{} failed to send record to {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  '{} Failed record: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method finalOffsetCommit arguments boolean  failed"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00180] For method commitOffsets list of called methods Object monObjet|Long workerConfig_getLongN202300|Long time_millisecondsN203899|java.util.concurrent.Future&lt;Void&gt; offsetWriter_doFlushN204277|boolean time_millisecondsN206328"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#189"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00189] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Committing offsets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Either no records were produced by the task since the last offset commit, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  'or every record has been filtered out by a transformation ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  'or dropped due to transformation or conversion errors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Committing offsets for {} acknowledged messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} There are currently {} pending messages spread across {} source partitions whose offsets will not be committed. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  'The source partition with the most pending messages is {}, with {} pending messages' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} There are currently no pending messages for this offset commit; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  'all messages dispatched to the task's producer since the last commit have been acknowledged' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Finished offset commitOffsets successfully in {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Failed to flush offsets to storage: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Finished flushing offsets to storage' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Flush of offsets interrupted, cancelling' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Flush of offsets threw an unexpected exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Timed out waiting to flush offsets to storage; will try again on next flush interval with latest offsets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  '{} Finished commitOffsets successfully in {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#286"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00286] For method updateCommittableOffsets list of called methods Object monObjet|org.apache.kafka.connect.runtime.SubmittedRecords.CommittableOffsets submittedRecords_committableOffsetsN206723"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#288"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00288] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.runtime.WorkerSourceTask.maybeThrowProducerSendException@POLYN206927 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.WorkerSourceTask.maybeThrowProducerSendException@POLYN206927 the MagicNumber/String  'Unrecoverable exception from producer send callback' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.connect.runtime.WorkerSourceTask.toString@POLYN207201 the MagicNumber/String  'WorkerSourceTask{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.connect.runtime.WorkerSourceTask.toString@POLYN207201 the MagicNumber/String  'id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.runtime.WorkerSourceTask.toString@POLYN207201 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSourceTask.WorkerSourceTask@POLYN197806"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Committing offsets' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00195] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Either no records were produced by the task since the last offset commit, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00196] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String 'or every record has been filtered out by a transformation ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String 'or dropped due to transformation or conversion errors.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Committing offsets for {} acknowledged messages' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00205] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} There are currently {} pending messages spread across {} source partitions whose offsets will not be committed. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String 'The source partition with the most pending messages is {}, with {} pending messages' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} There are currently no pending messages for this offset commit; ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String 'all messages dispatched to the task's producer since the last commit have been acknowledged' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Finished offset commitOffsets successfully in {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00240] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00241] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Failed to flush offsets to storage: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Finished flushing offsets to storage' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00254] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00260] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Flush of offsets interrupted, cancelling' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00263] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Flush of offsets threw an unexpected exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00268] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00270] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Timed out waiting to flush offsets to storage; will try again on next flush interval with latest offsets' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String '{} Finished commitOffsets successfully in {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00283] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.commitOffsets@POLYN202225 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.WorkerSourceTask@POLYN197806 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String 'Unrecoverable exception trying to send' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String 'Ignoring failed record send: {} failed to send record to {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String '{} failed to send record to {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String '{} Failed record: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSourceTask.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.connect.runtime.WorkerSourceTask.producerSendFailed@POLYN200612 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
