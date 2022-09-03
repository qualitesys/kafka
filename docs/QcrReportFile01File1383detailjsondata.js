console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java 91 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BaseHashTable<T>Revertable"
 , "c2" : "org.apache.kafka.timeline.SnapshottableHashTable"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.SnapshottableHashTable" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "SnapshottableHashTable"
 , "c2" : "SnapshottableHashTable(SnapshotRegistry;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "snapshottableSize(long)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "snapshottableGet(Object;long)"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "snapshottableAddUnlessPresent(T)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "snapshottableAddOrReplace(T)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "snapshottableRemove(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updateTierData(int)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updateTierData(T;int)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Iterator<T>"
 , "c2" : "snapshottableIterator(long)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "snapshottableToDebugString()"
 , "c3" : "6"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "executeRevert(long;Delta)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "55"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class HashTier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method mergeFrom arguments long  epoch|Delta  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00042] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.timeline.SnapshottableHashTable.HashTier.mergeFrom@POLYN221440 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.timeline.SnapshottableHashTable.HashTier.mergeFrom@POLYN221440 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00055] The class CurrentIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.CurrentIterator@POLYN222863 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.CurrentIterator@POLYN222863 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.hasNext@POLYN223243 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.hasNext@POLYN223243 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.next@POLYN223686 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN224040 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN224040 the MagicNumber/String  'remove' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.timeline.SnapshottableHashTable.CurrentIterator.remove@POLYN224040 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00100] The class HistoricalIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.HistoricalIterator@POLYN224838 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00135] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN225334 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN225334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN225334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.hasNext@POLYN225334 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.timeline.SnapshottableHashTable.HistoricalIterator.next@POLYN228578 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument snapshotRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method snapshottableSize arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableSize@POLYN229189 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method snapshottableGet arguments Object  key|long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00196] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableGet@POLYN229946 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method snapshottableAddUnlessPresent arguments T  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument object is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN231319 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN231319 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN231319 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddUnlessPresent@POLYN231319 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method snapshottableAddOrReplace arguments T  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#224"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00224] The argument object is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddOrReplace@POLYN231929 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableAddOrReplace@POLYN231929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method snapshottableRemove arguments Object  object"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN232543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN232543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableRemove@POLYN232543 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method updateTierData arguments int  prevSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN232980 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00258] For method updateTierData arguments T  prev|int  prevSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#258"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00258] The argument prev is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN233692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN233692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.timeline.SnapshottableHashTable.updateTierData@POLYN233692 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method snapshottableIterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00294] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'SnapshottableHashTable{%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'top tier: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  ',%nsnapshot tiers: [%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'HashTier{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'size=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  ', deltaTable=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.timeline.SnapshottableHashTable.snapshottableToDebugString@POLYN235232 the MagicNumber/String  ']}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#319"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00319] For method executeRevert arguments long  targetEpoch|Delta  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00323] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00333] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.timeline.SnapshottableHashTable.executeRevert@POLYN237529 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/SnapshottableHashTable.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.timeline.SnapshottableHashTable.executeRevert@POLYN237529 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
