console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java 6 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RecordSerde<String>"
 , "c2" : "org.apache.kafka.raft.internals.StringSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.StringSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#28"
 , "c1" : "int"
 , "c2" : "recordSize(String;ObjectSerializationCache)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#32"
 , "c1" : "int"
 , "c2" : "recordSize(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#37"
 , "c1" : "void"
 , "c2" : "write(String;ObjectSerializationCache;Writable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#42"
 , "c1" : "String"
 , "c2" : "read(Readable;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c1" : "00028"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method recordSize arguments String  data|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method recordSize arguments String  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method write arguments String  data|ObjectSerializationCache  serializationCache|Writable  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method read arguments Readable  input|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/StringSerde.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
