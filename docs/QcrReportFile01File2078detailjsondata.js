console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractMergedSortedCacheStoreIterator<Long,Long,byte[],byte[]>WindowStoreIterator<byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.MergedSortedCacheWindowStoreIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MergedSortedCacheWindowStoreIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#17"
 , "c1" : "MergedSortedCacheWindowStoreIterator"
 , "c2" : "MergedSortedCacheWindowStoreIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<Long,byte[]>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#23"
 , "c1" : "MergedSortedCacheWindowStoreIterator"
 , "c2" : "MergedSortedCacheWindowStoreIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<Long,byte[]>;boolean;Function<byte[],Long>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#32"
 , "c1" : "KeyValue<Long,byte[]>"
 , "c2" : "deserializeStorePair(KeyValue<Long,byte[]>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#37"
 , "c1" : "Long"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#43"
 , "c1" : "byte[]"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#48"
 , "c1" : "Long"
 , "c2" : "deserializeStoreKey(Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#53"
 , "c1" : "int"
 , "c2" : "compare(Bytes;Long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method deserializeStorePair arguments KeyValue&lt;Long ,byte[] &gt;  pair"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument cacheEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method deserializeStoreKey arguments Long  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method compare arguments Bytes  cacheKey|Long  storeKey"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
