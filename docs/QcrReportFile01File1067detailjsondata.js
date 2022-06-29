console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java 121 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractWorkerSourceTask"
 , "c2" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ExactlyOnceWorkerSourceTask"
 , "c2" : "ExactlyOnceWorkerSourceTask(ConnectorTaskId;SourceTask;TaskStatus.Listener;TargetState;Converter;Converter;HeaderConverter;TransformationChain<SourceRecord>;Producer<byte[],byte[]>;TopicAdmin;Map<String,TopicCreationGroup>;CloseableOffsetStorageReader;OffsetStorageWriter;ConnectorOffsetBackingStore;WorkerConfig;ClusterConfigState;ConnectMetrics;ClassLoader;Time;RetryWithToleranceOperator;StatusBackingStore;SourceConnectorConfig;Executor;Runnable;Runnable)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "WorkerTransactionContext"
 , "c2" : "buildTransactionContext(SourceConnectorConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToInitializeTask()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToEnterSendLoop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginSendIteration()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToPollTask()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordDropped(SourceRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Optional<SubmittedRecords.SubmittedRecord>"
 , "c2" : "prepareToSendRecord(SourceRecord;ProducerRecord<byte[],byte[]>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordDispatched(SourceRecord)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "batchDispatched()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finalOffsetCommit(boolean)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPause()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeBeginTransaction()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitTransaction()"
 , "c3" : "5"
 , "c4" : "23"
}} 
,
{ "ligne" : {
   "c1" : "RuntimeException"
 , "c2" : "maybeWrapProducerSendException(String;Throwable)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPossibleTransactionTimeoutError(Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectException"
 , "c2" : "wrapTransactionTimeoutError(Throwable)"
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
   "c1" : "TransactionBoundaryManager"
 , "c2" : "buildTransactionManager(WorkerConfig;SourceConnectorConfig;WorkerTransactionContext)"
 , "c3" : "8"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "TransactionMetricsGroup"
 , "c2" : "transactionMetricsGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords" }
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "29"
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
 , "c4" : "12"
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
 , "c4" : "48"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.ExactlyOnceWorkerSourceTask@POLYN217753 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method buildTransactionContext arguments SourceConnectorConfig  sourceConfig"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument sourceConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionContext@POLYN219836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00103] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00116] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method recordDropped arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#136"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00136] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.recordDropped@POLYN220682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method prepareToSendRecord arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument producerRecord is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.prepareToSendRecord@POLYN221010 the MagicNumber/String  'Source tasks may not produce to their own offsets topics when exactly-once support is enabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method recordDispatched arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method recordSent arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|RecordMetadata  recordMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#182"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00182] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00188] For method producerSendFailed arguments boolean  synchronous|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|SourceRecord  preTransformRecord|Exception  e"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.producerSendFailed@POLYN222223 the MagicNumber/String  'Unrecoverable exception trying to send' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method finalOffsetCommit arguments boolean  failed"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.finalOffsetCommit@POLYN222583 the MagicNumber/String  'Skipping final offset commit as task has failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.maybeBeginTransaction@POLYN222994 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#290"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00290] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  '{} Committing offsets' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  '{} Failed to flush offsets to storage: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  '{} Finished flushing offsets to storage' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  '{} Failed to commit producer transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  'Failed to flush offsets and/or records for task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String  '{} Finished commitOffsets successfully in {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#297"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00297] For method maybeWrapProducerSendException arguments String  message|Throwable  error"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#305"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00305] For method isPossibleTransactionTimeoutError arguments Throwable  error"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#305"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00305] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method wrapTransactionTimeoutError arguments Throwable  error"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'The task ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  ' was unable to finish writing records to Kafka before its producer transaction expired. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'It may be necessary to reconfigure this connector in order for it to run healthily with exactly-once support. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'Options for this include: tune the connector's producer configuration for higher throughput, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'increase the transaction timeout for the connector's producers, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'decrease the offset commit interval (if using interval-based transaction boundaries), ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.wrapTransactionTimeoutError@POLYN226104 the MagicNumber/String  'or use the 'poll' transaction boundary (if the connector is not already configured to use it).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.toString@POLYN226454 the MagicNumber/String  'ExactlyOnceWorkerSourceTask{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.toString@POLYN226454 the MagicNumber/String  'id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.toString@POLYN226454 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00329] The class TransactionBoundaryManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#330"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00330] For method shouldCommitTransactionForRecord arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionBoundaryManager.shouldCommitTransactionForRecord@POLYN226649 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#334"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00334] For method shouldCommitTransactionForBatch arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionBoundaryManager.shouldCommitTransactionForBatch@POLYN226759 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionBoundaryManager.shouldCommitFinalTransaction@POLYN226869 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#346"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00346] For method maybeCommitTransactionForRecord arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method maybeCommitTransaction arguments boolean  shouldCommit"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#367"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00367] For method buildTransactionManager arguments WorkerConfig  workerConfig|SourceConnectorConfig  sourceConfig|WorkerTransactionContext  transactionContext"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#367"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00367] For method buildTransactionManager list of called methods Object monObjet|TransactionBoundary sourceConfig_transactionBoundaryN228185|org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionBoundaryManager time_millisecondsN229062|org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionBoundaryManager time_millisecondsN229338"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#368"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00368] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#369"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00369] The argument sourceConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#370"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00370] The argument transactionContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  'Transaction context must be provided when using connector-defined transaction boundaries' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  'Aborting transaction for batch as requested by connector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  'Aborting transaction for record on topic {} as requested by connector' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  'Last record in aborted transaction: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String  'Unrecognized transaction boundary: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00463] The class TransactionMetricsGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#468"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00468] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#468"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00468] The argument connectMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionMetricsGroup.TransactionMetricsGroup@POLYN231397 the MagicNumber/String  'transaction-size' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionMetricsGroup.abortTransaction@POLYN232520 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.TransactionMetricsGroup.commitTransaction@POLYN232612 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.maybeBeginTransaction@POLYN222994"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.recordDropped@POLYN220682"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.recordSent@POLYN221906"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.ExactlyOnceWorkerSourceTask@POLYN217753"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.batchDispatched@POLYN221799"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.finalOffsetCommit@POLYN222583"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.maybeWrapProducerSendException@POLYN225558"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.onPause@POLYN222851"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.prepareToInitializeTask@POLYN220082"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.recordDispatched@POLYN221466"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String '{} Committing offsets' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00254] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String '{} Failed to flush offsets to storage: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String '{} Finished flushing offsets to storage' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String '{} Failed to commit producer transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00268] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00275] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String 'Failed to flush offsets and/or records for task ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitTransaction@POLYN223204 the MagicNumber/String '{} Finished commitOffsets successfully in {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.maybeBeginTransaction@POLYN222994 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00137] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.recordDropped@POLYN220682 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.ExactlyOnceWorkerSourceTask@POLYN217753 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00377] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00410"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#415"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00415] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String 'Transaction context must be provided when using connector-defined transaction boundaries' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00425] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String 'Aborting transaction for batch as requested by connector' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String 'Aborting transaction for record on topic {} as requested by connector' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00438] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String 'Last record in aborted transaction: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.buildTransactionManager@POLYN228038 the MagicNumber/String 'Unrecognized transaction boundary: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ExactlyOnceWorkerSourceTask.java.html#207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00207] In the recursive method org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.finalOffsetCommit@POLYN222583 the MagicNumber/String 'Skipping final offset commit as task has failed' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
