console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java 25 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.Connect"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.Connect" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Connect"
 , "c2" : "Connect(Herder;RestServer)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "awaitStop()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "URI"
 , "c2" : "restUrl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "URI"
 , "c2" : "adminUrl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "8"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class Connect contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.connect.runtime.Connect.Connect@POLYN172920 the MagicNumber/String  'Kafka Connect instance created' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String  'Kafka Connect starting' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String  'connect-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String  'Kafka Connect started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String  'Kafka Connect stopping' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String  'Kafka Connect stopped' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.runtime.Connect.awaitStop@POLYN174311 the MagicNumber/String  'Interrupted waiting for Kafka Connect to shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.runtime.Connect.ShutdownHook.run@POLYN174921 the MagicNumber/String  'Interrupted in shutdown hook while waiting for Kafka Connect startup to finish' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method awaitStop is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.stop@POLYN173775"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.adminUrl@POLYN174765"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.Connect@POLYN172920"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.awaitStop@POLYN174311"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.restUrl@POLYN174659"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.start@POLYN173282"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String 'Kafka Connect stopping' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method org.apache.kafka.connect.runtime.Connect.stop@POLYN173775 the MagicNumber/String 'Kafka Connect stopped' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.connect.runtime.Connect.Connect@POLYN172920 the MagicNumber/String 'Kafka Connect instance created' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.connect.runtime.Connect.awaitStop@POLYN174311 the MagicNumber/String 'Interrupted waiting for Kafka Connect to shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String 'Kafka Connect starting' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String 'connect-shutdown-hook' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00039] In the recursive method org.apache.kafka.connect.runtime.Connect.start@POLYN173282 the MagicNumber/String 'Kafka Connect started' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
