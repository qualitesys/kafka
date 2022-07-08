console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>TimeWindowedCogroupedKStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimeWindowedCogroupedKStreamImpl"
 , "c2" : "TimeWindowedCogroupedKStreamImpl(Windows<W>;InternalStreamsBuilder;Set<String>;String;CogroupedStreamAggregateBuilder<K,V>;GraphNode;Map<KGroupedStreamImpl<K,?>,Aggregator<?superK,?superObject,V>>)"
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
 , "c3" : "8"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.svg" }

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
 , "c4" : "24"
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
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.TimeWindowedCogroupedKStreamImpl@POLYN166749 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.TimeWindowedCogroupedKStreamImpl@POLYN166749 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method aggregate arguments Initializer&lt;V &gt;  initializer"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN167642 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN167642 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method aggregate arguments Initializer&lt;V &gt;  initializer|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method aggregate arguments Initializer&lt;V &gt;  initializer|Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method aggregate arguments Initializer&lt;V &gt;  initializer|Named  named|Materialized&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00082] The same method call materializedInternal.keySerde()windows.size() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168759 the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168759 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168759 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168759 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.aggregate@POLYN168759 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method materialize arguments MaterializedInternal&lt;K ,V ,WindowStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  'The retention period of the window store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  ' must be no smaller than its window size plus the grace period.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  ' Got size=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  ' grace=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  ' retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindowedCogroupedKStreamImpl.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.kstream.internals.TimeWindowedCogroupedKStreamImpl.materialize@POLYN170144 the MagicNumber/String  'Unknown store type: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
