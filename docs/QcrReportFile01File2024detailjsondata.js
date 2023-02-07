console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java 70 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#36"
 , "c1" : "AbstractMergedSortedCacheStoreIterator"
 , "c2" : "AbstractMergedSortedCacheStoreIterator(PeekingKeyValueIterator&lt;Bytes,LRUCacheEntry&gt;;KeyValueIterator&lt;KS,VS&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#44"
 , "c1" : "int"
 , "c2" : "compare(Bytes;KS)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#46"
 , "c1" : "K"
 , "c2" : "deserializeStoreKey(KS)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#48"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "deserializeStorePair(KeyValue&lt;KS,VS&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#50"
 , "c1" : "K"
 , "c2" : "deserializeCacheKey(Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#52"
 , "c1" : "V"
 , "c2" : "deserializeCacheValue(LRUCacheEntry)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#54"
 , "c1" : "boolean"
 , "c2" : "isDeletedCacheEntry(KeyValue&lt;Bytes,LRUCacheEntry&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#59"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#76"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "next()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#96"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "chooseNextValue(Bytes;KS;int)"
 , "c3" : "11"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#122"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "nextStoreValue(KS)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#132"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "nextCacheValue(Bytes)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#143"
 , "c1" : "K"
 , "c2" : "peekNextKey()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#163"
 , "c1" : "K"
 , "c2" : "chooseNextKey(Bytes;KS;int)"
 , "c3" : "11"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#190"
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method compare arguments Bytes  cacheKey|KS  storeKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method deserializeStoreKey arguments KS  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method deserializeStorePair arguments KeyValue&lt;KS ,VS &gt;  pair"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method deserializeCacheKey arguments Bytes  cacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method deserializeCacheValue arguments LRUCacheEntry  cacheEntry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method isDeletedCacheEntry arguments KeyValue&lt;Bytes ,LRUCacheEntry &gt;  nextFromCache"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument nextFromCache is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.isDeletedCacheEntry@POLYN166224 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00059] For method hasNext list of called methods Object monObjet|K storeIterator_peekNextKeyN166729"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.hasNext@POLYN166438 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00076] For method next list of called methods Object monObjet|boolean cacheIterator_hasNextN167392|boolean storeIterator_hasNextN167538"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method chooseNextValue arguments Bytes  nextCacheKey|KS  nextStoreKey|int  comparison"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method nextStoreValue arguments KS  nextStoreKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.nextStoreValue@POLYN169261 the MagicNumber/String  'Next record key is not the peeked key value; this should not happen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method nextCacheValue arguments Bytes  nextCacheKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.nextCacheValue@POLYN169738 the MagicNumber/String  'Next record key is not the peeked key value; this should not happen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00143] For method peekNextKey list of called methods Object monObjet|boolean cacheIterator_hasNextN170505|boolean storeIterator_hasNextN170651"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method chooseNextKey arguments Bytes  nextCacheKey|KS  nextStoreKey|int  comparison"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 ending with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 ending with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 ending with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 ending with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 ending with method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.peekNextKey@POLYN170300 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextKey@POLYN171271 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00088] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.next@POLYN167187 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.streams.state.internals.AbstractMergedSortedCacheStoreIterator.chooseNextValue@POLYN168195 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractMergedSortedCacheStoreIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
