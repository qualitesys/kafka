console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java 14 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.internals.StreamsConfigUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.internals.StreamsConfigUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProcessingMode"
 , "c2" : "processingMode(StreamsConfig)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "processingModeString(ProcessingMode)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "eosEnabled(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "eosEnabled(ProcessingMode)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getTotalCacheSize(StreamsConfig)"
 , "c3" : "5"
 , "c4" : "5"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class StreamsConfigUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method processingMode arguments StreamsConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method processingModeString arguments ProcessingMode  processingMode"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method eosEnabled arguments StreamsConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method eosEnabled arguments ProcessingMode  processingMode"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method getTotalCacheSize arguments StreamsConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00065] The same method call config.originals() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.internals.StreamsConfigUtils.getTotalCacheSize@POLYN172555 the MagicNumber/String  'Both deprecated config {} and the new config {} are set, hence {} is ignored and {} is used instead.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.internals.StreamsConfigUtils.getTotalCacheSize@POLYN172555 the MagicNumber/String  'Deprecated config {} is set, and will be used; we suggest setting the new config {} instead as deprecated {} would be removed in the future.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.internals.StreamsConfigUtils.getTotalCacheSize@POLYN172555"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method org.apache.kafka.streams.internals.StreamsConfigUtils.getTotalCacheSize@POLYN172555 the MagicNumber/String 'Both deprecated config {} and the new config {} are set, hence {} is ignored and {} is used instead.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/StreamsConfigUtils.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.streams.internals.StreamsConfigUtils.getTotalCacheSize@POLYN172555 the MagicNumber/String 'Deprecated config {} is set, and will be used; we suggest setting the new config {} instead as deprecated {} would be removed in the future.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
