console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java 248 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.xml" 
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
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#71"
 , "c1" : "RecordAccumulator"
 , "c2" : "RecordAccumulator(LogContext;int;CompressionType;int;long;int;PartitionerConfig;Metrics;String;Time;ApiVersions;TransactionManager;BufferPool)"
 , "c3" : "1"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#107"
 , "c1" : "RecordAccumulator"
 , "c2" : "RecordAccumulator(LogContext;int;CompressionType;int;long;int;Metrics;String;Time;ApiVersions;TransactionManager;BufferPool)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#134"
 , "c1" : "void"
 , "c2" : "registerMetrics(Metrics;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#151"
 , "c1" : "void"
 , "c2" : "setPartition(AppendCallbacks;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#157"
 , "c1" : "RecordAppendResult"
 , "c2" : "append(String;int;long;byte[];byte[];Header[];AppendCallbacks;long;boolean;long;Cluster)"
 , "c3" : "11"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00246"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#246"
 , "c1" : "RecordAppendResult"
 , "c2" : "appendNewBatch(String;int;Deque<ProducerBatch>;long;byte[];byte[];Header[];AppendCallbacks;ByteBuffer)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00276"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#276"
 , "c1" : "MemoryRecordsBuilder"
 , "c2" : "recordsBuilder(ByteBuffer;byte)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00285"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#285"
 , "c1" : "RecordAppendResult"
 , "c2" : "tryAppend(long;byte[];byte[];Header[];Callback;Deque<ProducerBatch>;long)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00303"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#303"
 , "c1" : "boolean"
 , "c2" : "isMuted(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00307"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#307"
 , "c1" : "void"
 , "c2" : "resetNextBatchExpiryTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00311"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#311"
 , "c1" : "void"
 , "c2" : "maybeUpdateNextBatchExpiryTime(ProducerBatch)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00323"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#323"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "expiredBatches(long)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00346"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#346"
 , "c1" : "long"
 , "c2" : "getDeliveryTimeoutMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00351"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#351"
 , "c1" : "void"
 , "c2" : "reenqueue(ProducerBatch;long)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00363"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#363"
 , "c1" : "int"
 , "c2" : "splitAndReenqueue(ProducerBatch)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00399"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#399"
 , "c1" : "void"
 , "c2" : "insertInSequenceOrder(Deque<ProducerBatch>;ProducerBatch)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00442"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#442"
 , "c1" : "long"
 , "c2" : "batchReady(long;boolean;TopicPartition;Node;long;boolean;boolean;long;Set<Node>)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00469"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c1" : "long"
 , "c2" : "partitionReady(Cluster;long;String;TopicInfo;long;Set<Node>;Set<String>)"
 , "c3" : "11"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00560"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#560"
 , "c1" : "ReadyCheckResult"
 , "c2" : "ready(Cluster;long)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00574"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#574"
 , "c1" : "boolean"
 , "c2" : "hasUndrained()"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00586"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#586"
 , "c1" : "boolean"
 , "c2" : "shouldStopDrainBatchesForPartition(ProducerBatch;TopicPartition)"
 , "c3" : "8"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00624"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "drainBatchesForOneNode(Cluster;Node;int;long)"
 , "c3" : "11"
 , "c4" : "33"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00708"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#708"
 , "c1" : "int"
 , "c2" : "getDrainIndex(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00712"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c1" : "void"
 , "c2" : "updateDrainIndex(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00717"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#717"
 , "c1" : "Map<Integer,List<ProducerBatch>>"
 , "c2" : "drain(Cluster;Set<Node>;int;long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00729"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#729"
 , "c1" : "void"
 , "c2" : "updateNodeLatencyStats(Integer;long;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00750"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#750"
 , "c1" : "NodeLatencyStats"
 , "c2" : "getNodeLatencyStats(Integer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00755"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#755"
 , "c1" : "BuiltInPartitioner"
 , "c2" : "getBuiltInPartitioner(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00760"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#760"
 , "c1" : "long"
 , "c2" : "nextExpiryTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00765"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#765"
 , "c1" : "Deque<ProducerBatch>"
 , "c2" : "getDeque(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00773"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#773"
 , "c1" : "Deque<ProducerBatch>"
 , "c2" : "getOrCreateDeque(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00779"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#779"
 , "c1" : "void"
 , "c2" : "deallocate(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00788"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#788"
 , "c1" : "long"
 , "c2" : "bufferPoolAvailableMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00793"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#793"
 , "c1" : "boolean"
 , "c2" : "flushInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00798"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#798"
 , "c1" : "void"
 , "c2" : "beginFlush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00803"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#803"
 , "c1" : "boolean"
 , "c2" : "appendsInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00808"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#808"
 , "c1" : "void"
 , "c2" : "awaitFlushCompletion()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00822"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#822"
 , "c1" : "boolean"
 , "c2" : "hasIncomplete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00827"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#827"
 , "c1" : "void"
 , "c2" : "abortIncompleteBatches()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00843"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#843"
 , "c1" : "void"
 , "c2" : "abortBatches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00848"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#848"
 , "c1" : "void"
 , "c2" : "abortBatches(RuntimeException)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00861"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#861"
 , "c1" : "void"
 , "c2" : "abortUndrainedBatches(RuntimeException)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00879"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#879"
 , "c1" : "void"
 , "c2" : "mutePartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00883"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#883"
 , "c1" : "void"
 , "c2" : "unmutePartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00888"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#888"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339.dq" }
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
 , "c4" : "23"
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
 , "c4" : "3"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "6"
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
 , "c4" : "10"
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
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00044] The class RecordAccumulator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument partitionerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN318378 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN318378 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAccumulator@POLYN318378 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method registerMetrics arguments Metrics  metrics|String  metricGrpName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'waiting-threads' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'The number of user threads blocked waiting for buffer memory to enqueue their records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'buffer-total-bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'The maximum amount of buffer memory the client can use (whether or not it is currently used).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'buffer-available-bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.registerMetrics@POLYN321665 the MagicNumber/String  'The total amount of buffer memory that is not being used (either unallocated or in the free list).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method setPartition arguments AppendCallbacks  callbacks|int  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN322479 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method append arguments String  topic|int  partition|long  timestamp|byte[]  key|byte[]  value|Header[]  headers|AppendCallbacks  callbacks|long  maxTimeToBlock|boolean  abortOnNewBatch|long  nowMs|Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00182] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00196] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00231] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#197"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00197] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#224"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00224] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  'Partition {} for topic {} switched by a concurrent append, retrying' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  'Allocating a new {} byte message buffer for topic {} partition {} with remaining timeout {}ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  'Partition {} for topic {} switched by a concurrent append, retrying' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method appendNewBatch arguments String  topic|int  partition|Deque&lt;ProducerBatch &gt;  dq|long  timestamp|byte[]  key|byte[]  value|Header[]  headers|AppendCallbacks  callbacks|ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00246] For method appendNewBatch list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.RecordAccumulator.RecordAppendResult tryAppendN328371"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#248"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00248] The argument dq is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN327897 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN327897 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN327897 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendNewBatch@POLYN327897 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method recordsBuilder arguments ByteBuffer  buffer|byte  maxUsableMagic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN329655 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN329655 the MagicNumber/String  'Attempting to use idempotence with a broker which does not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN329655 the MagicNumber/String  'support the required message format (v2). The broker must be version 0.11 or later.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.recordsBuilder@POLYN329655 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method tryAppend arguments long  timestamp|byte[]  key|byte[]  value|Header[]  headers|Callback  callback|Deque&lt;ProducerBatch &gt;  deque|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00285] For method tryAppend list of called methods Object monObjet|int last_estimatedSizeInBytesN331002|org.apache.kafka.clients.producer.internals.FutureRecordMetadata last_tryAppendN331077|int last_estimatedSizeInBytesN331425"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#286"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00286] The argument deque is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  'Producer closed while send in progress' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#303"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00303] For method isMuted arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00311] For method maybeUpdateNextBatchExpiryTime arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#311"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00311] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN332032 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN332032 the MagicNumber/String  'Skipping next batch expiry time update due to addition overflow: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.maybeUpdateNextBatchExpiryTime@POLYN332032 the MagicNumber/String  'batch.createMs={}, deliveryTimeoutMs={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method expiredBatches arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00326] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#328"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00328] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#351"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00351] For method reenqueue arguments ProducerBatch  batch|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#351"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00351] For method reenqueue list of called methods Object monObjet|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getOrCreateDequeN334078"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#351"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00351] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#354"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00354] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.reenqueue@POLYN333868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00363] For method splitAndReenqueue arguments ProducerBatch  bigBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00363] For method splitAndReenqueue list of called methods Object monObjet|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; bigBatch_splitN334880|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getOrCreateDequeN335080"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#363"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00363] The argument bigBatch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00373] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#376"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00376] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN334517 the MagicNumber/String  1.0f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN334517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method insertInSequenceOrder arguments Deque&lt;ProducerBatch &gt;  deque|ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#399"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00399] The argument deque is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#399"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00399] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00420] The same method call deque.peekFirst()deque.peekFirst()batch.baseSequence() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00420] The same method call deque.peekFirst()batch.baseSequence() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'Trying to re-enqueue a batch which doesn't have a sequence even ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'though idempotency is enabled.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'We are re-enqueueing a batch which is not tracked as part of the in flight ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'requests. batch.topicPartition: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  '; batch.baseSequence: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'Reordered incoming batch with sequence {} for partition {}. It was placed in the queue at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  'position {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.insertInSequenceOrder@POLYN335774 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#442"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00442] For method batchReady arguments long  nowMs|boolean  exhausted|TopicPartition  part|Node  leader|long  waitedTimeMs|boolean  backingOff|boolean  full|long  nextReadyCheckDelayMs|Set&lt;Node &gt;  readyNodes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#444"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00444] The argument readyNodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.batchReady@POLYN338119 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.batchReady@POLYN338119 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00469] For method partitionReady arguments Cluster  cluster|long  nowMs|String  topic|TopicInfo  topicInfo|long  nextReadyCheckDelayMs|Set&lt;Node &gt;  readyNodes|Set&lt;String &gt;  unknownLeaderTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00469] For method partitionReady list of called methods Object monObjet|org.apache.kafka.common.Node cluster_leaderForN341341|int part_partitionN341686|long batch_waitedTimeMsN342205|int batch_attemptsN342298|long batchReadyN343417"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#469"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00469] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#470"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00470] The argument topicInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#471"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00471] The argument unknownLeaderTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00489] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00492] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00499] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00515] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00536"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00536] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#509"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00509] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00474"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00533] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00555] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN339952 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#560"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00560] For method ready arguments Cluster  cluster|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#560"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00560] For method ready list of called methods Object monObjet|long partitionReadyN345308"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00567] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00576"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#576"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00576] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#577"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00577] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00579"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#579"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00579] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.hasUndrained@POLYN345695 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00583"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#583"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00583] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.hasUndrained@POLYN345695 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#586"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00586] For method shouldStopDrainBatchesForPartition arguments ProducerBatch  first|TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#586"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00586] The argument first is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00590] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00595"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00609"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00609] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00617] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.shouldStopDrainBatchesForPartition@POLYN346152 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00624] For method drainBatchesForOneNode arguments Cluster  cluster|Node  node|int  maxSize|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00624] For method drainBatchesForOneNode list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_partitionsForNodeN347671|int getDrainIndexN347890|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getDequeN348733|int first_attemptsN349117|org.apache.kafka.common.record.MemoryRecords batch_recordsN350811"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00624] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#624"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00624] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00632] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00633] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00640] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00644"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00644] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00669] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#645"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00645] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00635] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  'Assigned producerId {} and producerEpoch {} to batch with base sequence ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00689"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#689"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00689] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN347421 the MagicNumber/String  '{} being sent to partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#708"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00708] For method getDrainIndex arguments String  idString"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00709"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#709"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00709] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDrainIndex@POLYN351117 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#712"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00712] For method updateDrainIndex arguments String  idString|int  drainIndex"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#717"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00717] For method drain arguments Cluster  cluster|Set&lt;Node &gt;  nodes|int  maxSize|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#717"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00717] For method drain list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; drainBatchesForOneNodeN352461"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#717"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00717] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00723"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#723"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00723] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#729"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00729] For method updateNodeLatencyStats arguments Integer  nodeId|long  nowMs|boolean  canDrain"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.updateNodeLatencyStats@POLYN352732 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#750"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00750] For method getNodeLatencyStats arguments Integer  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#755"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00755] For method getBuiltInPartitioner arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#765"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00765] For method getDeque arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#765"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00765] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#767"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00767] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDeque@POLYN353742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00768"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#768"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00768] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.getDeque@POLYN353742 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#773"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00773] For method getOrCreateDeque arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#773"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00773] The argument tp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00779"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#779"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00779] For method deallocate arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00779"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#779"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00779] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.flushInProgress@POLYN355303 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00804"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#804"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00804] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.appendsInProgress@POLYN355645 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00844] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN356702 the MagicNumber/String  'Producer is closed forcefully.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00848"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#848"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00848] For method abortBatches arguments RuntimeException  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00848"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#848"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00848] For method abortBatches list of called methods Object monObjet|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getDequeN357111"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00850] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00851"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#851"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00851] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00861"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#861"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00861] For method abortUndrainedBatches arguments RuntimeException  reason"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00861"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#861"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00861] For method abortUndrainedBatches list of called methods Object monObjet|java.util.Deque&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getDequeN357730"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00863] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00865"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#865"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00865] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00864] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN357522 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#866"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00866] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN357522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#866"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00866] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN357522 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00867"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#867"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00867] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN357522 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00879"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#879"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00879] For method mutePartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#883"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00883] For method unmutePartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00889"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00889] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.close@POLYN358859 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00894] The class PartitionerConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.PartitionerConfig.PartitionerConfig@POLYN359656 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.producer.internals.RecordAccumulator.PartitionerConfig.PartitionerConfig@POLYN359656 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00910"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00910] The class RecordAppendResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00937] The class ReadyCheckResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00950"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00950] The class TopicInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#960"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00960] The class NodeLatencyStats contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00961"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00961] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00962] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00560] Public method ready is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#574"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00574] Public method hasUndrained is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#717"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00717] Public method drain is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00750"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#750"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00750] Public method getNodeLatencyStats is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00755] Public method getBuiltInPartitioner is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#760"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00760] Public method nextExpiryTimeMs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#765"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00765] Public method getDeque is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00307] Public method resetNextBatchExpiryTime is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN322479"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00188] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00200] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String 'Partition {} for topic {} switched by a concurrent append, retrying' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00205] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00220] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String 'Allocating a new {} byte message buffer for topic {} partition {} with remaining timeout {}ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00227] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String 'Partition {} for topic {} switched by a concurrent append, retrying' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00234] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN323339 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN322479 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String 'Producer closed while send in progress' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#290"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00290] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#297"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00297] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method org.apache.kafka.clients.producer.internals.RecordAccumulator.tryAppend@POLYN330461 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
