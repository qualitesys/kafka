console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java 410 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Closeable"
 , "c2" : "org.apache.kafka.clients.consumer.internals.Fetcher"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.Fetcher" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#130"
 , "c1" : "Fetcher"
 , "c2" : "Fetcher(LogContext;ConsumerNetworkClient;int;int;int;int;int;boolean;String;Deserializer<K>;Deserializer<V>;ConsumerMetadata;SubscriptionState;Metrics;FetcherMetricsRegistry;Time;long;long;IsolationLevel;ApiVersions)"
 , "c3" : "1"
 , "c4" : "24"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#190"
 , "c1" : "boolean"
 , "c2" : "hasCompletedFetches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#195"
 , "c1" : "boolean"
 , "c2" : "hasAvailableFetches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00200"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#200"
 , "c1" : "int"
 , "c2" : "sendFetches()"
 , "c3" : "14"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00314"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#314"
 , "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "getAllTopicMetadata(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00319"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#319"
 , "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "getTopicMetadata(MetadataRequest.Builder;Timer)"
 , "c3" : "17"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00380"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#380"
 , "c1" : "RequestFuture<ClientResponse>"
 , "c2" : "sendMetadataRequest(MetadataRequest.Builder)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00388"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#388"
 , "c1" : "Long"
 , "c2" : "offsetResetStrategyTimestamp(TopicPartition)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00398"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#398"
 , "c1" : "OffsetResetStrategy"
 , "c2" : "timestampToOffsetResetStrategy(long)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00408"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#408"
 , "c1" : "void"
 , "c2" : "resetOffsetsIfNeeded()"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00429"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#429"
 , "c1" : "void"
 , "c2" : "validateOffsetsIfNeeded()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00448"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#448"
 , "c1" : "Map<TopicPartition,OffsetAndTimestamp>"
 , "c2" : "offsetsForTimes(Map<TopicPartition,Long>;Timer)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00474"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#474"
 , "c1" : "ListOffsetResult"
 , "c2" : "fetchOffsetsByTimes(Map<TopicPartition,Long>;Timer;boolean)"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00541"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#541"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOffsets(Collection<TopicPartition>;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00545"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#545"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "endOffsets(Collection<TopicPartition>;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00549"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#549"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOrEndOffset(Collection<TopicPartition>;long;Timer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00568"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#568"
 , "c1" : "Fetch<K,V>"
 , "c2" : "collectFetch()"
 , "c3" : "11"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00622"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#622"
 , "c1" : "Fetch<K,V>"
 , "c2" : "fetchRecords(CompletedFetch;int)"
 , "c3" : "11"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00682"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#682"
 , "c1" : "void"
 , "c2" : "resetOffsetIfNeeded(TopicPartition;OffsetResetStrategy;ListOffsetData)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00691"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#691"
 , "c1" : "void"
 , "c2" : "resetOffsetsAsync(Map<TopicPartition,Long>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00728"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c1" : "boolean"
 , "c2" : "hasUsableOffsetForLeaderEpochVersion(NodeApiVersions)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00737"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#737"
 , "c1" : "void"
 , "c2" : "validateOffsetsAsync(Map<TopicPartition,FetchPosition>)"
 , "c3" : "8"
 , "c4" : "25"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00809"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#809"
 , "c1" : "LogTruncationException"
 , "c2" : "buildLogTruncationException(List<SubscriptionState.LogTruncation>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00821"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#821"
 , "c1" : "void"
 , "c2" : "maybeSetOffsetForLeaderException(RuntimeException)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00828"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#828"
 , "c1" : "RequestFuture<ListOffsetResult>"
 , "c2" : "sendListOffsetsRequests(Map<TopicPartition,Long>;boolean)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00869"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#869"
 , "c1" : "Map<Node,Map<TopicPartition,ListOffsetsPartition>>"
 , "c2" : "groupListOffsetRequests(Map<TopicPartition,Long>;Set<TopicPartition>)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00906"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#906"
 , "c1" : "RequestFuture<ListOffsetResult>"
 , "c2" : "sendListOffsetRequest(Node;Map<TopicPartition,ListOffsetsPartition>;boolean)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00926"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#926"
 , "c1" : "void"
 , "c2" : "handleListOffsetResponse(ListOffsetsResponse;RequestFuture<ListOffsetResult>)"
 , "c3" : "22"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01022"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1022"
 , "c1" : "List<TopicPartition>"
 , "c2" : "fetchablePartitions()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1034"
 , "c1" : "Node"
 , "c2" : "selectReadReplica(TopicPartition;Node;long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1052"
 , "c1" : "void"
 , "c2" : "validatePositionsOnMetadataChange()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1063"
 , "c1" : "Map<Node,FetchSessionHandler.FetchRequestData>"
 , "c2" : "prepareFetchRequests()"
 , "c3" : "11"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01124"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1124"
 , "c1" : "Map<Node,Map<TopicPartition,FetchPosition>>"
 , "c2" : "regroupFetchPositionsByLeader(Map<TopicPartition,FetchPosition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01141"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1141"
 , "c1" : "CompletedFetch"
 , "c2" : "initializeCompletedFetch(CompletedFetch)"
 , "c3" : "37"
 , "c4" : "48"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01275"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1275"
 , "c1" : "void"
 , "c2" : "handleOffsetOutOfRange(FetchPosition;TopicPartition)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01288"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1288"
 , "c1" : "ConsumerRecord<K,V>"
 , "c2" : "parseRecord(TopicPartition;RecordBatch;Record)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01315"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1315"
 , "c1" : "Optional<Integer>"
 , "c2" : "maybeLeaderEpoch(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01320"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1320"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedPartitions(Collection<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01338"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1338"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedTopics(Collection<String>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01349"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1349"
 , "c1" : "FetchSessionHandler"
 , "c2" : "sessionHandler(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01353"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c1" : "Sensor"
 , "c2" : "throttleTimeSensor(Metrics;FetcherMetricsRegistry)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01798"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1798"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01804"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1804"
 , "c1" : "Set<String>"
 , "c2" : "topicsForPartitions(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.svg" }

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
 , "c4" : "37"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "91"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "223"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "49"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00098] The class Fetcher contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00177] The class ListOffsetData contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#200"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00200] Lock statement on synchronized method sendFetches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00206] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00214] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00226] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00232] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00238] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00251] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00253] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00256] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00257] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00259] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00274] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00295] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00298] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  'Sending {} {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  'Unable to find FetchSessionHandler for node {}. Ignoring fetch response.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  'Response for missing full request partition: partition={}; metadata={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  'Response for missing session request partition: partition={}; metadata={}; toSend={}; toForget={}; toReplace={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  'Fetch {} at offset {} for partition {} returned fetch data {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN477337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#314"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00314] For method getAllTopicMetadata arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#319"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00319] For method getTopicMetadata arguments MetadataRequest.Builder  request|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#319"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00319] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#319"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00319] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00325] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00333] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00335] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00340] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00347] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00348] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00349] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00357] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00366] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00367] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00348] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00349] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00357] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  'Topic metadata fetch included errors: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  '' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  'Unexpected error fetching metadata for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484076 the MagicNumber/String  'Timeout expired while fetching topic metadata' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#380"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00380] For method sendMetadataRequest arguments MetadataRequest.Builder  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendMetadataRequest@POLYN487129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#388"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00388] For method offsetResetStrategyTimestamp arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetResetStrategyTimestamp@POLYN487498 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#398"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00398] For method timestampToOffsetResetStrategy arguments long  timestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.clients.consumer.internals.Fetcher.timestampToOffsetResetStrategy@POLYN487913 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00420] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN488402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN488402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN488402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN489404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN489404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN489404 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method offsetsForTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#448"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00448] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00463] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN490215 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN490215 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#474"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00474] For method fetchOffsetsByTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Timer  timer|boolean  requireTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#474"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00474] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#475"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00475] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00483] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00485] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00487] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00493] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00514] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00515] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN491611 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN491611 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00524"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00524] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN491611 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN491611 the MagicNumber/String  'Failed to get offsets by times in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00538"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00538] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN491611 the MagicNumber/String  'ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#541"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00541] For method beginningOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00545"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#545"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00545] For method endOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#549"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00549] For method beginningOrEndOffset arguments Collection&lt;TopicPartition &gt;  partitions|long  timestamp|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#549"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00549] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.clients.consumer.internals.Fetcher.beginningOrEndOffset@POLYN495092 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00576] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00582] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00588] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00605"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#605"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00605] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00575] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00589"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00589] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  'Skipping fetching records for assigned partition {} because it is paused' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#603"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00603] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN496415 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00622"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#622"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00622] For method fetchRecords arguments CompletedFetch  completedFetch|int  maxRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00622"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#622"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00622] The argument completedFetch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Not returning fetched records for partition {} since it is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00630"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Not returning fetched records for assigned partition {} since it is no longer fetchable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00634"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00634] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00635] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Returning {} fetched records at offset {} for assigned partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00644"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Updating fetch position from {} to {} for partition {} and returning {} records from `poll()`' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00658] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Ignoring fetched records for {} at offset {} since the current position is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN498696 the MagicNumber/String  'Draining fetched records for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#682"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00682] For method resetOffsetIfNeeded arguments TopicPartition  partition|OffsetResetStrategy  requestedResetStrategy|ListOffsetData  offsetData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#682"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00682] The argument offsetData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00691] For method resetOffsetsAsync arguments Map&lt;TopicPartition ,Long &gt;  partitionResetTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00695] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00696] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00699] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00700] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00702] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#708"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00708] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00709"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#709"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00709] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00710"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00710] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00711] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00717] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00721] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN502251 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00721] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN502251 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00722"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00722] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN502251 the MagicNumber/String  'Discarding error in ListOffsetResponse because another error is pending' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00728] For method hasUsableOffsetForLeaderEpochVersion arguments NodeApiVersions  nodeApiVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00728] The argument nodeApiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00730"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00730] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN504835 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN504835 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#737"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00737] For method validateOffsetsAsync arguments Map&lt;TopicPartition ,FetchPosition &gt;  partitionsToValidate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00749"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#749"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00749] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN505356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN505356 the MagicNumber/String  'Skipping validation of fetch offsets for partitions {} since the broker does not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00756"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#756"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00756] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN505356 the MagicNumber/String  'support the required protocol version (introduced in Kafka 2.3)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00809"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#809"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00809] For method buildLogTruncationException arguments List&lt;SubscriptionState.LogTruncation &gt;  truncations"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00817] In method org.apache.kafka.clients.consumer.internals.Fetcher.buildLogTruncationException@POLYN508612 the MagicNumber/String  'Detected truncated partitions: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#821"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00821] For method maybeSetOffsetForLeaderException arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00822"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00822] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN509465 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN509465 the MagicNumber/String  'Discarding error in OffsetsForLeaderEpoch because another error is pending' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#828"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00828] For method sendListOffsetsRequests arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|boolean  requireTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00841"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00841] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00842] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00844] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00850] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#857"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00857] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00849] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetsRequests@POLYN510003 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#869"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00869] For method groupListOffsetRequests arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Set&lt;TopicPartition &gt;  partitionsToRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#870"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00870] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00871"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#871"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00871] The argument partitionsToRetry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00874"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00874] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00875"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#875"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00875] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00876"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#876"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00876] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00883] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00879"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN512680 the MagicNumber/String  'Leader for partition {} is unknown for fetching offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00890"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#890"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00890] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN512680 the MagicNumber/String  'Leader {} for partition {} is unavailable for fetching offset until reconnect backoff expires' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#906"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00906] For method sendListOffsetRequest arguments Node  node|Map&lt;TopicPartition ,ListOffsetsPartition &gt;  timestampsToSearch|boolean  requireTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00910"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00910] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN514850 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00913] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN514850 the MagicNumber/String  'Sending ListOffsetRequest {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN514850 the MagicNumber/String  'Received ListOffsetResponse {} from broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#926"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00926] For method handleListOffsetResponse arguments ListOffsetsResponse  listOffsetsResponse|RequestFuture&lt;ListOffsetResult &gt;  future"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#926"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00926] The argument listOffsetsResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#927"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00927] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00933"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00933] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00934] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00935"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00935] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00951] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00959"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00959] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00962] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00934] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00935"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00935] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00951] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00959"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00959] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00962] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#993"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00993] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00941"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#942"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00942] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Unexpected partitionData response of length ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00946"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#946"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00946] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Handling v0 ListOffsetResponse response for {}. Fetched offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00951] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00956"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Handling ListOffsetResponse response for {}. Fetched offset {}, timestamp {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Cannot search by timestamp for partition {} because the message format version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00973] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'is before 0.10.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00987"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00987] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Received unknown topic or partition error in ListOffset request for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#994"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00994] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN516392 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to unexpected exception: {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1007"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01007] The class ListOffsetResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchablePartitions@POLYN521442 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1034"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01034] For method selectReadReplica arguments TopicPartition  partition|Node  leaderReplica|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN522132 the MagicNumber/String  'Not fetching from {} for partition {} since it is marked offline or is missing from our metadata,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01042] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN522132 the MagicNumber/String  ' using the leader instead.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1072"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01072] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1077"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1085"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01073] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1074"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01074] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1079"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01079] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  'Requesting metadata update for partition {} since the position {} is missing the current leader node' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  'Skipping fetch for partition {} because node {} is awaiting reconnect backoff' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01093] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  'Skipping fetch for partition {} because previous request to {} has not been processed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1097"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01097] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN523966 the MagicNumber/String  'Added {} fetch request for partition {} at position {} to node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01124] For method regroupFetchPositionsByLeader arguments Map&lt;TopicPartition ,FetchPosition &gt;  partitionMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01125] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01133] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01141] For method initializeCompletedFetch arguments CompletedFetch  nextCompletedFetch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01141] The argument nextCompletedFetch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01151] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Ignoring fetched records for partition {} since it no longer has valid position' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01156] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01157] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Discarding stale fetch response for partition {} since its offset {} does not match ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01158] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'the expected offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01159] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01162] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Preparing to read {} bytes of data for partition {} with offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01167] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01168] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01171] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'There are some messages at [Partition=Offset]: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01172] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ' whose size is larger than the fetch size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01173] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ' and hence cannot be returned. Please considering upgrading your broker to 0.10.1.0 or ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01174] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'newer to avoid this issue. Alternately, increase the fetch size on the client (using ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01175] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01179] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Failed to make progress reading messages at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01179] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01180] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  '. Received a non-empty fetch response from the server, but no ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01181] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'complete records were found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01185] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01186] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01190] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01191] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Updating log start offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01195] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01196] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01203] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Updating preferred read replica for partition {} to {}, set to expire at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01209] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01215] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Error in fetch for partition {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01218] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Received unknown topic or partition error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01221] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Received unknown topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01224] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Received inconsistent topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01231] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01232] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Discarding stale fetch response for partition {} since the fetched offset {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01233] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'does not match the current offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01238] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Unset the preferred read replica {} for partition {} since we got {} when fetching {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01243] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Not authorized to read from partition {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01246] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Received unknown leader epoch error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01248] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Unknown server error while fetching offset {} for topic-partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Encountered corrupt message when fetching offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01253] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ' for topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01256] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  'Unexpected error code ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01258] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ' while fetching at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01260] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  ' from topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01263] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN528891 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1275"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01275] For method handleOffsetOutOfRange arguments FetchPosition  fetchPosition|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1275"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01275] The argument fetchPosition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01276] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN536631 the MagicNumber/String  'Fetch position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01276] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN536631 the MagicNumber/String  ' is out of range for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01278] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN536631 the MagicNumber/String  '{}, resetting offset' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01281] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN536631 the MagicNumber/String  '{}, raising error to the application since no reset policy is configured' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1288"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01288] For method parseRecord arguments TopicPartition  partition|RecordBatch  batch|Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1288"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01288] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1289"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01289] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1290"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01290] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01298] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01298] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01299] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01299] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01301] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01301] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01305] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01306] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01310] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  'Error deserializing key/value for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01311] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01311] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN537462 the MagicNumber/String  '. If needed, please seek past the record to continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01315] For method maybeLeaderEpoch arguments int  leaderEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1320"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01320] For method clearBufferedDataForUnassignedPartitions arguments Collection&lt;TopicPartition &gt;  assignedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1320"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01320] The argument assignedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01323] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01324] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN540221 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01333] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN540221 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1338"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01338] For method clearBufferedDataForUnassignedTopics arguments Collection&lt;String &gt;  assignedTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1338"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01338] The argument assignedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1349"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01349] For method sessionHandler arguments int  node"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01353] For method throttleTimeSensor arguments Metrics  metrics|FetcherMetricsRegistry  metricsRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01353] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01353] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01354] In method org.apache.kafka.clients.consumer.internals.Fetcher.throttleTimeSensor@POLYN541857 the MagicNumber/String  'fetch-throttle-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01362] The class CompletedFetch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01403] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN544298 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN544298 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01409] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN544298 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1414"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01414] For method maybeEnsureValid arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1414"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01414] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01419] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN544820 the MagicNumber/String  'Record batch for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01419] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN544820 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01420] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN544820 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01425] For method maybeEnsureValid arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01425] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01430] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545354 the MagicNumber/String  'Record for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01430] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545354 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01431] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545354 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01437] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN545816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01439] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN545816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01486] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01444] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01445] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01454] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01457] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01476] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  'Skipping aborted record batch from partition {} with producerId {} and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01477] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  'offsets {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01497"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01497] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546049 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1504"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01504] For method fetchRecords arguments int  maxRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01507"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1507"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01507] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01508] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01509] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01516] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01519] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01520] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01522] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01524"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01524] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01529] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01532] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01541] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01542] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01543] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN548445 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1548"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01548] For method consumeAbortedTransactionsUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01553] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01549] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.consumeAbortedTransactionsUpTo@POLYN550399 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1558"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01558] For method isBatchAborted arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1558"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01558] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1562"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01562] For method abortedTransactions arguments FetchResponseData.PartitionData  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1562"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01562] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01563] The same method call partition.abortedTransactions() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01563] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN551119 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01564] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN551119 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1573"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01573] For method containsAbortMarker arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1573"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01573] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01575] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN551754 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01579"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01579] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN551754 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01591"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01591] The class FetchResponseMetricAggregator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01605"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1605"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01605] For method record arguments TopicPartition  partition|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01605"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1605"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01605] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01625] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01612"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01612] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN553310 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01631] The class FetchMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1635"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01635] For method increment arguments int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01642] The class FetchManagerMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1654"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01654] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1654"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01654] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01658] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN555689 the MagicNumber/String  'bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01664] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN555689 the MagicNumber/String  'records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01669] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN555689 the MagicNumber/String  'fetch-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01675] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN555689 the MagicNumber/String  'records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01678] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN555689 the MagicNumber/String  'records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1682"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01682] For method recordTopicFetchMetrics arguments String  topic|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1682"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01682] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01684] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01684] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '.bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1686"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01686] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01687] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01687] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01687] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01700] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01700] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '.records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01702] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01703] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01704] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01704] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1704"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01704] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN558359 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01715"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1715"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01715] For method maybeUpdateAssignment arguments SubscriptionState  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01715"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1715"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01715] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01729] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01733] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01732] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561058 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01733] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561058 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01733] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561058 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01743"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1743"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01743] For method recordPartitionLead arguments TopicPartition  tp|long  lead"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01748] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLead@POLYN562582 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1760"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01760] For method recordPartitionLag arguments TopicPartition  tp|long  lag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1765"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01765] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLag@POLYN563887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1776"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01776] For method partitionLagMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01777"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01777] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLagMetricName@POLYN565205 the MagicNumber/String  '.records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01780"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1780"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01780] For method partitionLeadMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01781] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLeadMetricName@POLYN565342 the MagicNumber/String  '.records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1784"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01784] For method partitionPreferredReadReplicaMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1789"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01789] For method topicPartitionTags arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1789"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01789] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01790] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN565821 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01791] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN565821 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01791] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN565821 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01791"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01791] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN565821 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01792"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01792] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN565821 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01799] In method org.apache.kafka.clients.consumer.internals.Fetcher.close@POLYN566414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01804"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1804"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01804] For method topicsForPartitions arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01804"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1804"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01804] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
