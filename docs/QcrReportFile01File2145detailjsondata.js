console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java 34 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStoreBuilder<K,ValueAndTimestamp<V>,TimestampedWindowStore<K,V>>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#50"
 , "c1" : "TimestampedWindowStoreBuilder"
 , "c2" : "TimestampedWindowStoreBuilder(WindowBytesStoreSupplier;Serde&lt;K&gt;;Serde&lt;V&gt;;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#61"
 , "c1" : "TimestampedWindowStore&lt;K,V&gt;"
 , "c2" : "build()"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#84"
 , "c1" : "WindowStore&lt;Bytes,byte[]&gt;"
 , "c2" : "maybeWrapCaching(WindowStore&lt;Bytes,byte[]&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#103"
 , "c1" : "boolean"
 , "c2" : "isTimeOrderedStore(StateStore)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#113"
 , "c1" : "WindowStore&lt;Bytes,byte[]&gt;"
 , "c2" : "maybeWrapLogging(WindowStore&lt;Bytes,byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#120"
 , "c1" : "long"
 , "c2" : "retentionPeriod()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
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
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN186359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN186359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN186359 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN186359 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.build@POLYN187149 the MagicNumber/String  'Disabling caching for {} since store was configured to retain duplicates' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.build@POLYN187149 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method maybeWrapCaching arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00084] For method maybeWrapCaching list of called methods Object monObjet|boolean isTimeOrderedStoreN188541"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method isTimeOrderedStore arguments StateStore  stateStore"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN188967 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN188967 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method maybeWrapLogging arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument wrapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker.InMemoryTimestampedWindowStoreMarker@POLYN190041 the MagicNumber/String  'Provided store must not be a persistent store, but it is.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method put arguments Bytes  key|byte[]  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method fetch arguments Bytes  key|long  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method fetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method backwardFetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00193] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#232"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00232] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  'ns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker.persistent@POLYN195046 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN188967"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN188967 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN188967 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
