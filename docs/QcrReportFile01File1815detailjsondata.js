console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java 21 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.TableSourceNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.TableSourceNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#46"
 , "c1" : "TableSourceNode"
 , "c2" : "TableSourceNode(String;String;String;ConsumedInternal&lt;K,V&gt;;MaterializedInternal&lt;K,V,?&gt;;ProcessorParameters&lt;K,V,?,?&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#65"
 , "c1" : "void"
 , "c2" : "reuseSourceTopicForChangeLog(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#70"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#85"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "8"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
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
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method reuseSourceTopicForChangeLog arguments boolean  shouldReuseSourceTopicForChangelog"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  'TableSourceNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  'materializedInternal=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  ', processorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  ', sourceName='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  ', isGlobalKTable=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.toString@POLYN176750 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00085] For method writeToTopology list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.KTableSource processorParameters_kTableSourceSupplierN179333"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.writeToTopology@POLYN177343 the MagicNumber/String  'A table source node must have a single topic as input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.graph.TableSourceNode.writeToTopology@POLYN177343 the MagicNumber/String  'A table source node must have a single topic as input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method withSourceName arguments String  sourceName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method withTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method withMaterializedInternal arguments MaterializedInternal&lt;K ,V ,? &gt;  materializedInternal"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method withConsumedInternal arguments ConsumedInternal&lt;K ,V &gt;  consumedInternal"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method withProcessorParameters arguments ProcessorParameters&lt;K ,V ,? ,? &gt;  processorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method isGlobalKTable arguments boolean  isGlobaKTable"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00180] Public method isGlobalKTable is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/TableSourceNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
