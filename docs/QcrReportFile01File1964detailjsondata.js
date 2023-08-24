console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java 26 rule violations " 
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
 , "c5" : "00030"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#30"
 , "c1" : "StandbyTaskAssignmentUtils"
 , "c2" : "StandbyTaskAssignmentUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#32"
 , "c1" : "ConstrainedPrioritySet"
 , "c2" : "createLeastLoadedPrioritySetConstrainedByAssignedTask(Map&lt;UUID,ClientState&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#37"
 , "c1" : "void"
 , "c2" : "pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks(int;Map&lt;UUID,ClientState&gt;;Map&lt;TaskId,Integer&gt;;ConstrainedPrioritySet;TaskId;Logger)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#64"
 , "c1" : "Map&lt;TaskId,Integer&gt;"
 , "c2" : "computeTasksToRemainingStandbys(int;Set&lt;TaskId&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.svg" }

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
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method createLeastLoadedPrioritySetConstrainedByAssignedTask arguments Map&lt;UUID ,ClientState &gt;  clients"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks arguments int  numStandbyReplicas|Map&lt;UUID ,ClientState &gt;  clients|Map&lt;TaskId ,Integer &gt;  tasksToRemainingStandbys|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|TaskId  activeTaskId|Logger  log"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00037] For method pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks list of called methods Object monObjet|java.util.UUID standbyTaskClientsByTaskLoad_pollN159012"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument tasksToRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  'Unable to assign {} of {} standby tasks for task [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  'There is not enough available capacity. You should ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  'increase the number of application instances ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String  'to maintain the requested number of standby replicas.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method computeTasksToRemainingStandbys arguments int  numStandbyReplicas|Set&lt;TaskId &gt;  statefulTaskIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument statefulTaskIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00044] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 'Unable to assign {} of {} standby tasks for task [{}]. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 'There is not enough available capacity. You should ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 'increase the number of application instances ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN158526 the MagicNumber/String 'to maintain the requested number of standby replicas.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
