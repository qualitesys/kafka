console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java 26 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BaseJoinProcessorNode<K,V1,V2,VR>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#26"
 , "c1" : "StreamStreamJoinNode"
 , "c2" : "StreamStreamJoinNode(String;ValueJoinerWithKey<?superK,?superV1,?superV2,?extendsVR>;ProcessorParameters<K,V1,?,?>;ProcessorParameters<K,V2,?,?>;ProcessorParameters<K,VR,?,?>;ProcessorParameters<K,V1,?,?>;ProcessorParameters<K,V2,?,?>;StoreBuilder<WindowStore<K,V1>>;StoreBuilder<WindowStore<K,V2>>;Optional<StoreBuilder<KeyValueStore<TimestampedKeyAndJoinSide<K>,LeftOrRightValue<V1,V2>>>>;Joined<K,V1,V2>;boolean)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#58"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#71"
 , "c1" : "void"
 , "c2" : "writeToTopology(InternalTopologyBuilder)"
 , "c3" : "2"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
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
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNode@POLYN175323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNode@POLYN175323 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  'StreamStreamJoinNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  'thisWindowedStreamProcessorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  ', otherWindowedStreamProcessorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  ', thisWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  ', otherWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  ', outerJoinWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  ', joined=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN177048 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00093] The class StreamStreamJoinNodeBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method withValueJoiner arguments ValueJoinerWithKey&lt;? super K ,? super V1 ,? super V2 ,?  extends VR &gt;  valueJoiner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method withJoinThisProcessorParameters arguments ProcessorParameters&lt;K ,V1 ,? ,? &gt;  joinThisProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method withJoinOtherProcessorParameters arguments ProcessorParameters&lt;K ,V2 ,? ,? &gt;  joinOtherProcessParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method withJoinMergeProcessorParameters arguments ProcessorParameters&lt;K ,VR ,? ,? &gt;  joinMergeProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method withThisWindowedStreamProcessorParameters arguments ProcessorParameters&lt;K ,V1 ,? ,? &gt;  thisWindowedStreamProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method withOtherWindowedStreamProcessorParameters arguments ProcessorParameters&lt;K ,V2 ,? ,? &gt;  otherWindowedStreamProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method withThisWindowStoreBuilder arguments StoreBuilder&lt;WindowStore&lt;K ,V1 &gt; &gt;  thisWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method withOtherWindowStoreBuilder arguments StoreBuilder&lt;WindowStore&lt;K ,V2 &gt; &gt;  otherWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method withOuterJoinWindowStoreBuilder arguments Optional&lt;StoreBuilder&lt;KeyValueStore&lt;TimestampedKeyAndJoinSide&lt;K &gt; ,LeftOrRightValue&lt;V1 ,V2 &gt; &gt; &gt; &gt;  outerJoinWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method withJoined arguments Joined&lt;K ,V1 ,V2 &gt;  joined"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNodeBuilder.withSpuriousResultFixEnabled@POLYN183868 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00167] Public method withSpuriousResultFixEnabled is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
