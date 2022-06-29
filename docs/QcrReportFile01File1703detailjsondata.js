console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>SessionWindowedCogroupedKStream<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SessionWindowedCogroupedKStreamImpl"
 , "c2" : "SessionWindowedCogroupedKStreamImpl(SessionWindows;InternalStreamsBuilder;Set<String>;String;CogroupedStreamAggregateBuilder<K,V>;GraphNode;Map<KGroupedStreamImpl<K,?>,Aggregator<?superK,?superObject,V>>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Merger<?superK,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Merger<?superK,V>;Materialized<K,V,SessionStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Merger<?superK,V>;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<Windowed<K>,V>"
 , "c2" : "aggregate(Initializer<V>;Merger<?superK,V>;Named;Materialized<K,V,SessionStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "StoreBuilder<SessionStore<K,V>>"
 , "c2" : "materialize(MaterializedInternal<K,V,SessionStore<Bytes,byte[]>>)"
 , "c3" : "8"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.svg" }

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
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.SessionWindowedCogroupedKStreamImpl@POLYN185948 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.SessionWindowedCogroupedKStreamImpl@POLYN185948 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method aggregate arguments Initializer&lt;V &gt;  initializer|Merger&lt;? super K ,V &gt;  sessionMerger"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN186820 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN186820 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method aggregate arguments Initializer&lt;V &gt;  initializer|Merger&lt;? super K ,V &gt;  sessionMerger|Materialized&lt;K ,V ,SessionStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method aggregate arguments Initializer&lt;V &gt;  initializer|Merger&lt;? super K ,V &gt;  sessionMerger|Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN187751 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN187751 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method aggregate arguments Initializer&lt;V &gt;  initializer|Merger&lt;? super K ,V &gt;  sessionMerger|Named  named|Materialized&lt;K ,V ,SessionStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00084] The same method call materializedInternal.keySerde() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  'sessionMerger can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.aggregate@POLYN188216 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method materialize arguments MaterializedInternal&lt;K ,V ,SessionStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  'The retention period of the session store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ' must be no smaller than the session inactivity gap plus the' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ' grace period.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ' Got gap=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ' grace=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  '],' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ' retention=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/SessionWindowedCogroupedKStreamImpl.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.kstream.internals.SessionWindowedCogroupedKStreamImpl.materialize@POLYN189755 the MagicNumber/String  'Unknown store type: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
