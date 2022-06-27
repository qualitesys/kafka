console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java 77 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.TaskMovement"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.TaskMovement" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TaskMovement"
 , "c2" : "TaskMovement(TaskId;UUID;SortedSet<UUID>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TaskId"
 , "c2" : "task()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numCaughtUpClients()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist(TaskId;UUID;Map<UUID,ClientState>;Map<TaskId,SortedSet<UUID>>;Map<TaskId,SortedSet<UUID>>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "taskIsCaughtUpOnClient(TaskId;UUID;Map<TaskId,SortedSet<UUID>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "assignActiveTaskMovements(Map<TaskId,SortedSet<UUID>>;Map<TaskId,SortedSet<UUID>>;Map<UUID,ClientState>;Map<UUID,Set<TaskId>>;AtomicInteger)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "assignStandbyTaskMovements(Map<TaskId,SortedSet<UUID>>;Map<TaskId,SortedSet<UUID>>;Map<UUID,ClientState>;AtomicInteger;Map<UUID,Set<TaskId>>)"
 , "c3" : "10"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "tryToSwapStandbyAndActiveOnCaughtUpClient(Map<UUID,ClientState>;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "tryToMoveActiveToCaughtUpClientAndTryToWarmUp(Map<UUID,ClientState>;Map<UUID,Set<TaskId>>;AtomicInteger;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "tryToMoveActiveToMostCaughtUpClient(Map<TaskId,SortedSet<UUID>>;Map<UUID,ClientState>;Map<UUID,Set<TaskId>>;AtomicInteger;ConstrainedPrioritySet;TaskMovement)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "moveActiveAndTryToWarmUp(AtomicInteger;TaskId;ClientState;ClientState;Set<TaskId>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "moveStandbyAndTryToWarmUp(AtomicInteger;TaskId;ClientState;ClientState)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "swapStandbyAndActive(TaskId;ClientState;ClientState)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "UUID"
 , "c2" : "mostCaughtUpEligibleClient(Map<TaskId,SortedSet<UUID>>;TaskId;UUID)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UUID"
 , "c2" : "mostCaughtUpEligibleClient(Map<TaskId,SortedSet<UUID>>;Function<UUID,Boolean>;TaskId;UUID)"
 , "c3" : "5"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class TaskMovement contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist arguments TaskId  task|UUID  client|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument tasksToClientByLag is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist@POLYN201894 the MagicNumber/String  'uninitialized set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsNotCaughtUpOnClientAndOtherMoreCaughtUpClientsExist@POLYN201894 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method taskIsCaughtUpOnClient arguments TaskId  task|UUID  client|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.taskIsCaughtUpOnClient@POLYN202930 the MagicNumber/String  'uninitialized set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method assignActiveTaskMovements arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00062] For method assignActiveTaskMovements list of called methods Object monObjet|boolean tryToSwapStandbyAndActiveOnCaughtUpClientN205459"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00082] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignActiveTaskMovements@POLYN203369 the MagicNumber/String  'Tried to move task to more caught-up client as scheduled before but none exist' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method assignStandbyTaskMovements arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToCaughtUpClients|Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|AtomicInteger  remainingWarmupReplicas|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00110] For method assignStandbyTaskMovements list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN208490|java.util.UUID mostCaughtUpEligibleClientN208686"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument tasksToCaughtUpClients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN206041 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN206041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.assignStandbyTaskMovements@POLYN206041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method tryToSwapStandbyAndActiveOnCaughtUpClient arguments Map&lt;UUID ,ClientState &gt;  clientStates|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00175] For method tryToSwapStandbyAndActiveOnCaughtUpClient list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN209561"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN209363 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN209363 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToSwapStandbyAndActiveOnCaughtUpClient@POLYN209363 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method tryToMoveActiveToCaughtUpClientAndTryToWarmUp arguments Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00194] For method tryToMoveActiveToCaughtUpClientAndTryToWarmUp list of called methods Object monObjet|java.util.UUID caughtUpClientsByTaskLoad_pollN210571"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#194"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00194] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00197] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00198] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN210259 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN210259 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToCaughtUpClientAndTryToWarmUp@POLYN210259 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00214] For method tryToMoveActiveToMostCaughtUpClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Map&lt;UUID ,ClientState &gt;  clientStates|Map&lt;UUID ,Set&lt;TaskId &gt; &gt;  warmups|AtomicInteger  remainingWarmupReplicas|ConstrainedPrioritySet  caughtUpClientsByTaskLoad|TaskMovement  movement"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00214] For method tryToMoveActiveToMostCaughtUpClient list of called methods Object monObjet|java.util.UUID mostCaughtUpEligibleClientN211701"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument clientStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#216"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00216] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument caughtUpClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument movement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN211303 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN211303 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.tryToMoveActiveToMostCaughtUpClient@POLYN211303 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#243"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00243] For method moveActiveAndTryToWarmUp arguments AtomicInteger  remainingWarmupReplicas|TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState|Set&lt;TaskId &gt;  warmups"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#243"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00243] The argument remainingWarmupReplicas is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#245"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00245] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#246"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00246] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#247"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00247] The argument warmups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.moveActiveAndTryToWarmUp@POLYN212827 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method moveStandbyAndTryToWarmUp arguments AtomicInteger  remainingWarmupReplicas|TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument remainingWarmupReplicas is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#263"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00263] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#264"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00264] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.moveStandbyAndTryToWarmUp@POLYN213501 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method swapStandbyAndActive arguments TaskId  task|ClientState  sourceClientState|ClientState  destinationClientState"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#277"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00277] The argument sourceClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument destinationClientState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method mostCaughtUpEligibleClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|TaskId  task|UUID  destinationClient"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.mostCaughtUpEligibleClient@POLYN214332 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method mostCaughtUpEligibleClient arguments Map&lt;TaskId ,SortedSet&lt;UUID &gt; &gt;  tasksToClientByLag|Function&lt;UUID ,Boolean &gt;  constraint|TaskId  task|UUID  destinationClient"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#291"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00291] The argument tasksToClientByLag is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#292"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00292] The argument constraint is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#294"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00294] The argument destinationClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/TaskMovement.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.streams.processor.internals.assignment.TaskMovement.mostCaughtUpEligibleClient@POLYN214687 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
