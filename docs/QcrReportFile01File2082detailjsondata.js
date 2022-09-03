console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java 26 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStoreBuilder<K,ValueAndTimestamp<V>,TimestampedKeyValueStore<K,V>>"
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "TimestampedKeyValueStoreBuilder"
 , "c2" : "TimestampedKeyValueStoreBuilder(KeyValueBytesStoreSupplier;Serde<K>;Serde<V>;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "TimestampedKeyValueStore<K,V>"
 , "c2" : "build()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueStore<Bytes,byte[]>"
 , "c2" : "maybeWrapCaching(KeyValueStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KeyValueStore<Bytes,byte[]>"
 , "c2" : "maybeWrapLogging(KeyValueStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN170263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN170263 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN170263 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN170263 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method maybeWrapCaching arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.maybeWrapCaching@POLYN171892 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method maybeWrapLogging arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00078] The class InMemoryTimestampedKeyValueStoreMarker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument wrapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker.InMemoryTimestampedKeyValueStoreMarker@POLYN172714 the MagicNumber/String  'Provided store must not be a persistent store, but it is.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method put arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method putIfAbsent arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method putAll arguments List&lt;KeyValue&lt;Bytes ,byte[] &gt; &gt;  entries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method delete arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method get arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method range arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method reverseRange arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#180"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00180] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  'ns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker.persistent@POLYN177239 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
