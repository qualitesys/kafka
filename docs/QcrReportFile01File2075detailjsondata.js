console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java 135 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WrappedStateStore<WindowStore<Bytes,byte[]>,byte[],byte[]>WindowStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimeOrderedCachingWindowStore"
 , "c2" : "TimeOrderedCachingWindowStore(WindowStore<Bytes,byte[]>;long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enforceWrappedStore(WindowStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "RocksDBTimeOrderedWindowStore"
 , "c2" : "getWrappedStore(StateStore)"
 , "c3" : "3"
 , "c4" : "3"
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
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAndMaybeForward(List<DirtyEntry>;InternalProcessorContext<?,?>)"
 , "c3" : "11"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAndMaybeForward(InternalProcessorContext<?,?>;DirtyEntry;Bytes;long)"
 , "c3" : "4"
 , "c4" : "11"
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
   "c1" : "Bytes"
 , "c2" : "indexKeyToBaseKey(Bytes)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Bytes;byte[];long)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fetch(Bytes;long)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "fetch(Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "backwardFetch(Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "fetchInternal(WindowStoreIterator<byte[]>;Bytes;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes;long;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetchKeyRange(KeyValueIterator<Windowed<Bytes>,byte[]>;Bytes;Bytes;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetchAllInternal(KeyValueIterator<Windowed<Bytes>,byte[]>;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardAll()"
 , "c3" : "1"
 , "c4" : "3"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this" }
,
{ "ligne" :  "R1:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.key" }
,
{ "ligne" :  "R2:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.value" }
,
{ "ligne" :  "R3:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.windowStartTimestamp" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 (R0 in line [00245],R1 in line [00245],R2 in line [00245],R3 in line [00245])" }
,
{ "ligne" : "S0:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN277158" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 (R0 in line [00245],R1 in line [00245],R2 in line [00245],R3 in line [00245])" }
,
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 (R0 in line [00245],R1 in line [00245],R2 in line [00245],R3 in line [00245])" }
,
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN277158" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
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
 , "c4" : "15"
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
 , "c4" : "70"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method enforceWrappedStore arguments WindowStore&lt;Bytes ,byte[] &gt;  underlying"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00076] For method enforceWrappedStore list of called methods Object monObjet|org.apache.kafka.streams.state.internals.RocksDBTimeOrderedWindowStore getWrappedStoreN271898|boolean timeOrderedWindowStore_hasIndexN272132"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.enforceWrappedStore@POLYN271754 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.enforceWrappedStore@POLYN271754 the MagicNumber/String  'TimeOrderedCachingWindowStore only supports RocksDBTimeOrderedWindowStore backed store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method getWrappedStore arguments StateStore  wrapped"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.getWrappedStore@POLYN272185 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method initInternal arguments InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00108] For method initInternal list of called methods Object monObjet|String ProcessorStateManager_storeChangelogTopicN273600|org.apache.kafka.streams.processor.TaskId context_taskIdN273975"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.initInternal@POLYN273203 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method putAndMaybeForward arguments List&lt;DirtyEntry &gt;  entries|InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00128] For method putAndMaybeForward list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes baseKeyCacheFunction_keyN274649|boolean PrefixedWindowKeySchemas_isTimeFirstSchemaKeyN274788|org.apache.kafka.common.utils.Bytes indexKeyToBaseKeyN274979|org.apache.kafka.common.utils.Bytes baseKeyCacheFunction_cacheKeyN275236|org.apache.kafka.common.utils.Bytes Bytes_wrapN275884"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00171] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN274273 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method putAndMaybeForward arguments InternalProcessorContext&lt;? ,? &gt;  context|DirtyEntry  finalEntry|Bytes  binaryKey|long  windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument finalEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN276962 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method setFlushListener arguments CacheFlushListener&lt;byte[] ,byte[] &gt;  flushListener|boolean  sendOldValues"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.setFlushListener@POLYN279109 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method indexKeyToBaseKey arguments Bytes  indexKey"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#237"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00237] The argument indexKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#245"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00245] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#245"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00245] For method put arguments Bytes  key|byte[]  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00288] For method fetch arguments Bytes  key|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00288] For method fetch list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes baseKeyCacheFunction_cacheKeyN282437"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN281913 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN281913 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN281913 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#307"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00307] Lock statement on synchronized method fetch"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method fetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN282950 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN282950 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#323"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00323] Lock statement on synchronized method backwardFetch"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method backwardFetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN283639 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN283639 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#338"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00338] For method fetchInternal arguments WindowStoreIterator&lt;byte[] &gt;  underlyingIterator|Bytes  key|long  timeFrom|long  timeTo|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  'This may be due to range arguments set in the wrong order, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  'or serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetch@POLYN285709 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00384] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  'This may be due to serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetch@POLYN286944 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00408"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#408"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00408] For method fetchKeyRange arguments KeyValueIterator&lt;Windowed&lt;Bytes &gt; ,byte[] &gt;  underlyingIterator|Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#439"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00439] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAll@POLYN289801 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardFetchAll@POLYN290358 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method fetchAllInternal arguments KeyValueIterator&lt;Windowed&lt;Bytes &gt; ,byte[] &gt;  underlyingIterator|long  timeFrom|long  timeTo|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAllInternal@POLYN290901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAllInternal@POLYN290901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAllInternal@POLYN290901 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAllInternal@POLYN290901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.fetchAllInternal@POLYN290901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.all@POLYN292195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.all@POLYN292195 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardAll@POLYN292668 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00494"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.backwardAll@POLYN292668 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#498"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00498] Lock statement on synchronized method flush"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#509"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00509] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.close@POLYN293435 the MagicNumber/String  'Caught an exception while closing caching window store for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00522] The class CacheIteratorWrapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#580"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00580] For method hasNext list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes indexKeyCacheFunction_keyN297408|org.apache.kafka.common.utils.Bytes indexKeyToBaseKeyN297507|org.apache.kafka.common.utils.Bytes baseKeyCacheFunction_cacheKeyN297598"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00589] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00590"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00590] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00591"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00591] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00592] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00589] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00590"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00590] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00591"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00591] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00592] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#594"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00594] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00605"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#605"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00605] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00611"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00611] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.hasNext@POLYN296997 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00659"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00659] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.currentSegmentLastTime@POLYN300057 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN300254 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00683"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00683] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN300254 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#695"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00695] For method setCacheKeyRange arguments long  lowerRangeEndTime|long  upperRangeEndTime"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN301546 the MagicNumber/String  'Error iterating over segments: segment interval has changed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN301546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.key"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.value"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995.windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.getWrappedStore@POLYN272185"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.getWrappedStore@POLYN272185 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedCachingWindowStore.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN279995 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
