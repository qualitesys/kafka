console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.TimeWindowedKStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.TimeWindowedKStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#84"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,Long&gt;"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#115"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,Long&gt;"
 , "c2" : "count(Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00164"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#164"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,Long&gt;"
 , "c2" : "count(Materialized&lt;K,Long,WindowStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00214"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#214"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,Long&gt;"
 , "c2" : "count(Named;Materialized&lt;K,Long,WindowStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00476"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#476"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00522"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#522"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;;Named)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00584"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#584"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;;Materialized&lt;K,V,WindowStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00648"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#648"
 , "c1" : "KTable&lt;Windowed&lt;K&gt;,V&gt;"
 , "c2" : "reduce(Reducer&lt;V&gt;;Named;Materialized&lt;K,V,WindowStore&lt;Bytes,byte[]&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00653"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#653"
 , "c1" : "TimeWindowedKStream&lt;K,V&gt;"
 , "c2" : "emitStrategy(EmitStrategy)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.svg" }

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
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00054] The interface TimeWindowedKStream does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TimeWindowedKStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
