console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Thread"
 , "c2" : "org.apache.kafka.common.utils.KafkaThread"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.KafkaThread" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaThread"
 , "c2" : "daemon(String;Runnable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaThread"
 , "c2" : "nonDaemon(String;Runnable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaThread"
 , "c2" : "KafkaThread(String;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KafkaThread"
 , "c2" : "KafkaThread(String;Runnable;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configureThread(String;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#12"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00012] For method daemon arguments String  name|Runnable  runnable"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00013] In method org.apache.kafka.common.utils.KafkaThread.daemon@POLYN163172 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method nonDaemon arguments String  name|Runnable  runnable"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.utils.KafkaThread.nonDaemon@POLYN163397 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method configureThread arguments String  name|boolean  daemon"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.utils.KafkaThread.configureThread@POLYN164124 the MagicNumber/String  'Uncaught exception in thread '{}':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.KafkaThread.configureThread@POLYN164124"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.KafkaThread.daemon@POLYN163172"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.KafkaThread.nonDaemon@POLYN163397"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00032] In the recursive method org.apache.kafka.common.utils.KafkaThread.configureThread@POLYN164124 the MagicNumber/String 'Uncaught exception in thread '{}':' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#13"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00013] In the recursive method org.apache.kafka.common.utils.KafkaThread.daemon@POLYN163172 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/KafkaThread.java.html#17"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00017] In the recursive method org.apache.kafka.common.utils.KafkaThread.nonDaemon@POLYN163397 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
