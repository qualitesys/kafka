console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java 6 rule violations " 
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
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#35"
 , "c1" : "MergedSortedCacheWindowStoreIterator"
 , "c2" : "MergedSortedCacheWindowStoreIterator(PeekingKeyValueIterator&lt;Bytes,LRUCacheEntry&gt;;KeyValueIterator&lt;Long,byte[]&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#41"
 , "c1" : "MergedSortedCacheWindowStoreIterator"
 , "c2" : "MergedSortedCacheWindowStoreIterator(PeekingKeyValueIterator&lt;Bytes,LRUCacheEntry&gt;;KeyValueIterator&lt;Long,byte[]&gt;;boolean;Function&lt;byte[],Long&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#50"
 , "c1" : "KeyValue&lt;Long,byte[]&gt;"
 , "c2" : "deserializeStorePair(KeyValue&lt;Long,byte[]&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#55"
 , "c1" : "Long"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#61"
 , "c1" : "byte[]"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#66"
 , "c1" : "Long"
 , "c2" : "deserializeStoreKey(Long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#71"
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
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.svg" }

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
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method deserializeStorePair arguments KeyValue&lt;Long ,byte[] &gt;  pair"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument cacheEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method deserializeStoreKey arguments Long  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method compare arguments Bytes  cacheKey|Long  storeKey"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheWindowStoreIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
