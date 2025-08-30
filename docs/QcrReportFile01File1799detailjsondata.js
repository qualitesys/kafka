console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java 18 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#29"
 , "c1" : "GraphGraceSearchUtil"
 , "c2" : "GraphGraceSearchUtil()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#31"
 , "c1" : "long"
 , "c2" : "findAndVerifyWindowGrace(GraphNode)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#35"
 , "c1" : "long"
 , "c2" : "findAndVerifyWindowGrace(GraphNode;String)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#74"
 , "c1" : "Long"
 , "c2" : "extractGracePeriod(GraphNode)"
 , "c3" : "9"
 , "c4" : "12"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method findAndVerifyWindowGrace arguments GraphNode  graphNode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN163986 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method findAndVerifyWindowGrace arguments GraphNode  graphNode|String  chain"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00035] For method findAndVerifyWindowGrace list of called methods Object monObjet|java.lang.Long extractGracePeriodN164502|boolean chain_equalsN164707|long findAndVerifyWindowGraceN165316"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument chain is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  'Window close time is only defined for windowed computations. Got [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  '].' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  '-&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  'Window close time is only defined for windowed computations. Got [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  '].' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.findAndVerifyWindowGrace@POLYN164157 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method extractGracePeriod arguments GraphNode  node"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.extractGracePeriod@POLYN165740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.kstream.internals.graph.GraphGraceSearchUtil.extractGracePeriod@POLYN165740 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/GraphGraceSearchUtil.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
