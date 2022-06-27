console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java 22 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RocksDBTimeOrderedSessionSegmentedBytesStore"
 , "c2" : "RocksDBTimeOrderedSessionSegmentedBytesStore(String;String;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Windowed<Bytes>;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<Bytes,byte[]>"
 , "c2" : "getIndexKeyValue(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<KeyValueSegment,WriteBatch>"
 , "c2" : "getWriteBatches(Collection<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "IndexToBaseStoreIterator"
 , "c2" : "getIndexToBaseStoreIterator(SegmentIterator<KeyValueSegment>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.RocksDBTimeOrderedSessionSegmentedBytesStore@POLYN179008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method remove arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method put arguments Windowed&lt;Bytes &gt;  sessionKey|byte[]  aggregate"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method getIndexKeyValue arguments Bytes  baseKey|byte[]  baseValue"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument baseKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getIndexKeyValue@POLYN180266 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00073] For method getWriteBatches list of called methods Object monObjet|long SessionKeySchema_extractEndTimestampN181263|long SessionKeySchema_extractEndTimestampN181752"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180962 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180962 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment &gt;  segmentIterator"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.put@POLYN179956"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.remove@POLYN179767"
}} 
]
};
console.log('leListeStr 99 main end');
