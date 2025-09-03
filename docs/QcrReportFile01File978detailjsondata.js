console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Task"
 , "c2" : "org.apache.kafka.connect.sink.SinkTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.sink.SinkTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#79"
 , "c1" : "void"
 , "c2" : "initialize(SinkTaskContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#88"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#101"
 , "c1" : "void"
 , "c2" : "put(Collection&lt;SinkRecord&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#110"
 , "c1" : "void"
 , "c2" : "flush(Map&lt;TopicPartition,OffsetAndMetadata&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00124"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#124"
 , "c1" : "Map&lt;TopicPartition,OffsetAndMetadata&gt;"
 , "c2" : "preCommit(Map&lt;TopicPartition,OffsetAndMetadata&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#136"
 , "c1" : "void"
 , "c2" : "open(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#144"
 , "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00155"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#155"
 , "c1" : "void"
 , "c2" : "close(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#163"
 , "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#173"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method initialize arguments SinkTaskContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method put arguments Collection&lt;SinkRecord &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  currentOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method preCommit arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  currentOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method open arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method close arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00110] Valued method flush is empty or contains only a return. Interface segregation for Task"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00110] In the class SinkTask which implements the interface(s) Task, the method flush is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTask"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00144] Valued method onPartitionsAssigned is empty or contains only a return. Interface segregation for Task"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00144] In the class SinkTask which implements the interface(s) Task, the method onPartitionsAssigned is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTask"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00163] Valued method onPartitionsRevoked is empty or contains only a return. Interface segregation for Task"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00163] In the class SinkTask which implements the interface(s) Task, the method onPartitionsRevoked is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTask"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
