console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java 21 rule violations " 
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
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#40"
 , "c1" : "KTableKTableJoinNode"
 , "c2" : "KTableKTableJoinNode(String;ProcessorParameters<K,Change<V1>,?,?>;ProcessorParameters<K,Change<V2>,?,?>;ProcessorParameters<K,Change<VR>,?,?>;String;String;Serde<K>;Serde<VR>;String[];String[];StoreBuilder<TimestampedKeyValueStore<K,VR>>)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#67"
 , "c1" : "Serde<K>"
 , "c2" : "keySerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#71"
 , "c1" : "Serde<VR>"
 , "c2" : "valueSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#75"
 , "c1" : "String[]"
 , "c2" : "joinThisStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#79"
 , "c1" : "String[]"
 , "c2" : "joinOtherStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#83"
 , "c1" : "String"
 , "c2" : "queryableStoreName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#91"
 , "c1" : "KTableKTableJoinMerger<K,VR>"
 , "c2" : "joinMerger()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#99"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00129"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#129"
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.KTableKTableJoinNode@POLYN171700 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00091] For method joinMerger list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters mergeProcessorParametersN173730"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00099] For method writeToTopology list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters thisProcessorParametersN173991|org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters otherProcessorParametersN174083|org.apache.kafka.streams.kstream.internals.graph.ProcessorParameters mergeProcessorParametersN174175"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.writeToTopology@POLYN173890 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN175096 the MagicNumber/String  'KTableKTableJoinNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN175096 the MagicNumber/String  'joinThisStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN175096 the MagicNumber/String  ', joinOtherStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.kstream.internals.graph.KTableKTableJoinNode.toString@POLYN175096 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method withJoinThisProcessorParameters arguments ProcessorParameters&lt;K ,Change&lt;V1 &gt; ,? ,? &gt;  joinThisProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method withJoinOtherProcessorParameters arguments ProcessorParameters&lt;K ,Change&lt;V2 &gt; ,? ,? &gt;  joinOtherProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method withThisJoinSideNodeName arguments String  thisJoinSide"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method withOtherJoinSideNodeName arguments String  otherJoinSide"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method withKeySerde arguments Serde&lt;K &gt;  keySerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method withValueSerde arguments Serde&lt;VR &gt;  valueSerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method withJoinThisStoreNames arguments String[]  joinThisStoreNames"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method withJoinOtherStoreNames arguments String[]  joinOtherStoreNames"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method withQueryableStoreName arguments String  queryableStoreName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.html#206"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00206] For method withStoreBuilder arguments StoreBuilder&lt;TimestampedKeyValueStore&lt;K ,VR &gt; &gt;  storeBuilder"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/KTableKTableJoinNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
