console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java 17 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "GlobalStateMaintainer"
 , "c2" : "org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "GlobalStateUpdateTask"
 , "c2" : "GlobalStateUpdateTask(LogContext;ProcessorTopology;InternalProcessorContext;GlobalStateManager;DeserializationExceptionHandler)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "initialize()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "update(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "flushState()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close(boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initTopology()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class GlobalStateUpdateTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00047] For method initialize list of called methods Object monObjet|java.util.Set&lt;String&gt; stateMgr_initializeN162751|java.util.Map&lt;String,String&gt; topology_storeToChangelogTopicN162868|org.apache.kafka.streams.processor.internals.SourceNode&lt;?,?&gt; topology_sourceN163149"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method update arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method update list of called methods Object monObjet|org.apache.kafka.clients.consumer.ConsumerRecord&lt;Object,Object&gt; sourceNodeAndDeserializer_deserializeN164102"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.update@POLYN163796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.update@POLYN163796 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method close arguments boolean  wipeStateStore"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.close@POLYN165625 the MagicNumber/String  'Deleting global task directory after detecting corruption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.close@POLYN165625 the MagicNumber/String  'Failed to delete global task directory after detecting corruption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.initTopology@POLYN166182 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.close@POLYN165625"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.close@POLYN165625 the MagicNumber/String 'Deleting global task directory after detecting corruption.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/GlobalStateUpdateTask.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.close@POLYN165625 the MagicNumber/String 'Failed to delete global task directory after detecting corruption.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
