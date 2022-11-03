console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java 58 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#61"
 , "c1" : "ActiveTaskCreator"
 , "c2" : "ActiveTaskCreator(TopologyMetadata;StreamsConfig;StreamsMetricsImpl;StateDirectory;ChangelogReader;ThreadCache;Time;KafkaClientSupplier;String;UUID;Logger)"
 , "c3" : "3"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#107"
 , "c1" : "void"
 , "c2" : "reInitializeThreadProducer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#111"
 , "c1" : "StreamsProducer"
 , "c2" : "streamsProducerForTask(TaskId)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#123"
 , "c1" : "StreamsProducer"
 , "c2" : "threadProducer()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#130"
 , "c1" : "void"
 , "c2" : "removeRevokedUnknownTasks(Set<TaskId>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#134"
 , "c1" : "Map<TaskId,Set<TopicPartition>>"
 , "c2" : "uncreatedTasksForTopologies(Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#139"
 , "c1" : "Collection<Task>"
 , "c2" : "createTasks(Consumer<byte[],byte[]>;Map<TaskId,Set<TopicPartition>>)"
 , "c3" : "4"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00199"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#199"
 , "c1" : "StreamTask"
 , "c2" : "createActiveTaskFromStandby(StandbyTask;Set<TopicPartition>;Consumer<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00220"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#220"
 , "c1" : "StreamTask"
 , "c2" : "createActiveTask(TaskId;Set<TopicPartition>;Consumer<byte[],byte[]>;LogContext;ProcessorTopology;ProcessorStateManager;InternalProcessorContext)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00273"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#273"
 , "c1" : "void"
 , "c2" : "closeThreadProducerIfNeeded()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00283"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#283"
 , "c1" : "void"
 , "c2" : "closeAndRemoveTaskProducerIfNeeded(TaskId)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00294"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#294"
 , "c1" : "Map<MetricName,Metric>"
 , "c2" : "producerMetrics()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00304"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#304"
 , "c1" : "Set<String>"
 , "c2" : "producerClientIds()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00315"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#315"
 , "c1" : "LogContext"
 , "c2" : "getLogContext(TaskId)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00321"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#321"
 , "c1" : "double"
 , "c2" : "totalProducerBlockedTime()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.svg" }

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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "24"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class ActiveTaskCreator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String  'Creating thread producer client' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method streamsProducerForTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.streamsProducerForTask@POLYN188488 the MagicNumber/String  'Expected EXACTLY_ONCE to be enabled, but the processing mode was ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.streamsProducerForTask@POLYN188488 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.streamsProducerForTask@POLYN188488 the MagicNumber/String  'Unknown TaskId: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.threadProducer@POLYN189033 the MagicNumber/String  'Expected EXACTLY_ONCE_V2 to be enabled, but the processing mode was ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method removeRevokedUnknownTasks arguments Set&lt;TaskId &gt;  assignedTasks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method uncreatedTasksForTopologies arguments Set&lt;String &gt;  currentTopologies"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument currentTopologies is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method createTasks arguments Consumer&lt;byte[] ,byte[] &gt;  consumer|Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  tasksToBeCreated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00139] For method createTasks list of called methods Object monObjet|org.apache.kafka.common.utils.LogContext getLogContextN190666|org.apache.kafka.streams.processor.internals.ProcessorTopology topologyMetadata_buildSubtopologyN191070"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument tasksToBeCreated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00152] The same method call topologyMetadata.namedTopologiesView()taskId.topologyName() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825 the MagicNumber/String  'Delaying creation of tasks not yet known by this instance: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method createActiveTaskFromStandby arguments StandbyTask  standbyTask|Set&lt;TopicPartition &gt;  inputPartitions|Consumer&lt;byte[] ,byte[] &gt;  consumer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00199] For method createActiveTaskFromStandby list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.InternalProcessorContext standbyTask_processorContextN192481|org.apache.kafka.common.utils.LogContext getLogContextN192629"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00199] The argument standbyTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method createActiveTask arguments TaskId  taskId|Set&lt;TopicPartition &gt;  inputPartitions|Consumer&lt;byte[] ,byte[] &gt;  consumer|LogContext  logContext|ProcessorTopology  topology|ProcessorStateManager  stateManager|InternalProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String  'Creating producer client for task {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String  'Created task {} with assigned partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.closeThreadProducerIfNeeded@POLYN194842 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.closeThreadProducerIfNeeded@POLYN194842 the MagicNumber/String  'Thread producer encounter error trying to close.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#283"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00283] For method closeAndRemoveTaskProducerIfNeeded arguments TaskId  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.closeAndRemoveTaskProducerIfNeeded@POLYN195172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.closeAndRemoveTaskProducerIfNeeded@POLYN195172 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.closeAndRemoveTaskProducerIfNeeded@POLYN195172 the MagicNumber/String  '] task producer encounter error trying to close.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.producerMetrics@POLYN195739 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.producerClientIds@POLYN196088 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method getLogContext arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.getLogContext@POLYN196589 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.getLogContext@POLYN196589 the MagicNumber/String  '%s [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.getLogContext@POLYN196589 the MagicNumber/String  'task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.totalProducerBlockedTime@POLYN197070 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00229] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String 'Creating producer client for task {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#235"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00235] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#268"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00268] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createActiveTask@POLYN193105 the MagicNumber/String 'Created task {} with assigned partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String 'Creating thread producer client' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String 'stream-thread [%s] ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186340 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189825 the MagicNumber/String 'Delaying creation of tasks not yet known by this instance: {}' MUST BE CONVERTED to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/ActiveTaskCreator.java.svg" }

};
console.log('leListeStr 99 main end');
