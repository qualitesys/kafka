console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Deserializer<Void>"
 , "c2" : "org.apache.kafka.common.serialization.VoidDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.VoidDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Void"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.svg" }

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
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class VoidDeserializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html#6"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00006] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00007] In method org.apache.kafka.common.serialization.VoidDeserializer.deserialize@POLYN156905 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00008] In method org.apache.kafka.common.serialization.VoidDeserializer.deserialize@POLYN156905 the MagicNumber/String  'Data should be null for a VoidDeserializer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/VoidDeserializer.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method org.apache.kafka.common.serialization.VoidDeserializer.deserialize@POLYN156905 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
