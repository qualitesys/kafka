console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "MeteredKeyValueStore<K,ValueAndTimestamp<V>>"
 , "c2" : "TimestampedKeyValueStore<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#42"
 , "c1" : "MeteredTimestampedKeyValueStore"
 , "c2" : "MeteredTimestampedKeyValueStore(KeyValueStore&lt;Bytes,byte[]&gt;;String;Time;Serde&lt;K&gt;;Serde&lt;ValueAndTimestamp&lt;V&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#53"
 , "c1" : "Serde&lt;ValueAndTimestamp&lt;V&gt;&gt;"
 , "c2" : "prepareValueSerdeForStore(Serde&lt;ValueAndTimestamp&lt;V&gt;&gt;;SerdeGetter)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#62"
 , "c1" : "RawAndDeserializedValue&lt;V&gt;"
 , "c2" : "getWithBinary(K)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#74"
 , "c1" : "boolean"
 , "c2" : "putIfDifferentValues(K;ValueAndTimestamp&lt;V&gt;;byte[])"
 , "c3" : "3"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method prepareValueSerdeForStore arguments Serde&lt;ValueAndTimestamp&lt;V &gt; &gt;  valueSerde|SerdeGetter  getter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.prepareValueSerdeForStore@POLYN167507 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method getWithBinary arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method putIfDifferentValues arguments K  key|ValueAndTimestamp&lt;V &gt;  newValue|byte[]  oldSerializedValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.putIfDifferentValues@POLYN168801 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.putIfDifferentValues@POLYN168801 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
