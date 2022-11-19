console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java 9 rule violations " 
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
 , "c5" : "00045"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#45"
 , "c1" : "void"
 , "c2" : "initialize(SourceTaskContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#51"
 , "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#54"
 , "c1" : "List<SourceRecord>"
 , "c2" : "poll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#57"
 , "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#63"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#67"
 , "c1" : "void"
 , "c2" : "commitRecord(SourceRecord)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#72"
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
"data11" : [
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00013"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class SourceTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method initialize arguments SourceTaskContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method commitRecord arguments SourceRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method commitRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00057] Void method commit is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Void method commit is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00067] Void method commitRecord is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00067] Void method commitRecord is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
