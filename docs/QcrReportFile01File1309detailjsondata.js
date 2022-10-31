console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java 22 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.xml" 
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
 , "c5" : "00018"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#18"
 , "c1" : "void"
 , "c2" : "completeUpTo(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#33"
 , "c1" : "void"
 , "c2" : "failAll(Exception)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#45"
 , "c1" : "void"
 , "c2" : "add(long;DeferredEvent)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.svg" }

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
 , "c4" : "6"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class ControllerPurgatory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method completeUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00021] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00025] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.controller.ControllerPurgatory.completeUpTo@POLYN154714 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method failAll arguments Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00036] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method add arguments long  offset|DeferredEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  'There is already a purgatory event with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  'offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  '.  We should not add one with an offset of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  ' which ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  'is lower than that.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String 'There is already a purgatory event with ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String '.  We should not add one with an offset of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String 'offset ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String ' which ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String 'is lower than that.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN156337 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
