console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java 403 rule violations " 
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
 , "c5" : "00165"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#165"
 , "c1" : "Fetcher"
 , "c2" : "Fetcher(LogContext;ConsumerNetworkClient;int;int;int;int;int;boolean;String;Deserializer<K>;Deserializer<V>;ConsumerMetadata;SubscriptionState;Metrics;FetcherMetricsRegistry;Time;long;long;IsolationLevel;ApiVersions)"
 , "c3" : "1"
 , "c4" : "24"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00231"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#231"
 , "c1" : "boolean"
 , "c2" : "hasCompletedFetches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00239"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#239"
 , "c1" : "boolean"
 , "c2" : "hasAvailableFetches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00248"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#248"
 , "c1" : "int"
 , "c2" : "sendFetches()"
 , "c3" : "14"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#366"
 , "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "getAllTopicMetadata(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00377"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#377"
 , "c1" : "Map<String,List<PartitionInfo>>"
 , "c2" : "getTopicMetadata(MetadataRequest.Builder;Timer)"
 , "c3" : "17"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00441"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#441"
 , "c1" : "RequestFuture<ClientResponse>"
 , "c2" : "sendMetadataRequest(MetadataRequest.Builder)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00449"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#449"
 , "c1" : "Long"
 , "c2" : "offsetResetStrategyTimestamp(TopicPartition)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00459"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#459"
 , "c1" : "OffsetResetStrategy"
 , "c2" : "timestampToOffsetResetStrategy(long)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00474"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#474"
 , "c1" : "void"
 , "c2" : "resetOffsetsIfNeeded()"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00497"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#497"
 , "c1" : "void"
 , "c2" : "validateOffsetsIfNeeded()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00516"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#516"
 , "c1" : "Map<TopicPartition,OffsetAndTimestamp>"
 , "c2" : "offsetsForTimes(Map<TopicPartition,Long>;Timer)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00542"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#542"
 , "c1" : "ListOffsetResult"
 , "c2" : "fetchOffsetsByTimes(Map<TopicPartition,Long>;Timer;boolean)"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00609"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#609"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOffsets(Collection<TopicPartition>;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00613"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#613"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "endOffsets(Collection<TopicPartition>;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00617"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#617"
 , "c1" : "Map<TopicPartition,Long>"
 , "c2" : "beginningOrEndOffset(Collection<TopicPartition>;long;Timer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00645"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#645"
 , "c1" : "Fetch<K,V>"
 , "c2" : "collectFetch()"
 , "c3" : "11"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00699"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c1" : "Fetch<K,V>"
 , "c2" : "fetchRecords(CompletedFetch;int)"
 , "c3" : "11"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00759"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#759"
 , "c1" : "void"
 , "c2" : "resetOffsetIfNeeded(TopicPartition;OffsetResetStrategy;ListOffsetData)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00768"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#768"
 , "c1" : "void"
 , "c2" : "resetOffsetsAsync(Map<TopicPartition,Long>)"
 , "c3" : "5"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00805"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#805"
 , "c1" : "boolean"
 , "c2" : "hasUsableOffsetForLeaderEpochVersion(NodeApiVersions)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00819"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#819"
 , "c1" : "void"
 , "c2" : "validateOffsetsAsync(Map<TopicPartition,FetchPosition>)"
 , "c3" : "8"
 , "c4" : "25"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00891"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#891"
 , "c1" : "LogTruncationException"
 , "c2" : "buildLogTruncationException(List<SubscriptionState.LogTruncation>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00903"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#903"
 , "c1" : "void"
 , "c2" : "maybeSetOffsetForLeaderException(RuntimeException)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00917"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#917"
 , "c1" : "RequestFuture<ListOffsetResult>"
 , "c2" : "sendListOffsetsRequests(Map<TopicPartition,Long>;boolean)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00971"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#971"
 , "c1" : "Map<Node,Map<TopicPartition,ListOffsetsPartition>>"
 , "c2" : "groupListOffsetRequests(Map<TopicPartition,Long>;Set<TopicPartition>)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1015"
 , "c1" : "RequestFuture<ListOffsetResult>"
 , "c2" : "sendListOffsetRequest(Node;Map<TopicPartition,ListOffsetsPartition>;boolean)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1044"
 , "c1" : "void"
 , "c2" : "handleListOffsetResponse(ListOffsetsResponse;RequestFuture<ListOffsetResult>)"
 , "c3" : "22"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01140"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1140"
 , "c1" : "List<TopicPartition>"
 , "c2" : "fetchablePartitions()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01154"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1154"
 , "c1" : "Node"
 , "c2" : "selectReadReplica(TopicPartition;Node;long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01175"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1175"
 , "c1" : "void"
 , "c2" : "validatePositionsOnMetadataChange()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01189"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1189"
 , "c1" : "Map<Node,FetchSessionHandler.FetchRequestData>"
 , "c2" : "prepareFetchRequests()"
 , "c3" : "11"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01250"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1250"
 , "c1" : "Map<Node,Map<TopicPartition,FetchPosition>>"
 , "c2" : "regroupFetchPositionsByLeader(Map<TopicPartition,FetchPosition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01269"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1269"
 , "c1" : "CompletedFetch"
 , "c2" : "initializeCompletedFetch(CompletedFetch)"
 , "c3" : "37"
 , "c4" : "48"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01403"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c1" : "void"
 , "c2" : "handleOffsetOutOfRange(FetchPosition;TopicPartition)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01418"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1418"
 , "c1" : "ConsumerRecord<K,V>"
 , "c2" : "parseRecord(TopicPartition;RecordBatch;Record)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01445"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1445"
 , "c1" : "Optional<Integer>"
 , "c2" : "maybeLeaderEpoch(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01454"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1454"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedPartitions(Collection<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01476"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1476"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedTopics(Collection<String>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01487"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1487"
 , "c1" : "FetchSessionHandler"
 , "c2" : "sessionHandler(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01491"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1491"
 , "c1" : "Sensor"
 , "c2" : "throttleTimeSensor(Metrics;FetcherMetricsRegistry)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01943"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1943"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01949"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1949"
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
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#248"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00248] Lock statement on synchronized method sendFetches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00254] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00262] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00280] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00285] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00285] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00286] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00299] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00300] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00301] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00303] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00305] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00307] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00322] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00327] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00346] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  'Sending {} {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  'Unable to find FetchSessionHandler for node {}. Ignoring fetch response.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  'Response for missing full request partition: partition={}; metadata={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  'Response for missing session request partition: partition={}; metadata={}; toSend={}; toForget={}; toReplace={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  'Fetch {} at offset {} for partition {} returned fetch data {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN478207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method getAllTopicMetadata arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#377"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00377] For method getTopicMetadata arguments MetadataRequest.Builder  request|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00383] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00390] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00390] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00391] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00398] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00405] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00406] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00407] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00415] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00424] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00425] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00406] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00407] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00415] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  'Topic metadata fetch included errors: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  '' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  'Unexpected error fetching metadata for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN484946 the MagicNumber/String  'Timeout expired while fetching topic metadata' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00441] For method sendMetadataRequest arguments MetadataRequest.Builder  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendMetadataRequest@POLYN487999 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00449] For method offsetResetStrategyTimestamp arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetResetStrategyTimestamp@POLYN488368 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#459"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00459] For method timestampToOffsetResetStrategy arguments long  timestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.clients.consumer.internals.Fetcher.timestampToOffsetResetStrategy@POLYN488783 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00486] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN489272 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN489272 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN489272 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN490274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN490274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN490274 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00516] For method offsetsForTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#516"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00516] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00531] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#522"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN491085 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN491085 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#542"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00542] For method fetchOffsetsByTimes arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Timer  timer|boolean  requireTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#542"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00542] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#543"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00543] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00551] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00553] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00555] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00560] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00561] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00583] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN492481 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00573] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN492481 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN492481 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN492481 the MagicNumber/String  'Failed to get offsets by times in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN492481 the MagicNumber/String  'ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00609"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#609"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00609] For method beginningOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#613"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00613] For method endOffsets arguments Collection&lt;TopicPartition &gt;  partitions|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#617"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00617] For method beginningOrEndOffset arguments Collection&lt;TopicPartition &gt;  partitions|long  timestamp|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#617"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00617] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00626] In method org.apache.kafka.clients.consumer.internals.Fetcher.beginningOrEndOffset@POLYN495962 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00653] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00659] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00665] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00682] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  'Skipping fetching records for assigned partition {} because it is paused' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497285 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00699] For method fetchRecords arguments CompletedFetch  completedFetch|int  maxRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00699] The argument completedFetch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Not returning fetched records for partition {} since it is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00707] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Not returning fetched records for assigned partition {} since it is no longer fetchable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00711] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#712"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00712] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Returning {} fetched records at offset {} for assigned partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00721] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Updating fetch position from {} to {} for partition {} and returning {} records from `poll()`' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00739] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00747"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00747] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Ignoring fetched records for {} at offset {} since the current position is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00752] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499566 the MagicNumber/String  'Draining fetched records for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#759"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00759] For method resetOffsetIfNeeded arguments TopicPartition  partition|OffsetResetStrategy  requestedResetStrategy|ListOffsetData  offsetData"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#759"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00759] The argument offsetData is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#768"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00768] For method resetOffsetsAsync arguments Map&lt;TopicPartition ,Long &gt;  partitionResetTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00772] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#773"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00773] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#776"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00776] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00777"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00777] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00779"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00779] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00785"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#785"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00785] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00786] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00787] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00788] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00794] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#798"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00798] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#776"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00776] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN503121 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#798"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00798] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN503121 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN503121 the MagicNumber/String  'Discarding error in ListOffsetResponse because another error is pending' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#805"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00805] For method hasUsableOffsetForLeaderEpochVersion arguments NodeApiVersions  nodeApiVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#805"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00805] The argument nodeApiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN505705 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00808"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN505705 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00819"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#819"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00819] For method validateOffsetsAsync arguments Map&lt;TopicPartition ,FetchPosition &gt;  partitionsToValidate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00831] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN506226 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN506226 the MagicNumber/String  'Skipping validation of fetch offsets for partitions {} since the broker does not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00838"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#838"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00838] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN506226 the MagicNumber/String  'support the required protocol version (introduced in Kafka 2.3)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00891"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#891"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00891] For method buildLogTruncationException arguments List&lt;SubscriptionState.LogTruncation &gt;  truncations"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00899"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#899"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00899] In method org.apache.kafka.clients.consumer.internals.Fetcher.buildLogTruncationException@POLYN509482 the MagicNumber/String  'Detected truncated partitions: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00903"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#903"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00903] For method maybeSetOffsetForLeaderException arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN510335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN510335 the MagicNumber/String  'Discarding error in OffsetsForLeaderEpoch because another error is pending' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#917"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00917] For method sendListOffsetsRequests arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|boolean  requireTimestamps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00930] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00931"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00931] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00939"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#939"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00939] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00946"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#946"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00946] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00938"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#938"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00938] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetsRequests@POLYN510873 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00971"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#971"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00971] For method groupListOffsetRequests arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Set&lt;TopicPartition &gt;  partitionsToRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#972"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00972] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#973"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00973] The argument partitionsToRetry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00976"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#976"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00976] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00977] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00978"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#978"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00978] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00985] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN513550 the MagicNumber/String  'Leader for partition {} is unknown for fetching offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00992"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#992"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00992] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN513550 the MagicNumber/String  'Leader {} for partition {} is unavailable for fetching offset until reconnect backoff expires' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1015"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01015] For method sendListOffsetRequest arguments Node  node|Map&lt;TopicPartition ,ListOffsetsPartition &gt;  timestampsToSearch|boolean  requireTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN515720 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN515720 the MagicNumber/String  'Sending ListOffsetRequest {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN515720 the MagicNumber/String  'Received ListOffsetResponse {} from broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1044"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01044] For method handleListOffsetResponse arguments ListOffsetsResponse  listOffsetsResponse|RequestFuture&lt;ListOffsetResult &gt;  future"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1044"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01044] The argument listOffsetsResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1045"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01045] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1069"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01069] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "01080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1069"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01069] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "01080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[01111] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01059] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1060"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01060] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Unexpected partitionData response of length ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01064] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1066"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01066] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Handling v0 ListOffsetResponse response for {}. Fetched offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1069"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01069] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1074"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01074] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Handling ListOffsetResponse response for {}. Fetched offset {}, timestamp {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Cannot search by timestamp for partition {} because the message format version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'is before 0.10.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01105] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Received unknown topic or partition error in ListOffset request for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN517262 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to unexpected exception: {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01142] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchablePartitions@POLYN522312 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01154] For method selectReadReplica arguments TopicPartition  partition|Node  leaderReplica|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01161] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523002 the MagicNumber/String  'Not fetching from {} for partition {} since it is marked offline or is missing from our metadata,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01162] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523002 the MagicNumber/String  ' using the leader instead.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01203] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01211] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01199] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01200] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01205] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  'Requesting metadata update for partition {} since the position {} is missing the current leader node' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01217] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  'Skipping fetch for partition {} because node {} is awaiting reconnect backoff' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01219] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  'Skipping fetch for partition {} because previous request to {} has not been processed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01223] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01226] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01238] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN524836 the MagicNumber/String  'Added {} fetch request for partition {} at position {} to node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1250"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01250] For method regroupFetchPositionsByLeader arguments Map&lt;TopicPartition ,FetchPosition &gt;  partitionMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1251"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01251] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1259"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01259] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01269] For method initializeCompletedFetch arguments CompletedFetch  nextCompletedFetch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1269"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01269] The argument nextCompletedFetch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01273] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01279] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Ignoring fetched records for partition {} since it no longer has valid position' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01284] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01285] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Discarding stale fetch response for partition {} since its offset {} does not match ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01286] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'the expected offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01287] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01290] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Preparing to read {} bytes of data for partition {} with offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01295] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01296] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01299] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'There are some messages at [Partition=Offset]: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01300] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ' whose size is larger than the fetch size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01301] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ' and hence cannot be returned. Please considering upgrading your broker to 0.10.1.0 or ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'newer to avoid this issue. Alternately, increase the fetch size on the client (using ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01303] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Failed to make progress reading messages at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01308] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  '. Received a non-empty fetch response from the server, but no ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01309] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'complete records were found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01313] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01314] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01318] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01319] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Updating log start offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01323] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01324] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Updating preferred read replica for partition {} to {}, set to expire at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01337] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01343] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Error in fetch for partition {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01346] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Received unknown topic or partition error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01349] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Received unknown topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01352] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Received inconsistent topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01359"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01359] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01360] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Discarding stale fetch response for partition {} since the fetched offset {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01361] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'does not match the current offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01366] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Unset the preferred read replica {} for partition {} since we got {} when fetching {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01371] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Not authorized to read from partition {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01374] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Received unknown leader epoch error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Unknown server error while fetching offset {} for topic-partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01379"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01379] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Encountered corrupt message when fetching offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01381] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ' for topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01384] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  'Unexpected error code ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01386] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ' while fetching at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01388] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  ' from topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01391] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01392] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01392] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529761 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01403] For method handleOffsetOutOfRange arguments FetchPosition  fetchPosition|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01403] The argument fetchPosition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN537501 the MagicNumber/String  'Fetch position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN537501 the MagicNumber/String  ' is out of range for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01406] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN537501 the MagicNumber/String  '{}, resetting offset' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01409] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN537501 the MagicNumber/String  '{}, raising error to the application since no reset policy is configured' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1418"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01418] For method parseRecord arguments TopicPartition  partition|RecordBatch  batch|Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1418"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01418] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1419"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01419] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1420"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01420] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01428] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01428] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01431] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01431] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01432] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01432] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01435] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01436] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01440] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  'Error deserializing key/value for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01441] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01441] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN538332 the MagicNumber/String  '. If needed, please seek past the record to continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01445] For method maybeLeaderEpoch arguments int  leaderEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1454"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01454] For method clearBufferedDataForUnassignedPartitions arguments Collection&lt;TopicPartition &gt;  assignedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1454"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01454] The argument assignedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01457] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01458] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01465] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN541091 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1467"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01467] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN541091 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01476] For method clearBufferedDataForUnassignedTopics arguments Collection&lt;String &gt;  assignedTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1476"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01476] The argument assignedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1487"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01487] For method sessionHandler arguments int  node"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1491"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01491] For method throttleTimeSensor arguments Metrics  metrics|FetcherMetricsRegistry  metricsRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1491"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01491] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1491"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01491] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01492] In method org.apache.kafka.clients.consumer.internals.Fetcher.throttleTimeSensor@POLYN542727 the MagicNumber/String  'fetch-throttle-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01541] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN545168 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01542"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1542"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01542] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN545168 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1547"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01547] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN545168 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1552"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01552] For method maybeEnsureValid arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1552"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01552] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01557] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545690 the MagicNumber/String  'Record batch for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01557] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545690 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01558] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN545690 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1563"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01563] For method maybeEnsureValid arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1563"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01563] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01568] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN546224 the MagicNumber/String  'Record for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01568] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN546224 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01569] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN546224 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01575] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN546686 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01577] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN546686 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01624] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01582"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1582"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01582] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01583] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01592] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01595"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01595] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01614"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1614"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01614] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  'Skipping aborted record batch from partition {} with producerId {} and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01615"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01615] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  'offsets {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01635] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN546919 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01642"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1642"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01642] For method fetchRecords arguments int  maxRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01645] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01646] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01647] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01654] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01657"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01657] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01658] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01660] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01662] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01667"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01667] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01670] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01679"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01679] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01680] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01681] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN549315 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1686"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01686] For method consumeAbortedTransactionsUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01691] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01687] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.consumeAbortedTransactionsUpTo@POLYN551269 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1696"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01696] For method isBatchAborted arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1696"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01696] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1700"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01700] For method abortedTransactions arguments FetchResponseData.PartitionData  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1700"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01700] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01701"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1701"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01701] The same method call partition.abortedTransactions() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01701"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1701"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01701] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN551989 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01702] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN551989 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01711] For method containsAbortMarker arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1711"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01711] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01713"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1713"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01713] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN552624 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01717] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN552624 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1750"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01750] For method record arguments TopicPartition  partition|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1750"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01750] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01770] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01757"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1757"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01757] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN554180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01780"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1780"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01780] For method increment arguments int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1799"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01799] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1799"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01799] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01803"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1803"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01803] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN556559 the MagicNumber/String  'bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01809"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1809"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01809] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN556559 the MagicNumber/String  'records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1814"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01814] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN556559 the MagicNumber/String  'fetch-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01820"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1820"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01820] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN556559 the MagicNumber/String  'records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN556559 the MagicNumber/String  'records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1827"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01827] For method recordTopicFetchMetrics arguments String  topic|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1827"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01827] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01829] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01829] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '.bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01831] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01832"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1832"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01832] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01832"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1832"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01832] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01832"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1832"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01832] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01845] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01845] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '.records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01847] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01848"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1848"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01848] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01849] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01849] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01849"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01849] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN559229 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01860] For method maybeUpdateAssignment arguments SubscriptionState  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1860"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01860] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01874"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01874] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01878] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01877"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1877"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01877] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561928 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01878] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561928 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01878"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1878"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01878] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN561928 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01888"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1888"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01888] For method recordPartitionLead arguments TopicPartition  tp|long  lead"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01893] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLead@POLYN563452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1905"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01905] For method recordPartitionLag arguments TopicPartition  tp|long  lag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01910"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01910] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLag@POLYN564757 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1921"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01921] For method partitionLagMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01922] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLagMetricName@POLYN566075 the MagicNumber/String  '.records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1925"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01925] For method partitionLeadMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01926"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1926"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01926] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLeadMetricName@POLYN566212 the MagicNumber/String  '.records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1929"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01929] For method partitionPreferredReadReplicaMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1934"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01934] For method topicPartitionTags arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1934"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01934] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01935"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01935] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN566691 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01936"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01936] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN566691 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01936"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01936] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN566691 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01936"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01936] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN566691 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01937] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN566691 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01944"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1944"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01944] In method org.apache.kafka.clients.consumer.internals.Fetcher.close@POLYN567284 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01949"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1949"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01949] For method topicsForPartitions arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01949"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1949"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01949] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
