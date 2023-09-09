console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html" 
 , "texte" : "File connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SinkConnector"
 , "c2" : ""
 , "c2" : "org.apache.kafka.connect.file.FileStreamSinkConnector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.file.FileStreamSinkConnector" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#45"
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#50"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#56"
 , "c1" : "Class&lt;?extendsTask&gt;"
 , "c2" : "taskClass()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#61"
 , "c1" : "List&lt;Map&lt;String,String&gt;&gt;"
 , "c2" : "taskConfigs(int)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#73"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#78"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.svg" }

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
"data13a" : [
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
 , "c4" : "2"
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
 , "c1" : "00050"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method taskConfigs arguments int  maxTasks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.file.FileStreamSinkConnector.taskConfigs@POLYN162712 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.file.FileStreamSinkConnector.taskConfigs@POLYN162712 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkConnector.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
