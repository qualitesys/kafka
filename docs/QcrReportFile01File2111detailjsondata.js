console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#53"
 , "c1" : "RocksDBTimeOrderedWindowSegmentedBytesStore"
 , "c2" : "RocksDBTimeOrderedWindowSegmentedBytesStore(String;String;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#62"
 , "c1" : "void"
 , "c2" : "put(Bytes;long;int;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#67"
 , "c1" : "byte[]"
 , "c2" : "fetch(Bytes;long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#72"
 , "c1" : "KeyValue&lt;Bytes,byte[]&gt;"
 , "c2" : "getIndexKeyValue(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#81"
 , "c1" : "Map&lt;KeyValueSegment,WriteBatch&gt;"
 , "c2" : "getWriteBatches(Collection&lt;ConsumerRecord&lt;byte[],byte[]&gt;&gt;)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#123"
 , "c1" : "IndexToBaseStoreIterator"
 , "c2" : "getIndexToBaseStoreIterator(SegmentIterator&lt;KeyValueSegment&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.svg" }

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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00045] For method getBaseKey list of called methods Object monObjet|byte[] KeyFirstWindowKeySchema_extractStoreKeyBytesN172017|long KeyFirstWindowKeySchema_extractStoreTimestampN172138|int KeyFirstWindowKeySchema_extractStoreSequenceN172259"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.RocksDBTimeOrderedWindowSegmentedBytesStore@POLYN172454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method put arguments Bytes  key|long  timestamp|int  seqnum|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00062] For method put list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes TimeFirstWindowKeySchema_toStoreKeyBinaryN173119"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method fetch arguments Bytes  key|long  timestamp|int  seqnum"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method getIndexKeyValue arguments Bytes  baseKey|byte[]  baseValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00072] For method getIndexKeyValue list of called methods Object monObjet|byte[] TimeFirstWindowKeySchema_extractStoreKeyBytesN173806|long TimeFirstWindowKeySchema_extractStoreTimestampN173927|int TimeFirstWindowKeySchema_extractStoreSequenceN174048"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument baseKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getIndexKeyValue@POLYN173659 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method getWriteBatches list of called methods Object monObjet|long WindowKeySchema_extractStoreTimestampN174704|long WindowKeySchema_extractStoreTimestampN175197|long segments_segmentIdN175318"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN174401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN174401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN174401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN174401 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowSegmentedBytesStore.getWriteBatches@POLYN174401 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment &gt;  segmentIterator"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedWindowSegmentedBytesStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
