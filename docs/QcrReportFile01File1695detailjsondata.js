console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java 61 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#49"
 , "c1" : "CogroupedStreamAggregateBuilder"
 , "c2" : "CogroupedStreamAggregateBuilder(InternalStreamsBuilder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00201"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#201"
 , "c1" : "void"
 , "c2" : "processRepartitions(Map&lt;KGroupedStreamImpl&lt;K,?&gt;,Aggregator&lt;?superK,?superObject,VOut&gt;&gt;;StoreBuilder&lt;?&gt;)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00262"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#262"
 , "c1" : "StatefulProcessorNode&lt;K,?&gt;"
 , "c2" : "getStatefulProcessorNode(String;boolean;StoreBuilder&lt;?&gt;;ProcessorSupplier&lt;K,?,K,?&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "24"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument groupPatterns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  '-cogroup-agg-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument groupPatterns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  '-cogroup-agg-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument groupPatterns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  '-cogroup-agg-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument groupPatterns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00177] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  '-cogroup-agg-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method processRepartitions arguments Map&lt;KGroupedStreamImpl&lt;K ,? &gt; ,Aggregator&lt;? super K ,? super Object ,VOut &gt; &gt;  groupPatterns|StoreBuilder&lt;? &gt;  storeBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#201"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00201] The argument groupPatterns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#202"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00202] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00209] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00215] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder.processRepartitions@POLYN215330 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#234"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00234] The argument named is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  '-cogroup-merge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method getStatefulProcessorNode arguments String  processorName|boolean  stateCreated|StoreBuilder&lt;? &gt;  storeBuilder|ProcessorSupplier&lt;K ,? ,K ,? &gt;  kStreamAggregate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#264"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00264] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.streams.kstream.internals.CogroupedStreamAggregateBuilder the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/CogroupedStreamAggregateBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
