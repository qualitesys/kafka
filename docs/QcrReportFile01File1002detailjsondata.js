console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html" 
 , "texte" : "File connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java 16 rule violations " 
 , "fic2"  : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SinkTask"
 , "c2" : "org.apache.kafka.connect.file.FileStreamSinkTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.file.FileStreamSinkTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FileStreamSinkTask"
 , "c2" : "FileStreamSinkTask()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "FileStreamSinkTask"
 , "c2" : "FileStreamSinkTask(PrintStream)"
 , "c3" : "1"
 , "c4" : "2"
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
 , "c2" : "start(Map<String,String>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Collection<SinkRecord>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "logFilename()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.png" 

 , "ligneplantuml" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "10"
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
   "c1" : "00033"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.connect.file.FileStreamSinkTask.FileStreamSinkTask@POLYN173256 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.file.FileStreamSinkTask.start@POLYN173592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.file.FileStreamSinkTask.start@POLYN173592 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.file.FileStreamSinkTask.start@POLYN173592 the MagicNumber/String  'Couldn't find or create file '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.file.FileStreamSinkTask.start@POLYN173592 the MagicNumber/String  '' for FileStreamSinkTask' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method put arguments Collection&lt;SinkRecord &gt;  sinkRecords"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.file.FileStreamSinkTask.put@POLYN174477 the MagicNumber/String  'Writing line to {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.file.FileStreamSinkTask.flush@POLYN174892 the MagicNumber/String  'Flushing output stream for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.file.FileStreamSinkTask.stop@POLYN175165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.file.FileStreamSinkTask.logFilename@POLYN175376 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.file.FileStreamSinkTask.logFilename@POLYN175376 the MagicNumber/String  'stdout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.file.FileStreamSinkTask.flush@POLYN174892"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/file/src/main/java/org/apache/kafka/connect/file/FileStreamSinkTask.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.connect.file.FileStreamSinkTask.flush@POLYN174892 the MagicNumber/String 'Flushing output stream for {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
