console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java 7 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStoreBuilder<K,V,WindowStore<K,V>>"
 , "c2" : "org.apache.kafka.streams.state.internals.WindowStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.WindowStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WindowStoreBuilder"
 , "c2" : "WindowStoreBuilder(WindowBytesStoreSupplier;Serde<K>;Serde<V>;Time)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "WindowStore<K,V>"
 , "c2" : "build()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "WindowStore<Bytes,byte[]>"
 , "c2" : "maybeWrapCaching(WindowStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "WindowStore<Bytes,byte[]>"
 , "c2" : "maybeWrapLogging(WindowStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "retentionPeriod()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.state.internals.WindowStoreBuilder.WindowStoreBuilder@POLYN167348 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.streams.state.internals.WindowStoreBuilder.WindowStoreBuilder@POLYN167348 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.state.internals.WindowStoreBuilder.build@POLYN168211 the MagicNumber/String  'Disabling caching for {} since store was configured to retain duplicates' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.state.internals.WindowStoreBuilder.build@POLYN168211 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method maybeWrapCaching arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/WindowStoreBuilder.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method maybeWrapLogging arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
]
};
console.log('leListeStr 99 main end');
