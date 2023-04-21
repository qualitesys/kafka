console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java 3 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SinkRecord"
 , "c2" : "org.apache.kafka.connect.runtime.InternalSinkRecord"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.InternalSinkRecord" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#35"
 , "c1" : "InternalSinkRecord"
 , "c2" : "InternalSinkRecord(ConsumerRecord&lt;byte[],byte[]&gt;;SinkRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#42"
 , "c1" : "InternalSinkRecord"
 , "c2" : "InternalSinkRecord(ConsumerRecord&lt;byte[],byte[]&gt;;String;int;Schema;Object;Schema;Object;long;Long;TimestampType;Iterable&lt;Header&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#51"
 , "c1" : "SinkRecord"
 , "c2" : "newRecord(String;Integer;Schema;Object;Schema;Object;Long;Iterable&lt;Header&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#59"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#64"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#69"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#78"
 , "c1" : "ConsumerRecord&lt;byte[],byte[]&gt;"
 , "c2" : "originalRecord()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method newRecord arguments String  topic|Integer  kafkaPartition|Schema  keySchema|Object  key|Schema  valueSchema|Object  value|Long  timestamp|Iterable&lt;Header &gt;  headers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method equals arguments Object  o"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/InternalSinkRecord.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
