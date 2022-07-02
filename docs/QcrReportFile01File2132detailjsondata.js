console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java 74 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.Coordinator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.Coordinator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Coordinator"
 , "c2" : "Coordinator(Platform;Scheduler;JsonRestServer;CoordinatorRestResource;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "port()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CoordinatorStatusResponse"
 , "c2" : "status()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UptimeResponse"
 , "c2" : "uptime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createTask(CreateTaskRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopTask(StopTaskRequest)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "destroyTask(DestroyTaskRequest)"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "waitForShutdown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "3"
 , "c4" : "23"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.svg" }

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
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
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
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class Coordinator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument scheduler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument resource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method createTask arguments CreateTaskRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method stopTask arguments StopTaskRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method destroyTask arguments DestroyTaskRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method tasks arguments TasksRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method task arguments TaskRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method beginShutdown arguments boolean  stopAgents"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument args is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'trogdor-coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'The Trogdor fault injection coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  '--coordinator.config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  '-c' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'CONFIG' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'The configuration file to use.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  '--node-name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  '-n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'node_name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'NODE_NAME' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'The name of this node.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'node_name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'Starting coordinator process.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'coordinator-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'Running coordinator shutdown hook.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String  'Got exception while running coordinator shutdown hook.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.Coordinator.Coordinator@POLYN187496"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.Coordinator.status@POLYN188230"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.Coordinator.uptime@POLYN188366"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'trogdor-coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'The Trogdor fault injection coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String '--coordinator.config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String '-c' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'CONFIG' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'The configuration file to use.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String '--node-name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String '-n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'node_name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'NODE_NAME' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'The name of this node.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'config' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'node_name' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'Starting coordinator process.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00142] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'coordinator-shutdown-hook' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00143] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'Running coordinator shutdown hook.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/Coordinator.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.trogdor.coordinator.Coordinator.main@POLYN189742 the MagicNumber/String 'Got exception while running coordinator shutdown hook.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
