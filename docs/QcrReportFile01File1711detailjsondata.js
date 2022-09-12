console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java 55 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStream<K,V>TimeWindowedKStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#41"
 , "c1" : "TimeWindowedKStreamImpl"
 , "c2" : "TimeWindowedKStreamImpl(Windows<W>;InternalStreamsBuilder;Set<String>;String;Serde<K>;Serde<V>;GroupedStreamAggregateBuilder<K,V>;GraphNode)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#55"
 , "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#60"
 , "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#66"
 , "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#71"
 , "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "count(Named;Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#83"
 , "c1" : "KTable<Windowed<K>,Long>"
 , "c2" : "doCount(Named;Materialized<K,Long,WindowStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#163"
 , "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#168"
 , "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#173"
 , "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00179"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#179"
 , "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "reduce(Reducer<V>;Named;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00213"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#213"
 , "c1" : "TimeWindowedKStream<K,V>"
 , "c2" : "emitStrategy(EmitStrategy)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00284"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#284"
 , "c1" : "Aggregator<K,V,V>"
 , "c2" : "aggregatorForReducer(Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "39"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.TimeWindowedKStreamImpl@POLYN195305 the MagicNumber/String  'windows can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method count arguments Named  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method count arguments Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method count arguments Named  named|Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.count@POLYN197008 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.count@POLYN197008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method doCount arguments Named  named|Materialized&lt;K ,Long ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00107] The same method call materializedInternal.keySerde()windows.size() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.doCount@POLYN197664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.doCount@POLYN197664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.doCount@POLYN197664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.doCount@POLYN197664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00158] The same method call materializedInternal.keySerde()windows.size() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method reduce arguments Reducer&lt;V &gt;  reducer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method reduce arguments Reducer&lt;V &gt;  reducer|Named  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method reduce arguments Reducer&lt;V &gt;  reducer|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method reduce arguments Reducer&lt;V &gt;  reducer|Named  named|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00208] The same method call materializedInternal.keySerde()windows.size() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  'reducer can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.reduce@POLYN203870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method emitStrategy arguments EmitStrategy  emitStrategy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#213"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00213] The argument emitStrategy is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.emitStrategy@POLYN205884 the MagicNumber/String  'ON_WINDOW_CLOSE emit strategy cannot be used for UnlimitedWindows' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#222"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00222] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  ' must be no smaller than its window size plus the grace period.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  ' Got size=[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  ' grace=[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  ' retention=[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl the MagicNumber/String  'Unknown store type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method aggregatorForReducer arguments Reducer&lt;V &gt;  reducer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#284"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00284] The argument reducer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedKStreamImpl.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.streams.kstream.internals.TimeWindowedKStreamImpl.aggregatorForReducer@POLYN209353 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
