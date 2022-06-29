console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java 525 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "InternalTopologyBuilder"
 , "c2" : "InternalTopologyBuilder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InternalTopologyBuilder"
 , "c2" : "InternalTopologyBuilder(TopologyConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "InternalTopologyBuilder"
 , "c2" : "setApplicationId(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setStreamsConfig(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNamedTopology(NamedTopology)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyConfig"
 , "c2" : "topologyConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topologyName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NamedTopology"
 , "c2" : "namedTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "InternalTopologyBuilder"
 , "c2" : "rewriteTopology(StreamsConfig)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addSource(Topology.AutoOffsetReset;String;TimestampExtractor;Deserializer<?>;Deserializer<?>;String...)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addSource(Topology.AutoOffsetReset;String;TimestampExtractor;Deserializer<?>;Deserializer<?>;Pattern)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addStateStore(StoreBuilder<?>;String...)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addStateStore(StoreBuilder<?>;boolean;String...)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateTopicNotAlreadyRegistered(String)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectProcessorAndStateStores(String;String...)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getStoreForChangelogTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectSourceStoreAndTopic(String;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addInternalTopic(String;InternalTopicProperties)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "copartitionSources(Collection<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeUpdateCopartitionSourceGroups(String;String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateCopartition()"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateGlobalStoreArguments(String;String;String;ProcessorSupplier<?,?,Void,Void>;String;boolean)"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "connectProcessorAndStateStore(String;String)"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Set<SourceNodeFactory<?,?>>"
 , "c2" : "findSourcesForProcessorPredecessors(String[])"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,Set<String>>"
 , "c2" : "nodeGroups()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,Set<String>>"
 , "c2" : "makeNodeGroups()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "putNodeGroupName(String;int;Map<Integer,Set<String>>;Map<String,Set<String>>)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorTopology"
 , "c2" : "buildTopology()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorTopology"
 , "c2" : "buildSubtopology(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorTopology"
 , "c2" : "buildGlobalStateTopology()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "globalNodeGroups()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorTopology"
 , "c2" : "build(Set<String>)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildSinkNode(Map<String,ProcessorNode<?,?,?,?>>;Map<String,SinkNode<?,?>>;Set<String>;SinkNodeFactory<?,?>;SinkNode<?,?>)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildSourceNode(Map<String,SourceNode<?,?>>;Set<String>;SourceNodeFactory<?,?>;SourceNode<?,?>)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildProcessorNode(Map<String,ProcessorNode<?,?,?,?>>;Map<String,StateStore>;ProcessorNodeFactory<?,?,?,?>;ProcessorNode<Object,Object,Object,Object>)"
 , "c3" : "8"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,StateStore>"
 , "c2" : "globalStateStores()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "allStateStoreNames()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPersistentStores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Subtopology,TopicsInfo>"
 , "c2" : "subtopologyToTopicsInfo()"
 , "c3" : "16"
 , "c4" : "21"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<String>>"
 , "c2" : "nodeToSourceTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RepartitionTopicConfig"
 , "c2" : "buildRepartitionTopicConfig(String;Optional<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setRegexMatchedTopicsToSourceNodes()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setRegexMatchedTopicToStateStore()"
 , "c3" : "8"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasOffsetResetOverrides()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetResetStrategy"
 , "c2" : "offsetResetStrategy(String)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,List<String>>"
 , "c2" : "stateStoreNameToFullSourceTopicNames()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Collection<String>"
 , "c2" : "sourceTopicsForStore(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<Set<String>>"
 , "c2" : "copartitionGroups()"
 , "c3" : "7"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "maybeDecorateInternalSourceTopics(Collection<String>)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "decoratePseudoTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "decorateTopic(String)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeSubscription()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "buildSourceTopicsPatternString()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "usesPatternSubscription()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "fullSourceTopicNames()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "sourceTopicPatternString()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNoLocalTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasGlobalStores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isGlobalSource(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "TopologyDescription"
 , "c2" : "describe()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "describeGlobalStore(TopologyDescription;Set<String>;int)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "nodeGroupContainsGlobalSourceNode(Set<String>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateSize(AbstractNode;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "describeSubtopology(TopologyDescription;Integer;Set<String>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "nodeNames(Set<TopologyDescription.Node>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "subscriptionUpdates()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasSubscriptionUpdates()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addSubscribedTopicsFromAssignment(List<TopicPartition>;String)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addSubscribedTopicsFromMetadata(Set<String>;String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateSubscribedTopics(Set<String>;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "allSourcePatternStrings()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNamedTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,StateStoreFactory<?>>"
 , "c2" : "stateStores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.svg" }

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
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "83"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "276"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "61"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00052] The class InternalTopologyBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.InternalTopologyBuilder@POLYN489387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument topologyConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00145] The class StateStoreFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.StateStoreFactory.retentionPeriod@POLYN493835 the MagicNumber/String  'retentionPeriod is not supported when not a window store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00195] The class NodeFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00205] Public method build is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument predecessors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method addStateStore arguments String  stateStoreName"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#241"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00241] The argument predecessors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.FixedKeyProcessorNodeFactory.FixedKeyProcessorNodeFactory@POLYN497470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method addStateStore arguments String  stateStoreName"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.SourceNodeFactory@POLYN499026 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method getTopics arguments Collection&lt;String &gt;  subscribedTopics"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#287"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00287] The argument subscribedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.getTopics@POLYN499843 the MagicNumber/String  'Topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.getTopics@POLYN499843 the MagicNumber/String  ' is already matched for another regex pattern ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.getTopics@POLYN499843 the MagicNumber/String  ' and hence cannot be matched to this regex pattern ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.getTopics@POLYN499843 the MagicNumber/String  ' any more.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method isMatch arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.describe@POLYN501629 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SourceNodeFactory.describe@POLYN501629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#335"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00335] The argument predecessors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method setApplicationId arguments String  applicationId"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setApplicationId@POLYN504359 the MagicNumber/String  'applicationId can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#376"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00376] Lock statement on synchronized method setStreamsConfig"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#376"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00376] For method setStreamsConfig arguments StreamsConfig  applicationConfig"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN504629 the MagicNumber/String  'config can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#381"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00381] Lock statement on synchronized method setNamedTopology"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00381] For method setNamedTopology arguments NamedTopology  namedTopology"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#385"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00385] Lock statement on synchronized method topologyConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#397"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00397] Lock statement on synchronized method rewriteTopology"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method rewriteTopology arguments StreamsConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00397"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#397"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00397] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN505303 the MagicNumber/String  'config can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN505303 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#422"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00422] For method addSource arguments Topology.AutoOffsetReset  offsetReset|String  name|TimestampExtractor  timestampExtractor|Deserializer&lt;? &gt;  keyDeserializer|Deserializer&lt;? &gt;  valDeserializer|String  ...topics"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  'You must provide at least one topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  'name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  'topic names cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN506351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00449] For method addSource arguments Topology.AutoOffsetReset  offsetReset|String  name|TimestampExtractor  timestampExtractor|Deserializer&lt;? &gt;  keyDeserializer|Deserializer&lt;? &gt;  valDeserializer|Pattern  topicPattern"
}} 
,
{ "ligne" : {
   "c1" : "00454"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#454"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00454] The argument topicPattern is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  'topicPattern can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  'name can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  'Pattern ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  ' will match a topic that has already been registered by another source.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSource@POLYN508015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'topic must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor names must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Sink ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' must have at least one parent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'topic extractor must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor names must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Sink ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00507"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00507] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' must have at least one parent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor name can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00513"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' cannot be a predecessor of itself.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Predecessor processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is not added yet.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Sink ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' cannot be used a parent.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'supplier must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor names must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00540"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#540"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00540] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' must have at least one parent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' cannot be a predecessor of itself.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Predecessor processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is not added yet for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00556"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00562"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00562] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'supplier must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00564"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor names must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00569] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' must have at least one parent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00574"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'predecessor name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00576"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00576] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' cannot be a predecessor of itself.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Predecessor processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00579"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  ' is not added yet for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#589"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00589] For method addStateStore arguments StoreBuilder&lt;? &gt;  storeBuilder|String  ...processorNames"
}} 
,
{ "ligne" : {
   "c1" : "00591"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00591] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517200 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#594"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00594] For method addStateStore arguments StoreBuilder&lt;? &gt;  storeBuilder|boolean  allowOverride|String  ...processorNames"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#594"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00594] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00597"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00597] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  'storeBuilder can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00599"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#599"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00599] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  'A different StateStore has already been added with the name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00603"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#603"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00603] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  'A different GlobalStateStore has already been added with the name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00608] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  'processor name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00614] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addStateStore@POLYN517426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00617"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#617"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00617] The argument storeBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'store builder must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00661"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00661] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00664"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00664] For method validateTopicNotAlreadyRegistered arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateTopicNotAlreadyRegistered@POLYN521286 the MagicNumber/String  'Topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateTopicNotAlreadyRegistered@POLYN521286 the MagicNumber/String  ' has already been registered by another source.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateTopicNotAlreadyRegistered@POLYN521286 the MagicNumber/String  'Topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateTopicNotAlreadyRegistered@POLYN521286 the MagicNumber/String  ' matches a Pattern already registered by another source.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00676"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#676"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00676] For method connectProcessorAndStateStores arguments String  processorName|String  ...stateStoreNames"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  'processorName can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00679"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00679] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  'state store list must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00681"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00681] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  'Must provide at least one state store name.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00684"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  'state store name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00687"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00687] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStores@POLYN521958 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#690"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00690] For method getStoreForChangelogTopic arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#694"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00694] For method connectSourceStoreAndTopic arguments String  sourceStoreName|String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectSourceStoreAndTopic@POLYN522868 the MagicNumber/String  'Source store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectSourceStoreAndTopic@POLYN522868 the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#703"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00703] For method addInternalTopic arguments String  topicName|InternalTopicProperties  internalTopicProperties"
}} 
,
{ "ligne" : {
   "c1" : "00705"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#705"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00705] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addInternalTopic@POLYN523363 the MagicNumber/String  'topicName can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00706"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#706"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00706] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addInternalTopic@POLYN523363 the MagicNumber/String  'internalTopicProperties can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00711"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00711] For method copartitionSources arguments Collection&lt;String &gt;  sourceNodes"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#715"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00715] For method maybeUpdateCopartitionSourceGroups arguments String  replacedNodeName|String  optimizedNodeName"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00738] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00740"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00740] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00746] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00747] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00748] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00750] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00750] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00741"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateCopartition@POLYN524384 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00750"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00750] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateCopartition@POLYN524384 the MagicNumber/String  'Following topics do not have the same number of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00751"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#751"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00751] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateCopartition@POLYN524384 the MagicNumber/String  'partitions: [%s]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#760"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00760] For method validateGlobalStoreArguments arguments String  sourceName|String  topic|String  processorName|ProcessorSupplier&lt;? ,? ,Void ,Void &gt;  stateUpdateSupplier|String  storeName|boolean  loggingEnabled"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#760"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00760] The argument sourceName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00766"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#766"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00766] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'sourceName must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00767"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#767"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00767] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'topic must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00768"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00768] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'supplier must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00769"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00769] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'processorName must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00771"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00771] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00771"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00771] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00774"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#774"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00774] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00774"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#774"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00774] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  ' is already added.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'A different StateStore has already been added with the name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00780"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00780] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'A different GlobalStateStore has already been added with the name ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00783"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#783"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00783] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'StateStore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00783"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#783"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00783] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  ' for global table must not have logging enabled.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.validateGlobalStoreArguments@POLYN526410 the MagicNumber/String  'sourceName and processorName must be different.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#790"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00790] For method connectProcessorAndStateStore arguments String  processorName|String  stateStoreName"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  'Global StateStore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  ' can be used by a Processor without being specified; it should not be explicitly passed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#797"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00797] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  'StateStore ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#797"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00797] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  ' is not added yet.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  'Processor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  ' is not added yet.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00817] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  'cannot connect a state store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00817] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.connectProcessorAndStateStore@POLYN528180 the MagicNumber/String  ' to a source node or a sink node.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00821"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#821"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00821] For method findSourcesForProcessorPredecessors arguments String[]  predecessors"
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00824] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00825"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#825"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00825] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00826"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00826] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00827] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00828"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#828"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00828] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00835"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#835"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00835] The argument processorNodeFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00851"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#851"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00851] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00874"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#874"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00874] The argument earliestResets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00875"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#875"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00875] The argument latestResets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00878"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00878] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00887] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder the MagicNumber/String  'Unrecognized reset format %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#892"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00892] Lock statement on synchronized method nodeGroups"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeGroups@POLYN533477 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.makeNodeGroups@POLYN533763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00914"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#914"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00914] For method putNodeGroupName arguments String  nodeName|int  nodeGroupId|Map&lt;Integer ,Set&lt;String &gt; &gt;  nodeGroups|Map&lt;String ,Set&lt;String &gt; &gt;  rootToNodeGroup"
}} 
,
{ "ligne" : {
   "c1" : "00916"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#916"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00916] The argument nodeGroups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00917"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#917"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00917] The argument rootToNodeGroup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00921] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.putNodeGroupName@POLYN534451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#931"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00931] Lock statement on synchronized method buildTopology"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#943"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00943] Lock statement on synchronized method buildSubtopology"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#943"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00943] For method buildSubtopology arguments int  topicGroupId"
}} 
,
{ "ligne" : {
   "c1" : "00949"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#949"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00949] Lock statement on synchronized method buildGlobalStateTopology"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildGlobalStateTopology@POLYN536494 the MagicNumber/String  'topology has not completed optimization' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildGlobalStateTopology@POLYN536494 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00962"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00962] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00963"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#963"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00963] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00973"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#973"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00973] For method build arguments Set&lt;String &gt;  nodeGroup"
}} 
,
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00986] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00989] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00992"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#992"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00992] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00993"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00993] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00995"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#995"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00995] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00998] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00999"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#999"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00999] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1001"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01005"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1005"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01005] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01006"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1006"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01006] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#974"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00974] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.build@POLYN537681 the MagicNumber/String  'topology has not completed optimization' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.build@POLYN537681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.build@POLYN537681 the MagicNumber/String  'Unknown definition class: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1022"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01022] For method buildSinkNode arguments Map&lt;String ,ProcessorNode&lt;? ,? ,? ,? &gt; &gt;  processorMap|Map&lt;String ,SinkNode&lt;? ,? &gt; &gt;  topicSinkMap|Set&lt;String &gt;  repartitionTopics|SinkNodeFactory&lt;? ,? &gt;  sinkNodeFactory|SinkNode&lt;? ,? &gt;  node"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1023"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01023] The argument topicSinkMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1024"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01024] The argument repartitionTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1025"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01025] The argument sinkNodeFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01031] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01034] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01034] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01038] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1027"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01027] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSinkNode@POLYN540600 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1051"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01051] The argument processorMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1057"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01057] For method buildSourceNode arguments Map&lt;String ,SourceNode&lt;? ,? &gt; &gt;  topicSourceMap|Set&lt;String &gt;  repartitionTopics|SourceNodeFactory&lt;? ,? &gt;  sourceNodeFactory|SourceNode&lt;? ,? &gt;  node"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1057"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01057] The argument topicSourceMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1058"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01058] The argument repartitionTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1059"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01059] The argument sourceNodeFactory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1069"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01069] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01062] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSourceNode@POLYN542764 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1078"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01078] For method buildProcessorNode arguments Map&lt;String ,ProcessorNode&lt;? ,? ,? ,? &gt; &gt;  processorMap|Map&lt;String ,StateStore &gt;  stateStoreMap|ProcessorNodeFactory&lt;? ,? ,? ,? &gt;  factory|ProcessorNode&lt;Object ,Object ,Object ,Object &gt;  node"
}} 
,
{ "ligne" : {
   "c1" : "01079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1079"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01079] The argument stateStoreMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1080"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01080] The argument factory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1084"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1089"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1098"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01095] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildProcessorNode@POLYN543823 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01111] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildProcessorNode@POLYN543823 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01119] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.globalStateStores@POLYN546320 the MagicNumber/String  'topology has not completed optimization' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01125] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.allStateStoreNames@POLYN546561 the MagicNumber/String  'topology has not completed optimization' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01132] For method hasStore arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "01141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1141"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01141] Lock statement on synchronized method subtopologyToTopicsInfo"
}} 
,
{ "ligne" : {
   "c1" : "01149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01152] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01158] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01181] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01195] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01144] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.subtopologyToTopicsInfo@POLYN547491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01156] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.subtopologyToTopicsInfo@POLYN547491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01182] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.subtopologyToTopicsInfo@POLYN547491 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01220] For method buildRepartitionTopicConfig arguments String  internalTopic|Optional&lt;Integer &gt;  numberOfPartitions"
}} 
,
{ "ligne" : {
   "c1" : "01221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1221"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01221] The argument numberOfPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01226] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildRepartitionTopicConfig@POLYN551538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01233] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01233"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01233] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01234"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01239] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setRegexMatchedTopicsToSourceNodes@POLYN552000 the MagicNumber/String  'Updated nodeToSourceTopics: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01246] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01247] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01255"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01256] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setRegexMatchedTopicToStateStore@POLYN552752 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01267"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1267"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01267] The argument factory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01283"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1283"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01283] For method offsetResetStrategy arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "01294"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01294] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.offsetResetStrategy@POLYN554922 the MagicNumber/String  'Unable to lookup offset reset strategy for the following topic as it does not exist in the topology%s: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01295"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01295] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.offsetResetStrategy@POLYN554922 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01311] For method sourceTopicsForStore arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "01315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1315"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01315] Lock statement on synchronized method copartitionGroups"
}} 
,
{ "ligne" : {
   "c1" : "01331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01331] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01332"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01342"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01342] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01330] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.copartitionGroups@POLYN557114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.copartitionGroups@POLYN557114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01334"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01334] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.copartitionGroups@POLYN557114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01338] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.copartitionGroups@POLYN557114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01351"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1351"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01351] For method maybeDecorateInternalSourceTopics arguments Collection&lt;String &gt;  sourceTopics"
}} 
,
{ "ligne" : {
   "c1" : "01352"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01352] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.maybeDecorateInternalSourceTopics@POLYN559057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01366] For method decoratePseudoTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "01370"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01370] For method decorateTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "01371"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01371] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01372"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01372] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  'there are internal topics and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01373"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01373] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  'applicationId hasn't been set. Call ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01374"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01374] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  'setApplicationId first' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01376"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01381] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01381"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01381] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01383"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01383] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.decorateTopic@POLYN559933 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01390"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01390] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.initializeSubscription@POLYN560699 the MagicNumber/String  'Found pattern subscribed source topics, initializing consumer's subscription pattern.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01393"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01393] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.initializeSubscription@POLYN560699 the MagicNumber/String  'No source topics using pattern subscription found, initializing consumer's subscription collection.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01406"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01406] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSourceTopicsPatternString@POLYN561199 the MagicNumber/String  '|' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01410"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01410] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSourceTopicsPatternString@POLYN561199 the MagicNumber/String  '|' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01413"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01413] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSourceTopicsPatternString@POLYN561199 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01414"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01414] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.buildSourceTopicsPatternString@POLYN561199 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1425"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01425] Lock statement on synchronized method fullSourceTopicNames"
}} 
,
{ "ligne" : {
   "c1" : "01426"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01426] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.fullSourceTopicNames@POLYN562415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01433"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1433"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01433] Lock statement on synchronized method sourceTopicPatternString"
}} 
,
{ "ligne" : {
   "c1" : "01436"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01436] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.sourceTopicPatternString@POLYN562733 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01442"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1442"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01442] For method containsTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "01456"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01456] For method isGlobalSource arguments String  nodeName"
}} 
,
{ "ligne" : {
   "c1" : "01461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01461] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.isGlobalSource@POLYN563635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01461] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.isGlobalSource@POLYN563635 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01461] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.isGlobalSource@POLYN563635 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01463"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01463] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.isGlobalSource@POLYN563635 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01471"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01471] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1484"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01484] For method describeGlobalStore arguments TopologyDescription  description|Set&lt;String &gt;  nodes|int  id"
}} 
,
{ "ligne" : {
   "c1" : "01484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1484"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01484] The argument description is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01485"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1485"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01485] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01489] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01494"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01494] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01499"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01499] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01500"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01500] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.describeGlobalStore@POLYN565224 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01508"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01508] For method nodeGroupContainsGlobalSourceNode arguments Set&lt;String &gt;  allNodesOfGroups"
}} 
,
{ "ligne" : {
   "c1" : "01511"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01511] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeGroupContainsGlobalSourceNode@POLYN566331 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01514"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01514] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeGroupContainsGlobalSourceNode@POLYN566331 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01517"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01517] The class NodeComparator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01520"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1520"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01520] For method compare arguments TopologyDescription.Node  node1|TopologyDescription.Node  node2"
}} 
,
{ "ligne" : {
   "c1" : "01520"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1520"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01520] The argument node1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01521"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1521"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01521] The argument node2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01523"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01523] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.NodeComparator.compare@POLYN566769 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01540"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1540"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01540] For method updateSize arguments AbstractNode  node|int  delta"
}} 
,
{ "ligne" : {
   "c1" : "01540"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1540"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01540] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01545"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1545"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01545] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1549"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01549] For method describeSubtopology arguments TopologyDescription  description|Integer  subtopologyId|Set&lt;String &gt;  nodeNames"
}} 
,
{ "ligne" : {
   "c1" : "01549"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1549"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01549] The argument description is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01562"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01562] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01563] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01563"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01563] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01575"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01575] The class GlobalStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01585"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01585] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.GlobalStore@POLYN569447 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01609"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01609] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  'Sub-topology: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01609"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01609] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  ' for global store (will not generate tasks)\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01610"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01610] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  '    ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01610"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01610] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01611"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01611] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  '    ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01611"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01611] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.toString@POLYN570515 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01615"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1615"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01615] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01619"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01619] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01617"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01617] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.equals@POLYN570843 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01619"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01619] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.equals@POLYN570843 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01620"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1620"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01620] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStore.equals@POLYN570843 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01634"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01634] The class AbstractNode contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01643"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1643"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01643] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.AbstractNode.AbstractNode@POLYN572016 the MagicNumber/String  'name cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01645"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01645] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.AbstractNode.AbstractNode@POLYN572016 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01663"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1663"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01663] For method addPredecessor arguments TopologyDescription.Node  predecessor"
}} 
,
{ "ligne" : {
   "c1" : "01667"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1667"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01667] For method addSuccessor arguments TopologyDescription.Node  successor"
}} 
,
{ "ligne" : {
   "c1" : "01680"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01680] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01680"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01680] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01681"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01681] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  'Either topics or pattern must be not-null, but both are null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01683"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01683] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01683"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01683] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01684"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01684] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.Source@POLYN573220 the MagicNumber/String  'Either topics or pattern must be null, but both are not null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01702"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1702"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01702] For method addPredecessor arguments TopologyDescription.Node  predecessor"
}} 
,
{ "ligne" : {
   "c1" : "01703"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01703] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.addPredecessor@POLYN574177 the MagicNumber/String  'Sources don't have predecessors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01708"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1708"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01708] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.toString@POLYN574346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01710"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01710] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.toString@POLYN574346 the MagicNumber/String  'Source: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01710"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01710] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.toString@POLYN574346 the MagicNumber/String  ' (topics: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01710"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01710] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.toString@POLYN574346 the MagicNumber/String  ')\n      --&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01714"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1714"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01714] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01718"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01718] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01716"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1716"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01716] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.equals@POLYN574761 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01718"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01718] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.equals@POLYN574761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01719"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01719] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.equals@POLYN574761 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01726"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1726"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01726] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.equals@POLYN574761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01727"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1727"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01727] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Source.equals@POLYN574761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01754"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01754] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.toString@POLYN576353 the MagicNumber/String  'Processor: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01754"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01754] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.toString@POLYN576353 the MagicNumber/String  ' (stores: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01754"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01754] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.toString@POLYN576353 the MagicNumber/String  ')\n      --&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01755"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01755] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.toString@POLYN576353 the MagicNumber/String  '\n      &amp;lt;-- ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01759"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1759"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01759] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01763"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01763] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01761"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1761"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01761] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.equals@POLYN576677 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01763"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01763] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.equals@POLYN576677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01764"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01764] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Processor.equals@POLYN576677 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01800"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01800] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.topic@POLYN578224 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01807"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01807] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.topicNameExtractor@POLYN578573 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01814"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1814"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01814] For method addSuccessor arguments TopologyDescription.Node  successor"
}} 
,
{ "ligne" : {
   "c1" : "01815"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1815"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01815] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.addSuccessor@POLYN578787 the MagicNumber/String  'Sinks don't have successors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01821"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1821"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01821] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  'Sink: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01821"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1821"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01821] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  ' (topic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01821"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1821"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01821] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  ')\n      &amp;lt;-- ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01823"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  'Sink: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01823"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  ' (extractor class: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01823"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.toString@POLYN578956 the MagicNumber/String  ')\n      &amp;lt;-- ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01829"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1829"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01829] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01833] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01831"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01831] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.equals@POLYN579508 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01833"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01833] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.equals@POLYN579508 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01834"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1834"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01834] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.Sink.equals@POLYN579508 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01850"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01850] The class SubtopologyDescription contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01854"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1854"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01854] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01877] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.toString@POLYN581387 the MagicNumber/String  'Sub-topology: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01877] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.toString@POLYN581387 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01877"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01877] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.toString@POLYN581387 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01883"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01883] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.nodesAsString@POLYN581579 the MagicNumber/String  '    ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01885"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1885"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01885] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.nodesAsString@POLYN581579 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01891"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1891"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01891] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01895"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1895"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01895] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01893"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01893] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.equals@POLYN582083 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01895"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1895"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01895] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.equals@POLYN582083 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01896"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1896"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01896] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyDescription.equals@POLYN582083 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01910"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01910] The class TopicsInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1943"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01943] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01948"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01948] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.equals@POLYN584652 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01954"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01954] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.hashCode@POLYN585094 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01955"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1955"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01955] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.hashCode@POLYN585094 the MagicNumber/String  0xFFFFFFFFL should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01960"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1960"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01960] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  'TopicsInfo{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01961"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01961] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  'sinkTopics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01962"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01962] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  ', sourceTopics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01963"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1963"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01963] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  ', repartitionSourceTopics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01964"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01964] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  ', stateChangelogTopics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01965"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01965] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopicsInfo.toString@POLYN585465 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01969"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01969] The class GlobalStoreComparator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01971"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1971"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01971] For method compare arguments TopologyDescription.GlobalStore  globalStore1|TopologyDescription.GlobalStore  globalStore2"
}} 
,
{ "ligne" : {
   "c1" : "01971"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1971"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01971] The argument globalStore1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01972"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1972"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01972] The argument globalStore2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01974"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1974"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01974] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.GlobalStoreComparator.compare@POLYN585870 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01982"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01982] The class SubtopologyComparator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01984"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1984"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01984] For method compare arguments TopologyDescription.Subtopology  subtopology1|TopologyDescription.Subtopology  subtopology2"
}} 
,
{ "ligne" : {
   "c1" : "01984"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1984"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01984] The argument subtopology1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01985"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1985"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01985] The argument subtopology2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01987"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01987] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.SubtopologyComparator.compare@POLYN586417 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01995"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1995"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01995] The class TopologyDescription contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "02001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2001"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02001] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.TopologyDescription@POLYN587276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2008"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02008] For method addSubtopology arguments TopologyDescription.Subtopology  subtopology"
}} 
,
{ "ligne" : {
   "c1" : "02012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2012"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02012] For method addGlobalStore arguments TopologyDescription.GlobalStore  globalStore"
}} 
,
{ "ligne" : {
   "c1" : "02044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2045"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2062"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02062] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "02030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02030] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02031] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  'Topologies:\n ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02033] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  'Topology: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02033] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  ':\n ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2036"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02036] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02038] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02039] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02040] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02041] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02042] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02042] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2043"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02043] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02055] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2057"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02057] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2061"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02061] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02063] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.toString@POLYN588151 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2071"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02071] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2075"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[02075] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "02073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02073] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.equals@POLYN590751 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2075"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02075] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.equals@POLYN590751 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2076"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02076] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.TopologyDescription.equals@POLYN590751 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2091"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02091] For method nodeNames arguments Set&lt;TopologyDescription.Node &gt;  nodes"
}} 
,
{ "ligne" : {
   "c1" : "02091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2091"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02091] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02096] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeNames@POLYN591520 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2098"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02098] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeNames@POLYN591520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02099] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeNames@POLYN591520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02101] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.nodeNames@POLYN591520 the MagicNumber/String  'none' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2114"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02114] Lock statement on synchronized method addSubscribedTopicsFromAssignment"
}} 
,
{ "ligne" : {
   "c1" : "02114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02114] For method addSubscribedTopicsFromAssignment arguments List&lt;TopicPartition &gt;  partitions|String  logPrefix"
}} 
,
{ "ligne" : {
   "c1" : "02130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2130"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02130] Lock statement on synchronized method addSubscribedTopicsFromMetadata"
}} 
,
{ "ligne" : {
   "c1" : "02130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02130] For method addSubscribedTopicsFromMetadata arguments Set&lt;String &gt;  topics|String  logPrefix"
}} 
,
{ "ligne" : {
   "c1" : "02136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02136] For method updateSubscribedTopics arguments Set&lt;String &gt;  topics|String  logPrefix"
}} 
,
{ "ligne" : {
   "c1" : "02136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02136] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "02140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02140] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.updateSubscribedTopics@POLYN593784 the MagicNumber/String  '{}found {} topics possibly matching subscription' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2147"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02147] Lock statement on synchronized method allSourcePatternStrings"
}} 
,
{ "ligne" : {
   "c1" : "02152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02152] In method org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.hasNamedTopology@POLYN594579 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "02155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2155"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02155] Lock statement on synchronized method stateStores"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00369] Public method setApplicationId is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00690] Public method getStoreForChangelogTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#892"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00892] Public method nodeGroups is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00931"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#931"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00931] Public method buildTopology is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00943"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#943"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00943] Public method buildSubtopology is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00949"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#949"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00949] Public method buildGlobalStateTopology is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01118] Public method globalStateStores is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01124] Public method allStateStoreNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01132] Public method hasStore is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01136] Public method hasPersistentStores is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01216] Public method nodeToSourceTopics is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01278"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01278] Public method hasOffsetResetOverrides is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01302] Public method stateStoreNameToFullSourceTopicNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01311"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01311] Public method sourceTopicsForStore is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01315"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01315] Public method copartitionGroups is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01366"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01366] Public method decoratePseudoTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01425] Public method fullSourceTopicNames is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01442"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01442] Public method containsTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01448"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01448] Public method hasNoLocalTopology is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "01452"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#1452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01452] Public method hasGlobalStores is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "02147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[02147] Public method allSourcePatternStrings is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "02155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#2155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[02155] Public method stateStores is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00422] Public method addSource is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00449] Public method addSource is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00589"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#589"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00589] Public method addStateStore is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#594"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00594] Public method addStateStore is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00676"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#676"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00676] Public method connectProcessorAndStateStores is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#694"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00694] Public method connectSourceStoreAndTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00703] Public method addInternalTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00711"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00711] Public method copartitionSources is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#715"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00715] Public method maybeUpdateCopartitionSourceGroups is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00725"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/InternalTopologyBuilder.java.html#725"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00725] Public method validateCopartition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
