console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.KeyValueStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.KeyValueStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#31"
 , "c1" : "KeyValueStoreBuilder"
 , "c2" : "KeyValueStoreBuilder(KeyValueBytesStoreSupplier;Serde&lt;K&gt;;Serde&lt;V&gt;;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#42"
 , "c1" : "KeyValueStore&lt;K,V&gt;"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#51"
 , "c1" : "KeyValueStore&lt;Bytes,byte[]&gt;"
 , "c2" : "maybeWrapCaching(KeyValueStore&lt;Bytes,byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#58"
 , "c1" : "KeyValueStore&lt;Bytes,byte[]&gt;"
 , "c2" : "maybeWrapLogging(KeyValueStore&lt;Bytes,byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.svg" }

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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.state.internals.KeyValueStoreBuilder.KeyValueStoreBuilder@POLYN157309 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.state.internals.KeyValueStoreBuilder.KeyValueStoreBuilder@POLYN157309 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method maybeWrapCaching arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.KeyValueStoreBuilder.maybeWrapCaching@POLYN158348 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method maybeWrapLogging arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueStoreBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
