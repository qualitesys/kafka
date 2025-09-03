console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.KGroupedStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.KGroupedStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#72"
 , "c1" : "KTable&lt;K,Long&gt;"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#102"
 , "c1" : "KTable&lt;K,Long&gt;"
 , "c2" : "count(Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00148"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#148"
 , "c1" : "KTable&lt;K,Long&gt;"
 , "c2" : "count(Materialized&lt;K,Long,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#195"
 , "c1" : "KTable&lt;K,Long&gt;"
 , "c2" : "count(Named;Materialized&lt;K,Long,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00234"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#234"
 , "c1" : "KTable&lt;K,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00296"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#296"
 , "c1" : "KTable&lt;K,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;;Materialized&lt;K,V,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00363"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#363"
 , "c1" : "KTable&lt;K,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;;Named;Materialized&lt;K,V,KeyValueStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00548"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#548"
 , "c1" : "TimeWindowedKStream&lt;K,V&gt;"
 , "c2" : "windowedBy(SlidingWindows)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00555"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#555"
 , "c1" : "SessionWindowedKStream&lt;K,V&gt;"
 , "c2" : "windowedBy(SessionWindows)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00044] The interface KGroupedStream does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/KGroupedStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
