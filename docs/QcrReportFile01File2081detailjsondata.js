console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java 10 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractMergedSortedCacheStoreIterator<Windowed<Bytes>,Windowed<Bytes>,byte[],byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.MergedSortedCacheWindowStoreKeyValueIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MergedSortedCacheWindowStoreKeyValueIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#36"
 , "c1" : "MergedSortedCacheWindowStoreKeyValueIterator"
 , "c2" : "MergedSortedCacheWindowStoreKeyValueIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<Windowed<Bytes>,byte[]>;StateSerdes<Bytes,byte[]>;long;SegmentedCacheFunction;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#48"
 , "c1" : "MergedSortedCacheWindowStoreKeyValueIterator"
 , "c2" : "MergedSortedCacheWindowStoreKeyValueIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<Windowed<Bytes>,byte[]>;StateSerdes<Bytes,byte[]>;long;SegmentedCacheFunction;boolean;StoreKeyToWindowKey;WindowKeyToBytes)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#67"
 , "c1" : "Windowed<Bytes>"
 , "c2" : "deserializeStoreKey(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#72"
 , "c1" : "KeyValue<Windowed<Bytes>,byte[]>"
 , "c2" : "deserializeStorePair(KeyValue<Windowed<Bytes>,byte[]>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#77"
 , "c1" : "Windowed<Bytes>"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#83"
 , "c1" : "byte[]"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#88"
 , "c1" : "int"
 , "c2" : "compare(Bytes;Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method deserializeStoreKey arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method deserializeStorePair arguments KeyValue&lt;Windowed&lt;Bytes &gt; ,byte[] &gt;  pair"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method deserializeCacheKey list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN155957"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument cacheEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method compare arguments Bytes  cacheKey|Windowed&lt;Bytes &gt;  storeKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00088] For method compare list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes windowKeyToBytes_toBytesN156536"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument storeKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.state.internals.MergedSortedCacheWindowStoreKeyValueIterator.compare@POLYN156382 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreKeyValueIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
