console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java 4 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PeekingKeyValueIterator<Bytes,LRUCacheEntry>"
 , "c2" : "org.apache.kafka.streams.state.internals.FilteredCacheIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.FilteredCacheIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#29"
 , "c1" : "FilteredCacheIterator"
 , "c2" : "FilteredCacheIterator(PeekingKeyValueIterator&lt;Bytes,LRUCacheEntry&gt;;HasNextCondition;CacheFunction)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#68"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#73"
 , "c1" : "Bytes"
 , "c2" : "peekNextKey()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#81"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#86"
 , "c1" : "KeyValue&lt;Bytes,LRUCacheEntry&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#95"
 , "c1" : "KeyValue&lt;Bytes,LRUCacheEntry&gt;"
 , "c2" : "peekNext()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument cacheIterator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument cacheFunction is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00068] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00068] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/FilteredCacheIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
