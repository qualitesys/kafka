console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java 118 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "InternalNameProvider"
 , "c2" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "InternalStreamsBuilder"
 , "c2" : "InternalStreamsBuilder(InternalTopologyBuilder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "newProcessorName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "newStoreName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addStateStore(StoreBuilder<?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addGraphNode(GraphNode;GraphNode)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addGraphNode(Collection<GraphNode>;GraphNode)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeAddNodeForOptimizationMetadata(GraphNode)"
 , "c3" : "10"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildAndOptimizeTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildAndOptimizeTopology(boolean)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "mergeDuplicateSourceNodes()"
 , "c3" : "12"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "optimizeKTableSourceTopics()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeOptimizeRepartitionOperations()"
 , "c3" : "8"
 , "c4" : "24"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeUpdateKeyChangingRepartitionNodeMap()"
 , "c3" : "8"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "mergeNodeHasRepartitionChildren(GraphNode;LinkedHashSet<OptimizableRepartitionNode<?,?>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GraphNode"
 , "c2" : "getKeyChangingParentNode(GraphNode)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getFirstRepartitionTopicName(Collection<OptimizableRepartitionNode<?,?>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "GraphNode"
 , "c2" : "findParentNodeMatching(GraphNode;Predicate<GraphNode>)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "GraphNode"
 , "c2" : "root()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "15"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "39"
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
 , "c4" : "43"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00043] The class InternalStreamsBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method newProcessorName arguments String  prefix"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.newProcessorName@POLYN251651 the MagicNumber/String  '%010d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method newStoreName arguments String  prefix"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.newStoreName@POLYN251881 the MagicNumber/String  '%010d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#184"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00184] Lock statement on synchronized method addStateStore"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method addStateStore arguments StoreBuilder&lt;? &gt;  builder"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#188"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00188] Lock statement on synchronized method "
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00190] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method addGraphNode arguments GraphNode  parent|GraphNode  child"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00211] The argument parent is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addGraphNode@POLYN253437 the MagicNumber/String  'parent node can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addGraphNode@POLYN253437 the MagicNumber/String  'child node can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method addGraphNode arguments Collection&lt;GraphNode &gt;  parents|GraphNode  child"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument parents is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addGraphNode@POLYN253850 the MagicNumber/String  'parent node can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addGraphNode@POLYN253850 the MagicNumber/String  'child node can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addGraphNode@POLYN253850 the MagicNumber/String  'Parent node collection can't be empty' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method maybeAddNodeForOptimizationMetadata arguments GraphNode  node"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00233] For method maybeAddNodeForOptimizationMetadata list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.GraphNode getKeyChangingParentNodeN255296"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#233"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00233] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeAddNodeForOptimizationMetadata@POLYN254465 the MagicNumber/String  'Nodes should not have a null parent node.  Name: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeAddNodeForOptimizationMetadata@POLYN254465 the MagicNumber/String  ' Type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeAddNodeForOptimizationMetadata@POLYN254465 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.buildAndOptimizeTopology@POLYN255861 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method buildAndOptimizeTopology arguments boolean  optimizeTopology"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00275] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00286] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.buildAndOptimizeTopology@POLYN255967 the MagicNumber/String  'Optimizing the Kafka Streams graph for repartition nodes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.buildAndOptimizeTopology@POLYN255967 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.buildAndOptimizeTopology@POLYN255967 the MagicNumber/String  'Adding nodes to topology {} child nodes {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.buildAndOptimizeTopology@POLYN255967 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00303] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00307] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00311] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00317] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00321] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00321] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00329"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.mergeDuplicateSourceNodes@POLYN257425 the MagicNumber/String  'Topic {} was found in  subscription for non-equal source nodes {} and {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.mergeDuplicateSourceNodes@POLYN257425 the MagicNumber/String  'Two source nodes are subscribed to overlapping but not equal input topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.optimizeKTableSourceTopics@POLYN259917 the MagicNumber/String  'Marking KTable source nodes to optimize using source topic for changelogs ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.optimizeKTableSourceTopics@POLYN259917 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#349"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00349] For method maybeOptimizeRepartitionOperations list of called methods Object monObjet|String getFirstRepartitionTopicNameN261169|org.apache.kafka.streams.kstream.internals.graph.GraphNode findParentNodeMatchingN261668|java.util.Collection&lt;org.apache.kafka.streams.kstream.internals.graph.GraphNode&gt; repartitionNodeToBeReplaced_childrenN262515|java.util.Collection&lt;org.apache.kafka.streams.kstream.internals.graph.GraphNode&gt; repartitionNodeToBeReplaced_parentNodesN262616"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00355] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00357] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00363] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00365] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00367] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00374] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00394] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00396] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00397] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00402] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00394] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00396] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00397] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00402] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00397] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeOptimizeRepartitionOperations@POLYN260235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeOptimizeRepartitionOperations@POLYN260235 the MagicNumber/String  'Found a null keyChangingChild node for %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeOptimizeRepartitionOperations@POLYN260235 the MagicNumber/String  'Found the child node of the key changer {} from the repartition {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeOptimizeRepartitionOperations@POLYN260235 the MagicNumber/String  'Removing {} from {}  children {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeOptimizeRepartitionOperations@POLYN260235 the MagicNumber/String  'Updated node {} children {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#420"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00420] For method maybeUpdateKeyChangingRepartitionNodeMap list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.GraphNode findParentNodeMatchingN264508"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00425] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00426] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00428] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00428] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00438] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00439] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00440] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.maybeUpdateKeyChangingRepartitionNodeMap@POLYN263494 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#452"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00452] For method mergeNodeHasRepartitionChildren arguments GraphNode  mergeNode|LinkedHashSet&lt;OptimizableRepartitionNode&lt;? ,? &gt; &gt;  repartitionNodes"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#453"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00453] The argument repartitionNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.mergeNodeHasRepartitionChildren@POLYN265901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00481] For method getKeyChangingParentNode arguments GraphNode  repartitionNode"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00481] For method getKeyChangingParentNode list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.GraphNode findParentNodeMatchingN267106|org.apache.kafka.streams.kstream.internals.graph.GraphNode findParentNodeMatchingN267307"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.getKeyChangingParentNode@POLYN267001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.getKeyChangingParentNode@POLYN267001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#491"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00491] For method getFirstRepartitionTopicName arguments Collection&lt;OptimizableRepartitionNode&lt;? ,? &gt; &gt;  repartitionNodes"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#491"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00491] The argument repartitionNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00502] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00506] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00497"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#517"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00517] For method findParentNodeMatching arguments GraphNode  startSeekingNode|Predicate&lt;GraphNode &gt;  parentNodePredicate"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#517"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00517] For method findParentNodeMatching list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.GraphNode findParentNodeMatchingN269659"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#517"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00517] The argument startSeekingNode is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00518"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#518"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00518] The argument parentNodePredicate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.findParentNodeMatching@POLYN269109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.findParentNodeMatching@POLYN269109"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/InternalStreamsBuilder.java.html#522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00522] In the recursive method org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.findParentNodeMatching@POLYN269109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
