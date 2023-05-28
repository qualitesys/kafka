console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java 77 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.TaskMovement"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.TaskMovement" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#42"
 , "c1" : "TaskMovement"
 , "c2" : "TaskMovement(TaskId;UUID;SortedSet&lt;UUID&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#48"
 , "c1" : "TaskId"
 , "c2" : "task()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#52"
 , "c1" : "int"
 , "c2" : "numCaughtUpClients()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#56"
 , "c1" : "boolean"
 , "c2" : "taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist(TaskId;UUID;Map&lt;UUID,ClientState&gt;;Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#70"
 , "c1" : "boolean"
 , "c2" : "taskIsCaughtUpOnClient(TaskId;UUID;Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#77"
 , "c1" : "int"
 , "c2" : "assignActiveTaskMovements(Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;UUID,ClientState&gt;;Map&lt;UUID,Set&lt;TaskId&gt;&gt;;AtomicInteger)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#125"
 , "c1" : "int"
 , "c2" : "assignStandbyTaskMovements(Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;UUID,ClientState&gt;;AtomicInteger;Map&lt;UUID,Set&lt;TaskId&gt;&gt;)"
 , "c3" : "10"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#190"
 , "c1" : "boolean"
 , "c2" : "tryToSwapStandbyAndActiveOnCaughtUpClient(Map&lt;UUID,ClientState&gt;;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00209"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#209"
 , "c1" : "boolean"
 , "c2" : "tryToMoveActiveToCaughtUpClientAndTryToWarmUp(Map&lt;UUID,ClientState&gt;;Map&lt;UUID,Set&lt;TaskId&gt;&gt;;AtomicInteger;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00229"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#229"
 , "c1" : "boolean"
 , "c2" : "tryToMoveActiveToMostCaughtUpClient(Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Map&lt;UUID,ClientState&gt;;Map&lt;UUID,Set&lt;TaskId&gt;&gt;;AtomicInteger;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00258"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#258"
 , "c1" : "void"
 , "c2" : "moveActiveAndTryToWarmUp(AtomicInteger;TaskId;ClientState;ClientState;Set&lt;TaskId&gt;)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00276"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#276"
 , "c1" : "void"
 , "c2" : "moveStandbyAndTryToWarmUp(AtomicInteger;TaskId;ClientState;ClientState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00291"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#291"
 , "c1" : "void"
 , "c2" : "swapStandbyAndActive(TaskId;ClientState;ClientState)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00300"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#300"
 , "c1" : "UUID"
 , "c2" : "mostCaughtUpEligibleClient(Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;TaskId;UUID)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00306"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#306"
 , "c1" : "UUID"
 , "c2" : "mostCaughtUpEligibleClient(Map&lt;TaskId,SortedSet&lt;UUID&gt;&gt;;Function&lt;UUID,Boolean&gt;;TaskId;UUID)"
 , "c3" : "5"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.svg" }

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
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "31"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist arguments TaskId  task|UUID  client|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist list of called methods Object monObjet|V clientStates_getN196167|V clientStates_getN196327"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument tasksToClientByLag is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist@POLYN195456 the MagicNumber/String  'uninitialized set' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist@POLYN195456 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method taskIsCaughtUpOnClient arguments TaskId  task|UUID  client|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsCaughtUpOnClient@POLYN196498 the MagicNumber/String  'uninitialized set' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method assignActiveTaskMovements arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method assignActiveTaskMovements list of called methods Object monObjet|int taskMovements_sizeN198888|boolean tryToSwapStandbyAndActiveOnCaughtUpClientN199047"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignActiveTaskMovements@POLYN196939 the MagicNumber/String  'Tried to move task to more caught-up client as scheduled before but none exist' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method assignStandbyTaskMovements arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|AtomicInteger  remainingWarmupReplicas|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00125] For method assignStandbyTaskMovements list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN202098|java.util.UUID mostCaughtUpEligibleClientN202294"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00161] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00163] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN199629 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN199629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN199629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method tryToSwapStandbyAndActiveOnCaughtUpClient arguments Map&lt;UUID ,ClientState &gt;  clientStates|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00190] For method tryToSwapStandbyAndActiveOnCaughtUpClient list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN203171"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#191"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00191] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#192"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00192] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN202971 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN202971 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN202971 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method tryToMoveActiveToCaughtUpClientAndTryToWarmUp arguments Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00209] For method tryToMoveActiveToCaughtUpClientAndTryToWarmUp list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN204183"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#210"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00210] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#213"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00213] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN203869 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN203869 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN203869 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method tryToMoveActiveToMostCaughtUpClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00229] For method tryToMoveActiveToMostCaughtUpClient list of called methods Object monObjet|java.util.UUID mostCaughtUpEligibleClientN205315"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#230"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00230] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#231"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00231] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#233"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00233] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#234"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00234] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN204915 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN204915 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN204915 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00258] For method moveActiveAndTryToWarmUp arguments AtomicInteger  remainingWarmupReplicas|TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState|Set&lt;TaskId &gt;  warmups"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#258"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00258] The argument remainingWarmupReplicas is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#260"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00260] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00262] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.moveActiveAndTryToWarmUp@POLYN206441 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method moveStandbyAndTryToWarmUp arguments AtomicInteger  remainingWarmupReplicas|TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#276"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00276] The argument remainingWarmupReplicas is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.moveStandbyAndTryToWarmUp@POLYN207115 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method swapStandbyAndActive arguments TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#292"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00292] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#293"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00293] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00300] For method mostCaughtUpEligibleClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|TaskId  task|UUID  destinationClient"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.mostCaughtUpEligibleClient@POLYN207946 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method mostCaughtUpEligibleClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Function&lt;UUID ,Boolean &gt;  constraint|TaskId  task|UUID  destinationClient"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#306"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00306] The argument tasksToClientByLag is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#307"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00307] The argument constraint is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#309"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00309] The argument destinationClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.mostCaughtUpEligibleClient@POLYN208301 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
