console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java 29 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#39"
 , "c1" : "RocksDBTimeOrderedSessionSegmentedBytesStore"
 , "c2" : "RocksDBTimeOrderedSessionSegmentedBytesStore(String;String;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#48"
 , "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#58"
 , "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetchSessions(long;long)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#88"
 , "c1" : "void"
 , "c2" : "remove(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#92"
 , "c1" : "void"
 , "c2" : "put(Windowed<Bytes>;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#97"
 , "c1" : "KeyValue<Bytes,byte[]>"
 , "c2" : "getIndexKeyValue(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#104"
 , "c1" : "Map<KeyValueSegment,WriteBatch>"
 , "c2" : "getWriteBatches(Collection<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00146"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#146"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.RocksDBTimeOrderedSessionSegmentedBytesStore@POLYN167197 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method fetchSessions arguments long  earliestSessionEndTime|long  latestSessionEndTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN168007 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method remove arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method put arguments Windowed&lt;Bytes &gt;  sessionKey|byte[]  aggregate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method getIndexKeyValue arguments Bytes  baseKey|byte[]  baseValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument baseKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getIndexKeyValue@POLYN169860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00116] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN170556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN170556 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN170556 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment &gt;  segmentIterator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.put@POLYN169550"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.remove@POLYN169361"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
