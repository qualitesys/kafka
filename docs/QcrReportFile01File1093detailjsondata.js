console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java 234 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "WorkerTask"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerSinkTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerSinkTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "WorkerSinkTask"
 , "c2" : "WorkerSinkTask(ConnectorTaskId;SinkTask;TaskStatus.Listener;TargetState;WorkerConfig;ClusterConfigState;ConnectMetrics;Converter;Converter;HeaderConverter;TransformationChain<SinkRecord>;KafkaConsumer<byte[],byte[]>;ClassLoader;Time;RetryWithToleranceOperator;WorkerErrantRecordReporter;StatusBackingStore)"
 , "c3" : "1"
 , "c4" : "25"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initialize(TaskConfig)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "removeMetrics()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "transitionTo(TargetState)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "execute()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "iteration()"
 , "c3" : "7"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onCommitCompleted(Throwable;long;Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "commitFailures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initializeAndStart()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "poll(long)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isCommitting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "doCommitSync(Map<TopicPartition,OffsetAndMetadata>;int)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "doCommitAsync(Map<TopicPartition,OffsetAndMetadata>;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "doCommit(Map<TopicPartition,OffsetAndMetadata>;boolean;int)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "commitOffsets(long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "commitOffsets(long;boolean;Collection<TopicPartition>)"
 , "c3" : "16"
 , "c4" : "40"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ConsumerRecords<byte[],byte[]>"
 , "c2" : "pollConsumer(long)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "convertMessages(ConsumerRecords<byte[],byte[]>)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SinkRecord"
 , "c2" : "convertAndTransformRecord(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Headers"
 , "c2" : "convertHeadersFor(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "WorkerErrantRecordReporter"
 , "c2" : "workerErrantRecordReporter()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "resumeAll()"
 , "c3" : "3"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "pauseAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "deliverMessages()"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "rewind()"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "openPartitions(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "closeAllPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "closePartitions(Collection<TopicPartition>;boolean)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updatePartitionCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "recordBatch(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "recordCommitFailure(long;Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "recordCommitSuccess(long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SinkTaskMetricsGroup"
 , "c2" : "sinkTaskMetricsGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "getNextCommit()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.svg" }

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
 , "c4" : "41"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "116"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "31"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.runtime.WorkerSinkTask.WorkerSinkTask@POLYN283533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method initialize arguments TaskConfig  taskConfig"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument taskConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.runtime.WorkerSinkTask.initialize@POLYN286183 the MagicNumber/String  '{} Task failed initialization and will not be started.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String  'Could not stop task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String  'transformation chain' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String  'retry operator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method transitionTo arguments TargetState  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String  '{} Executing sink task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String  'Consumer woken up during initial offset commit attempt, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String  'but succeeded during a later attempt' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00193] For method iteration list of called methods Object monObjet|Long workerConfig_getLongN288431"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String  '{} Commit of offsets timed out' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String  '{} Consumer woken up' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method onCommitCompleted arguments Throwable  error|long  seqno|Map&lt;TopicPartition ,OffsetAndMetadata &gt;  committedOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  '{} Received out of order commit callback for sequence number {}, but most recent sequence number is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  '{} Commit of offsets threw an unexpected exception for sequence number {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  '{} Finished offset commit successfully in {} ms for sequence number {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  '{} Adding to last committed offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  '{} Last committed offsets are now {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00270] For method initializeAndStart list of called methods Object monObjet|java.util.List&lt;String&gt; SinkConnectorConfig_parseTopicsListN292573"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String  '{} Initializing and starting task for topics {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String  '{} Initializing and starting task for topics regex {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String  '{} Sink task finished initialization and start' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00290] For method poll arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#290"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00290] For method poll list of called methods Object monObjet|ConsumerRecords&lt;byte[],byte[]&gt; pollConsumerN294330"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String  '{} Polling consumer with timeout {} ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String  '{} Polling returned {} messages' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00312] For method doCommitSync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|int  seqno"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitSync@POLYN294804 the MagicNumber/String  '{} Committing offsets synchronously using sequence number {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitSync@POLYN294804 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00326] For method doCommitAsync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|int  seqno"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitAsync@POLYN295582 the MagicNumber/String  '{} Committing offsets asynchronously using sequence number {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method doCommit arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|boolean  closing|int  seqno"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#341"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00341] For method commitOffsets arguments long  now|boolean  closing"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00345] For method commitOffsets arguments long  now|boolean  closing|Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#345"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00345] For method commitOffsets list of called methods Object monObjet|long taskProvidedOffset_offsetN300989"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#345"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00345] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00385] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00402] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00403] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  'Committing offsets for partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  'Awaiting reported errors to be completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  'Completed reported errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Calling task.preCommit with current offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Offset commit failed during close' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Offset commit failed, rewinding to last committed offsets' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Rewinding topic partition {} to offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Closing the task before committing the offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Skipping offset commit, task opted-out by returning no offsets from preCommit' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Ignoring invalid task provided offset {}/{} -- not yet consumed, taskOffset={} currentOffset={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Ignoring invalid task provided offset {}/{} -- partition not assigned, assignment={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Ignoring task provided offset {}/{} -- partition not requested, requested={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  '{} Skipping offset commit, no change since last commit' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.connect.runtime.WorkerSinkTask.toString@POLYN302413 the MagicNumber/String  'WorkerSinkTask{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.connect.runtime.WorkerSinkTask.toString@POLYN302413 the MagicNumber/String  'id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.connect.runtime.WorkerSinkTask.toString@POLYN302413 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#439"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00439] For method pollConsumer arguments long  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.connect.runtime.WorkerSinkTask.pollConsumer@POLYN302620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.connect.runtime.WorkerSinkTask.pollConsumer@POLYN302620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00453] For method convertMessages arguments ConsumerRecords&lt;byte[] ,byte[] &gt;  msgs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00453] For method convertMessages list of called methods Object monObjet|org.apache.kafka.connect.sink.SinkRecord convertAndTransformRecordN303862"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00461] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertMessages@POLYN303213 the MagicNumber/String  '{} Consuming and converting message in topic '{}' partition {} at offset {} and timestamp {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00465"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertMessages@POLYN303213 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00467"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00467] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertMessages@POLYN303213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00471"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertMessages@POLYN303213 the MagicNumber/String  '{} Converters and transformations returned null, possibly because of too many retries, so ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertMessages@POLYN303213 the MagicNumber/String  'dropping record in topic '{}' partition {} at offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00480] For method convertAndTransformRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  msg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00480] For method convertAndTransformRecord list of called methods Object monObjet|Long ConnectUtils_checkAndConvertTimestampN305842"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#480"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00480] The argument msg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00490"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertAndTransformRecord@POLYN304684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertAndTransformRecord@POLYN304684 the MagicNumber/String  '{} Applying transformations to record in topic '{}' partition {} at offset {} and timestamp {} with key {} and value {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertAndTransformRecord@POLYN304684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertAndTransformRecord@POLYN304684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00516] For method convertHeadersFor arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00516] For method convertHeadersFor list of called methods Object monObjet|org.apache.kafka.connect.header.Headers record_topicN307551|org.apache.kafka.connect.data.SchemaAndValue headerConverter_toConnectHeaderN307740"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#516"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00516] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00522"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00522] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00519"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.connect.runtime.WorkerSinkTask.convertHeadersFor@POLYN307143 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00547"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00547] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  '{} Delivering batch of {} messages to task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  'Tolerance exceeded in error handler' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00565"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00568"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  '{} RetriableException from SinkTask:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00572"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  '{} Task threw an uncaught and unrecoverable exception. Task is being killed and will not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  'recover until manually restarted. Error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00579"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.connect.runtime.WorkerSinkTask.deliverMessages@POLYN308582 the MagicNumber/String  'Exiting WorkerSinkTask due to unrecoverable exception.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00583"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#583"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00583] For method rewind list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.TopicPartition,Long&gt; context_offsetsN310487"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00589"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00589] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00590"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00590] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00591"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00591] In method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String  '{} Rewind {} to offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00597"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String  '{} Cannot rewind {} to null offset' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#603"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00603] For method openPartitions arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00609"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00609] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closeAllPartitions@POLYN311863 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#612"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00612] For method closePartitions arguments Collection&lt;TopicPartition &gt;  topicPartitions|boolean  lost"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00614"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00616"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#616"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00616] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String  '{} Closing the task as partitions have been lost: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00618"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00619"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00619] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String  'Cancelling reported errors for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String  'Cancelled all reported errors for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00634"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#634"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00634] For method recordBatch arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00640"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#640"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00640] For method recordCommitFailure arguments long  duration|Throwable  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00645"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#645"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00645] For method recordCommitSuccess arguments long  duration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00659] The class HandleRebalance contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#661"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00661] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#661"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00661] For method onPartitionsAssigned list of called methods Object monObjet|long consumer_positionN314375"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#661"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00661] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00662"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsAssigned@POLYN314060 the MagicNumber/String  '{} Partitions assigned {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsAssigned@POLYN314060 the MagicNumber/String  '{} Assigned topic partition {} with offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsAssigned@POLYN314060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00713"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#713"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00713] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00714"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsRevoked@POLYN316110 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#718"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00718] For method onPartitionsLost arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00719"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00719] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsLost@POLYN316295 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00722"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#722"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00722] For method onPartitionsRemoved arguments Collection&lt;TopicPartition &gt;  partitions|boolean  lost"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00722"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#722"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00722] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00724"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#724"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00724] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsRemoved@POLYN316466 the MagicNumber/String  'Skipping partition revocation callback as task has already been stopped' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00727"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsRemoved@POLYN316466 the MagicNumber/String  '{} Partitions {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00727"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsRemoved@POLYN316466 the MagicNumber/String  'lost' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00727"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00727] In method org.apache.kafka.connect.runtime.WorkerSinkTask.HandleRebalance.onPartitionsRemoved@POLYN316466 the MagicNumber/String  'revoked' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00746"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00746] The class SinkTaskMetricsGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00762"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#762"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00762] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00762"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#762"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00762] The argument connectMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#773"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00773] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'sink-record-read' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00777"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'sink-record-send' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00781"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'sink-record-active-count' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'partition-count' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00789"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00789] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'offset-seq-number' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00792"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'offset-commit-completion' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#796"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00796] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'offset-commit-completion-skip' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00800"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.SinkTaskMetricsGroup@POLYN318402 the MagicNumber/String  'put-batch-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00810"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00810] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00811"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#811"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00811] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00813"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#813"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00813] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00808"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.computeSinkRecordLag@POLYN322205 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00812"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.computeSinkRecordLag@POLYN322205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00818"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.computeSinkRecordLag@POLYN322205 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#828"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00828] For method recordRead arguments int  batchSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00832"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#832"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00832] For method recordSend arguments int  batchSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00836"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#836"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00836] For method recordPut arguments long  duration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00840"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#840"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00840] For method recordPartitionCount arguments int  assignedPartitionCount"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00844"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#844"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00844] For method recordOffsetSequenceNumber arguments int  seqNum"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00848"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#848"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00848] For method recordConsumedOffsets arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00853"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#853"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00853] For method recordCommittedOffsets arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00858"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#858"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00858] For method assignedOffsets arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00864"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#864"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00864] For method clearOffsets arguments Collection&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00871"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#871"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00871] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.recordOffsetCommitSuccess@POLYN325129 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00875"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#875"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00875] In method org.apache.kafka.connect.runtime.WorkerSinkTask.SinkTaskMetricsGroup.recordOffsetCommitSkip@POLYN325238 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.recordCommitFailure@POLYN313461"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.recordCommitSuccess@POLYN313654"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.stop@POLYN286734"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitSync@POLYN294804"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitAsync@POLYN295582"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.recordBatch@POLYN313244"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerSinkTask.transitionTo@POLYN287695"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String '{} Executing sink task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00188] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String 'Consumer woken up during initial offset commit attempt, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.execute@POLYN287893 the MagicNumber/String 'but succeeded during a later attempt' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String '{} Received out of order commit callback for sequence number {}, but most recent sequence number is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String '{} Commit of offsets threw an unexpected exception for sequence number {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String '{} Finished offset commit successfully in {} ms for sequence number {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String '{} Adding to last committed offsets: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00254] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String '{} Last committed offsets are now {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00260] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.onCommitCompleted@POLYN290497 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String 'Could not stop task' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String 'consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String 'transformation chain' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.close@POLYN286891 the MagicNumber/String 'retry operator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitSync@POLYN294804 the MagicNumber/String '{} Committing offsets synchronously using sequence number {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00316] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitSync@POLYN294804 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00327] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitAsync@POLYN295582 the MagicNumber/String '{} Committing offsets asynchronously using sequence number {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00210] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String '{} Commit of offsets timed out' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00212] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00219] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.iteration@POLYN288355 the MagicNumber/String '{} Consumer woken up' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00591"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#591"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00591] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#592"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00592] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String '{} Rewind {} to offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00597"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#597"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00597] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.rewind@POLYN310379 the MagicNumber/String '{} Cannot rewind {} to null offset' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00295] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String 1L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String '{} Polling consumer with timeout {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.poll@POLYN293681 the MagicNumber/String '{} Polling returned {} messages' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00614"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#614"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00614] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00616"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#616"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00616] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String '{} Closing the task as partitions have been lost: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00618"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00618] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00619"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#619"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00619] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String 'Cancelling reported errors for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#621"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00621] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.closePartitions@POLYN312011 the MagicNumber/String 'Cancelled all reported errors for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String '{} Initializing and starting task for topics {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String '{} Initializing and starting task for topics regex {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerSinkTask.java.html#286"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00286] In the recursive method org.apache.kafka.connect.runtime.WorkerSinkTask.initializeAndStart@POLYN292322 the MagicNumber/String '{} Sink task finished initialization and start' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
