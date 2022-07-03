console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java 151 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WorkerTask"
 , "c2" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareToInitializeTask()"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordDispatched(SourceRecord)"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finalOffsetCommit(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractWorkerSourceTask"
 , "c2" : "AbstractWorkerSourceTask(ConnectorTaskId;SourceTask;TaskStatus.Listener;TargetState;Converter;Converter;HeaderConverter;TransformationChain<SourceRecord>;WorkerSourceTaskContext;Producer<byte[],byte[]>;TopicAdmin;Map<String,TopicCreationGroup>;CloseableOffsetStorageReader;OffsetStorageWriter;ConnectorOffsetBackingStore;WorkerConfig;ConnectMetrics;ClassLoader;Time;RetryWithToleranceOperator;StatusBackingStore;Executor)"
 , "c3" : "1"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initialize(TaskConfig)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeAndStart()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cancel()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeMetrics()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeProducer(Duration)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "execute()"
 , "c3" : "9"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "sendRecords()"
 , "c3" : "6"
 , "c4" : "35"
}} 
,
{ "ligne" : {
   "c1" : "List<SourceRecord>"
 , "c2" : "poll()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ProducerRecord<byte[],byte[]>"
 , "c2" : "convertTransformedRecord(SourceRecord)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeCreateTopic(String)"
 , "c3" : "7"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "RecordHeaders"
 , "c2" : "convertHeaderFor(SourceRecord)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitTaskRecord(SourceRecord;RecordMetadata)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "commitSourceTask()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordPollReturned(int;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SourceTaskMetricsGroup"
 , "c2" : "sourceTaskMetricsGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "32"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
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
 , "c4" : "9"
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
 , "c4" : "76"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method recordDropped arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method prepareToSendRecord arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method recordDispatched arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method recordSent arguments SourceRecord  sourceRecord|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|RecordMetadata  recordMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method producerSendFailed arguments boolean  synchronous|ProducerRecord&lt;byte[] ,byte[] &gt;  producerRecord|SourceRecord  preTransformRecord|Exception  e"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method finalOffsetCommit arguments boolean  failed"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.AbstractWorkerSourceTask@POLYN277339 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method initialize arguments TaskConfig  taskConfig"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument taskConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initialize@POLYN279559 the MagicNumber/String  '{} Task failed initialization and will not be started.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initializeAndStart@POLYN279966 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initializeAndStart@POLYN279966 the MagicNumber/String  '{} Source task finished initialization and start' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.removeMetrics@POLYN280809 the MagicNumber/String  'source task metrics tracker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'source task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'source task admin' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'transformation chain' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'retry operator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'offset reader' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.close@POLYN281021 the MagicNumber/String  'offset backing store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method closeProducer arguments Duration  duration"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.closeProducer@POLYN281997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.closeProducer@POLYN281997 the MagicNumber/String  'source task producer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00285] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  '{} Nothing to send to Kafka. Polling source for additional records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  '{} About to send {} records to Kafka' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  'Failed to commit offsets for already-failing task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00300] For method sendRecords list of called methods Object monObjet|ProducerRecord&lt;byte[],byte[]&gt; convertTransformedRecordN285208"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00307] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00308] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00318] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00341] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00341] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00348] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00353] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Appending record to the topic {} with key {}, value {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} failed to send record to {}: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Failed record: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Wrote record successfully: topic {} partition {} offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Failed to send record to topic '{}' and partition '{}'. Backing off before retrying: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Failed to send record to topic '{}' and partition '{}' due to an unrecoverable exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  '{} Failed to send {} with unrecoverable exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.poll@POLYN288695 the MagicNumber/String  '{} failed to poll records from SourceTask. Will retry operation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.poll@POLYN288695 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#374"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00374] For method convertTransformedRecord arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertTransformedRecord@POLYN289323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertTransformedRecord@POLYN289323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertTransformedRecord@POLYN289323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method maybeCreateTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00397] For method maybeCreateTopic list of called methods Object monObjet|org.apache.kafka.connect.util.TopicCreationGroup topicCreation_findFirstGroupN291812|org.apache.kafka.clients.admin.NewTopic topicGroup_newTopicN292023"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Topic creation by the connector is disabled or the topic {} was previously created.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'If auto.create.topics.enable is enabled on the broker, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'the topic will be created with default settings' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'The task will send records to topic '{}' for the first time. Checking ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'whether topic exists' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Topic '{}' already exists.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Creating topic '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Topic '{}' matched topic creation group: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Created topic '{}' using creation group {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Found existing topic '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Request to create new topic '{}' failed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'Task failed to create new topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  '. Ensure ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'that the task is authorized to create topics or that the topic exists and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.maybeCreateTopic@POLYN290856 the MagicNumber/String  'restart the task' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00434] For method convertHeaderFor arguments SourceRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00434] For method convertHeaderFor list of called methods Object monObjet|org.apache.kafka.common.header.internals.RecordHeaders record_topicN293370|org.apache.kafka.common.header.internals.RecordHeaders header_keyN293519|byte[] headerConverter_fromConnectHeaderN293600"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#434"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00434] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00440] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertHeaderFor@POLYN293051 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method commitTaskRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitTaskRecord@POLYN293902 the MagicNumber/String  '{} Exception thrown while calling task.commitRecord()' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitSourceTask@POLYN294266 the MagicNumber/String  '{} Exception thrown while calling task.commit()' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#464"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00464] For method recordPollReturned arguments int  numRecordsInBatch|long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00472] The class SourceRecordWriteCounter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.SourceRecordWriteCounter@POLYN295041 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.SourceRecordWriteCounter@POLYN295041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.skipRecord@POLYN295425 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.skipRecord@POLYN295425 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.completeRecord@POLYN295641 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.completeRecord@POLYN295641 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceRecordWriteCounter.finishedAllWrites@POLYN295942 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00494] Public method retryRemaining is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00505] The class SourceTaskMetricsGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#513"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00513] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#513"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00513] The argument connectMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN296498 the MagicNumber/String  'source-record-poll' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN296498 the MagicNumber/String  'source-record-write' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN296498 the MagicNumber/String  'poll-batch-time' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN296498 the MagicNumber/String  'source-record-active-count' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00543] For method recordPoll arguments int  batchSize|long  duration"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00550] For method recordWrite arguments int  recordCount"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.recordWrite@POLYN299277 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.poll@POLYN288695"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initializeAndStart@POLYN279966"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitSourceTask@POLYN294266"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitTaskRecord@POLYN293902"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertHeaderFor@POLYN293051"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String '{} Nothing to send to Kafka. Polling source for additional records' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String '{} About to send {} records to Kafka' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00289] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String 'Failed to commit offsets for already-failing task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.execute@POLYN282313 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.poll@POLYN288695 the MagicNumber/String '{} failed to poll records from SourceTask. Will retry operation.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00369] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.poll@POLYN288695 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00309] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Appending record to the topic {} with key {}, value {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} failed to send record to {}: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#325"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00325] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Failed record: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00326] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00329] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Wrote record successfully: topic {} partition {} offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#342"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00342] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Failed to send record to topic '{}' and partition '{}'. Backing off before retrying: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Failed to send record to topic '{}' and partition '{}' due to an unrecoverable exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#351"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00351] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String '{} Failed to send {} with unrecoverable exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00354] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#359"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00359] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00360] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.sendRecords@POLYN284462 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00194] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initializeAndStart@POLYN279966 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.initializeAndStart@POLYN279966 the MagicNumber/String '{} Source task finished initialization and start' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitSourceTask@POLYN294266 the MagicNumber/String '{} Exception thrown while calling task.commit--' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00452] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.commitTaskRecord@POLYN293902 the MagicNumber/String '{} Exception thrown while calling task.commitRecord--' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/AbstractWorkerSourceTask.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00437] In the recursive method org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.convertHeaderFor@POLYN293051 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
