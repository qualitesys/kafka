console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java 18 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "WrappedStateStore<RocksDBTimeOrderedSessionSegmentedBytesStore,Object,Object>SessionStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "RocksDBTimeOrderedSessionStore"
 , "c2" : "RocksDBTimeOrderedSessionStore(RocksDBTimeOrderedSessionSegmentedBytesStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "remove(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "put(Windowed<Bytes>;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore.RocksDBTimeOrderedSessionStore@POLYN161872 the MagicNumber/String  'store is null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method findSessions arguments long  earliestSessionEndTime|long  latestSessionEndTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method findSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method backwardFindSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method findSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method backwardFindSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method fetch arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore.fetch@POLYN165761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method backwardFetch arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore.backwardFetch@POLYN166035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method fetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore.fetch@POLYN166309 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.state.internals.RocksDBTimeOrderedSessionStore.backwardFetch@POLYN166633 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method remove arguments Windowed&lt;Bytes &gt;  sessionKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBTimeOrderedSessionStore.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method put arguments Windowed&lt;Bytes &gt;  sessionKey|byte[]  aggregate"
}} 
]
};
console.log('leListeStr 99 main end');
