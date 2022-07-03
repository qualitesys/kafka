console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java 28 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>KGroupedStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KGroupedStreamImpl"
 , "c2" : "KGroupedStreamImpl(String;Set<String>;GroupedInternal<K,V>;boolean;GraphNode;InternalStreamsBuilder)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>;Materialized<K,V,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>;Named;Materialized<K,V,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,Long>"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,Long>"
 , "c2" : "count(Named)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,Long>"
 , "c2" : "count(Materialized<K,Long,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,Long>"
 , "c2" : "count(Named;Materialized<K,Long,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,Long>"
 , "c2" : "doCount(Named;Materialized<K,Long,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "TimeWindowedKStream<K,V>"
 , "c2" : "windowedBy(SlidingWindows)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SessionWindowedKStream<K,V>"
 , "c2" : "windowedBy(SessionWindows)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument groupedInternal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method reduce arguments Reducer&lt;V &gt;  reducer"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method reduce arguments Reducer&lt;V &gt;  reducer|Materialized&lt;K ,V ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method reduce arguments Reducer&lt;V &gt;  reducer|Named  named|Materialized&lt;K ,V ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.reduce@POLYN203961 the MagicNumber/String  'reducer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.reduce@POLYN203961 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.reduce@POLYN203961 the MagicNumber/String  'name can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.reduce@POLYN203961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.reduce@POLYN203961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method count arguments Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.count@POLYN208323 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method count arguments Materialized&lt;K ,Long ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method count arguments Named  named|Materialized&lt;K ,Long ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.count@POLYN209045 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.count@POLYN209045 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method doCount arguments Named  named|Materialized&lt;K ,Long ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.doCount@POLYN209680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl.doCount@POLYN209680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method windowedBy arguments SlidingWindows  windows"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#207"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00207] For method windowedBy arguments SessionWindows  windows"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00223] The argument materializedInternal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedStreamImpl.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.kstream.internals.KGroupedStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
