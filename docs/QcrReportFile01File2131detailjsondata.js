console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java 69 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.StoreQueryUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.StoreQueryUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#98"
 , "c1" : "StoreQueryUtils"
 , "c2" : "StoreQueryUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#139"
 , "c1" : "void"
 , "c2" : "updatePosition(Position;StateStoreContext)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#151"
 , "c1" : "boolean"
 , "c2" : "isPermitted(Position;PositionBound;int)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00349"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#349"
 , "c1" : "void"
 , "c2" : "checkpointPosition(OffsetCheckpoint;Position)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00358"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#358"
 , "c1" : "Position"
 , "c2" : "readPositionFromCheckpoint(OffsetCheckpoint)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#366"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "positionToTopicPartitionMap(Position)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00379"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#379"
 , "c1" : "Position"
 , "c2" : "topicPartitionMapToPosition(Map&lt;TopicPartition,Long&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "40"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument query is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  'Handled in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  'ns' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method updatePosition arguments Position  position|StateStoreContext  stateStoreContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00139] For method updatePosition list of called methods Object monObjet|java.util.Optional stateStoreContext_recordMetadataN211661"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.updatePosition@POLYN211397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.updatePosition@POLYN211397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method isPermitted arguments Position  position|PositionBound  positionBound|int  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00151] For method isPermitted list of called methods Object monObjet|org.apache.kafka.streams.query.Position positionBound_positionN212174|java.util.Map bound_getPartitionPositionsN212388|java.util.Map position_getPartitionPositionsN212524"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument positionBound is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.isPermitted@POLYN212013 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.isPermitted@POLYN212013 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.isPermitted@POLYN212013 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#235"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00235] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  'This store (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') doesn't know how to' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' execute the given query (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') because it only supports' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' closed-range queries.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' Contact the store maintainer if you need support' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' for a new query type.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#271"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00271] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  'This store (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') doesn't know how to' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' execute the given query (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') because' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' WindowStores only supports WindowRangeQuery.withWindowStartRange.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' Contact the store maintainer if you need support' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' for a new query type.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  'This store (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') doesn't know how to' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' execute the given query (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ') because' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' SessionStores only support WindowRangeQuery.withKey.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' Contact the store maintainer if you need support' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' for a new query type.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#334"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00334] The argument serdes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#349"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00349] For method checkpointPosition arguments OffsetCheckpoint  checkpointFile|Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#349"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00349] The argument checkpointFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.checkpointPosition@POLYN222806 the MagicNumber/String  'Error writing checkpoint file' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method readPositionFromCheckpoint arguments OffsetCheckpoint  checkpointFile"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#358"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00358] The argument checkpointFile is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.streams.state.internals.StoreQueryUtils.readPositionFromCheckpoint@POLYN223181 the MagicNumber/String  'Error reading checkpoint file' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method positionToTopicPartitionMap arguments Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00366] For method positionToTopicPartitionMap list of called methods Object monObjet|java.util.Set position_getTopicsN223803"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#366"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00366] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00370] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00371] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00372] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00372] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#379"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00379] For method topicPartitionMapToPosition arguments Map&lt;TopicPartition ,Long &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#379"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00379] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#389"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00389] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ' failed to handle query ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.streams.state.internals.StoreQueryUtils the MagicNumber/String  ':' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/StoreQueryUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
