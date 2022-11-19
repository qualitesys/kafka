console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java 19 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#36"
 , "c1" : "RocksDBTimeOrderedWindowSegmentedBytesStore"
 , "c2" : "RocksDBTimeOrderedWindowSegmentedBytesStore(String;String;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#45"
 , "c1" : "void"
 , "c2" : "put(Bytes;long;int;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#50"
 , "c1" : "byte[]"
 , "c2" : "fetch(Bytes;long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#55"
 , "c1" : "KeyValue<Bytes,byte[]>"
 , "c2" : "getIndexKeyValue(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#64"
 , "c1" : "Map<KeyValueSegment,WriteBatch>"
 , "c2" : "getWriteBatches(Collection<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#106"
 , "c1" : "IndexToBaseStoreIterator"
 , "c2" : "getIndexToBaseStoreIterator(SegmentIterator<KeyValueSegment>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.RocksDBTimeOrderedWindowSegmentedBytesStore@POLYN162086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method put arguments Bytes  key|long  timestamp|int  seqnum|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method fetch arguments Bytes  key|long  timestamp|int  seqnum"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method getIndexKeyValue arguments Bytes  baseKey|byte[]  baseValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument baseKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getIndexKeyValue@POLYN163289 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00064] For method getWriteBatches list of called methods Object monObjet|long WindowKeySchema_extractStoreTimestampN164326|long WindowKeySchema_extractStoreTimestampN164815"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN164025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN164025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN164025 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN164025 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN164025 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment &gt;  segmentIterator"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
