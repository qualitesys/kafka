console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java 121 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WrappedStateStore<WindowStore<Bytes,byte[]>,byte[],byte[]>WindowStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.CachingWindowStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.CachingWindowStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CachingWindowStore"
 , "c2" : "CachingWindowStore(WindowStore<Bytes,byte[]>;long;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initInternal(InternalProcessorContext<?,?>;String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putAndMaybeForward(ThreadCache.DirtyEntry;InternalProcessorContext<?,?>)"
 , "c3" : "4"
 , "c4" : "15"
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
 , "c2" : "put(Bytes;byte[];long)"
 , "c3" : "1"
 , "c4" : "5"
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
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "backwardFetch(Bytes;long;long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes;long;long)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardAll()"
 , "c3" : "1"
 , "c4" : "4"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.streams.state.internals.CachingWindowStore.this" }
,
{ "ligne" :  "R1:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.key" }
,
{ "ligne" :  "R2:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.value" }
,
{ "ligne" :  "R3:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.windowStartTimestamp" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 (R0 in line [00141],R1 in line [00141],R2 in line [00141],R3 in line [00141])" }
,
{ "ligne" : "S0:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN272134" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 (R0 in line [00141],R1 in line [00141],R2 in line [00141],R3 in line [00141])" }
,
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 (R0 in line [00141],R1 in line [00141],R2 in line [00141],R3 in line [00141])" }
,
{ "ligne" : "S1:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN272134" }
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
 , "c4" : "3"
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
 , "c4" : "2"
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
 , "c4" : "79"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "8"
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
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00061] For method init list of called methods Object monObjet|String ProcessorContextUtils_changelogForN247355"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method init list of called methods Object monObjet|String ProcessorContextUtils_changelogForN247833"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method initInternal arguments InternalProcessorContext&lt;? ,? &gt;  context|String  changelogTopic"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method initInternal list of called methods Object monObjet|org.apache.kafka.streams.processor.TaskId context_taskIdN248566"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN248168 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method putAndMaybeForward arguments ThreadCache.DirtyEntry  entry|InternalProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method putAndMaybeForward list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN249120|org.apache.kafka.streams.kstream.Windowed&lt;org.apache.kafka.common.utils.Bytes&gt; WindowKeySchema_fromStoreBytesKeyN249280|org.apache.kafka.streams.kstream.Windowed&lt;org.apache.kafka.common.utils.Bytes&gt; context_recordContextN250978"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument entry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN248952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method setFlushListener arguments CacheFlushListener&lt;byte[] ,byte[] &gt;  flushListener|boolean  sendOldValues"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.state.internals.CachingWindowStore.setFlushListener@POLYN251413 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#141"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00141] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method put arguments Bytes  key|byte[]  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00141] For method put list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes WindowKeySchema_toStoreKeyBinaryN251949"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method fetch arguments Bytes  key|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00164] For method fetch list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes WindowKeySchema_toStoreKeyBinaryN252961|org.apache.kafka.common.utils.Bytes cacheFunction_cacheKeyN253106"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN252784 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN252784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN252784 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#181"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00181] Lock statement on synchronized method fetch"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method fetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00181] For method fetch list of called methods Object monObjet|byte[] wrappedN254374"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN253821 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN253821 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN253821 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN253821 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#209"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00209] Lock statement on synchronized method backwardFetch"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method backwardFetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN255423 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN255423 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN255423 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN255423 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  'This may be due to range arguments set in the wrong order, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  'or serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetch@POLYN257057 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#282"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00282] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  'This may be due to serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetch@POLYN259411 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00326] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetchAll@POLYN261741 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetchAll@POLYN261741 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetchAll@POLYN261741 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.streams.state.internals.CachingWindowStore.fetchAll@POLYN261741 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetchAll@POLYN262848 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetchAll@POLYN262848 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetchAll@POLYN262848 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardFetchAll@POLYN262848 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.streams.state.internals.CachingWindowStore.all@POLYN263955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.streams.state.internals.CachingWindowStore.backwardAll@POLYN264596 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#403"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00403] Lock statement on synchronized method flush"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#414"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00414] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.streams.state.internals.CachingWindowStore.close@POLYN265531 the MagicNumber/String  'Caught an exception while closing caching window store for store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00427] The class CacheIteratorWrapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.hasNext@POLYN268723 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.currentSegmentLastTime@POLYN270289 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN270486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.getNextSegmentIterator@POLYN270486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00565] For method setCacheKeyRange arguments long  lowerRangeEndTime|long  upperRangeEndTime"
}} 
,
{ "ligne" : {
   "c1" : "00565"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#565"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00565] For method setCacheKeyRange list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_cacheKeyN272306|org.apache.kafka.common.utils.Bytes cacheFunction_cacheKeyN272452"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  'Error iterating over segments: segment interval has changed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.setCacheKeyRange@POLYN271778 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#581"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00581] For method segmentLowerRangeFixedSize arguments Bytes  key|long  segmentBeginTime"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN273091 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00582"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00582] In method org.apache.kafka.streams.state.internals.CachingWindowStore.CacheIteratorWrapper.segmentLowerRangeFixedSize@POLYN273091 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00585"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00585] For method segmentUpperRangeFixedSize arguments Bytes  key|long  segmentEndTime"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.streams.state.internals.CachingWindowStore.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.key"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.value"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742.windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingWindowStore.all@POLYN263955"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00381] In the recursive method org.apache.kafka.streams.state.internals.CachingWindowStore.all@POLYN263955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/CachingWindowStore.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN251742 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
