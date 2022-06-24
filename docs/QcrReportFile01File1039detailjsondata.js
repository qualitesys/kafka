console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java 32 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.mirror.Scheduler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.Scheduler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Scheduler"
 , "c2" : "Scheduler(String;Duration)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Scheduler"
 , "c2" : "Scheduler(Class<?>;Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "scheduleRepeating(Task;Duration;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "scheduleRepeatingDelayed(Task;Duration;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "execute(Task;String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(Task;String)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeThread(Task;String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class Scheduler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument clazz is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.connect.mirror.Scheduler.Scheduler@POLYN170007 the MagicNumber/String  'Scheduler for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method scheduleRepeating arguments Task  task|Duration  interval|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument interval is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.connect.mirror.Scheduler.scheduleRepeating@POLYN170228 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.mirror.Scheduler.scheduleRepeating@POLYN170228 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method scheduleRepeatingDelayed arguments Task  task|Duration  interval|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument interval is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.mirror.Scheduler.scheduleRepeatingDelayed@POLYN170685 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method execute arguments Task  task|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.mirror.Scheduler.execute@POLYN171160 the MagicNumber/String  '{} was interrupted running task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.mirror.Scheduler.execute@POLYN171160 the MagicNumber/String  '{} timed out running task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.mirror.Scheduler.execute@POLYN171160 the MagicNumber/String  '{} caught exception in task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.mirror.Scheduler.close@POLYN172007 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.mirror.Scheduler.close@POLYN172007 the MagicNumber/String  '{} timed out during shutdown of internal scheduler.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.connect.mirror.Scheduler.close@POLYN172007 the MagicNumber/String  '{} was interrupted during shutdown of internal scheduler.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method run arguments Task  task|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument task is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00078] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String  '{} took {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String  '{} took too long ({} ms) running task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String  '{} was interrupted running task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String  '{} caught exception in scheduled task: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method executeThread arguments Task  task|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.mirror.Scheduler.executeThread@POLYN173727 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.mirror.Scheduler.executeThread@POLYN173727 the MagicNumber/String  '{} skipping task due to shutdown: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String '{} took {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String '{} took too long -{} ms- running task: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String '{} was interrupted running task: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/Scheduler.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.connect.mirror.Scheduler.run@POLYN172698 the MagicNumber/String '{} caught exception in scheduled task: {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
