console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "GraphNode"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.ProcessorGraphNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.ProcessorGraphNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#12"
 , "c1" : "ProcessorGraphNode"
 , "c2" : "ProcessorGraphNode(ProcessorParameters<K,V,?,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#19"
 , "c1" : "ProcessorGraphNode"
 , "c2" : "ProcessorGraphNode(String;ProcessorParameters<K,V,?,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#27"
 , "c1" : "ProcessorParameters<K,V,?,?>"
 , "c2" : "processorParameters()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#32"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#39"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#12"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00012] The argument processorParameters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorGraphNode.toString@POLYN145923 the MagicNumber/String  'ProcessorNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorGraphNode.toString@POLYN145923 the MagicNumber/String  'processorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.internals.graph.ProcessorGraphNode.toString@POLYN145923 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/ProcessorGraphNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
