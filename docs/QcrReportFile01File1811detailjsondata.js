console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java 25 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BaseJoinProcessorNode<K,V1,V2,VR>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#43"
 , "c1" : "StreamStreamJoinNode"
 , "c2" : "StreamStreamJoinNode(String;ValueJoinerWithKey&lt;?superK,?superV1,?superV2,?extendsVR&gt;;ProcessorParameters&lt;K,V1,?,?&gt;;ProcessorParameters&lt;K,V2,?,?&gt;;ProcessorParameters&lt;K,VR,?,?&gt;;ProcessorParameters&lt;K,V1,?,?&gt;;ProcessorParameters&lt;K,V2,?,?&gt;;StoreBuilder&lt;WindowStore&lt;K,V1&gt;&gt;;StoreBuilder&lt;WindowStore&lt;K,V2&gt;&gt;;Optional&lt;StoreBuilder&lt;KeyValueStore&lt;TimestampedKeyAndJoinSide&lt;K&gt;,LeftOrRightValue&lt;V1,V2&gt;&gt;&gt;&gt;;Joined&lt;K,V1,V2&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#75"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#88"
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
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.svg" }

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
 , "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNode@POLYN187139 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNode@POLYN187139 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  'StreamStreamJoinNode{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  'thisWindowedStreamProcessorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  ', otherWindowedStreamProcessorParameters=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  ', thisWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  ', otherWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  ', outerJoinWindowStoreBuilder=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  ', joined=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.toString@POLYN188864 the MagicNumber/String  '} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method writeToTopology arguments InternalTopologyBuilder  topologyBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument topologyBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method withValueJoiner arguments ValueJoinerWithKey&lt;? super K ,? super V1 ,? super V2 ,?  extends VR &gt;  valueJoiner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method withJoinThisProcessorParameters arguments ProcessorParameters&lt;K ,V1 ,? ,? &gt;  joinThisProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method withNodeName arguments String  nodeName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method withJoinOtherProcessorParameters arguments ProcessorParameters&lt;K ,V2 ,? ,? &gt;  joinOtherProcessParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method withJoinMergeProcessorParameters arguments ProcessorParameters&lt;K ,VR ,? ,? &gt;  joinMergeProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method withThisWindowedStreamProcessorParameters arguments ProcessorParameters&lt;K ,V1 ,? ,? &gt;  thisWindowedStreamProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method withOtherWindowedStreamProcessorParameters arguments ProcessorParameters&lt;K ,V2 ,? ,? &gt;  otherWindowedStreamProcessorParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method withThisWindowStoreBuilder arguments StoreBuilder&lt;WindowStore&lt;K ,V1 &gt; &gt;  thisWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#169"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00169] For method withOtherWindowStoreBuilder arguments StoreBuilder&lt;WindowStore&lt;K ,V2 &gt; &gt;  otherWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method withOuterJoinWindowStoreBuilder arguments Optional&lt;StoreBuilder&lt;KeyValueStore&lt;TimestampedKeyAndJoinSide&lt;K &gt; ,LeftOrRightValue&lt;V1 ,V2 &gt; &gt; &gt; &gt;  outerJoinWindowStoreBuilder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method withJoined arguments Joined&lt;K ,V1 ,V2 &gt;  joined"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.kstream.internals.graph.StreamStreamJoinNode.StreamStreamJoinNodeBuilder.withSpuriousResultFixEnabled@POLYN195692 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00184] Public method withSpuriousResultFixEnabled is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/graph/StreamStreamJoinNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
