console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.RecordConversionStats"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.RecordConversionStats" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RecordConversionStats"
 , "c2" : "RecordConversionStats(long;int;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "RecordConversionStats"
 , "c2" : "RecordConversionStats()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "add(RecordConversionStats)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "temporaryMemoryBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numRecordsConverted()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "conversionTimeNanos()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.svg" }

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
 , "c4" : "4"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class RecordConversionStats contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.record.RecordConversionStats.RecordConversionStats@POLYN163374 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.record.RecordConversionStats.RecordConversionStats@POLYN163374 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.record.RecordConversionStats.RecordConversionStats@POLYN163374 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method add arguments RecordConversionStats  stats"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument stats is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordConversionStats.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.record.RecordConversionStats.toString@POLYN164446 the MagicNumber/String  'RecordConversionStats(temporaryMemoryBytes=%d, numRecordsConverted=%d, conversionTimeNanos=%d)' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
