console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java 54 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>TimeWindowedKStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SlidingWindowedKStreamImpl"
 , "c2" : "SlidingWindowedKStreamImpl(SlidingWindows;InternalStreamsBuilder;Set<String>;String;Serde<K>;Serde<V>;GroupedStreamAggregateBuilder<K,V>;GraphNode)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Named;Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "doCount(Named;Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Named;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "TimeWindowedKStream<K,V>"
 , "c2" : "emitStrategy(EmitStrategy)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Aggregator<K,V,V>"
 , "c2" : "aggregatorForReducer(Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.svg" }

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
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.SlidingWindowedKStreamImpl@POLYN209280 the MagicNumber/String  'windows can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method count arguments Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method count arguments Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method count arguments Named  named|Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.count@POLYN210962 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method doCount arguments Named  named|Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00091] The same method call materializedInternal.keySerde()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.doCount@POLYN211403 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.doCount@POLYN211403 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.doCount@POLYN211403 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.doCount@POLYN211403 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00135] The same method call materializedInternal.keySerde()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method reduce arguments Reducer&lt;V &gt;  reducer"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method reduce arguments Reducer&lt;V &gt;  reducer|Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method reduce arguments Reducer&lt;V &gt;  reducer|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method reduce arguments Reducer&lt;V &gt;  reducer|Named  named|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00180] The same method call materializedInternal.keySerde()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  'reducer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.reduce@POLYN217609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method emitStrategy arguments EmitStrategy  emitStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  ' must be no smaller than 2 * time difference plus the grace period.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  ' Got time difference=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  ' grace=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  ' retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl the MagicNumber/String  'Unknown store type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method aggregatorForReducer arguments Reducer&lt;V &gt;  reducer"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument reducer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedKStreamImpl.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedKStreamImpl.aggregatorForReducer@POLYN222988 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
