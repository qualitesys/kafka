console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java 33 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KeyValueIterator<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AbstractMergedSortedCacheStoreIterator"
 , "c2" : "AbstractMergedSortedCacheStoreIterator(PeekingKeyValueIterator<Bytes,LRUCacheEntry>;KeyValueIterator<KS,VS>;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "compare(Bytes;KS)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "deserializeStoreKey(KS)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "deserializeStorePair(KeyValue<KS,VS>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "V"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isDeletedCacheEntry(KeyValue<Bytes,LRUCacheEntry>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "next()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "chooseNextValue(Bytes;KS;int)"
 , "c3" : "11"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "nextStoreValue(KS)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<K,V>"
 , "c2" : "nextCacheValue(Bytes)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "peekNextKey()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "chooseNextKey(Bytes;KS;int)"
 , "c3" : "11"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class AbstractMergedSortedCacheStoreIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method compare arguments Bytes  cacheKey|KS  storeKey"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method deserializeStoreKey arguments KS  key"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method deserializeStorePair arguments KeyValue&lt;KS ,VS &gt;  pair"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method isDeletedCacheEntry arguments KeyValue&lt;Bytes ,LRUCacheEntry &gt;  nextFromCache"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument nextFromCache is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.isDeletedCacheEntry@POLYN182808 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.hasNext@POLYN183022 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN183771 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN183771 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN183771 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN183771 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method chooseNextValue arguments Bytes  nextCacheKey|KS  nextStoreKey|int  comparison"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN184779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN184779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN184779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN184779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method nextStoreValue arguments KS  nextStoreKey"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.nextStoreValue@POLYN185845 the MagicNumber/String  'Next record key is not the peeked key value; this should not happen' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method nextCacheValue arguments Bytes  nextCacheKey"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.nextCacheValue@POLYN186322 the MagicNumber/String  'Next record key is not the peeked key value; this should not happen' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN186884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN186884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN186884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN186884 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method chooseNextKey arguments Bytes  nextCacheKey|KS  nextStoreKey|int  comparison"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN187855 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN187855 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN187855 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN187855 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
