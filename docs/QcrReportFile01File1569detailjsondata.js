console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.xml" 
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
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#23"
 , "c1" : "ProcessingMode"
 , "c2" : "processingMode(StreamsConfig)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#36"
 , "c1" : "String"
 , "c2" : "processingModeString(ProcessingMode)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#46"
 , "c1" : "boolean"
 , "c2" : "eosEnabled(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#50"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00006"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class StreamsConfigUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method processingMode arguments StreamsConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method processingModeString arguments ProcessingMode  processingMode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method eosEnabled arguments StreamsConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method eosEnabled arguments ProcessingMode  processingMode"
}} 
]
};
console.log('leListeStr 99 main end');
