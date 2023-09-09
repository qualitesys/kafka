console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java 113 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.TaskManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.TaskManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#130"
 , "c1" : "TaskManager"
 , "c2" : "TaskManager(Platform;Scheduler;long)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00307"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#307"
 , "c1" : "void"
 , "c2" : "createTask(String;TaskSpec)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00419"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#419"
 , "c1" : "void"
 , "c2" : "stopTask(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00487"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#487"
 , "c1" : "void"
 , "c2" : "destroyTask(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00535"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#535"
 , "c1" : "void"
 , "c2" : "updateWorkerState(String;long;WorkerState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00586"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#586"
 , "c1" : "void"
 , "c2" : "handleWorkerCompletion(ManagedTask;String;WorkerDone)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00615"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#615"
 , "c1" : "TasksResponse"
 , "c2" : "tasks(TasksRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00646"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#646"
 , "c1" : "TaskState"
 , "c2" : "task(TaskRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00674"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#674"
 , "c1" : "void"
 , "c2" : "beginShutdown(boolean)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00683"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#683"
 , "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "2"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "92"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument scheduler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN268609 the MagicNumber/String  'TaskManagerStateThread' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN268609 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN268609 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN268609 the MagicNumber/String  'Created TaskManager for agent(s) on: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN268609 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00199] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN271828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN271828 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN271828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00222] For method startDelayMs arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.startDelayMs@POLYN272077 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN272372 the MagicNumber/String  'Unknown node names: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN272372 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN272372 the MagicNumber/String  'No node names specified.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00250] For method maybeSetError arguments String  newError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.taskState@POLYN273701 the MagicNumber/String  'unreachable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00276] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00277] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00278] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.getCombinedStatus@POLYN274533 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.getCombinedStatus@POLYN274533 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00291] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method createTask arguments String  id|TaskSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.trogdor.coordinator.TaskManager.createTask@POLYN276502 the MagicNumber/String  'createTask(id={}, spec={}) error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.CreateTask@POLYN277285 the MagicNumber/String  'startMs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Invalid empty ID in createTask request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Task ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  ' already ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00342"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'exists, and has a different spec ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Task {} already exists with spec {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Failed to create TaskController: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Failed to create a new task {} with spec {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  'Created a new task {} with spec {}, scheduled to start {} ms from now.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN278016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  'Can't start task {}, because it is already in state {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  'Unable to find nodes for task {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  'Unable to find nodes for task: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  'Running task {} on node(s): {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN280947 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#419"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00419] For method stopTask arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.trogdor.coordinator.TaskManager.stopTask@POLYN282969 the MagicNumber/String  'stopTask(id={}) error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Invalid empty ID in stopTask request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Can't cancel non-existent task {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Stopped pending task {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00457"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Task {} is now complete with no errors.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00463"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Task {} is now complete with error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00471"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Cancelling task {} with worker(s) {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  ' = ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Can't cancel task {} because it is already stopping.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  'Can't cancel task {} because it is already done.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN283718 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00487] For method destroyTask arguments String  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.trogdor.coordinator.TaskManager.destroyTask@POLYN286419 the MagicNumber/String  'destroyTask(id={}) error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00521] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  'Invalid empty ID in destroyTask request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  'Can't destroy task {}: no such task found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00514"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  'Destroying task {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00524"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN287165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00535"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#535"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00535] For method updateWorkerState arguments String  nodeName|long  workerId|WorkerState  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  'Unable to find workerId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00562"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  'Unable to find taskId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  'Task {}: Updating worker state for {} on {} from {} to {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00571"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00571] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  'Error updating worker state for {} on {}.  Stopping worker.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00575"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN289332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#586"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00586] For method handleWorkerCompletion arguments ManagedTask  task|String  nodeName|WorkerDone  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#586"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00586] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#586"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00586] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '{}: Worker {} finished with status '{}'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00591"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00591] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '{}: Worker {} finished with error '{}' and status '{}'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00599"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '{}: Task {} is now complete on {} with error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00600"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '(none)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#603"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00603] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '{}: task {} stopped with error {}.  Stopping worker(s): {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00604"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00604"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00604"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00604"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#604"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00604] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN291031 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00615"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#615"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00615] For method tasks arguments TasksRequest  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#646"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00646] For method task arguments TaskRequest  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00663"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method org.apache.kafka.trogdor.coordinator.TaskManager.GetTaskState.call@POLYN295263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00664"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00664] In method org.apache.kafka.trogdor.coordinator.TaskManager.GetTaskState.call@POLYN295263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00674"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#674"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00674] For method beginShutdown arguments boolean  stopAgents"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN295659 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN295659 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.trogdor.coordinator.TaskManager.waitForShutdown@POLYN296007 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN296440 the MagicNumber/String  'Shutting down TaskManager{}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN296440 the MagicNumber/String  ' and agents' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00696] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN296440 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00704"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00704] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN296440 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
