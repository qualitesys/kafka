console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java 90 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "BaseHashTable<T>Revertable"
 , "c2" : "org.apache.kafka.timeline.SnapshottableHashTable"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.SnapshottableHashTable" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SnapshottableHashTable"
 , "c2" : "SnapshottableHashTable(SnapshotRegistry;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "snapshottableSize(long)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "snapshottableGet(Object;long)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "snapshottableAddUnlessPresent(T)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "snapshottableAddOrReplace(T)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "snapshottableRemove(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateTierData(int)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateTierData(T;int)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<T>"
 , "c2" : "snapshottableIterator(long)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "snapshottableToDebugString()"
 , "c3" : "6"
 , "c4" : "22"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeRevert(long;Delta)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "54"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class HashTier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method mergeFrom arguments long  epoch|Delta  source"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00039] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.timeline.SnapshottableHashTable.HashTier.mergeFrom@POLYN242270 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class CurrentIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.CurrentIterator@POLYN243609 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.CurrentIterator@POLYN243609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.hasNext@POLYN243989 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.hasNext@POLYN243989 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.next@POLYN244432 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN244786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN244786 the MagicNumber/String  'remove' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN244786 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00096] The class HistoricalIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.HistoricalIterator@POLYN245584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN246080 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN246080 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN246080 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN246080 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.next@POLYN249324 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument snapshotRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method snapshottableSize arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableSize@POLYN249935 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method snapshottableGet arguments Object  key|long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN250692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method snapshottableAddUnlessPresent arguments T  object"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00208] The argument object is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN252065 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN252065 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN252065 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN252065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method snapshottableAddOrReplace arguments T  object"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#220"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00220] The argument object is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddOrReplace@POLYN252675 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddOrReplace@POLYN252675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method snapshottableRemove arguments Object  object"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN253289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN253289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN253289 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method updateTierData arguments int  prevSize"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN253726 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method updateTierData arguments T  prev|int  prevSize"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument prev is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN254438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN254438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN254438 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method snapshottableIterator arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00290] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00293] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'SnapshottableHashTable{%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'top tier: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  ',%nsnapshot tiers: [%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'HashTier{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'size=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  ', deltaTable=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN255978 the MagicNumber/String  ']}%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00315] For method executeRevert arguments long  targetEpoch|Delta  delta"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00319] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00329] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.timeline.SnapshottableHashTable.executeRevert@POLYN258275 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.timeline.SnapshottableHashTable.executeRevert@POLYN258275 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
