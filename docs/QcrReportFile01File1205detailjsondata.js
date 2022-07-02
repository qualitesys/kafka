console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java 3 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.SinkUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.SinkUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SinkUtils"
 , "c2" : "SinkUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "consumerGroupId(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.svg" }

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
 , "c4" : "1"
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
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class SinkUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.html#8"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00008] For method consumerGroupId arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SinkUtils.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00009] In method org.apache.kafka.connect.util.SinkUtils.consumerGroupId@POLYN159972 the MagicNumber/String  'connect-' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
