console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WrappedStateStore<SegmentedBytesStore,Object,Object>SessionStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBSessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBSessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RocksDBSessionStore"
 , "c2" : "RocksDBSessionStore(SegmentedBytesStore)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
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
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes)"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.svg" }

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
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method findSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method backwardFindSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method findSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method backwardFindSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method fetch arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.state.internals.RocksDBSessionStore.fetch@POLYN183808 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method backwardFetch arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.RocksDBSessionStore.backwardFetch@POLYN184082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method fetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.state.internals.RocksDBSessionStore.fetch@POLYN184356 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.state.internals.RocksDBSessionStore.backwardFetch@POLYN184680 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method remove arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBSessionStore.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method put arguments Windowed&lt;Bytes &gt;  sessionKey|byte[]  aggregate"
}} 
]
};
console.log('leListeStr 99 main end');
