console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java 7 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractSegments<KeyValueSegment>"
 , "c2" : "org.apache.kafka.streams.state.internals.KeyValueSegments"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.KeyValueSegments" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#13"
 , "c1" : "KeyValueSegments"
 , "c2" : "KeyValueSegments(String;String;long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#22"
 , "c1" : "KeyValueSegment"
 , "c2" : "getOrCreateSegment(long;ProcessorContext)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#40"
 , "c1" : "void"
 , "c2" : "openExisting(ProcessorContext;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
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
 , "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method getOrCreateSegment arguments long  segmentId|ProcessorContext  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.state.internals.KeyValueSegments.getOrCreateSegment@POLYN147037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.streams.state.internals.KeyValueSegments.getOrCreateSegment@POLYN147037 the MagicNumber/String  'KeyValueSegment already exists. Possible concurrent access.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method openExisting arguments ProcessorContext  context|long  streamTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueSegments.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.internals.KeyValueSegments.openExisting@POLYN147902"
}} 
]
};
console.log('leListeStr 99 main end');
