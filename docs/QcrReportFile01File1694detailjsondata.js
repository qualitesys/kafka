console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractStream<K,VOut>"
 , "c2" : "CogroupedKStream<K,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#49"
 , "c1" : "CogroupedKStreamImpl"
 , "c2" : "CogroupedKStreamImpl(String;Set&lt;String&gt;;GraphNode;InternalStreamsBuilder)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#70"
 , "c1" : "KTable&lt;K,VOut&gt;"
 , "c2" : "aggregate(Initializer&lt;VOut&gt;;Materialized&lt;K,VOut,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#76"
 , "c1" : "KTable&lt;K,VOut&gt;"
 , "c2" : "aggregate(Initializer&lt;VOut&gt;;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#81"
 , "c1" : "KTable&lt;K,VOut&gt;"
 , "c2" : "aggregate(Initializer&lt;VOut&gt;;Named;Materialized&lt;K,VOut,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#94"
 , "c1" : "KTable&lt;K,VOut&gt;"
 , "c2" : "aggregate(Initializer&lt;VOut&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#112"
 , "c1" : "TimeWindowedCogroupedKStream&lt;K,VOut&gt;"
 , "c2" : "windowedBy(SlidingWindows)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#125"
 , "c1" : "SessionWindowedCogroupedKStream&lt;K,VOut&gt;"
 , "c2" : "windowedBy(SessionWindows)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#136"
 , "c1" : "KTable&lt;K,VOut&gt;"
 , "c2" : "doAggregate(Initializer&lt;VOut&gt;;NamedInternal;MaterializedInternal&lt;K,VOut,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.CogroupedKStreamImpl@POLYN174411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.CogroupedKStreamImpl@POLYN174411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'groupedStream can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'aggregator can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Materialized&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Named  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN176170 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method aggregate arguments Initializer&lt;VOut &gt;  initializer|Named  named|Materialized&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materialized"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN176519 the MagicNumber/String  'initializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN176519 the MagicNumber/String  'named can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN176519 the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method aggregate arguments Initializer&lt;VOut &gt;  initializer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN177344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl the MagicNumber/String  'windows can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method windowedBy arguments SlidingWindows  slidingWindows"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.windowedBy@POLYN178130 the MagicNumber/String  'slidingWindows can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method windowedBy arguments SessionWindows  sessionWindows"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.windowedBy@POLYN178567 the MagicNumber/String  'sessionWindows can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method doAggregate arguments Initializer&lt;VOut &gt;  initializer|NamedInternal  named|MaterializedInternal&lt;K ,VOut ,KeyValueStore&lt;Bytes ,byte[] &gt; &gt;  materializedInternal"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument materializedInternal is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN177344"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.streams.kstream.internals.CogroupedKStreamImpl.aggregate@POLYN177344 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedKStreamImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
