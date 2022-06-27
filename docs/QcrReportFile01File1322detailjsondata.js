console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java 29 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.SnapshotGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.SnapshotGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SnapshotGenerator"
 , "c2" : "SnapshotGenerator(LogContext;SnapshotWriter<ApiMessageAndVersion>;int;List<Section>)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "lastContainedLogOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SnapshotWriter"
 , "c2" : "writer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "generateBatch()"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "generateBatches()"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class SnapshotGenerator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class Section contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument sections is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.controller.SnapshotGenerator.SnapshotGenerator@POLYN174370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.controller.SnapshotGenerator.SnapshotGenerator@POLYN174370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.controller.SnapshotGenerator.SnapshotGenerator@POLYN174370 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  'Generated {} record(s) for the {} section of snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  'Generating records for the {} section of snapshot {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.controller.SnapshotGenerator.generateBatches@POLYN177076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.controller.SnapshotGenerator.generateBatches@POLYN177076 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.SnapshotGenerator.lastContainedLogOffset@POLYN175299"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String 'Generated {} record-s- for the {} section of snapshot {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String 'Generating records for the {} section of snapshot {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/SnapshotGenerator.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.controller.SnapshotGenerator.generateBatch@POLYN175581 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
