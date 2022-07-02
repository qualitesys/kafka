console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java 3 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MeteredWindowStore<K,ValueAndTimestamp<V>>TimestampedWindowStore<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.MeteredTimestampedWindowStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MeteredTimestampedWindowStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MeteredTimestampedWindowStore"
 , "c2" : "MeteredTimestampedWindowStore(WindowStore<Bytes,byte[]>;long;String;Time;Serde<K>;Serde<ValueAndTimestamp<V>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Serde<ValueAndTimestamp<V>>"
 , "c2" : "prepareValueSerde(Serde<ValueAndTimestamp<V>>;SerdeGetter)"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method prepareValueSerde arguments Serde&lt;ValueAndTimestamp&lt;V &gt; &gt;  valueSerde|SerdeGetter  getter"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedWindowStore.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.streams.state.internals.MeteredTimestampedWindowStore.prepareValueSerde@POLYN169751 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
