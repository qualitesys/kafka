console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html" 
 , "texte" : "File connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java 9 rule violations " 
 , "fic2"  : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SourceConnector"
 , "c2" : "org.apache.kafka.connect.file.FileStreamSourceConnector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.file.FileStreamSourceConnector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "2"
 , "c4" : "6"
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
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.png" 

 , "ligneplantuml" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00042] For method start list of called methods Object monObjet|String parsedConfig_getStringN170612|java.util.List&lt;String&gt; parsedConfig_getListN170727|Integer parsedConfig_getIntN171084"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.file.FileStreamSourceConnector.start@POLYN170368 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.connect.file.FileStreamSourceConnector.start@POLYN170368 the MagicNumber/String  ''topic' in FileStreamSourceConnector configuration requires definition of a single topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.file.FileStreamSourceConnector.start@POLYN170368 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method taskConfigs arguments int  maxTasks"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.file.FileStreamSourceConnector.taskConfigs@POLYN171365 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.file.FileStreamSourceConnector.taskConfigs@POLYN171365"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSourceConnector.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.connect.file.FileStreamSourceConnector.taskConfigs@POLYN171365 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
