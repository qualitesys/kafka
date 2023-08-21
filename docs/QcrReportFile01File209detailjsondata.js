console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java 564 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Closeable"
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
 , "c2" : "Fetcher(LogContext;ConsumerNetworkClient;int;int;int;int;int;boolean;String;Deserializer&lt;K&gt;;Deserializer&lt;V&gt;;ConsumerMetadata;SubscriptionState;Metrics;FetcherMetricsRegistry;Time;long;long;IsolationLevel;ApiVersions)"
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
 , "c1" : "Map&lt;String,List&lt;PartitionInfo&gt;&gt;"
 , "c2" : "getAllTopicMetadata(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00377"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#377"
 , "c1" : "Map&lt;String,List&lt;PartitionInfo&gt;&gt;"
 , "c2" : "getTopicMetadata(MetadataRequest.Builder;Timer)"
 , "c3" : "17"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00441"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#441"
 , "c1" : "RequestFuture&lt;ClientResponse&gt;"
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
 , "c1" : "Map&lt;TopicPartition,OffsetAndTimestamp&gt;"
 , "c2" : "offsetsForTimes(Map&lt;TopicPartition,Long&gt;;Timer)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00542"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#542"
 , "c1" : "ListOffsetResult"
 , "c2" : "fetchOffsetsByTimes(Map&lt;TopicPartition,Long&gt;;Timer;boolean)"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00609"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#609"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "beginningOffsets(Collection&lt;TopicPartition&gt;;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00613"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#613"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "endOffsets(Collection&lt;TopicPartition&gt;;Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00617"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#617"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "beginningOrEndOffset(Collection&lt;TopicPartition&gt;;long;Timer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00645"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#645"
 , "c1" : "Fetch&lt;K,V&gt;"
 , "c2" : "collectFetch()"
 , "c3" : "11"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00699"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#699"
 , "c1" : "Fetch&lt;K,V&gt;"
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
 , "c2" : "resetOffsetsAsync(Map&lt;TopicPartition,Long&gt;)"
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
 , "c2" : "validateOffsetsAsync(Map&lt;TopicPartition,FetchPosition&gt;)"
 , "c3" : "8"
 , "c4" : "25"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00891"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#891"
 , "c1" : "LogTruncationException"
 , "c2" : "buildLogTruncationException(List&lt;SubscriptionState.LogTruncation&gt;)"
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
 , "c1" : "RequestFuture&lt;ListOffsetResult&gt;"
 , "c2" : "sendListOffsetsRequests(Map&lt;TopicPartition,Long&gt;;boolean)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00965"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#965"
 , "c1" : "Map&lt;Node,Map&lt;TopicPartition,ListOffsetsPartition&gt;&gt;"
 , "c2" : "groupListOffsetRequests(Map&lt;TopicPartition,Long&gt;;Set&lt;TopicPartition&gt;)"
 , "c3" : "6"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01009"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1009"
 , "c1" : "RequestFuture&lt;ListOffsetResult&gt;"
 , "c2" : "sendListOffsetRequest(Node;Map&lt;TopicPartition,ListOffsetsPartition&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1038"
 , "c1" : "void"
 , "c2" : "handleListOffsetResponse(ListOffsetsResponse;RequestFuture&lt;ListOffsetResult&gt;)"
 , "c3" : "22"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1134"
 , "c1" : "List&lt;TopicPartition&gt;"
 , "c2" : "fetchablePartitions()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01148"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1148"
 , "c1" : "Node"
 , "c2" : "selectReadReplica(TopicPartition;Node;long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01169"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1169"
 , "c1" : "void"
 , "c2" : "validatePositionsOnMetadataChange()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01183"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1183"
 , "c1" : "Map&lt;Node,FetchSessionHandler.FetchRequestData&gt;"
 , "c2" : "prepareFetchRequests()"
 , "c3" : "11"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01244"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1244"
 , "c1" : "Map&lt;Node,Map&lt;TopicPartition,FetchPosition&gt;&gt;"
 , "c2" : "regroupFetchPositionsByLeader(Map&lt;TopicPartition,FetchPosition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01263"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1263"
 , "c1" : "CompletedFetch"
 , "c2" : "initializeCompletedFetch(CompletedFetch)"
 , "c3" : "37"
 , "c4" : "48"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01397"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1397"
 , "c1" : "void"
 , "c2" : "handleOffsetOutOfRange(FetchPosition;TopicPartition)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01412"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1412"
 , "c1" : "ConsumerRecord&lt;K,V&gt;"
 , "c2" : "parseRecord(TopicPartition;RecordBatch;Record)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01439"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1439"
 , "c1" : "Optional&lt;Integer&gt;"
 , "c2" : "maybeLeaderEpoch(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01448"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1448"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedPartitions(Collection&lt;TopicPartition&gt;)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01470"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1470"
 , "c1" : "void"
 , "c2" : "clearBufferedDataForUnassignedTopics(Collection&lt;String&gt;)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01481"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1481"
 , "c1" : "FetchSessionHandler"
 , "c2" : "sessionHandler(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01485"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1485"
 , "c1" : "Sensor"
 , "c2" : "throttleTimeSensor(Metrics;FetcherMetricsRegistry)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01937"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1937"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01943"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1943"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "topicsForPartitions(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.clients.consumer.internals.Fetcher.this" }
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "126"
}}
,
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "14"
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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "21"
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
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00248] For method sendFetches list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Node,FetchSessionHandler.FetchRequestData&gt; prepareFetchRequestsN487884|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.ClientResponse&gt; client_sendN489344"
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
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  'Sending {} {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  'Unable to find FetchSessionHandler for node {}. Ignoring fetch response.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  'Response for missing full request partition: partition={}; metadata={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  'Response for missing session request partition: partition={}; metadata={}; toSend={}; toForget={}; toReplace={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  'Fetch {} at offset {} for partition {} returned fetch data {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String  null should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00377] For method getTopicMetadata list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.ClientResponse&gt; sendMetadataRequestN494801|org.apache.kafka.common.Cluster response_buildClusterN495325|java.util.Set&lt;java.lang.String&gt; cluster_unauthorizedTopicsN495423|java.util.Map&lt;java.lang.String,Errors&gt; response_errorsN495730"
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
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  'Topic metadata fetch included errors: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  '' is invalid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  'Unexpected error fetching metadata for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String  'Timeout expired while fetching topic metadata' should be converted to const"
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
 , "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00441] For method sendMetadataRequest list of called methods Object monObjet|org.apache.kafka.common.Node client_leastLoadedNodeN497651"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendMetadataRequest@POLYN497539 the MagicNumber/String  null should be converted to const"
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
 , "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00449] For method offsetResetStrategyTimestamp list of called methods Object monObjet|org.apache.kafka.clients.consumer.OffsetResetStrategy subscriptions_resetStrategyN498012"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetResetStrategyTimestamp@POLYN497910 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.clients.consumer.internals.Fetcher.timestampToOffsetResetStrategy@POLYN498327 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#474"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00474] For method resetOffsetsIfNeeded list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; subscriptions_partitionsNeedingResetN499099|java.lang.Long offsetResetStrategyTimestampN499488"
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
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN498816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN498816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsIfNeeded@POLYN498816 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN499826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN499826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsIfNeeded@POLYN499826 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00522] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN500643 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.consumer.internals.Fetcher.offsetsForTimes@POLYN500643 the MagicNumber/String  null should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00542] For method fetchOffsetsByTimes list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.consumer.internals.Fetcher.ListOffsetResult&gt; sendListOffsetsRequestsN502579"
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
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN502045 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00573] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN502045 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN502045 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN502045 the MagicNumber/String  'Failed to get offsets by times in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchOffsetsByTimes@POLYN502045 the MagicNumber/String  'ms' should be converted to const"
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
 , "c3" : "QC-JAV000010[00626] In method org.apache.kafka.clients.consumer.internals.Fetcher.beginningOrEndOffset@POLYN505536 the MagicNumber/String  false should be converted to const"
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
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  'Skipping fetching records for assigned partition {} because it is paused' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String  null should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00699] For method fetchRecords list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition subscriptions_positionN509717|java.util.List&lt;org.apache.kafka.clients.consumer.ConsumerRecord&lt;K,V&gt;&gt; completedFetch_fetchRecordsN510145|java.lang.Long subscriptions_partitionLagN511066|java.lang.Long subscriptions_partitionLeadN511361"
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
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Not returning fetched records for partition {} since it is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00707] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Not returning fetched records for assigned partition {} since it is no longer fetchable' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00711] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#712"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00712] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Returning {} fetched records at offset {} for assigned partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00721] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Updating fetch position from {} to {} for partition {} and returning {} records from  poll() ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00739] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00747"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00747] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Ignoring fetched records for {} at offset {} since the current position is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00752] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String  'Draining fetched records for partition {}' should be converted to const"
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
 , "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#768"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00768] For method resetOffsetsAsync list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.consumer.internals.Fetcher.ListOffsetResult&gt; sendListOffsetRequestN513620"
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
 , "c3" : "QC-JAV000010[00776] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN512727 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#798"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00798] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN512727 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetsAsync@POLYN512727 the MagicNumber/String  'Discarding error in ListOffsetResponse because another error is pending' should be converted to const"
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
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00805] For method hasUsableOffsetForLeaderEpochVersion list of called methods Object monObjet|ApiVersion nodeApiVersions_apiVersionN515424"
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
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN515325 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00808"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.clients.consumer.internals.Fetcher.hasUsableOffsetForLeaderEpochVersion@POLYN515325 the MagicNumber/String  false should be converted to const"
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
 , "c1" : "00819"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#819"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00819] For method validateOffsetsAsync list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Node,java.util.Map&lt;org.apache.kafka.common.TopicPartition,org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition&gt;&gt; regroupFetchPositionsByLeaderN516059|org.apache.kafka.clients.NodeApiVersions apiVersions_getN516479|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;T2&gt; offsetsForLeaderEpochClient_sendAsyncRequestN517303|java.util.Optional&lt;org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation&gt; subscriptions_maybeCompleteValidationN518268"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00831] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN515848 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN515848 the MagicNumber/String  'Skipping validation of fetch offsets for partitions {} since the broker does not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00838"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#838"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00838] In method org.apache.kafka.clients.consumer.internals.Fetcher.validateOffsetsAsync@POLYN515848 the MagicNumber/String  'support the required protocol version (introduced in Kafka 2.3)' should be converted to const"
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
 , "c3" : "QC-JAV000010[00899] In method org.apache.kafka.clients.consumer.internals.Fetcher.buildLogTruncationException@POLYN519120 the MagicNumber/String  'Detected truncated partitions: ' should be converted to const"
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
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN519977 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN519977 the MagicNumber/String  'Discarding error in OffsetsForLeaderEpoch because another error is pending' should be converted to const"
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
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#917"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00917] For method sendListOffsetsRequests list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Node,java.util.Map&lt;org.apache.kafka.common.TopicPartition,ListOffsetsPartition&gt;&gt; groupListOffsetRequestsN520868|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.consumer.internals.Fetcher.ListOffsetResult&gt; sendListOffsetRequestN521680"
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
 , "c3" : "QC-JAV000010[00938] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetsRequests@POLYN520515 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#965"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00965] For method groupListOffsetRequests arguments Map&lt;TopicPartition ,Long &gt;  timestampsToSearch|Set&lt;TopicPartition &gt;  partitionsToRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#965"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00965] For method groupListOffsetRequests list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Node,java.util.Map&lt;org.apache.kafka.common.TopicPartition,ListOffsetsPartition&gt;&gt; metadata_currentLeaderN523799"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#966"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00966] The argument timestampsToSearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#967"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00967] The argument partitionsToRetry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#970"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00970] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00971"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#971"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00971] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00972] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00979] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00975"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#975"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00975] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN523188 the MagicNumber/String  'Leader for partition {} is unknown for fetching offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00986] In method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN523188 the MagicNumber/String  'Leader {} for partition {} is unavailable for fetching offset until reconnect backoff expires' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1009"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01009] For method sendListOffsetRequest arguments Node  node|Map&lt;TopicPartition ,ListOffsetsPartition &gt;  timestampsToSearch|boolean  requireTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1013"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01013] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1016"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01016] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String  'Sending ListOffsetRequest {} to broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String  'Received ListOffsetResponse {} from broker {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1038"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01038] For method handleListOffsetResponse arguments ListOffsetsResponse  listOffsetsResponse|RequestFuture&lt;ListOffsetResult &gt;  future"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1038"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01038] The argument listOffsetsResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1039"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01039] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1045"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1047"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1074"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01074] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1046"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01046] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1047"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1074"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01074] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[01105] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1054"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01054] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Unexpected partitionData response of length ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1060"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01060] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Handling v0 ListOffsetResponse response for {}. Fetched offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Handling ListOffsetResponse response for {}. Fetched offset {}, timestamp {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1084"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01084] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Cannot search by timestamp for partition {} because the message format version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1085"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01085] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'is before 0.10.0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1094"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01094] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01099] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Received unknown topic or partition error in ListOffset request for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01106] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String  'Attempt to fetch offsets for partition {} failed due to unexpected exception: {}, retrying.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.clients.consumer.internals.Fetcher.fetchablePartitions@POLYN531986 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01148] For method selectReadReplica arguments TopicPartition  partition|Node  leaderReplica|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01148] For method selectReadReplica list of called methods Object monObjet|java.util.Optional&lt;java.lang.Integer&gt; subscriptions_preferredReadReplicaN532848"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN532678 the MagicNumber/String  'Not fetching from {} for partition {} since it is marked offline or is missing from our metadata,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01156] In method org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN532678 the MagicNumber/String  ' using the leader instead.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01183] For method prepareFetchRequests list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.Node,FetchSessionHandler.FetchRequestData&gt; metadata_topicIdsN534886|org.apache.kafka.common.Node selectReadReplicaN535684|int node_idN536543|org.apache.kafka.clients.FetchSessionHandler sessionHandlerN536620|org.apache.kafka.clients.FetchSessionHandler.Builder handler_newBuilderN536988"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01219] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01193] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01194] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  'Missing position for fetchable partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01199] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  'Requesting metadata update for partition {} since the position {} is missing the current leader node' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01211] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  'Skipping fetch for partition {} because node {} is awaiting reconnect backoff' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01213] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  'Skipping fetch for partition {} because previous request to {} has not been processed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01217] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01220] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01232] In method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String  'Added {} fetch request for partition {} at position {} to node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01244] For method regroupFetchPositionsByLeader arguments Map&lt;TopicPartition ,FetchPosition &gt;  partitionMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1245"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01245] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1253"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01253] The argument partitionMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01263] For method initializeCompletedFetch arguments CompletedFetch  nextCompletedFetch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1263"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01263] The argument nextCompletedFetch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01267] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01273] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Ignoring fetched records for partition {} since it no longer has valid position' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01278] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01279] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Discarding stale fetch response for partition {} since its offset {} does not match ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01280] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'the expected offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01281] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01284] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Preparing to read {} bytes of data for partition {} with offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01289] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01290] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01293] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'There are some messages at [Partition=Offset]: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01294] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ' whose size is larger than the fetch size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01295] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ' and hence cannot be returned. Please considering upgrading your broker to 0.10.1.0 or ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01296] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'newer to avoid this issue. Alternately, increase the fetch size on the client (using ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01297] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01301] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Failed to make progress reading messages at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01301] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  '. Received a non-empty fetch response from the server, but no ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01303] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'complete records were found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01308] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Updating high watermark for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01312] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01313] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Updating log start offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01317] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01318] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Updating last stable offset for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01325] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Updating preferred read replica for partition {} to {}, set to expire at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01337] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Error in fetch for partition {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01340] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Received unknown topic or partition error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01343] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Received unknown topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01346] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Received inconsistent topic ID error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01353] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01354] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Discarding stale fetch response for partition {} since the fetched offset {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01355] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'does not match the current offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01360] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Unset the preferred read replica {} for partition {} since we got {} when fetching {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01365] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Not authorized to read from partition {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01368] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Received unknown leader epoch error in fetch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01370] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Unknown server error while fetching offset {} for topic-partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01373] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Encountered corrupt message when fetching offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01375] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ' for topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01378] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  'Unexpected error code ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01380] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ' while fetching at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01382] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  ' from topic-partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01385] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01386] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01386] In method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01397] For method handleOffsetOutOfRange arguments FetchPosition  fetchPosition|TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1397"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01397] The argument fetchPosition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01398] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String  'Fetch position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01398] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String  ' is out of range for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01400] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String  '{}, resetting offset' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01403] In method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String  '{}, raising error to the application since no reset policy is configured' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1412"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01412] For method parseRecord arguments TopicPartition  partition|RecordBatch  batch|Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1412"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01412] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1413"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01413] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1414"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01414] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01422] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01422] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01423] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01423] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01425] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01425] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01426] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01426] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01430] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01434] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  'Error deserializing key/value for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01435] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01435] In method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String  '. If needed, please seek past the record to continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1439"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01439] For method maybeLeaderEpoch arguments int  leaderEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01448] For method clearBufferedDataForUnassignedPartitions arguments Collection&lt;TopicPartition &gt;  assignedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1448"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01448] The argument assignedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01451] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01452] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN550849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01461] In method org.apache.kafka.clients.consumer.internals.Fetcher.clearBufferedDataForUnassignedPartitions@POLYN550849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01470] For method clearBufferedDataForUnassignedTopics arguments Collection&lt;String &gt;  assignedTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1470"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01470] The argument assignedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1481"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01481] For method sessionHandler arguments int  node"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1485"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01485] For method throttleTimeSensor arguments Metrics  metrics|FetcherMetricsRegistry  metricsRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1485"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01485] For method throttleTimeSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor metrics_sensorN552617"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1485"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01485] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1485"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01485] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01486] In method org.apache.kafka.clients.consumer.internals.Fetcher.throttleTimeSensor@POLYN552493 the MagicNumber/String  'fetch-throttle-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01535] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN554936 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01536"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01536] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN554936 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01541] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.drain@POLYN554936 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1546"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01546] For method maybeEnsureValid arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1546"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01546] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01551] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555458 the MagicNumber/String  'Record batch for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01551] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555458 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01552] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555458 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1557"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01557] For method maybeEnsureValid arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1557"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01557] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01562] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555992 the MagicNumber/String  'Record for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1562"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01562] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555992 the MagicNumber/String  ' at offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01563] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeEnsureValid@POLYN555992 the MagicNumber/String  ' is invalid, cause: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1569"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01569] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN556454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01571] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.maybeCloseRecordStream@POLYN556454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01575"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1575"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01575] For method nextFetchedRecord list of called methods Object monObjet|long currentBatch_nextOffsetN557116|int currentBatch_partitionLeaderEpochN557346|long currentBatch_producerIdN557843|long currentBatch_nextOffsetN558373|org.apache.kafka.common.utils.CloseableIterator&lt;org.apache.kafka.common.record.Record&gt; currentBatch_streamingIteratorN558467|org.apache.kafka.common.record.Record record_offsetN558940"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01618] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01576] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01577] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01586] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01589"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1589"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01589] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01608] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  'Skipping aborted record batch from partition {} with producerId {} and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01609"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01609] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  'offsets {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01629] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.nextFetchedRecord@POLYN556687 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1636"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01636] For method fetchRecords arguments int  maxRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01639"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01639] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01640] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01641] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01648] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01651] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01652] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01654] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01656] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01661] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01664] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01673] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  'Received exception when fetching the next record from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01674] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  '. If needed, please seek past the record to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01675] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.fetchRecords@POLYN559087 the MagicNumber/String  'continue consumption.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1680"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01680] For method consumeAbortedTransactionsUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01685] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01681] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.consumeAbortedTransactionsUpTo@POLYN561043 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1690"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01690] For method isBatchAborted arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1690"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01690] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1694"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01694] For method abortedTransactions arguments FetchResponseData.PartitionData  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1694"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01694] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01695] The same method call partition.abortedTransactions() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01695] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN561765 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1696"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01696] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.abortedTransactions@POLYN561765 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01705"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1705"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01705] For method containsAbortMarker arguments RecordBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01705"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1705"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01705] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01707] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN562404 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01711] In method org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.containsAbortMarker@POLYN562404 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1744"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01744] For method record  arguments TopicPartition  partition|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1744"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01744] For method record list of called methods Object monObjet|java.lang.String partition_topicN564293"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1744"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01744] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01764"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01764] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01751"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1751"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01751] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN563964 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01774"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1774"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01774] For method increment arguments int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1793"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01793] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1793"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01793] The argument metricsRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1797"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01797] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN566349 the MagicNumber/String  'bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01803"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1803"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01803] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN566349 the MagicNumber/String  'records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01808"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01808] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN566349 the MagicNumber/String  'fetch-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1814"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01814] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN566349 the MagicNumber/String  'records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01817] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.FetchManagerMetrics@POLYN566349 the MagicNumber/String  'records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1821"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01821] For method recordTopicFetchMetrics arguments String  topic|int  bytes|int  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1821"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01821] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01823] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '.bytes-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01825"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1825"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01825] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01826] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01826] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01826"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1826"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01826] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1839"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01839] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1839"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01839] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '.records-fetched' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01841"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01841] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01842] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01843] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01843] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01843] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN569019 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01854] For method maybeUpdateAssignment arguments SubscriptionState  subscription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01854] For method maybeUpdateAssignment list of called methods Object monObjet|int subscription_assignmentIdN571823|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; subscription_assignedPartitionsN572002|org.apache.kafka.common.MetricName partitionPreferredReadReplicaMetricNameN572753"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1854"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01854] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01868] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01872] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01871"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1871"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01871] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01872] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01872] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01882"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1882"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01882] For method recordPartitionLead arguments TopicPartition  tp|long  lead"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01882"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1882"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01882] For method recordPartitionLead list of called methods Object monObjet|java.lang.String partitionLeadMetricNameN573459|java.util.Map&lt;java.lang.String,java.lang.String&gt; topicPartitionTagsN573763"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01887"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01887] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLead@POLYN573258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01899"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1899"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01899] For method recordPartitionLag arguments TopicPartition  tp|long  lag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01899"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1899"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01899] For method recordPartitionLag list of called methods Object monObjet|java.lang.String partitionLagMetricNameN574770|java.util.Map&lt;java.lang.String,java.lang.String&gt; topicPartitionTagsN575074"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01904] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordPartitionLag@POLYN574569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01915"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1915"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01915] For method partitionLagMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01916"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1916"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01916] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLagMetricName@POLYN575893 the MagicNumber/String  '.records-lag' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1919"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01919] For method partitionLeadMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01920] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.partitionLeadMetricName@POLYN576030 the MagicNumber/String  '.records-lead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1923"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01923] For method partitionPreferredReadReplicaMetricName arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1923"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01923] For method partitionPreferredReadReplicaMetricName list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.String&gt; topicPartitionTagsN576298"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1928"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01928] For method topicPartitionTags arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1928"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01928] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01929] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN576511 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01930] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN576511 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01930] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN576511 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01930] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN576511 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01931"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01931] In method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.topicPartitionTags@POLYN576511 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01938"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1938"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01938] In method org.apache.kafka.clients.consumer.internals.Fetcher.close@POLYN577106 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01943"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1943"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01943] For method topicsForPartitions arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01943"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1943"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01943] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN563964"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN523188"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN519977"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01267] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01273] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Ignoring fetched records for partition {} since it no longer has valid position' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01278] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01279] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Discarding stale fetch response for partition {} since its offset {} does not match ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01280] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'the expected offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01281] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01284] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Preparing to read {} bytes of data for partition {} with offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1289"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01289] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01290] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 3 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01293] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'There are some messages at [Partition=Offset]: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01294] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String ' whose size is larger than the fetch size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1295"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01295] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String ' and hence cannot be returned. Please considering upgrading your broker to 0.10.1.0 or ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01296] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'newer to avoid this issue. Alternately, increase the fetch size on the client -using ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01297] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01301] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String '=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01301] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Failed to make progress reading messages at ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01302] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String '. Received a non-empty fetch response from the server, but no ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01303] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'complete records were found.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01307] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01308] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Updating high watermark for partition {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01312] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01313] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Updating log start offset for partition {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01317] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01318] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Updating last stable offset for partition {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01325"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1325"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01325] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Updating preferred read replica for partition {} to {}, set to expire at {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01331] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01337] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Error in fetch for partition {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01340"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1340"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01340] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Received unknown topic or partition error in fetch for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01343] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Received unknown topic ID error in fetch for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01346] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Received inconsistent topic ID error in fetch for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1353"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01353] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1354"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01354] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Discarding stale fetch response for partition {} since the fetched offset {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1355"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01355] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'does not match the current offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1360"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01360] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Unset the preferred read replica {} for partition {} since we got {} when fetching {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01365] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Not authorized to read from partition {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01368] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Received unknown leader epoch error in fetch for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01370] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Unknown server error while fetching offset {} for topic-partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1373"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01373] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Encountered corrupt message when fetching offset ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01375] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String ' for topic-partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01378] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 'Unexpected error code ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1380"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01380] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String ' while fetching at offset ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01382] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String ' from topic-partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01385] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01386] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01386] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01398] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String ' is out of range for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01398] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String 'Fetch position ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01400] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String '{}, resetting offset' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01403] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235 the MagicNumber/String '{}, raising error to the application since no reset policy is configured' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01751"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1751"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01751] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN563964 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#651"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00651] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#652"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00652] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#654"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00654] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#666"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00666] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#678"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00678] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String 'Skipping fetching records for assigned partition {} because it is paused' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#680"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00680] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00702] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Not returning fetched records for partition {} since it is no longer assigned' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#707"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00707] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Not returning fetched records for assigned partition {} since it is no longer fetchable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00711] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00712] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Missing position for fetchable partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#718"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00718] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Returning {} fetched records at offset {} for assigned partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00721] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00728] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Updating fetch position from {} to {} for partition {} and returning {} records from  poll-- ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#731"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00731] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#735"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00735] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#739"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00739] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00747"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#747"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00747] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Ignoring fetched records for {} at offset {} since the current position is {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#752"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00752] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158 the MagicNumber/String 'Draining fetched records for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01871"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1871"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01871] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01872] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1872"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01872] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01193] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01194] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String 'Missing position for fetchable partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01199] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String 'Requesting metadata update for partition {} since the position {} is missing the current leader node' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01211] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String 'Skipping fetch for partition {} because node {} is awaiting reconnect backoff' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01213] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String 'Skipping fetch for partition {} because previous request to {} has not been processed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01217] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01220] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01232] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN534520 the MagicNumber/String 'Added {} fetch request for partition {} at position {} to node {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 12 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 'Sending {} {} to broker {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 'Unable to find FetchSessionHandler for node {}. Ignoring fetch response.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00306] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00310] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 'Response for missing full request partition: partition={}; metadata={}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00314] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 'Response for missing session request partition: partition={}; metadata={}; toSend={}; toForget={}; toReplace={}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String 'Fetch {} at offset {} for partition {} returned fetch data {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00975"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#975"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00975] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN523188 the MagicNumber/String 'Leader for partition {} is unknown for fetching offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00986] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.groupListOffsetRequests@POLYN523188 the MagicNumber/String 'Leader {} for partition {} is unavailable for fetching offset until reconnect backoff expires' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1013"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01013] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1016"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01016] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String 'Sending ListOffsetRequest {} to broker {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1022"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01022] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.sendListOffsetRequest@POLYN525370 the MagicNumber/String 'Received ListOffsetResponse {} from broker {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#397"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00397] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00403] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String 'Topic metadata fetch included errors: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String '' is invalid' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#410"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00410] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String 'Topic '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00418] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String 'Unexpected error fetching metadata for topic ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00434] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.getTopicMetadata@POLYN494468 the MagicNumber/String 'Timeout expired while fetching topic metadata' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1053"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01053] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1054"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01054] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Unexpected partitionData response of length ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1058"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01058] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1060"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01060] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Handling v0 ListOffsetResponse response for {}. Fetched offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1063"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01063] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1068"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01068] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Handling ListOffsetResponse response for {}. Fetched offset {}, timestamp {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1084"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01084] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Cannot search by timestamp for partition {} because the message format version ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1085"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01085] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'is before 0.10.0' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1094"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01094] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Attempt to fetch offsets for partition {} failed due to {}, retrying.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1099"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01099] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Received unknown topic or partition error in ListOffset request for partition {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01106] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.handleListOffsetResponse@POLYN526916 the MagicNumber/String 'Attempt to fetch offsets for partition {} failed due to unexpected exception: {}, retrying.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#904"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00904] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN519977 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#905"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00905] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.maybeSetOffsetForLeaderException@POLYN519977 the MagicNumber/String 'Discarding error in OffsetsForLeaderEpoch because another error is pending' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01422] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01422] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01423] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01423] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01425] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01425] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01426] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1426"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01426] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01429] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1430"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01430] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01434] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String 'Error deserializing key/value for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01435] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String ' at offset ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.html#1435"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01435] In the recursive method org.apache.kafka.clients.consumer.internals.Fetcher.parseRecord@POLYN548068 the MagicNumber/String '. If needed, please seek past the record to continue consumption.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Fetcher.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
