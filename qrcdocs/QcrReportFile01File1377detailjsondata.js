console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java 9 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "2"
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
   "c1" : "00009"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class Snapshot contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method setDelta arguments Revertable  owner|Delta  delta"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method mergeFrom arguments Snapshot  source"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.timeline.Snapshot.mergeFrom@POLYN162709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method appendNext arguments Snapshot  newNext"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument newNext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/Snapshot.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.timeline.Snapshot.erase@POLYN163772 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
