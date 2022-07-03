console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java 5 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "BaseRepartitionNode<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.OptimizableRepartitionNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.OptimizableRepartitionNode" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OptimizableRepartitionNode"
 , "c2" : "OptimizableRepartitionNode(String;String;ProcessorParameters<K,V,?,?>;Serde<K>;Serde<V>;String;String;StreamPartitioner<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Serde<K>"
 , "c2" : "keySerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Serde<V>"
 , "c2" : "valueSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "repartitionTopic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.kstream.internals.graph.OptimizableRepartitionNode.toString@POLYN172187 the MagicNumber/String  'OptimizableRepartitionNode{ ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.kstream.internals.graph.OptimizableRepartitionNode.toString@POLYN172187 the MagicNumber/String  ' }' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/OptimizableRepartitionNode.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.kstream.internals.graph.OptimizableRepartitionNode.writeToTopology@POLYN172345 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
