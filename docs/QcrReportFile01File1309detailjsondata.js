console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java 9 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ControllerResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ControllerResult"
 , "c2" : "ControllerResult(List<ApiMessageAndVersion>;T;boolean)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "List<ApiMessageAndVersion>"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "response()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isAtomic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ControllerResult<T>"
 , "c2" : "withoutRecords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.svg" }

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
 , "c4" : "7"
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
   "c1" : "00013"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class ControllerResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.controller.ControllerResult.equals@POLYN171476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.controller.ControllerResult.equals@POLYN171476 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.controller.ControllerResult.toString@POLYN172319 the MagicNumber/String  'ControllerResult(records=%s, response=%s, isAtomic=%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.controller.ControllerResult.toString@POLYN172319 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.controller.ControllerResult.withoutRecords@POLYN172726 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.controller.ControllerResult the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerResult.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.controller.ControllerResult the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
