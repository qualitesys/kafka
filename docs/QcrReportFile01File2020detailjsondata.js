console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java 8 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractMergedSortedCacheStoreIterator<Windowed<Bytes>,Windowed<Bytes>,byte[],byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.MergedSortedCacheSessionStoreIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MergedSortedCacheSessionStoreIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MergedSortedCacheSessionStoreIterator"
 , "c2" : "MergedSortedCacheSessionStoreIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<Windowed<Bytes>,byte[]>;SegmentedCacheFunction;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<Windowed<Bytes>,byte[]>"
 , "c2" : "deserializeStorePair(KeyValue<Windowed<Bytes>,byte[]>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Windowed<Bytes>"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Windowed<Bytes>"
 , "c2" : "deserializeStoreKey(Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "compare(Bytes;Windowed<Bytes>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method deserializeStorePair arguments KeyValue&lt;Windowed&lt;Bytes &gt; ,byte[] &gt;  pair"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00029] For method deserializeCacheKey list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes cacheFunction_keyN165796|byte[] SessionKeySchema_extractKeyBytesN165921|org.apache.kafka.streams.kstream.Window SessionKeySchema_extractWindowN166020"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument cacheEntry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method deserializeStoreKey arguments Windowed&lt;Bytes &gt;  key"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method compare arguments Bytes  cacheKey|Windowed&lt;Bytes &gt;  storeKey"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MergedSortedCacheSessionStoreIterator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00048] For method compare list of called methods Object monObjet|org.apache.kafka.common.utils.Bytes SessionKeySchema_toBinaryN166715"
}} 
]
};
console.log('leListeStr 99 main end');
