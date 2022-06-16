console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java 86 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "36"
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
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class ThreadCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#57"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00057] Lock statement on synchronized method resize"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method resize arguments long  newCacheSizeBytes"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202343 the MagicNumber/String  'Cache size was shrunk to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202343 the MagicNumber/String  'Cache size was expanded to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method nameSpaceFromTaskIdAndStore arguments String  taskIDString|String  underlyingStoreName"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.ThreadCache.nameSpaceFromTaskIdAndStore@POLYN203502 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method taskIDfromCacheName arguments String  cacheName"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument cacheName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.ThreadCache.taskIDfromCacheName@POLYN203760 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.ThreadCache.taskIDfromCacheName@POLYN203760 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.state.internals.ThreadCache.taskIDfromCacheName@POLYN203760 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method underlyingStoreNamefromCacheName arguments String  cacheName"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument cacheName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.state.internals.ThreadCache.underlyingStoreNamefromCacheName@POLYN204106 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.state.internals.ThreadCache.underlyingStoreNamefromCacheName@POLYN204106 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.state.internals.ThreadCache.underlyingStoreNamefromCacheName@POLYN204106 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method addDirtyEntryFlushListener arguments String  namespace|DirtyEntryFlushListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method flush arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.internals.ThreadCache.flush@POLYN204710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.internals.ThreadCache.flush@POLYN204710 the MagicNumber/String  'Cache stats on flush: #puts={}, #gets={}, #evicts={}, #flushes={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method get arguments String  namespace|Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN205335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN205335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN205335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN205335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method put arguments String  namespace|Bytes  key|LRUCacheEntry  value"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method putIfAbsent arguments String  namespace|Bytes  key|LRUCacheEntry  value"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN206269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method putAll arguments String  namespace|List&lt;KeyValue&lt;Bytes ,LRUCacheEntry &gt; &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method delete arguments String  namespace|Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.state.internals.ThreadCache.delete@POLYN207216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.state.internals.ThreadCache.delete@POLYN207216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method range arguments String  namespace|Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.state.internals.ThreadCache.range@POLYN207596 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method range arguments String  namespace|Bytes  from|Bytes  to|boolean  toInclusive"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.ThreadCache.range@POLYN207862 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method reverseRange arguments String  namespace|Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.streams.state.internals.ThreadCache.reverseRange@POLYN208550 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method all arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.state.internals.ThreadCache.all@POLYN209188 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method reverseAll arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.state.internals.ThreadCache.reverseAll@POLYN209729 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.state.internals.ThreadCache.size@POLYN210270 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#210"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00210] For method isOverflowing arguments long  size"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.state.internals.ThreadCache.isOverflowing@POLYN210711 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.state.internals.ThreadCache.sizeBytes@POLYN210841 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#225"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00225] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method close arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN211274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method maybeEvict arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN211567 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN211567 the MagicNumber/String  'Evicted {} entries from cache {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#252"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00252] Lock statement on synchronized method getCache"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method getCache arguments String  namespace"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#256"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00256] Lock statement on synchronized method getOrCreateCache"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method getOrCreateCache arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN212436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00265] The class MemoryLRUCacheBytesIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.hasNext@POLYN213921 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.hasNext@POLYN213921 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.hasNext@POLYN213921 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.hasNext@POLYN213921 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.next@POLYN214355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.state.internals.ThreadCache.MemoryLRUCacheBytesIterator.internalNext@POLYN214711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00324] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00324] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00329] The class DirtyEntry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00041] Public method puts is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00045] Public method gets is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00049] Public method evicts is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method flushes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00077] Public method nameSpaceFromTaskIdAndStore is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00082] Public method taskIDfromCacheName is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00088] Public method underlyingStoreNamefromCacheName is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00114] Public method get is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00136] Public method putIfAbsent is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00154] Public method delete is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00163] Public method range is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00199] Public method size is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00095] Public method addDirtyEntryFlushListener is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00128] Public method put is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ThreadCache.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00148] Public method putAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
