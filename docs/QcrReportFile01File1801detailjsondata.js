console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java 19 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BaseJoinProcessorNode<K,Change<V1>,Change<V2>,Change<VR>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#23"
 , "c1" : "KTableKTableJoinNode"
 , "c2" : "KTableKTableJoinNode(String;ProcessorParameters<K,Change<V1>,?,?>;ProcessorParameters<K,Change<V2>,?,?>;ProcessorParameters<K,Change<VR>,?,?>;String;String;Serde<K>;Serde<VR>;String[];String[];StoreBuilder<TimestampedKeyValueStore<K,VR>>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#50"
 , "c1" : "Serde<K>"
 , "c2" : "keySerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#54"
 , "c1" : "Serde<VR>"
 , "c2" : "valueSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#58"
 , "c1" : "String[]"
 , "c2" : "joinThisStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#62"
 , "c1" : "String[]"
 , "c2" : "joinOtherStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#66"
 , "c1" : "String"
 , "c2" : "queryableStoreName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#72"
 , "c1" : "KTableKTableJoinMerger<K,VR>"
 , "c2" : "joinMerger()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#80"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#110"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.KTableKTableJoinNode@POLYN171154 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.writeToTopology@POLYN173344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN174550 the MagicNumber/String  'KTableKTableJoinNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN174550 the MagicNumber/String  'joinThisStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN174550 the MagicNumber/String  ', joinOtherStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN174550 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method withJoinThisProcessorParameters arguments ProcessorParameters&lt;K ,Change&lt;V1 &gt; ,? ,? &gt;  joinThisProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method withJoinOtherProcessorParameters arguments ProcessorParameters&lt;K ,Change&lt;V2 &gt; ,? ,? &gt;  joinOtherProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method withThisJoinSideNodeName arguments String  thisJoinSide"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method withOtherJoinSideNodeName arguments String  otherJoinSide"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method withKeySerde arguments Serde&lt;K &gt;  keySerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method withValueSerde arguments Serde&lt;VR &gt;  valueSerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method withJoinThisStoreNames arguments String[]  joinThisStoreNames"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method withJoinOtherStoreNames arguments String[]  joinOtherStoreNames"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method withQueryableStoreName arguments String  queryableStoreName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method withStoreBuilder arguments StoreBuilder&lt;TimestampedKeyValueStore&lt;K ,VR &gt; &gt;  storeBuilder"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
