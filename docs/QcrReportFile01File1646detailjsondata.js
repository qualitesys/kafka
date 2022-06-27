console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractStream<K,V>KGroupedTable<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KGroupedTableImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KGroupedTableImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KGroupedTableImpl"
 , "c2" : "KGroupedTableImpl(InternalStreamsBuilder;String;Set<String>;GroupedInternal<K,V>;GraphNode)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "GroupedTableOperationRepartitionNode<K,V>"
 , "c2" : "createRepartitionNode(String;String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>;Reducer<V>;Materialized<K,V,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>;Reducer<V>;Named;Materialized<K,V,KeyValueStore<Bytes,byte[]>>)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "KTable<K,V>"
 , "c2" : "reduce(Reducer<V>;Reducer<V>)"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c3" : "3"
 , "c4" : "5"
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
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "21"
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
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument groupedInternal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  '-sink' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  '-source' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method createRepartitionNode arguments String  sinkName|String  sourceName|String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method reduce arguments Reducer&lt;V &gt;  adder|Reducer&lt;V &gt;  subtractor|Materialized&lt;K ,V ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method reduce arguments Reducer&lt;V &gt;  adder|Reducer&lt;V &gt;  subtractor|Named  named|Materialized&lt;K ,V ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  'adder can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  'subtractor can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.reduce@POLYN207728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method reduce arguments Reducer&lt;V &gt;  adder|Reducer&lt;V &gt;  subtractor"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method count arguments Materialized&lt;K ,Long ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method count arguments Named  named|Materialized&lt;K ,Long ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.count@POLYN210191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl.count@POLYN210191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method count arguments Named  named"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  'adder can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  'subtractor can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KGroupedTableImpl.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.kstream.internals.KGroupedTableImpl the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
