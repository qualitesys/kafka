console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java 27 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#15"
 , "c1" : "StandbyTaskAssignmentUtils"
 , "c2" : "StandbyTaskAssignmentUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#17"
 , "c1" : "ConstrainedPrioritySet"
 , "c2" : "createLeastLoadedPrioritySetConstrainedByAssignedTask(Map<UUID,ClientState>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#22"
 , "c1" : "void"
 , "c2" : "pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks(int;Map<UUID,ClientState>;Map<TaskId,Integer>;ConstrainedPrioritySet;TaskId;Logger)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#49"
 , "c1" : "Map<TaskId,Integer>"
 , "c2" : "computeTasksToRemainingStandbys(int;Set<TaskId>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
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
 , "c4" : "1"
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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
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
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class StandbyTaskAssignmentUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method createLeastLoadedPrioritySetConstrainedByAssignedTask arguments Map&lt;UUID ,ClientState &gt;  clients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#17"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00017] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks arguments int  numStandbyReplicas|Map&lt;UUID ,ClientState &gt;  clients|Map&lt;TaskId ,Integer &gt;  tasksToRemainingStandbys|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|TaskId  activeTaskId|Logger  log"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00022] For method pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks list of called methods Object monObjet|java.util.UUID standbyTaskClientsByTaskLoad_pollN148662"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument tasksToRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00030] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  'Unable to assign {} of {} standby tasks for task [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  'There is not enough available capacity. You should ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  'increase the number of application instances ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String  'to maintain the requested number of standby replicas.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method computeTasksToRemainingStandbys arguments int  numStandbyReplicas|Set&lt;TaskId &gt;  statefulTaskIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument statefulTaskIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00029] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 'Unable to assign {} of {} standby tasks for task [{}]. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 'There is not enough available capacity. You should ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 'increase the number of application instances ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00044] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN148180 the MagicNumber/String 'to maintain the requested number of standby replicas.' MUST BE CONVERTED to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.svg" }

};
console.log('leListeStr 99 main end');
