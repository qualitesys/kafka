console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java 296 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Runnable"
 , "c2" : "org.apache.kafka.clients.producer.internals.Sender"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.Sender" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#106"
 , "c1" : "Sender"
 , "c2" : "Sender(LogContext;KafkaClient;ProducerMetadata;RecordAccumulator;boolean;int;short;int;SenderMetricsRegistry;Time;int;long;TransactionManager;ApiVersions)"
 , "c3" : "1"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#138"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "inFlightBatches(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#142"
 , "c1" : "void"
 , "c2" : "maybeRemoveFromInflightBatches(ProducerBatch)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00152"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#152"
 , "c1" : "void"
 , "c2" : "maybeRemoveAndDeallocateBatch(ProducerBatch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00158"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#158"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "getExpiredInflightBatches(long)"
 , "c3" : "9"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00192"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#192"
 , "c1" : "void"
 , "c2" : "addToInflightBatches(List<ProducerBatch>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00203"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#203"
 , "c1" : "void"
 , "c2" : "addToInflightBatches(Map<Integer,List<ProducerBatch>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00209"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#209"
 , "c1" : "boolean"
 , "c2" : "hasPendingTransactionalRequests()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00215"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#215"
 , "c1" : "void"
 , "c2" : "run()"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00273"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#273"
 , "c1" : "void"
 , "c2" : "runOnce()"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00306"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#306"
 , "c1" : "long"
 , "c2" : "sendProducerData(long)"
 , "c3" : "13"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00396"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#396"
 , "c1" : "boolean"
 , "c2" : "maybeSendAndPollTransactionalRequest()"
 , "c3" : "12"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00464"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#464"
 , "c1" : "void"
 , "c2" : "maybeFindCoordinatorAndRetry(TransactionManager.TxnRequestHandler)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00476"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#476"
 , "c1" : "void"
 , "c2" : "maybeAbortBatches(RuntimeException)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00484"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#484"
 , "c1" : "void"
 , "c2" : "initiateClose()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00493"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#493"
 , "c1" : "void"
 , "c2" : "forceClose()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00498"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#498"
 , "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00502"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#502"
 , "c1" : "boolean"
 , "c2" : "awaitNodeReady(Node;FindCoordinatorRequest.CoordinatorType)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00516"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#516"
 , "c1" : "void"
 , "c2" : "handleProduceResponse(ClientResponse;Map<TopicPartition,ProducerBatch>;long)"
 , "c3" : "10"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00563"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#563"
 , "c1" : "void"
 , "c2" : "completeBatch(ProducerBatch;ProduceResponse.PartitionResponse;long;long)"
 , "c3" : "14"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00626"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#626"
 , "c1" : "String"
 , "c2" : "formatErrMsg(ProduceResponse.PartitionResponse)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00632"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#632"
 , "c1" : "void"
 , "c2" : "reenqueueBatch(ProducerBatch;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00638"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#638"
 , "c1" : "void"
 , "c2" : "completeBatch(ProducerBatch;ProduceResponse.PartitionResponse)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00648"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#648"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;ProduceResponse.PartitionResponse;boolean)"
 , "c3" : "16"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00703"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#703"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;RuntimeException;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00711"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#711"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;RuntimeException;Function<Integer,RuntimeException>;boolean)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00729"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#729"
 , "c1" : "boolean"
 , "c2" : "canRetry(ProducerBatch;ProduceResponse.PartitionResponse;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00739"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#739"
 , "c1" : "void"
 , "c2" : "sendProduceRequests(Map<Integer,List<ProducerBatch>>;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00745"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#745"
 , "c1" : "void"
 , "c2" : "sendProduceRequest(long;int;short;int;List<ProducerBatch>)"
 , "c3" : "8"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00803"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#803"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00807"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#807"
 , "c1" : "Sensor"
 , "c2" : "throttleTimeSensor(SenderMetricsRegistry)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.svg" }

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
 , "c4" : "61"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "31"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "135"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.clients.producer.internals.Sender.Sender@POLYN299146 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method inFlightBatches arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method maybeRemoveFromInflightBatches arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00142] For method maybeRemoveFromInflightBatches list of called methods Object monObjet|org.apache.kafka.clients.NodeApiVersions inFlightBatches_getN301136"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.producer.internals.Sender.maybeRemoveFromInflightBatches@POLYN301022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method maybeRemoveAndDeallocateBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method getExpiredInflightBatches arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00162] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00163] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN301798 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN301798 the MagicNumber/String  ' batch created at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN301798 the MagicNumber/String  ' gets unexpected final state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00192] For method addToInflightBatches arguments List&lt;ProducerBatch &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#192"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00192] For method addToInflightBatches list of called methods Object monObjet|org.apache.kafka.clients.NodeApiVersions inFlightBatches_getN303808"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00194] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method addToInflightBatches arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#203"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00203] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.clients.producer.internals.Sender.hasPendingTransactionalRequests@POLYN304524 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00222] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00248] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Starting Kafka producer I/O thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Beginning shutdown of Kafka producer I/O thread, sending remaining records.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Aborting incomplete transaction due to shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Aborting incomplete transactional requests due to forced shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Aborting incomplete batches due to forced shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Failed to close network client' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String  'Shutdown of Kafka producer I/O thread has completed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#273"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00273] For method runOnce list of called methods Object monObjet|long sendProducerDataN308008"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String  'Authentication exception while processing transactional request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method sendProducerData arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00306] For method sendProducerData list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.clients.producer.internals.ProducerBatch&gt; getExpiredInflightBatchesN310592"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00328] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00349] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00365] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  'Requesting metadata update due to unknown leader topics from the batched records: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00363] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  'Expired {} batches in accumulator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  'Expiring ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  ' record(s) for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  ' ms has passed since batch creation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  'Nodes with data ready to send: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'Target node {} not ready within request timeout, will retry when node is ready.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'Coordinator not known for {}, will retry {} after finding coordinator.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'No nodes available to send requests, will poll and retry when until a node is ready.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'Sending transactional request {} to node {} with correlation ID {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'Disconnect from {} while trying to send request {}. Going ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#457"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00457] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  'to back off and retry.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#464"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00464] For method maybeFindCoordinatorAndRetry arguments TransactionManager.TxnRequestHandler  nextRequestHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#464"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00464] The argument nextRequestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00476] For method maybeAbortBatches arguments RuntimeException  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN316739 the MagicNumber/String  'Aborting producer batches due to fatal error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.clients.producer.internals.Sender.initiateClose@POLYN317108 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00494"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00494] In method org.apache.kafka.clients.producer.internals.Sender.forceClose@POLYN317377 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#502"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00502] For method awaitNodeReady arguments Node  node|FindCoordinatorRequest.CoordinatorType  coordinatorType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.clients.producer.internals.Sender.awaitNodeReady@POLYN317622 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#512"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00512] In method org.apache.kafka.clients.producer.internals.Sender.awaitNodeReady@POLYN317622 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00516] For method handleProduceResponse arguments ClientResponse  response|Map&lt;TopicPartition ,ProducerBatch &gt;  batches|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#516"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00516] For method handleProduceResponse list of called methods Object monObjet|org.apache.kafka.common.requests.RequestHeader response_requestHeaderN318315|int requestHeader_correlationIdN318390"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#516"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00516] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#516"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00516] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String  'Cancelled request with header {} due to node {} being disconnected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#523"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00523] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String  'Disconnected from node %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String  'Cancelled request {} due to a version mismatch with node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String  'Received produce response from node {} with correlation id {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#563"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00563] For method completeBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|long  correlationId|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#563"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00563] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#563"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00563] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#572"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00572] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'Got error produce response in correlation id {} on topic-partition {}, splitting and retrying ({} attempts left). Error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00585] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'Got error produce response with correlation id {} on topic-partition {}, retrying ({} attempts left). Error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#606"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00606] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'Received unknown topic or partition error in produce request on partition {}. The ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00607"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'topic-partition may not exist or the user may not have Describe access to it' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'Received invalid metadata error in produce request on partition {} due to {}. Going ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00611"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#611"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00611] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN321697 the MagicNumber/String  'to request metadata update now' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#626"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00626] For method formatErrMsg arguments ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#626"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00626] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324642 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324642 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324642 the MagicNumber/String  '. Error Message: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324642 the MagicNumber/String  '%s%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#632"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00632] For method reenqueueBatch arguments ProducerBatch  batch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#632"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00632] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00638"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#638"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00638] For method completeBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00638"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#638"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00638] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00638"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#638"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00638] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00639"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#648"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00648] For method failBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#648"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00648] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00649"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#649"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00649] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00668] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  'The producer is not authorized to do idempotent sends' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00659"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00659] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00679"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00679] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00694] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  'Failed to append record because it was part of a batch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326008 the MagicNumber/String  'which had one more more invalid records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#703"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00703] For method failBatch arguments ProducerBatch  batch|RuntimeException  topLevelException|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#711"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00711] For method failBatch arguments ProducerBatch  batch|RuntimeException  topLevelException|Function&lt;Integer ,RuntimeException &gt;  recordExceptions|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#712"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00712] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00717] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN328847 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#729"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00729] For method canRetry arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#729"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00729] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#729"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00729] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.clients.producer.internals.Sender.canRetry@POLYN329727 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#739"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00739] For method sendProduceRequests arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  collated|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#739"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00739] The argument collated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#745"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00745] For method sendProduceRequest arguments long  now|int  destination|short  acks|int  timeout|List&lt;ProducerBatch &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#745"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00745] For method sendProduceRequest list of called methods Object monObjet|byte batch_magicN331585|org.apache.kafka.common.record.MemoryRecords batch_recordsN331890|org.apache.kafka.common.record.MemoryRecords batch_recordsN332046|org.apache.kafka.common.requests.ProduceRequest.Builder ProduceRequest_forMagicN333204|java.lang.String Integer_toStringN333671"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#745"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00745] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#759"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00759] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#760"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00760] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00771"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00771] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00770] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00772] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#782"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00782] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00783"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#783"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00783] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00796] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String  'Sent produce request to {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#807"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00807] For method throttleTimeSensor arguments SenderMetricsRegistry  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#807"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00807] For method throttleTimeSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor metrics_sensorN334433"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#807"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00807] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00808"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#808"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00808] In method org.apache.kafka.clients.producer.internals.Sender.throttleTimeSensor@POLYN334336 the MagicNumber/String  'produce-throttle-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#828"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00828] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#828"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00828] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#828"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00828] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00832"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#832"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00832] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'batch-size' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#836"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00836] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#839"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00839] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'queue-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'request-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00847] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'records-per-request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00851"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#851"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00851] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#854"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00854] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#857"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00857] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'record-size' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#863"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00863] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00865"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#865"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00865] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335342 the MagicNumber/String  'batch-split-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#869"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00869] For method maybeRegisterTopicMetrics arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#869"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00869] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00872] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  '.records-per-batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00874"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#874"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00874] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00875"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#875"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00875] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00882"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00882"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#882"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00882] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  '.bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00888"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00888"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  '.compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  '.record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00899"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#899"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00899] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00899"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#899"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00899] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN338895 the MagicNumber/String  '.record-errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00907"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#907"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00907] For method updateProduceRequestMetrics arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00907"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#907"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00907] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00911"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#911"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00911] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00913] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00917] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00918] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00922] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00923] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00927] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00928] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00913] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00917] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00918] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00922] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00923] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00927] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00928] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00910"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00910] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00917] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00917"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#917"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00917] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  '.records-per-batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00922"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00922] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  '.bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00927] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00927] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN341893 the MagicNumber/String  '.compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#942"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00942] For method recordRetries arguments String  topic|int  count"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#942"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00942] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00945"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#945"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00945] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344109 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00945"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#945"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00945] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344109 the MagicNumber/String  '.record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00947"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#951"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00951] For method recordErrors arguments String  topic|int  count"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#951"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00951] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN344733 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN344733 the MagicNumber/String  '.record-errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00956"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN344733 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#960"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00960] For method recordLatency arguments String  node|long  latency"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00960"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#960"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00960] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00964"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00964] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345357 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00964"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00964] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345357 the MagicNumber/String  '.latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345357 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN316739"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00478] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN316739 the MagicNumber/String 'Aborting producer batches due to fatal error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#274"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00274] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN306975 the MagicNumber/String 'Authentication exception while processing transactional request' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#319"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00319] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 'Requesting metadata update due to unknown leader topics from the batched records: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00339] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00363] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 'Expired {} batches in accumulator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String ' record-s- for ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 'Expiring ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String ' ms has passed since batch creation' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String ':' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00367] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00368] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 'Nodes with data ready to send: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308165 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#770"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00770] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#772"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00772] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00782"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#782"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00782] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00783"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#783"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00783] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00796] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00799] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN330914 the MagicNumber/String 'Sent produce request to {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Starting Kafka producer I/O thread.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00223] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#227"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00227] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Beginning shutdown of Kafka producer I/O thread, sending remaining records.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00241] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Aborting incomplete transaction due to shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Aborting incomplete transactional requests due to forced shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#260"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00260] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Aborting incomplete batches due to forced shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00266] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Failed to close network client' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN304768 the MagicNumber/String 'Shutdown of Kafka producer I/O thread has completed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#520"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00520] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String 'Cancelled request with header {} due to node {} being disconnected' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#523"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00523] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String 'Disconnected from node %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#525"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00525] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#526"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00526] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String 'Cancelled request {} due to a version mismatch with node {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#531"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00531] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318135 the MagicNumber/String 'Received produce response from node {} with correlation id {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00409] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00418] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#421"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00421] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00429] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'Target node {} not ready within request timeout, will retry when node is ready.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00433] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#434"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00434] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'Coordinator not known for {}, will retry {} after finding coordinator.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#438"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00438] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'No nodes available to send requests, will poll and retry when until a node is ready.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00441] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'Sending transactional request {} to node {} with correlation ID {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'Disconnect from {} while trying to send request {}. Going ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00457"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#457"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00457] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String 'to back off and retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312625 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
