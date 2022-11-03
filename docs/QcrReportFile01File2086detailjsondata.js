console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStoreBuilder<K,ValueAndTimestamp<V>,TimestampedWindowStore<K,V>>"
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#35"
 , "c1" : "TimestampedWindowStoreBuilder"
 , "c2" : "TimestampedWindowStoreBuilder(WindowBytesStoreSupplier;Serde<K>;Serde<V>;Time)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#46"
 , "c1" : "TimestampedWindowStore<K,V>"
 , "c2" : "build()"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#69"
 , "c1" : "WindowStore<Bytes,byte[]>"
 , "c2" : "maybeWrapCaching(WindowStore<Bytes,byte[]>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#88"
 , "c1" : "boolean"
 , "c2" : "isTimeOrderedStore(StateStore)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#98"
 , "c1" : "WindowStore<Bytes,byte[]>"
 , "c2" : "maybeWrapLogging(WindowStore<Bytes,byte[]>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#105"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.svg" }

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
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument storeSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN176011 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN176011 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN176011 the MagicNumber/String  'storeSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.TimestampedWindowStoreBuilder@POLYN176011 the MagicNumber/String  'storeSupplier's metricsScope can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.build@POLYN176801 the MagicNumber/String  'Disabling caching for {} since store was configured to retain duplicates' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.build@POLYN176801 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method maybeWrapCaching arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method isTimeOrderedStore arguments StateStore  stateStore"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN178615 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.isTimeOrderedStore@POLYN178615 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method maybeWrapLogging arguments WindowStore&lt;Bytes ,byte[] &gt;  inner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00110] The class InMemoryTimestampedWindowStoreMarker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument wrapped is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker.InMemoryTimestampedWindowStoreMarker@POLYN179689 the MagicNumber/String  'Provided store must not be a persistent store, but it is.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method put arguments Bytes  key|byte[]  value|long  windowStartTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method fetch arguments Bytes  key|long  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method fetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method backwardFetch arguments Bytes  key|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#217"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00217] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker the MagicNumber/String  'ns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.streams.state.internals.TimestampedWindowStoreBuilder.InMemoryTimestampedWindowStoreMarker.persistent@POLYN184688 the MagicNumber/String  false should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedWindowStoreBuilder.java.svg" }

};
console.log('leListeStr 99 main end');
