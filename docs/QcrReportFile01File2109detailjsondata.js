console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java 33 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRocksDBTimeOrderedSegmentedBytesStore"
 , "c2" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#56"
 , "c1" : "RocksDBTimeOrderedSessionSegmentedBytesStore"
 , "c2" : "RocksDBTimeOrderedSessionSegmentedBytesStore(String;String;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#65"
 , "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#75"
 , "c1" : "KeyValueIterator&lt;Bytes,byte[]&gt;"
 , "c2" : "fetchSessions(long;long)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#105"
 , "c1" : "void"
 , "c2" : "remove(Windowed&lt;Bytes&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#109"
 , "c1" : "void"
 , "c2" : "put(Windowed&lt;Bytes&gt;;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00114"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#114"
 , "c1" : "KeyValue&lt;Bytes,byte[]&gt;"
 , "c2" : "getIndexKeyValue(Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#121"
 , "c1" : "Map&lt;KeyValueSegment,WriteBatch&gt;"
 , "c2" : "getWriteBatches(Collection&lt;ConsumerRecord&lt;byte[],byte[]&gt;&gt;)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#163"
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

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.svg" }

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
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method getBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00048] For method getBaseKey list of called methods Object monObjet|org.apache.kafka.streams.kstream.Window KeyFirstSessionKeySchema_extractWindowN176570|byte[] KeyFirstSessionKeySchema_extractKeyBytesN176697"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.RocksDBTimeOrderedSessionSegmentedBytesStore@POLYN176971 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method fetchSessions arguments long  earliestSessionEndTime|long  latestSessionEndTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method fetchSessions list of called methods Object monObjet|java.util.List&lt;S&gt; segments_segmentsN177937|org.apache.kafka.streams.kstream.Windowed&lt;org.apache.kafka.common.utils.Bytes&gt; TimeFirstSessionKeySchema_fromN178661"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.fetchSessions@POLYN177781 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method remove arguments Windowed&lt;Bytes&gt;  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method put arguments Windowed&lt;Bytes&gt;  sessionKey|byte[]  aggregate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method getIndexKeyValue arguments Bytes  baseKey|byte[]  baseValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00114] For method getIndexKeyValue list of called methods Object monObjet|org.apache.kafka.streams.kstream.Window TimeFirstSessionKeySchema_extractWindowN179787|byte[] TimeFirstSessionKeySchema_extractKeyBytesN179914"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument baseKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getIndexKeyValue@POLYN179646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[],byte[]&gt;&gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00121] For method getWriteBatches list of called methods Object monObjet|long SessionKeySchema_extractEndTimestampN180649|long SessionKeySchema_extractEndTimestampN181142|long segments_segmentIdN181263"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.getWriteBatches@POLYN180346 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method getIndexToBaseStoreIterator arguments SegmentIterator&lt;KeyValueSegment&gt;  segmentIterator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.put@POLYN179336"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionSegmentedBytesStore.remove@POLYN179147"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionSegmentedBytesStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
