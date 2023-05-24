console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.MergedSortedCacheSessionStoreIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MergedSortedCacheSessionStoreIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#33"
 , "c1" : "MergedSortedCacheSessionStoreIterator"
 , "c2" : "MergedSortedCacheSessionStoreIterator(PeekingKeyValueIterator&lt;Bytes,LRUCacheEntry&gt;;KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;;SegmentedCacheFunction;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#42"
 , "c1" : "KeyValue&lt;Windowed&lt;Bytes&gt;,byte[]&gt;"
 , "c2" : "deserializeStorePair(KeyValue&lt;Windowed&lt;Bytes&gt;,byte[]&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#47"
 , "c1" : "Windowed&lt;Bytes&gt;"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#56"
 , "c1" : "byte[]"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#61"
 , "c1" : "Windowed&lt;Bytes&gt;"
 , "c2" : "deserializeStoreKey(Windowed&lt;Bytes&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#66"
 , "c1" : "int"
 , "c2" : "compare(Bytes;Windowed&lt;Bytes&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.svg" }

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
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method deserializeStorePair arguments KeyValue&lt;Windowed&lt;Bytes &gt; ,byte[] &gt;  pair"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00047] For method deserializeCacheKey list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN157316|byte[] SessionKeySchema_extractKeyBytesN157443|org.apache.kafka.streams.kstream.Window SessionKeySchema_extractWindowN157544"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument cacheEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method deserializeStoreKey arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method compare arguments Bytes  cacheKey|Windowed&lt;Bytes &gt;  storeKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method compare list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN158241"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
