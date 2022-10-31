console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Serializer<ByteBuffer>"
 , "c2" : "org.apache.kafka.common.serialization.ByteBufferSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.ByteBufferSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00007"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#7"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;ByteBuffer)"
 , "c3" : "4"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class ByteBufferSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#7"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00007] For method serialize arguments String  topic|ByteBuffer  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00008] In method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00009] In method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#8"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00008] In the recursive method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#9"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00009] In the recursive method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#15"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00015] In the recursive method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ByteBufferSerializer.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00021] In the recursive method org.apache.kafka.common.serialization.ByteBufferSerializer.serialize@POLYN143010 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
