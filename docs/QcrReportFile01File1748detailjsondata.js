console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java 15 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorGraphNode<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#18"
 , "c1" : "StatefulProcessorNode"
 , "c2" : "StatefulProcessorNode(ProcessorParameters<K,V,?,?>;Set<StoreBuilder<?>>;Set<KTableValueGetterSupplier<?,?>>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#29"
 , "c1" : "StatefulProcessorNode"
 , "c2" : "StatefulProcessorNode(String;ProcessorParameters<K,V,?,?>;String[])"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#40"
 , "c1" : "StatefulProcessorNode"
 , "c2" : "StatefulProcessorNode(String;ProcessorParameters<K,V,?,?>;StoreBuilder<?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#50"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#58"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
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
 , "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument processorParameters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#19"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00019] The argument preRegisteredStores is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument valueGetterSuppliers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.StatefulProcessorNode@POLYN152801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.StatefulProcessorNode@POLYN153836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.StatefulProcessorNode@POLYN154329 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.toString@POLYN154758 the MagicNumber/String  'StatefulProcessorNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.toString@POLYN154758 the MagicNumber/String  'storeNames=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.toString@POLYN154758 the MagicNumber/String  ', storeBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.toString@POLYN154758 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.writeToTopology@POLYN155047 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.writeToTopology@POLYN155047 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.kstream.internals.graph.StatefulProcessorNode.writeToTopology@POLYN155047 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StatefulProcessorNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
