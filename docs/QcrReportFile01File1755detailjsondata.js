console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java 21 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SourceGraphNode<K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.TableSourceNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.TableSourceNode" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TableSourceNode"
 , "c2" : "TableSourceNode(String;String;String;ConsumedInternal<K,V>;MaterializedInternal<K,V,?>;ProcessorParameters<K,V,?,?>;boolean)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reuseSourceTopicForChangeLog(boolean)"
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
 , "c3" : "8"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method reuseSourceTopicForChangeLog arguments boolean  shouldReuseSourceTopicForChangelog"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  'TableSourceNode{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  'materializedInternal=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  ', processorParameters=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  ', sourceName='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  ', isGlobalKTable=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN167856 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.writeToTopology@POLYN168449 the MagicNumber/String  'A table source node must have a single topic as input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.writeToTopology@POLYN168449 the MagicNumber/String  'A table source node must have a single topic as input' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00119] The class TableSourceNodeBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method withSourceName arguments String  sourceName"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method withTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method withMaterializedInternal arguments MaterializedInternal&lt;K ,V ,? &gt;  materializedInternal"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method withConsumedInternal arguments ConsumedInternal&lt;K ,V &gt;  consumedInternal"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method withProcessorParameters arguments ProcessorParameters&lt;K ,V ,? ,? &gt;  processorParameters"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method isGlobalKTable arguments boolean  isGlobaKTable"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00162] Public method isGlobalKTable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
