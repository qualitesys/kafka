console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#32"
 , "c1" : "RemoveNamedTopologyResult"
 , "c2" : "RemoveNamedTopologyResult(KafkaFutureImpl&lt;Void&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#39"
 , "c1" : "RemoveNamedTopologyResult"
 , "c2" : "RemoveNamedTopologyResult(KafkaFutureImpl&lt;Void&gt;;String;Runnable)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#47"
 , "c1" : "KafkaFuture&lt;Void&gt;"
 , "c2" : "removeTopologyFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#51"
 , "c1" : "KafkaFuture&lt;Void&gt;"
 , "c2" : "resetOffsetsFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#62"
 , "c1" : "KafkaFuture&lt;Void&gt;"
 , "c2" : "all()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.svg" }

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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.RemoveNamedTopologyResult@POLYN166168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.all@POLYN167441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.ResetOffsetsFuture@POLYN167862 the MagicNumber/String  'topology [%s]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00097] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  'Removing named topology failed. Offset reset will still be attempted.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  'Failed to reset offsets, you should do so manually if you want to add new topologies' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  'in the future that consume from the same input topics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN168439 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
