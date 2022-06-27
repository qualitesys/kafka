console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java 12 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "WrappedStateStore<SegmentedBytesStore,Object,Object>WindowStore<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDBWindowStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDBWindowStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RocksDBWindowStore"
 , "c2" : "RocksDBWindowStore(SegmentedBytesStore;boolean;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Bytes;byte[];long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fetch(Bytes;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "fetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "backwardFetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardAll()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "fetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "backwardFetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeUpdateSeqnumForDups()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method put arguments Bytes  key|byte[]  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.state.internals.RocksDBWindowStore.put@POLYN179923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method fetch arguments Bytes  key|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method fetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method backwardFetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.RocksDBWindowStore.maybeUpdateSeqnumForDups@POLYN184924 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDBWindowStore.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.state.internals.RocksDBWindowStore.maybeUpdateSeqnumForDups@POLYN184924 the MagicNumber/String  0x7FFFFFFF should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
