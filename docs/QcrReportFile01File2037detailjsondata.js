console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java 107 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SessionStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.CachingSessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.CachingSessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#64"
 , "c1" : "CachingSessionStore"
 , "c2" : "CachingSessionStore(SessionStore&lt;Bytes,byte[]&gt;;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#74"
 , "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#80"
 , "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#85"
 , "c1" : "void"
 , "c2" : "initInternal(InternalProcessorContext&lt;?,?&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#96"
 , "c1" : "void"
 , "c2" : "putAndMaybeForward(ThreadCache.DirtyEntry;InternalProcessorContext&lt;?,?&gt;)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#135"
 , "c1" : "boolean"
 , "c2" : "setFlushListener(CacheFlushListener&lt;byte[],byte[]&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#144"
 , "c1" : "void"
 , "c2" : "put(Windowed&lt;Bytes&gt;;byte[])"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#162"
 , "c1" : "void"
 , "c2" : "remove(Windowed&lt;Bytes&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#168"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "findSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00194"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#194"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "backwardFindSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00226"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#226"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "findSessions(Bytes;Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00255"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#255"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "backwardFindSessions(Bytes;Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00285"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#285"
 , "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00304"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#304"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "fetch(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00310"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#310"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "backwardFetch(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00316"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#316"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "fetch(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00322"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#322"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "backwardFetch(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00327"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#327"
 , "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00333"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#333"
 , "c1" : "void"
 , "c2" : "flushCache()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00337"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#337"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "56"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method initInternal arguments InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00085] For method initInternal list of called methods Object monObjet|org.apache.kafka.streams.processor.TaskId context_taskIdN229858"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.state.internals.CachingSessionStore.initInternal@POLYN229674 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method putAndMaybeForward arguments ThreadCache.DirtyEntry  entry|InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00096] For method putAndMaybeForward list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN230408|org.apache.kafka.streams.kstream.Windowed SessionKeySchema_fromN230550|org.apache.kafka.streams.processor.internals.ProcessorRecordContext context_recordContextN231286|org.apache.kafka.streams.processor.internals.ProcessorRecordContext context_recordContextN232174"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument entry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN230244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method setFlushListener arguments CacheFlushListener&lt;byte[] ,byte[] &gt;  flushListener|boolean  sendOldValues"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.CachingSessionStore.setFlushListener@POLYN232587 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method put arguments Windowed&lt;Bytes &gt;  key|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00144] For method put list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN233113"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.CachingSessionStore.put@POLYN232911 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method remove arguments Windowed&lt;Bytes &gt;  sessionKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.state.internals.CachingSessionStore.remove@POLYN233853 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method findSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00168] For method findSessions list of called methods Object monObjet|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN235169"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN234157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN234157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN234157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method backwardFindSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00194] For method backwardFindSessions list of called methods Object monObjet|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN236741"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN235729 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN235729 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN235729 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method findSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00226] For method findSessions list of called methods Object monObjet|org.apache.kafka.streams.state.internals.ThreadCache context_cacheN238339|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN238747"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00255] For method backwardFindSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00255] For method backwardFindSessions list of called methods Object monObjet|org.apache.kafka.streams.state.internals.ThreadCache context_cacheN240345|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN240753"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00285] For method fetchSession list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN241797|org.apache.kafka.common.utils.Bytes cacheFunction_cacheKeyN241942|org.apache.kafka.streams.state.internals.ThreadCache context_cacheN242043"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN241255 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN241255 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN241255 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method fetch arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN242514 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN242514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method backwardFetch arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN242883 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN242883 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#316"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00316] For method fetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN243252 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#322"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00322] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN243576 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.streams.state.internals.CachingSessionStore.close@POLYN244156 the MagicNumber/String  'Caught an exception while closing caching session store for store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN247176 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.currentSegmentLastTime@POLYN248742 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00456] For method getNextSegmentIterator list of called methods Object monObjet|org.apache.kafka.streams.state.internals.ThreadCache context_cacheN249436|org.apache.kafka.streams.state.internals.ThreadCache context_cacheN249958"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN248878 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00475"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN248878 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#488"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00488] For method setCacheKeyRange arguments long  lowerRangeEndTime|long  upperRangeEndTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00490"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.setCacheKeyRange@POLYN250089 the MagicNumber/String  'Error iterating over segments: segment interval has changed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#502"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00502] For method segmentLowerRangeFixedSize arguments Bytes  key|long  segmentBeginTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN251170 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN251170 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#507"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00507] For method segmentUpperRangeFixedSize arguments Bytes  key|long  segmentEndTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#277"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00277] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN239307 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00230] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#248"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00248] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN237301 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
