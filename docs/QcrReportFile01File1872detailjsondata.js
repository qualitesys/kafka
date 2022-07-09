console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java 109 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StreamsMetadataState"
 , "c2" : "StreamsMetadataState(TopologyMetadata;HostInfo;LogContext)"
 , "c3" : "1"
 , "c4" : "4"
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
   "c1" : "String"
 , "c2" : "toString(String)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "StreamsMetadata"
 , "c2" : "getLocalMetadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<StreamsMetadata>"
 , "c2" : "getAllMetadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<StreamsMetadata>"
 , "c2" : "getAllMetadataForStore(String)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Collection<StreamsMetadata>"
 , "c2" : "getAllMetadataForStore(String;String)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Collection<StreamsMetadata>"
 , "c2" : "getAllMetadataForTopology(String)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onChange(Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>;Cluster)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPartitionsForAnyTopics(List<String>;Set<TopicPartition>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "getStoresOnHost(Map<String,List<String>>;Set<TopicPartition>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "rebuildMetadata(Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "List<StreamsMetadata>"
 , "c2" : "rebuildMetadataForNamedTopologies(Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "List<StreamsMetadata>"
 , "c2" : "rebuildMetadataForSingleTopology(Map<HostInfo,Set<TopicPartition>>;Map<HostInfo,Set<TopicPartition>>)"
 , "c3" : "4"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "SourceTopicsInfo"
 , "c2" : "getSourceTopicsInfo(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SourceTopicsInfo"
 , "c2" : "getSourceTopicsInfo(String;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isInitialized()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getStoreForChangelogTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "52"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class StreamsMetadataState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument topologyMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242168 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  'GlobalMetadata: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  'GlobalStores: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  'My HostInfo: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.toString@POLYN242287 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#77"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00077] Lock statement on synchronized method getAllMetadataForStore"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method getAllMetadataForStore arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN243955 the MagicNumber/String  'storeName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN243955 the MagicNumber/String  'Cannot invoke the getAllMetadataForStore(storeName) method when' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN243955 the MagicNumber/String  'using named topologies, please use the overload that accepts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN243955 the MagicNumber/String  'a topologyName parameter to identify the correct store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN243955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#108"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00108] Lock statement on synchronized method getAllMetadataForStore"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method getAllMetadataForStore arguments String  storeName|String  topologyName"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00123] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN245549 the MagicNumber/String  'storeName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN245549 the MagicNumber/String  'topologyName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForStore@POLYN245549 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#132"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00132] Lock statement on synchronized method getAllMetadataForTopology"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method getAllMetadataForTopology arguments String  topologyName"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForTopology@POLYN246978 the MagicNumber/String  'topologyName cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getAllMetadataForTopology@POLYN246978 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized method "
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'keySerializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'Cannot invoke the getKeyQueryMetadataForKey(storeName, key, keySerializer)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'method when using named topologies, please use the overload that' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'accepts a topologyName parameter to identify the correct store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#165"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00165] Lock statement on synchronized method "
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'keySerializer can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#177"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00177] Lock statement on synchronized method "
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'storeName can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'partitioner can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'Cannot invoke the getKeyQueryMetadataForKey(storeName, key, partitioner)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'method when using named topologies, please use the overload that' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'accepts a topologyName parameter to identify the correct store' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#210"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00210] Lock statement on synchronized method "
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'storeName can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'key can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'partitioner can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'topologyName can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#232"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00232] Lock statement on synchronized method onChange"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method onChange arguments Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  activePartitionHostMap|Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  standbyPartitionHostMap|Cluster  clusterMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#239"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00239] For method hasPartitionsForAnyTopics arguments List&lt;String &gt;  topicNames|Set&lt;TopicPartition &gt;  partitionForHost"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#239"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00239] The argument topicNames is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.hasPartitionsForAnyTopics@POLYN253543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.hasPartitionsForAnyTopics@POLYN253543 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method getStoresOnHost arguments Map&lt;String ,List&lt;String &gt; &gt;  storeToSourceTopics|Set&lt;TopicPartition &gt;  sourceTopicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#248"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00248] The argument storeToSourceTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method rebuildMetadata arguments Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  activePartitionHostMap|Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  standbyPartitionHostMap"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#260"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00260] The argument activePartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument standbyPartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#279"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00279] For method rebuildMetadataForNamedTopologies arguments Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  activePartitionHostMap|Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  standbyPartitionHostMap"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument activePartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#280"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00280] The argument standbyPartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.rebuildMetadataForNamedTopologies@POLYN255698 the MagicNumber/String  'Host {} has no tasks for topology {} at the moment, this metadata will not be built' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#350"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00350] For method rebuildMetadataForSingleTopology arguments Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  activePartitionHostMap|Map&lt;HostInfo ,Set&lt;TopicPartition &gt; &gt;  standbyPartitionHostMap"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#350"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00350] The argument activePartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#351"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00351] The argument standbyPartitionHostMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#391"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00391] The argument partitioner is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#392"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00392] The argument sourceTopicsInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00403] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00404] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00405"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00405] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00406] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#424"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00424] The argument partitioner is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#425"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00425] The argument sourceTopicsInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00440] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00441] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00442] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00443] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  'topology name must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#460"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00460] For method getSourceTopicsInfo arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getSourceTopicsInfo@POLYN267000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#464"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00464] For method getSourceTopicsInfo arguments String  storeName|String  topologyName"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.getSourceTopicsInfo@POLYN267166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.isInitialized@POLYN267640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.isInitialized@POLYN267640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#477"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00477] For method getStoreForChangelogTopic arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00481"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00481] The class SourceTopicsInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00489] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.streams.processor.internals.StreamsMetadataState.SourceTopicsInfo.SourceTopicsInfo@POLYN268204 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00052] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00067] Public method getLocalMetadata is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method getAllMetadata is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsMetadataState.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00132] Public method getAllMetadataForTopology is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
