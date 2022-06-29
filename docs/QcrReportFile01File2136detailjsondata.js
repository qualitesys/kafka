console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java 151 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.TaskManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.TaskManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TaskManager"
 , "c2" : "TaskManager(Platform;Scheduler;long)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createTask(String;TaskSpec)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopTask(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "destroyTask(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateWorkerState(String;long;WorkerState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleWorkerCompletion(ManagedTask;String;WorkerDone)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "TasksResponse"
 , "c2" : "tasks(TasksRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskState"
 , "c2" : "task(TaskRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(boolean)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "2"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "92"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class TaskManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument platform is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument scheduler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String  'TaskManagerStateThread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String  'Created TaskManager for agent(s) on: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00099] The class ManagedTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00128] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN277866 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN277866 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.clearStartFuture@POLYN277866 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method startDelayMs arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.startDelayMs@POLYN278115 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00156] For method findNodeNames list of called methods Object monObjet|org.apache.kafka.trogdor.coordinator.TaskManager controller_targetNodesN278506"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN278410 the MagicNumber/String  'Unknown node names: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN278410 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.findNodeNames@POLYN278410 the MagicNumber/String  'No node names specified.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method maybeSetError arguments String  newError"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.taskState@POLYN279733 the MagicNumber/String  'unreachable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00197] For method getCombinedStatus list of called methods Object monObjet|org.apache.kafka.trogdor.coordinator.TaskManager state_statusN281386"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00203] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00206] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.getCombinedStatus@POLYN280563 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.trogdor.coordinator.TaskManager.ManagedTask.getCombinedStatus@POLYN280563 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method createTask arguments String  id|TaskSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.trogdor.coordinator.TaskManager.createTask@POLYN282518 the MagicNumber/String  'createTask(id={}, spec={}) error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00239] The class CreateTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.CreateTask@POLYN283301 the MagicNumber/String  'startMs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Invalid empty ID in createTask request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Task ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  ' already ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'exists, and has a different spec ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Task {} already exists with spec {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Failed to create TaskController: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Failed to create a new task {} with spec {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  'Created a new task {} with spec {}, scheduled to start {} ms from now.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.trogdor.coordinator.TaskManager.CreateTask.call@POLYN284030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00293] The class RunTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  'Can't start task {}, because it is already in state {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  'Unable to find nodes for task {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  'Unable to find nodes for task: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  'Running task {} on node(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.trogdor.coordinator.TaskManager.RunTask.call@POLYN286953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#332"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00332] For method stopTask arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.trogdor.coordinator.TaskManager.stopTask@POLYN288971 the MagicNumber/String  'stopTask(id={}) error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00342] The class CancelTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Invalid empty ID in stopTask request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Can't cancel non-existent task {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Stopped pending task {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Task {} is now complete with no errors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Task {} is now complete with error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Cancelling task {} with worker(s) {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  ' = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Can't cancel task {} because it is already stopping.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  'Can't cancel task {} because it is already done.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.trogdor.coordinator.TaskManager.CancelTask.call@POLYN289720 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#398"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00398] For method destroyTask arguments String  id"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.trogdor.coordinator.TaskManager.destroyTask@POLYN292415 the MagicNumber/String  'destroyTask(id={}) error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00408] The class DestroyTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00430] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  'Invalid empty ID in destroyTask request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  'Can't destroy task {}: no such task found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  'Destroying task {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.trogdor.coordinator.TaskManager.DestroyTask.call@POLYN293161 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method updateWorkerState arguments String  nodeName|long  workerId|WorkerState  state"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00443] The class UpdateWorkerState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  'Unable to find workerId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  'Unable to find taskId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  'Task {}: Updating worker state for {} on {} from {} to {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00472"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#472"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00472] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  'Error updating worker state for {} on {}.  Stopping worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00476"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.trogdor.coordinator.TaskManager.UpdateWorkerState.call@POLYN295322 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00481] For method handleWorkerCompletion arguments ManagedTask  task|String  nodeName|WorkerDone  state"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#481"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00481] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#481"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00481] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '{}: Worker {} finished with status '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '{}: Worker {} finished with error '{}' and status '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '{}: Task {} is now complete on {} with error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '(none)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '{}: task {} stopped with error {}.  Stopping worker(s): {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00508] For method tasks arguments TasksRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00513] The class GetTasksResponse contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#533"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00533] For method task arguments TaskRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00538"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00538] The class GetTaskState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.trogdor.coordinator.TaskManager.GetTaskState.call@POLYN301245 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.trogdor.coordinator.TaskManager.GetTaskState.call@POLYN301245 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#557"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00557] For method beginShutdown arguments boolean  stopAgents"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN301639 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN301639 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#565"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00565] In method org.apache.kafka.trogdor.coordinator.TaskManager.waitForShutdown@POLYN301987 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00568] The class Shutdown contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN302420 the MagicNumber/String  'Shutting down TaskManager{}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN302420 the MagicNumber/String  ' and agents' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN302420 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.trogdor.coordinator.TaskManager.Shutdown.call@POLYN302420 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.stopTask@POLYN288971"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.createTask@POLYN282518"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.destroyTask@POLYN292415"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN301639"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00336] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.stopTask@POLYN288971 the MagicNumber/String 'stopTask-id={}- error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.createTask@POLYN282518 the MagicNumber/String 'createTask-id={}, spec={}- error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.destroyTask@POLYN292415 the MagicNumber/String 'destroyTask-id={}- error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String 'TaskManagerStateThread' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String 'Created TaskManager for agent-s- on: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.TaskManager@POLYN274647 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00558] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN301639 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00558"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00558] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.beginShutdown@POLYN301639 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00483] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '{}: Worker {} finished with status '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#486"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00486] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '{}: Worker {} finished with error '{}' and status '{}'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#494"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00494] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '{}: Task {} is now complete on {} with error: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#495"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00495] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#496"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00496] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '-none-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00498] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '{}: task {} stopped with error {}.  Stopping worker-s-: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '{' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/TaskManager.java.html#499"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00499] In the recursive method org.apache.kafka.trogdor.coordinator.TaskManager.handleWorkerCompletion@POLYN297017 the MagicNumber/String '}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
