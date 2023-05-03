console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java 17 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ControllerPurgatory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerPurgatory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c1" : "void"
 , "c2" : "completeUpTo(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c1" : "void"
 , "c2" : "failAll(Exception)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c1" : "void"
 , "c2" : "add(long;DeferredEvent)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#101"
 , "c1" : "OptionalLong"
 , "c2" : "highestPendingOffset()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method completeUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00044] For method completeUpTo list of called methods Object monObjet|java.util.Set pending_entrySetN156394"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.controller.ControllerPurgatory.completeUpTo@POLYN156222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method failAll arguments Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method failAll list of called methods Object monObjet|java.util.Set pending_entrySetN157247"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method add arguments long  offset|DeferredEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method add list of called methods Object monObjet|V pending_getN158427"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'There is already a purgatory event with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  '.  We should not add one with an offset of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  ' which ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'is lower than that.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
