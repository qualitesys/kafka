console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.internals.StreamsConfigUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.internals.StreamsConfigUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#38"
 , "c1" : "ProcessingMode"
 , "c2" : "processingMode(StreamsConfig)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#51"
 , "c1" : "String"
 , "c2" : "processingModeString(ProcessingMode)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#61"
 , "c1" : "boolean"
 , "c2" : "eosEnabled(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#65"
 , "c1" : "boolean"
 , "c2" : "eosEnabled(ProcessingMode)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method processingMode arguments StreamsConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method processingModeString arguments ProcessingMode  processingMode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method eosEnabled arguments StreamsConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method eosEnabled arguments ProcessingMode  processingMode"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
