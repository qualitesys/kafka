console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "InternalTopicConfig"
 , "c2" : "org.apache.kafka.streams.processor.internals.RepartitionTopicConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.RepartitionTopicConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#41"
 , "c1" : "RepartitionTopicConfig"
 , "c2" : "RepartitionTopicConfig(String;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#45"
 , "c1" : "RepartitionTopicConfig"
 , "c2" : "RepartitionTopicConfig(String;Map<String,String>;int;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#60"
 , "c1" : "Map<String,String>"
 , "c2" : "getProperties(Map<String,String>;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#72"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#86"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#91"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method getProperties arguments Map&lt;String ,String &gt;  defaultProperties|long  additionalRetentionMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00076] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.equals@POLYN154164 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.equals@POLYN154164 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.equals@POLYN154164 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.toString@POLYN155096 the MagicNumber/String  'RepartitionTopicConfig(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.toString@POLYN155096 the MagicNumber/String  'name=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.toString@POLYN155096 the MagicNumber/String  ', topicConfigs=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.toString@POLYN155096 the MagicNumber/String  ', enforceNumberOfPartitions=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.processor.internals.RepartitionTopicConfig.toString@POLYN155096 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/RepartitionTopicConfig.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
