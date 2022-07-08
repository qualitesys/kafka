console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java 14 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoveNamedTopologyResult"
 , "c2" : "RemoveNamedTopologyResult(KafkaFutureImpl<Void>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "RemoveNamedTopologyResult"
 , "c2" : "RemoveNamedTopologyResult(KafkaFutureImpl<Void>;String;Runnable)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "removeTopologyFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "resetOffsetsFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "all()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class RemoveNamedTopologyResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.RemoveNamedTopologyResult@POLYN154186 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.all@POLYN155459 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.ResetOffsetsFuture@POLYN155878 the MagicNumber/String  'topology [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00076] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  'Removing named topology failed. Offset reset will still be attempted.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  'Failed to reset offsets, you should do so manually if you want to add new topologies' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  'in the future that consume from the same input topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/RemoveNamedTopologyResult.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.processor.internals.namedtopology.RemoveNamedTopologyResult.ResetOffsetsFuture.get@POLYN156453 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
