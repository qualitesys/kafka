console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java 18 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class StandbyTaskAssignmentUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method createLeastLoadedPrioritySetConstrainedByAssignedTask arguments Map&lt;UUID ,ClientState &gt;  clients"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#17"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00017] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks arguments int  numStandbyReplicas|Map&lt;UUID ,ClientState &gt;  clients|Map&lt;TaskId ,Integer &gt;  tasksToRemainingStandbys|ConstrainedPrioritySet  standbyTaskClientsByTaskLoad|TaskId  activeTaskId|Logger  log"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument clients is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument tasksToRemainingStandbys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument standbyTaskClientsByTaskLoad is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00030] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  'Unable to assign {} of {} standby tasks for task [{}]. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  'There is not enough available capacity. You should ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  'increase the number of application instances ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.assignment.StandbyTaskAssignmentUtils.pollClientAndMaybeAssignAndUpdateRemainingStandbyTasks@POLYN160368 the MagicNumber/String  'to maintain the requested number of standby replicas.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method computeTasksToRemainingStandbys arguments int  numStandbyReplicas|Set&lt;TaskId &gt;  statefulTaskIds"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/StandbyTaskAssignmentUtils.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument statefulTaskIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
