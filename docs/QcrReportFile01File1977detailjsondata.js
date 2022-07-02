console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java 104 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WrappedStateStore<SessionStore<Bytes,byte[]>,byte[],byte[]>SessionStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.CachingSessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.CachingSessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CachingSessionStore"
 , "c2" : "CachingSessionStore(SessionStore<Bytes,byte[]>;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
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
   "c1" : "void"
 , "c2" : "initInternal(InternalProcessorContext<?,?>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAndMaybeForward(ThreadCache.DirtyEntry;InternalProcessorContext<?,?>)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "setFlushListener(CacheFlushListener<byte[],byte[]>;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Windowed<Bytes>;byte[])"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "findSessions(Bytes;Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFindSessions(Bytes;Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fetchSession(Bytes;long;long)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
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
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flushCache()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "56"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method initInternal arguments InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method initInternal list of called methods Object monObjet|org.apache.kafka.streams.processor.TaskId context_taskIdN239782"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.state.internals.CachingSessionStore.initInternal@POLYN239598 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method putAndMaybeForward arguments ThreadCache.DirtyEntry  entry|InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method putAndMaybeForward list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN240330|org.apache.kafka.streams.kstream.Windowed&lt;org.apache.kafka.common.utils.Bytes&gt; SessionKeySchema_fromN240470|org.apache.kafka.streams.kstream.Windowed&lt;org.apache.kafka.common.utils.Bytes&gt; context_recordContextN242086"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument entry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method setFlushListener arguments CacheFlushListener&lt;byte[] ,byte[] &gt;  flushListener|boolean  sendOldValues"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.state.internals.CachingSessionStore.setFlushListener@POLYN242499 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method put arguments Windowed&lt;Bytes &gt;  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00129] For method put list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN243023"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.state.internals.CachingSessionStore.put@POLYN242823 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method remove arguments Windowed&lt;Bytes &gt;  sessionKey"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.state.internals.CachingSessionStore.remove@POLYN243761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method findSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00153] For method findSessions list of called methods Object monObjet|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN244307|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN244916|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN245071"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN244065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN244065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN244065 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method backwardFindSessions arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00179] For method backwardFindSessions list of called methods Object monObjet|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN245871|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN246480|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN246635"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN245629 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN245629 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN245629 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method findSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00211] For method findSessions list of called methods Object monObjet|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN248452|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN248629"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.state.internals.CachingSessionStore.findSessions@POLYN247193 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method backwardFindSessions arguments Bytes  keyFrom|Bytes  keyTo|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00240] For method backwardFindSessions list of called methods Object monObjet|KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt; wrappedN250446|org.apache.kafka.streams.state.internals.HasNextCondition keySchema_hasNextConditionN250623"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFindSessions@POLYN249187 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00270] For method fetchSession arguments Bytes  key|long  earliestSessionEndTime|long  latestSessionStartTime"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00270] For method fetchSession list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN251663|org.apache.kafka.common.utils.Bytes cacheFunction_cacheKeyN251806"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00289] For method fetch arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN252376 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN252376 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#295"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00295] For method backwardFetch arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN252745 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN252745 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#301"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00301] For method fetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.state.internals.CachingSessionStore.fetch@POLYN253114 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.streams.state.internals.CachingSessionStore.backwardFetch@POLYN253438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.streams.state.internals.CachingSessionStore.close@POLYN254018 the MagicNumber/String  'Caught an exception while closing caching session store for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00334] The class CacheIteratorWrapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.hasNext@POLYN257028 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.currentSegmentLastTime@POLYN258594 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00441] For method getNextSegmentIterator list of called methods Object monObjet|long cacheFunction_segmentIdN258890|long context_cacheN259810"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN258730 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN258730 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#473"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00473] For method setCacheKeyRange arguments long  lowerRangeEndTime|long  upperRangeEndTime"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.setCacheKeyRange@POLYN259941 the MagicNumber/String  'Error iterating over segments: segment interval has changed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00487] For method segmentLowerRangeFixedSize arguments Bytes  key|long  segmentBeginTime"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN261022 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.streams.state.internals.CachingSessionStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN261022 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00492] For method segmentUpperRangeFixedSize arguments Bytes  key|long  segmentEndTime"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.put@POLYN242823"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.CachingSessionStore@POLYN238521"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.flush@POLYN253676"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingSessionStore.flushCache@POLYN253886"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.putAndMaybeForward@POLYN240168 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.put@POLYN242823 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String 'key cannot be null' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingSessionStore.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.streams.state.internals.CachingSessionStore.fetchSession@POLYN251123 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
