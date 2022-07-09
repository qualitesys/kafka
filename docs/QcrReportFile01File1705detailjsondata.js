console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java 33 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>TimeWindowedCogroupedKStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SlidingWindowedCogroupedKStreamImpl"
 , "c2" : "SlidingWindowedCogroupedKStreamImpl(SlidingWindows;InternalStreamsBuilder;Set<String>;String;CogroupedStreamAggregateBuilder<K,V>;GraphNode;Map<KGroupedStreamImpl<K,?>,Aggregator<?superK,?superObject,V>>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Named;Materialized<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "StoreBuilder<TimestampedWindowStore<K,V>>"
 , "c2" : "materialize(MaterializedInternal<K,V,WindowStore<Bytes,byte[]>>)"
 , "c3" : "9"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.svg" }

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
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.SlidingWindowedCogroupedKStreamImpl@POLYN166543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.SlidingWindowedCogroupedKStreamImpl@POLYN166543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method aggregate arguments Initializer&lt;V &gt;  initializer"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN167415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN167415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method aggregate arguments Initializer&lt;V &gt;  initializer|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method aggregate arguments Initializer&lt;V &gt;  initializer|Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168160 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method aggregate arguments Initializer&lt;V &gt;  initializer|Named  named|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00078] The same method call materializedInternal.keySerde()windows.timeDifferenceMs() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168532 the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168532 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168532 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.aggregate@POLYN168532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method materialize arguments MaterializedInternal&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  ' must be no smaller than 2 * time difference plus the grace period.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  ' Got time difference=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  ' grace=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  ' retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SlidingWindowedCogroupedKStreamImpl.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.kstream.internals.SlidingWindowedCogroupedKStreamImpl.materialize@POLYN169917 the MagicNumber/String  'Unknown store type: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
