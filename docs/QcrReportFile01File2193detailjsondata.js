console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java 38 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.coordinator.CoordinatorRestResource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.coordinator.CoordinatorRestResource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#71"
 , "c1" : "void"
 , "c2" : "setCoordinator(Coordinator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#77"
 , "c1" : "CoordinatorStatusResponse"
 , "c2" : "status()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#83"
 , "c1" : "UptimeResponse"
 , "c2" : "uptime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#89"
 , "c1" : "Empty"
 , "c2" : "createTask(CreateTaskRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#96"
 , "c1" : "Empty"
 , "c2" : "stopTask(StopTaskRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#103"
 , "c1" : "Empty"
 , "c2" : "destroyTask(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#110"
 , "c1" : "Response"
 , "c2" : "tasks(List<String>;long;long;long;long;String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#132"
 , "c1" : "TaskState"
 , "c2" : "tasks(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#142"
 , "c1" : "Empty"
 , "c2" : "beginShutdown(CoordinatorShutdownRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#147"
 , "c1" : "Coordinator"
 , "c2" : "coordinator()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "9"
}}
,
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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method setCoordinator arguments Coordinator  myCoordinator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method createTask arguments CreateTaskRequest  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method stopTask arguments StopTaskRequest  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method destroyTask arguments String  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method tasks arguments List&lt;String &gt;  taskId|long  firstStartMs|long  lastStartMs|long  firstEndMs|long  lastEndMs|String  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00110] For method tasks list of called methods Object monObjet|boolean state_equalsN168875|org.apache.kafka.trogdor.rest.TaskState coordinatorN169552"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN168135 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN168135 the MagicNumber/String  400 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN168135 the MagicNumber/String  'State %s is invalid. Must be one of %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN168135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN168135 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method tasks arguments String  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN169976 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN169976 the MagicNumber/String  'No task with ID \'%s\' exists.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method beginShutdown arguments CoordinatorShutdownRequest  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.coordinator@POLYN170767 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.coordinator@POLYN170767 the MagicNumber/String  'CoordinatorRestResource has not been initialized yet.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00077] Public method status is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00083] Public method uptime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method createTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00096] Public method stopTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00103] Public method destroyTask is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00110] Public method tasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00132] Public method tasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00142] Public method beginShutdown is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00071] Public method setCoordinator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN169976"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.beginShutdown@POLYN170536"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.createTask@POLYN167199"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.destroyTask@POLYN167739"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.setCoordinator@POLYN166632"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.status@POLYN166833"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.stopTask@POLYN167469"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.uptime@POLYN167022"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN169976 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.trogdor.coordinator.CoordinatorRestResource.tasks@POLYN169976 the MagicNumber/String 'No task with ID \'%s\' exists.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/coordinator/CoordinatorRestResource.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
