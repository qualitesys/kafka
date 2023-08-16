console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ControllerResult<T>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.controller.ControllerResultAndOffset"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerResultAndOffset" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#29"
 , "c1" : "ControllerResultAndOffset"
 , "c2" : "ControllerResultAndOffset(long;ControllerResult&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#34"
 , "c1" : "long"
 , "c2" : "offset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#39"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#51"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#56"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00029"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00046] The same method call other.isAtomic() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.controller.ControllerResultAndOffset.equals@POLYN157697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.controller.ControllerResultAndOffset.equals@POLYN157697 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.controller.ControllerResultAndOffset.toString@POLYN158663 the MagicNumber/String  'ControllerResultAndOffset(records=%s, response=%s, isAtomic=%s, offset=%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.controller.ControllerResultAndOffset.toString@POLYN158663 the MagicNumber/String  ',' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
