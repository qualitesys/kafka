console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.TaskAndAction"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.TaskAndAction" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#19"
 , "c1" : "TaskAndAction"
 , "c2" : "TaskAndAction(Task;TaskId;Action)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#25"
 , "c1" : "TaskAndAction"
 , "c2" : "createAddTask(Task)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#30"
 , "c1" : "TaskAndAction"
 , "c2" : "createRemoveTask(TaskId)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#35"
 , "c1" : "Task"
 , "c2" : "getTask()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#42"
 , "c1" : "TaskId"
 , "c2" : "getTaskId()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#49"
 , "c1" : "Action"
 , "c2" : "getAction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class TaskAndAction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method createAddTask arguments Task  task"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.streams.processor.internals.TaskAndAction.createAddTask@POLYN145886 the MagicNumber/String  'Task to add is null!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.streams.processor.internals.TaskAndAction.createAddTask@POLYN145886 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method createRemoveTask arguments TaskId  taskId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.processor.internals.TaskAndAction.createRemoveTask@POLYN146189 the MagicNumber/String  'Task ID of task to remove is null!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.processor.internals.TaskAndAction.createRemoveTask@POLYN146189 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.processor.internals.TaskAndAction.getTask@POLYN146487 the MagicNumber/String  'Action type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.processor.internals.TaskAndAction.getTask@POLYN146487 the MagicNumber/String  ' cannot have a task!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.TaskAndAction.getTaskId@POLYN146774 the MagicNumber/String  'Action type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.processor.internals.TaskAndAction.getTaskId@POLYN146774 the MagicNumber/String  ' cannot have a task ID!' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TaskAndAction.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
