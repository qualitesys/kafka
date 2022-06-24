console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java 10 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.metadata.util.SnapshotFileWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.util.SnapshotFileWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SnapshotFileWriter"
 , "c2" : "SnapshotFileWriter(FileChannel;BatchAccumulator<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(ApiMessageAndVersion)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(List<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "SnapshotFileWriter"
 , "c2" : "open(Path)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class SnapshotFileWriter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method append arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.metadata.util.SnapshotFileWriter.append@POLYN165139 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method append arguments List&lt;ApiMessageAndVersion &gt;  messageBatch"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.metadata.util.SnapshotFileWriter.append@POLYN165336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method open arguments Path  snapshotPath"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN165880 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN165880 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN165880 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.util.SnapshotFileWriter.close@POLYN165515"
}} 
]
};
console.log('leListeStr 99 main end');
