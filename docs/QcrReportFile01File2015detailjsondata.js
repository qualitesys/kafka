console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStoreBuilder<K,V,KeyValueStore<K,V>>"
 , "c2" : "org.apache.kafka.streams.state.internals.ListValueStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.ListValueStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#15"
 , "c1" : "ListValueStoreBuilder"
 , "c2" : "ListValueStoreBuilder(KeyValueBytesStoreSupplier;Serde<K>;Serde<V>;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#26"
 , "c1" : "KeyValueStore<K,V>"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#35"
 , "c1" : "KeyValueStore<Bytes,byte[]>"
 , "c2" : "maybeWrapCaching(KeyValueStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#42"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.svg" }

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
 , "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.state.internals.ListValueStoreBuilder.ListValueStoreBuilder@POLYN147777 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.streams.state.internals.ListValueStoreBuilder.ListValueStoreBuilder@POLYN147777 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method maybeWrapCaching arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.ListValueStoreBuilder.maybeWrapCaching@POLYN148854 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/ListValueStoreBuilder.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method maybeWrapLogging arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
]
};
console.log('leListeStr 99 main end');
