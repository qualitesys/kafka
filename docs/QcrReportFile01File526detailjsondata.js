console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.protocol.ObjectSerializationCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.protocol.ObjectSerializationCache" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ObjectSerializationCache"
 , "c2" : "ObjectSerializationCache()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setArraySizeInBytes(Object;Integer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "getArraySizeInBytes(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cacheSerializedValue(Object;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "getSerializedValue(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class ObjectSerializationCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method setArraySizeInBytes arguments Object  o|Integer  size"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method getArraySizeInBytes arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method cacheSerializedValue arguments Object  o|byte[]  val"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method getSerializedValue arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.ObjectSerializationCache.getArraySizeInBytes@POLYN161951"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/protocol/ObjectSerializationCache.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.protocol.ObjectSerializationCache.getSerializedValue@POLYN162310"
}} 
]
};
console.log('leListeStr 99 main end');
