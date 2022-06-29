console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.WindowStoreIteratorWrapper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.WindowStoreIteratorWrapper" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WindowStoreIteratorWrapper"
 , "c2" : "WindowStoreIteratorWrapper(KeyValueIterator<Bytes,byte[]>;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIteratorWrapper"
 , "c2" : "WindowStoreIteratorWrapper(KeyValueIterator<Bytes,byte[]>;long;Function<byte[],Long>;BiFunction<byte[],Long,Windowed<Bytes>>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "WindowStoreIterator<byte[]>"
 , "c2" : "valuesIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Windowed<Bytes>,byte[]>"
 , "c2" : "keyValueIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class WindowStoreIteratorWrapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00042] The class WrappedWindowStoreIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00076] The class WrappedKeyValueIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.WindowStoreIteratorWrapper.keyValueIterator@POLYN177513"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreIteratorWrapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.WindowStoreIteratorWrapper.valuesIterator@POLYN177303"
}} 
]
};
console.log('leListeStr 99 main end');
