console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java 246 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.RecordAccumulator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.RecordAccumulator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#112"
 , "c1" : "RecordAccumulator"
 , "c2" : "RecordAccumulator(LogContext;int;CompressionType;int;long;int;PartitionerConfig;Metrics;String;Time;ApiVersions;TransactionManager;BufferPool)"
 , "c3" : "1"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#167"
 , "c1" : "RecordAccumulator"
 , "c2" : "RecordAccumulator(LogContext;int;CompressionType;int;long;int;Metrics;String;Time;ApiVersions;TransactionManager;BufferPool)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00194"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#194"
 , "c1" : "void"
 , "c2" : "registerMetrics(Metrics;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00211"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#211"
 , "c1" : "void"
 , "c2" : "setPartition(AppendCallbacks;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00236"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#236"
 , "c1" : "RecordAppendResult"
 , "c2" : "append(String;int;long;byte[];byte[];Header[];AppendCallbacks;long;boolean;long;Cluster)"
 , "c3" : "11"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00337"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#337"
 , "c1" : "RecordAppendResult"
 , "c2" : "appendNewBatch(String;int;Deque&lt;ProducerBatch&gt;;long;byte[];byte[];Header[];AppendCallbacks;ByteBuffer)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00367"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#367"
 , "c1" : "MemoryRecordsBuilder"
 , "c2" : "recordsBuilder(ByteBuffer;byte)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00383"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#383"
 , "c1" : "RecordAppendResult"
 , "c2" : "tryAppend(long;byte[];byte[];Header[];Callback;Deque&lt;ProducerBatch&gt;;long)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00401"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#401"
 , "c1" : "boolean"
 , "c2" : "isMuted(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00405"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#405"
 , "c1" : "void"
 , "c2" : "resetNextBatchExpiryTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00409"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#409"
 , "c1" : "void"
 , "c2" : "maybeUpdateNextBatchExpiryTime(ProducerBatch)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00423"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#423"
 , "c1" : "List&lt;ProducerBatch&gt;"
 , "c2" : "expiredBatches(long)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00446"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#446"
 , "c1" : "long"
 , "c2" : "getDeliveryTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00454"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#454"
 , "c1" : "void"
 , "c2" : "reenqueue(ProducerBatch;long)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00469"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c1" : "int"
 , "c2" : "splitAndReenqueue(ProducerBatch)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00505"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#505"
 , "c1" : "void"
 , "c2" : "insertInSequenceOrder(Deque&lt;ProducerBatch&gt;;ProducerBatch)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00561"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#561"
 , "c1" : "long"
 , "c2" : "batchReady(long;boolean;TopicPartition;Node;long;boolean;boolean;long;Set&lt;Node&gt;)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00601"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#601"
 , "c1" : "long"
 , "c2" : "partitionReady(Cluster;long;String;TopicInfo;long;Set&lt;Node&gt;;Set&lt;String&gt;)"
 , "c3" : "11"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00712"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c1" : "ReadyCheckResult"
 , "c2" : "ready(Cluster;long)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00728"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#728"
 , "c1" : "boolean"
 , "c2" : "hasUndrained()"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00740"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#740"
 , "c1" : "boolean"
 , "c2" : "shouldStopDrainBatchesForPartition(ProducerBatch;TopicPartition)"
 , "c3" : "8"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00778"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#778"
 , "c1" : "List&lt;ProducerBatch&gt;"
 , "c2" : "drainBatchesForOneNode(Cluster;Node;int;long)"
 , "c3" : "11"
 , "c4" : "33"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00862"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#862"
 , "c1" : "int"
 , "c2" : "getDrainIndex(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00866"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#866"
 , "c1" : "void"
 , "c2" : "updateDrainIndex(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00880"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#880"
 , "c1" : "Map&lt;Integer,List&lt;ProducerBatch&gt;&gt;"
 , "c2" : "drain(Cluster;Set&lt;Node&gt;;int;long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00892"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#892"
 , "c1" : "void"
 , "c2" : "updateNodeLatencyStats(Integer;long;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00913"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#913"
 , "c1" : "NodeLatencyStats"
 , "c2" : "getNodeLatencyStats(Integer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00918"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#918"
 , "c1" : "BuiltInPartitioner"
 , "c2" : "getBuiltInPartitioner(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00925"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#925"
 , "c1" : "long"
 , "c2" : "nextExpiryTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00930"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#930"
 , "c1" : "Deque&lt;ProducerBatch&gt;"
 , "c2" : "getDeque(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00940"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#940"
 , "c1" : "Deque&lt;ProducerBatch&gt;"
 , "c2" : "getOrCreateDeque(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00948"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#948"
 , "c1" : "void"
 , "c2" : "deallocate(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00959"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#959"
 , "c1" : "long"
 , "c2" : "bufferPoolAvailableMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00968"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#968"
 , "c1" : "boolean"
 , "c2" : "flushInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00975"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#975"
 , "c1" : "void"
 , "c2" : "beginFlush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00982"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#982"
 , "c1" : "boolean"
 , "c2" : "appendsInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00989"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#989"
 , "c1" : "void"
 , "c2" : "awaitFlushCompletion()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01005"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1005"
 , "c1" : "boolean"
 , "c2" : "hasIncomplete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01013"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1013"
 , "c1" : "void"
 , "c2" : "abortIncompleteBatches()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1031"
 , "c1" : "void"
 , "c2" : "abortBatches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1038"
 , "c1" : "void"
 , "c2" : "abortBatches(RuntimeException)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1053"
 , "c1" : "void"
 , "c2" : "abortUndrainedBatches(RuntimeException)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1071"
 , "c1" : "void"
 , "c2" : "mutePartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1075"
 , "c1" : "void"
 , "c2" : "unmutePartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1082"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311.dq" }
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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "22"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "21"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "25"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "108"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "30"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument partitionerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN329350 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN329350 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN329350 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method registerMetrics arguments Metrics  metrics|String  metricGrpName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#194"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00194] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'waiting-threads' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'The number of user threads blocked waiting for buffer memory to enqueue their records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'buffer-total-bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'The maximum amount of buffer memory the client can use (whether or not it is currently used).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'buffer-available-bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN332637 the MagicNumber/String  'The total amount of buffer memory that is not being used (either unallocated or in the free list).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method setPartition arguments AppendCallbacks  callbacks|int  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN333451 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method append arguments String  topic|int  partition|long  timestamp|byte[]  key|byte[]  value|Header[]  headers|AppendCallbacks  callbacks|long  maxTimeToBlock|boolean  abortOnNewBatch|long  nowMs|Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00236] For method append list of called methods Object monObjet|V topicInfoMap_computeIfAbsentN334690"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00275] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00283] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00310] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#276"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00276] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#303"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00303] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  'Partition {} for topic {} switched by a concurrent append, retrying' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  'Allocating a new {} byte message buffer for topic {} partition {} with remaining timeout {}ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  'Partition {} for topic {} switched by a concurrent append, retrying' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00337] For method appendNewBatch arguments String  topic|int  partition|Deque&lt;ProducerBatch &gt;  dq|long  timestamp|byte[]  key|byte[]  value|Header[]  headers|AppendCallbacks  callbacks|ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#337"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00337] For method appendNewBatch list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAppendResult tryAppendN339365"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#339"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00339] The argument dq is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN338887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN338887 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN338887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN338887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#367"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00367] For method recordsBuilder arguments ByteBuffer  buffer|byte  maxUsableMagic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN340655 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN340655 the MagicNumber/String  'Attempting to use idempotence with a broker which does not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN340655 the MagicNumber/String  'support the required message format (v2). The broker must be version 0.11 or later.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN340655 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#383"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00383] For method tryAppend arguments long  timestamp|byte[]  key|byte[]  value|Header[]  headers|Callback  callback|Deque&lt;ProducerBatch &gt;  deque|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#383"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00383] For method tryAppend list of called methods Object monObjet|int last_estimatedSizeInBytesN342006|org.apache.kafka.clients.producer.internals.FutureRecordMetadata last_tryAppendN342083|int last_estimatedSizeInBytesN342433"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#384"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument deque is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  'Producer closed while send in progress' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00401] For method isMuted arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#409"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00409] For method maybeUpdateNextBatchExpiryTime arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#409"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00409] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN343040 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN343040 the MagicNumber/String  'Skipping next batch expiry time update due to addition overflow: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN343040 the MagicNumber/String  'batch.createMs={}, deliveryTimeoutMs={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#423"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00423] For method expiredBatches arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00426] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00430] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00430] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#428"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00428] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00430] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#454"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00454] For method reenqueue arguments ProducerBatch  batch|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#454"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00454] For method reenqueue list of called methods Object monObjet|java.util.Deque getOrCreateDequeN345092"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#454"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00454] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#457"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00457] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.reenqueue@POLYN344880 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00469] For method splitAndReenqueue arguments ProducerBatch  bigBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00469] For method splitAndReenqueue list of called methods Object monObjet|java.util.Deque bigBatch_splitN345896"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00469] The argument bigBatch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00479] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00482"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#482"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00482] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN345531 the MagicNumber/String  1.0f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN345531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#503"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00503] For method insertInSequenceOrder arguments Deque&lt;ProducerBatch &gt;  deque|ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#503"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00503] For method insertInSequenceOrder list of called methods Object monObjet|int orderedBatches_sizeN348415"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#505"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00505] The argument deque is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#505"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00505] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00526] The same method call deque.peekFirst()deque.peekFirst()batch.baseSequence() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00526] The same method call deque.peekFirst()batch.baseSequence() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'Trying to re-enqueue a batch which doesn't have a sequence even ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'though idempotency is enabled.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'We are re-enqueueing a batch which is not tracked as part of the in flight ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'requests. batch.topicPartition: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  '; batch.baseSequence: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'Reordered incoming batch with sequence {} for partition {}. It was placed in the queue at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  'position {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN346796 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#561"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00561] For method batchReady arguments long  nowMs|boolean  exhausted|TopicPartition  part|Node  leader|long  waitedTimeMs|boolean  backingOff|boolean  full|long  nextReadyCheckDelayMs|Set&lt;Node &gt;  readyNodes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#563"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00563] The argument readyNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.batchReady@POLYN349145 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.batchReady@POLYN349145 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#601"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00601] For method partitionReady arguments Cluster  cluster|long  nowMs|String  topic|TopicInfo  topicInfo|long  nextReadyCheckDelayMs|Set&lt;Node &gt;  readyNodes|Set&lt;String &gt;  unknownLeaderTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#601"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00601] For method partitionReady list of called methods Object monObjet|org.apache.kafka.common.Node cluster_leaderForN352391|int part_partitionN352736|long batch_waitedTimeMsN353267|int batch_attemptsN353360|int deque_sizeN353502|V nodeStats_getN354099|long batchReadyN354483"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#601"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00601] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#602"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00602] The argument topicInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#603"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00603] The argument unknownLeaderTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00621] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00624] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#631"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00631] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00647] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00668] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#641"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00641] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00607"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00619"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#619"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00619] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00658] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00663"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00687"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#687"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00687] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN350988 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00712] For method ready arguments Cluster  cluster|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00712] For method ready list of called methods Object monObjet|long partitionReadyN356382"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00719"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00719] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00730"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00730] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#731"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00731] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.hasUndrained@POLYN356769 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00737] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.hasUndrained@POLYN356769 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#740"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00740] For method shouldStopDrainBatchesForPartition arguments ProducerBatch  first|TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#740"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00740] For method shouldStopDrainBatchesForPartition list of called methods Object monObjet|org.apache.kafka.common.utils.ProducerIdAndEpoch transactionManager_producerIdAndEpochN357596|int transactionManager_firstInFlightSequenceN358155"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#740"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00740] The argument first is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00741"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00741] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#742"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00742] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#744"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00744] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00749"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#749"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00749] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00763"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#763"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00763] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00771"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00771] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00775] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN357226 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#778"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00778] For method drainBatchesForOneNode arguments Cluster  cluster|Node  node|int  maxSize|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#778"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00778] For method drainBatchesForOneNode list of called methods Object monObjet|java.util.List cluster_partitionsForNodeN358753"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#778"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00778] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#778"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00778] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00786] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00787] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00794] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#798"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00798] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00801"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00801] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00823] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#799"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00799] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00779"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00779] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00789] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00795"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#795"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00795] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#802"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00802] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00806"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#806"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00806] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00822"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00822] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00824] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00824] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00825"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#825"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00825] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  'Assigned producerId {} and producerEpoch {} to batch with base sequence ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 the MagicNumber/String  '{} being sent to partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#862"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00862] For method getDrainIndex arguments String  idString"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDrainIndex@POLYN362221 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#866"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00866] For method updateDrainIndex arguments String  idString|int  drainIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#880"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00880] For method drain arguments Cluster  cluster|Set&lt;Node &gt;  nodes|int  maxSize|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#880"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00880] For method drain list of called methods Object monObjet|java.util.List drainBatchesForOneNodeN363569"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#880"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00880] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00886"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00886] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#892"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00892] For method updateNodeLatencyStats arguments Integer  nodeId|long  nowMs|boolean  canDrain"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#892"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00892] For method updateNodeLatencyStats list of called methods Object monObjet|V nodeStats_computeIfAbsentN364057"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.updateNodeLatencyStats@POLYN363840 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#913"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00913] For method getNodeLatencyStats arguments Integer  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#918"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00918] For method getBuiltInPartitioner arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#930"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00930] For method getDeque arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#930"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00930] For method getDeque list of called methods Object monObjet|V topicInfoMap_getN364951"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#930"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00930] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#932"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00932] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDeque@POLYN364852 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00933"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00933] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDeque@POLYN364852 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#940"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00940] For method getOrCreateDeque arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#940"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00940] For method getOrCreateDeque list of called methods Object monObjet|V topicInfoMap_computeIfAbsentN365421"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#940"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00940] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#948"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00948] For method deallocate arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#948"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00948] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00969"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.flushInProgress@POLYN366417 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendsInProgress@POLYN366759 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1032"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01032] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN367816 the MagicNumber/String  'Producer is closed forcefully.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1038"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01038] For method abortBatches arguments RuntimeException  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1038"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01038] For method abortBatches list of called methods Object monObjet|java.util.Deque getDequeN368227"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01040] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1041"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01041] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1053"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01053] For method abortUndrainedBatches arguments RuntimeException  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1053"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01053] For method abortUndrainedBatches list of called methods Object monObjet|java.util.Deque getDequeN368848"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1055"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1057"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01057] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1056"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01056] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN368638 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN368638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN368638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01059] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN368638 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1071"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01071] For method mutePartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1075"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01075] For method unmutePartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1083"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01083] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.close@POLYN369979 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.PartitionerConfig.PartitionerConfig@POLYN370776 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.PartitionerConfig.PartitionerConfig@POLYN370776 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[01179] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[01180] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00712] Public method ready is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#728"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00728] Public method hasUndrained is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#880"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00880] Public method drain is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#913"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00913] Public method getNodeLatencyStats is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#918"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00918] Public method getBuiltInPartitioner is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00925] Public method nextExpiryTimeMs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#930"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00930] Public method getDeque is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00405] Public method resetNextBatchExpiryTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String 'Partition {} for topic {} switched by a concurrent append, retrying' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00284] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00299] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String 'Allocating a new {} byte message buffer for topic {} partition {} with remaining timeout {}ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00306] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String 'Partition {} for topic {} switched by a concurrent append, retrying' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00386] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String 'Producer closed while send in progress' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00388] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00391] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00398] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN341461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
