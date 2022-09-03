console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java 16 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Task"
 , "c2" : "org.apache.kafka.connect.sink.SinkTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.sink.SinkTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initialize(SinkTaskContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "put(Collection<SinkRecord>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "flush(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "preCommit(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "open(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "3"
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
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class SinkTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method initialize arguments SinkTaskContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method put arguments Collection&lt;SinkRecord &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method flush arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  currentOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method preCommit arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  currentOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method open arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method close arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00035] Void method flush is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00035] Void method flush is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00051] Void method onPartitionsAssigned is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00051] Void method onPartitionsAssigned is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00061] Void method onPartitionsRevoked is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/sink/SinkTask.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00061] Void method onPartitionsRevoked is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
