console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java 9 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ReadOnlyWindowStore<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.ReadOnlyWindowStoreFacade"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.ReadOnlyWindowStoreFacade" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "ReadOnlyWindowStoreFacade"
 , "c2" : "ReadOnlyWindowStoreFacade(TimestampedWindowStore<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "V"
 , "c2" : "fetch(K;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "WindowStoreIterator<V>"
 , "c2" : "fetch(K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "WindowStoreIterator<V>"
 , "c2" : "backwardFetch(K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "fetch(K;K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFetch(K;K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "fetchAll(Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardFetchAll(Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "backwardAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ReadOnlyWindowStoreFacade contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method fetch arguments K  key|long  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method fetch arguments K  key|Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method backwardFetch arguments K  key|Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method fetch arguments K  keyFrom|K  keyTo|Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method backwardFetch arguments K  keyFrom|K  keyTo|Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method fetchAll arguments Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method backwardFetchAll arguments Instant  timeFrom|Instant  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ReadOnlyWindowStoreFacade.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00081] The class WindowStoreIteratorFacade contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
};
console.log('leListeStr 99 main end');
