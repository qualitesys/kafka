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
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#53"
 , "c1" : "StandbyTaskCreator"
 , "c2" : "StandbyTaskCreator(TopologyMetadata;StreamsConfig;StreamsMetricsImpl;StateDirectory;ChangelogReader;String;Logger)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#76"
 , "c1" : "void"
 , "c2" : "removeRevokedUnknownTasks(Set<TaskId>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c1" : "Map<TaskId,Set<TopicPartition>>"
 , "c2" : "uncreatedTasksForTopologies(Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#85"
 , "c1" : "Collection<Task>"
 , "c2" : "createTasks(Map<TaskId,Set<TopicPartition>>)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#139"
 , "c1" : "StandbyTask"
 , "c2" : "createStandbyTaskFromActive(StreamTask;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#156"
 , "c1" : "StandbyTask"
 , "c2" : "createStandbyTask(TaskId;Set<TopicPartition>;ProcessorTopology;ProcessorStateManager;InternalProcessorContext)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#178"
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
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1919Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1919&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.getKey@POLYN607634.return" , "java.util.HashMap.put@POLYN621976.key"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1919Seq2.html#seq2"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1919&numSeq=2"
 , "c2" : "2"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.getValue@POLYN607725.return" , "java.util.HashMap.put@POLYN621976.value"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00091]"
 , "c3" : ["java.util.HashMap.getKey@POLYN607634.return" , "---java.util.HashMap.getKey@POLYN607634" , "org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837.taskId"]
 , "c4" : "//QC-JAVCWE099[00091] In org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837[00091] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00096]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837.taskId" , "---java.util.HashMap.put@POLYN621976" , "java.util.HashMap.put@POLYN621976.key"]
 , "c4" : "//QC-JAVCWE099[00096] In org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837[00096] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
,
{ "sequence" : { 
 "seq" : "2" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00092]"
 , "c3" : ["java.util.HashMap.getValue@POLYN607725.return" , "---java.util.HashMap.getValue@POLYN607725" , "org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837.partitions"]
 , "c4" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00096]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837.partitions" , "---java.util.HashMap.put@POLYN621976" , "java.util.HashMap.put@POLYN621976.value"]
 , "c4" : "//QC-JAVCWE099[00096] In org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837[00096] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.StandbyTaskCreator@POLYN166285 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.StandbyTaskCreator@POLYN166285 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method removeRevokedUnknownTasks arguments Set&lt;TaskId &gt;  assignedTasks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method uncreatedTasksForTopologies arguments Set&lt;String &gt;  currentTopologies"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument currentTopologies is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method createTasks arguments Map&lt;TaskId ,Set&lt;TopicPartition &gt; &gt;  tasksToBeCreated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00085] For method createTasks list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.ProcessorTopology topologyMetadata_buildSubtopologyN168914"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument tasksToBeCreated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00095] The same method call topologyMetadata.namedTopologiesView()taskId.topologyName() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String  'Skipped standby task {} with assigned partitions {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String  'since it does not have any state stores to materialize' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String  'Delaying creation of tasks not yet known by this instance: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method createStandbyTaskFromActive arguments StreamTask  streamTask|Set&lt;TopicPartition &gt;  inputPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00139] For method createStandbyTaskFromActive list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.InternalProcessorContext streamTask_processorContextN170467"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument streamTask is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method createStandbyTask arguments TaskId  taskId|Set&lt;TopicPartition &gt;  inputPartitions|ProcessorTopology  topology|ProcessorStateManager  stateManager|InternalProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN171006 the MagicNumber/String  'Created task {} with assigned partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method getLogContext arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00178] For method getLogContext list of called methods Object monObjet|java.lang.String String_formatN171837"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN171732 the MagicNumber/String  'stream-thread [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN171732 the MagicNumber/String  '%s [%s] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.getLogContext@POLYN171732 the MagicNumber/String  'standby-task' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN171006"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createStandbyTask@POLYN171006 the MagicNumber/String 'Created task {} with assigned partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String 'Skipped standby task {} with assigned partitions {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String 'since it does not have any state stores to materialize' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.streams.processor.internals.StandbyTaskCreator.createTasks@POLYN167837 the MagicNumber/String 'Delaying creation of tasks not yet known by this instance: {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StandbyTaskCreator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
