console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java 6 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SourceConnector"
 , "c2" : "org.apache.kafka.connect.mirror.MirrorHeartbeatConnector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.MirrorHeartbeatConnector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MirrorHeartbeatConnector"
 , "c2" : "MirrorHeartbeatConnector()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "MirrorHeartbeatConnector"
 , "c2" : "MirrorHeartbeatConnector(MirrorConnectorConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Class<?extendsTask>"
 , "c2" : "taskClass()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,String>>"
 , "c2" : "taskConfigs(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createInternalTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.svg" }

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
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.connect.mirror.MirrorHeartbeatConnector.start@POLYN167044 the MagicNumber/String  'creating internal topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.connect.mirror.MirrorHeartbeatConnector.stop@POLYN167497 the MagicNumber/String  'scheduler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method taskConfigs arguments int  maxTasks"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorHeartbeatConnector.start@POLYN167044"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorHeartbeatConnector.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00032] In the recursive method org.apache.kafka.connect.mirror.MirrorHeartbeatConnector.start@POLYN167044 the MagicNumber/String 'creating internal topics' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
