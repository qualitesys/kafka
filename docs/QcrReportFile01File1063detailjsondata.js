console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java 12 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.Connect"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.Connect" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#41"
 , "c1" : "Connect"
 , "c2" : "Connect(Herder;RestServer)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#48"
 , "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#62"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#78"
 , "c1" : "void"
 , "c2" : "awaitStop()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#86"
 , "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#91"
 , "c1" : "RestServer"
 , "c2" : "rest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.runtime.Connect.Connect@POLYN162999 the MagicNumber/String  'Kafka Connect instance created' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.runtime.Connect.start@POLYN163361 the MagicNumber/String  'Kafka Connect starting' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.runtime.Connect.start@POLYN163361 the MagicNumber/String  'connect-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.runtime.Connect.start@POLYN163361 the MagicNumber/String  'Kafka Connect started' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN163854 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN163854 the MagicNumber/String  'Kafka Connect stopping' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.runtime.Connect.stop@POLYN163854 the MagicNumber/String  'Kafka Connect stopped' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.runtime.Connect.awaitStop@POLYN164392 the MagicNumber/String  'Interrupted waiting for Kafka Connect to shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.runtime.Connect.ShutdownHook.run@POLYN164878 the MagicNumber/String  'Interrupted in shutdown hook while waiting for Kafka Connect startup to finish' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00078] Public method awaitStop is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.Connect.Connect@POLYN162999"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.connect.runtime.Connect.Connect@POLYN162999 the MagicNumber/String 'Kafka Connect instance created' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/Connect.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
