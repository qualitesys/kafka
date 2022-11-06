console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java 7 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ControllerResult<T>"
 , "c2" : "org.apache.kafka.controller.ControllerResultAndOffset"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerResultAndOffset" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#14"
 , "c1" : "ControllerResultAndOffset"
 , "c2" : "ControllerResultAndOffset(long;ControllerResult<T>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#19"
 , "c1" : "long"
 , "c2" : "offset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#24"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#36"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#41"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.svg" }

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
 , "c1" : "00014"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00031] The same method call other.isAtomic() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.controller.ControllerResultAndOffset.equals@POLYN147941 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.controller.ControllerResultAndOffset.equals@POLYN147941 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.controller.ControllerResultAndOffset.toString@POLYN148905 the MagicNumber/String  'ControllerResultAndOffset(records=%s, response=%s, isAtomic=%s, offset=%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.controller.ControllerResultAndOffset.toString@POLYN148905 the MagicNumber/String  ',' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResultAndOffset.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
