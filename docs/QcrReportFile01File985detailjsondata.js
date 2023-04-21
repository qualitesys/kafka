console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java 8 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Task"
 , "c2" : "org.apache.kafka.connect.source.SourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.source.SourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#83"
 , "c1" : "void"
 , "c2" : "initialize(SourceTaskContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#92"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#105"
 , "c1" : "List&lt;SourceRecord&gt;"
 , "c2" : "poll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#116"
 , "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#131"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#151"
 , "c1" : "void"
 , "c2" : "commitRecord(SourceRecord)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#173"
 , "c1" : "void"
 , "c2" : "commitRecord(SourceRecord;RecordMetadata)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method initialize arguments SourceTaskContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method commitRecord arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method commitRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00116] Void method commit is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00116] Void method commit is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00151] Void method commitRecord is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00151] Void method commitRecord is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
