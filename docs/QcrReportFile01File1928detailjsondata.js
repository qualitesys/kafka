console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java 10 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#16"
 , "c1" : "StreamThreadTotalBlockedTime"
 , "c2" : "StreamThreadTotalBlockedTime(Consumer<?,?>;Consumer<?,?>;Supplier<Double>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#25"
 , "c1" : "double"
 , "c2" : "metricValue(Map<MetricName,?extendsMetric>;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#35"
 , "c1" : "double"
 , "c2" : "compute()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class StreamThreadTotalBlockedTime contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method metricValue arguments Map&lt;MetricName ,?  extends Metric &gt;  metrics|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.metricValue@POLYN147688 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'io-wait-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'io-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'committed-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'commit-sync-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'io-wait-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.StreamThreadTotalBlockedTime.compute@POLYN148238 the MagicNumber/String  'io-time-ns-total' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamThreadTotalBlockedTime.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
