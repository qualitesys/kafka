console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java 21 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Serializer<Double>"
 , "c2" : "org.apache.kafka.common.serialization.DoubleSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.DoubleSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "serialize(String;Double)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class DoubleSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#6"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00006] For method serialize arguments String  topic|Double  data"
}} 
,
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00007] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00008] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  56 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00013] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  48 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  40 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243"
}} 
,
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#7"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00007] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#8"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00008] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#12"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00012] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 56 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#13"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00013] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 48 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#14"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00014] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 40 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#15"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00015] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 32 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#16"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00016] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 24 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#17"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00017] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 16 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/DoubleSerializer.java.html#18"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00018] In the recursive method org.apache.kafka.common.serialization.DoubleSerializer.serialize@POLYN161243 the MagicNumber/String 8 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
