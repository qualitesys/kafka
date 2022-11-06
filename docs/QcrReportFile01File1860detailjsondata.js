console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java 35 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StandbyTaskCreator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StandbyTaskCreator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#38"
 , "c1" : "StandbyTaskCreator"
 , "c2" : "StandbyTaskCreator(TopologyMetadata;StreamsConfig;StreamsMetricsImpl;StateDirectory;ChangelogReader;String;Logger)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#61"
 , "c1" : "void"
 , "c2" : "removeRevokedUnknownTasks(Set<TaskId>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#65"
 , "c1" : "Map<TaskId,Set<TopicPartition>>"
 , "c2" : "uncreatedTasksForTopologies(Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#70"
 , "c1" : "Collection<Task>"
 , "c2" : "createTasks(Map<TaskId,Set<TopicPartition>>)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00124"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#124"
 , "c1" : "StandbyTask"
 , "c2" : "createStandbyTaskFromActive(StreamTask;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#141"
 , "c1" : "StandbyTask"
 , "c2" : "createStandbyTask(TaskId;Set<TopicPartition>;ProcessorTopology;ProcessorStateManager;InternalProcessorContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#163"
 , "c1" : "LogContext"
 , "c2" : "getLogContext(TaskId)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "5"
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
 , "c4" : "10"
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
 , "c4" : "6"
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
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class StandbyTaskCreator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.StandbyTaskCreator@POLYN164915 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.StandbyTaskCreator@POLYN164915 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method removeRevokedUnknownTasks arguments Set&lt;TaskId &gt;  assignedTasks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method uncreatedTasksForTopologies arguments Set&lt;String &gt;  currentTopologies"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument currentTopologies is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method createTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  tasksToBeCreated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method createTasks list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.ProcessorTopology topologyMetadata_buildSubtopologyN167544"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument tasksToBeCreated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00080] The same method call topologyMetadata.namedTopologiesView()taskId.topologyName() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String  'Skipped standby task {} with assigned partitions {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String  'since it does not have any state stores to materialize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String  'Delaying creation of tasks not yet known by this instance: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method createStandbyTaskFromActive arguments StreamTask  streamTask|Set&lt;TopicPartition &gt;  inputPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00124] For method createStandbyTaskFromActive list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.InternalProcessorContext streamTask_processorContextN169097"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument streamTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method createStandbyTask arguments TaskId  taskId|Set&lt;TopicPartition &gt;  inputPartitions|ProcessorTopology  topology|ProcessorStateManager  stateManager|InternalProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN169636 the MagicNumber/String  'Created task {} with assigned partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method getLogContext arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN170362 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN170362 the MagicNumber/String  '%s [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN170362 the MagicNumber/String  'standby-task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN169636"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN169636 the MagicNumber/String 'Created task {} with assigned partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String 'Skipped standby task {} with assigned partitions {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String 'since it does not have any state stores to materialize' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN166467 the MagicNumber/String 'Delaying creation of tasks not yet known by this instance: {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
