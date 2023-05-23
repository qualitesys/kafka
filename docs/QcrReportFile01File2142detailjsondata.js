console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java 26 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#47"
 , "c1" : "TimestampedKeyValueStoreBuilder"
 , "c2" : "TimestampedKeyValueStoreBuilder(KeyValueBytesStoreSupplier;Serde&lt;K&gt;;Serde&lt;V&gt;;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#62"
 , "c1" : "TimestampedKeyValueStore&lt;K,V&gt;"
 , "c2" : "build()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#79"
 , "c1" : "KeyValueStore&lt;Bytes,byte[]&gt;"
 , "c2" : "maybeWrapCaching(KeyValueStore&lt;Bytes,byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#86"
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

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.svg" }

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
 , "c4" : "3"
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN176851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN176851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN176851 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.TimestampedKeyValueStoreBuilder@POLYN176851 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00062] For method build list of called methods Object monObjet|V storeSupplier_getN177759"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method maybeWrapCaching arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.maybeWrapCaching@POLYN178480 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method maybeWrapLogging arguments KeyValueStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument wrapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker.InMemoryTimestampedKeyValueStoreMarker@POLYN179302 the MagicNumber/String  'Provided store must not be a persistent store, but it is.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method put arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method putIfAbsent arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method putAll arguments List&lt;KeyValue&lt;Bytes ,byte[] &gt; &gt;  entries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method delete arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method get arguments Bytes  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method range arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method reverseRange arguments Bytes  from|Bytes  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker the MagicNumber/String  'ns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.streams.state.internals.TimestampedKeyValueStoreBuilder.InMemoryTimestampedKeyValueStoreMarker.persistent@POLYN183827 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyValueStoreBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
