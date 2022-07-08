console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java 20 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,VOut>CogroupedKStream<K,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CogroupedKStreamImpl"
 , "c2" : "CogroupedKStreamImpl(String;Set<String>;GraphNode;InternalStreamsBuilder)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,VOut>"
 , "c2" : "aggregate(Initializer<VOut>;Materialized<K,VOut,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,VOut>"
 , "c2" : "aggregate(Initializer<VOut>;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,VOut>"
 , "c2" : "aggregate(Initializer<VOut>;Named;Materialized<K,VOut,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,VOut>"
 , "c2" : "aggregate(Initializer<VOut>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TimeWindowedCogroupedKStream<K,VOut>"
 , "c2" : "windowedBy(SlidingWindows)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "SessionWindowedCogroupedKStream<K,VOut>"
 , "c2" : "windowedBy(SessionWindows)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,VOut>"
 , "c2" : "doAggregate(Initializer<VOut>;NamedInternal;MaterializedInternal<K,VOut,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.svg" }

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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.CogroupedKStreamImpl@POLYN163919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.CogroupedKStreamImpl@POLYN163919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'groupedStream can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Materialized&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN165678 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Named  named|Materialized&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN166027 the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN166027 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN166027 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method aggregate arguments Initializer&lt;VOut &gt;  initializer"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN166852 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'windows can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method windowedBy arguments SlidingWindows  slidingWindows"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.windowedBy@POLYN167638 the MagicNumber/String  'slidingWindows can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method windowedBy arguments SessionWindows  sessionWindows"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.windowedBy@POLYN168075 the MagicNumber/String  'sessionWindows can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method doAggregate arguments Initializer&lt;VOut &gt;  initializer|NamedInternal  named|MaterializedInternal&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materializedInternal"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument materializedInternal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
