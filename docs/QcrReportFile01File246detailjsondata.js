console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java 286 rule violations " 
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
 , "c5" : "00124"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#124"
 , "c1" : "Sender"
 , "c2" : "Sender(LogContext;KafkaClient;ProducerMetadata;RecordAccumulator;boolean;int;short;int;SenderMetricsRegistry;Time;int;long;TransactionManager;ApiVersions)"
 , "c3" : "1"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#156"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "inFlightBatches(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#160"
 , "c1" : "void"
 , "c2" : "maybeRemoveFromInflightBatches(ProducerBatch)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00170"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#170"
 , "c1" : "void"
 , "c2" : "maybeRemoveAndDeallocateBatch(ProducerBatch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#178"
 , "c1" : "List<ProducerBatch>"
 , "c2" : "getExpiredInflightBatches(long)"
 , "c3" : "9"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00212"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#212"
 , "c1" : "void"
 , "c2" : "addToInflightBatches(List<ProducerBatch>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00223"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#223"
 , "c1" : "void"
 , "c2" : "addToInflightBatches(Map<Integer,List<ProducerBatch>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00229"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#229"
 , "c1" : "boolean"
 , "c2" : "hasPendingTransactionalRequests()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00237"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#237"
 , "c1" : "void"
 , "c2" : "run()"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00298"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#298"
 , "c1" : "void"
 , "c2" : "runOnce()"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00331"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#331"
 , "c1" : "long"
 , "c2" : "sendProducerData(long)"
 , "c3" : "13"
 , "c4" : "31"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00423"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#423"
 , "c1" : "boolean"
 , "c2" : "maybeSendAndPollTransactionalRequest()"
 , "c3" : "12"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00491"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#491"
 , "c1" : "void"
 , "c2" : "maybeFindCoordinatorAndRetry(TransactionManager.TxnRequestHandler)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00503"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#503"
 , "c1" : "void"
 , "c2" : "maybeAbortBatches(RuntimeException)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00513"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#513"
 , "c1" : "void"
 , "c2" : "initiateClose()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00524"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#524"
 , "c1" : "void"
 , "c2" : "forceClose()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00529"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#529"
 , "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00533"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#533"
 , "c1" : "boolean"
 , "c2" : "awaitNodeReady(Node;FindCoordinatorRequest.CoordinatorType)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00549"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#549"
 , "c1" : "void"
 , "c2" : "handleProduceResponse(ClientResponse;Map<TopicPartition,ProducerBatch>;long)"
 , "c3" : "10"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00603"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#603"
 , "c1" : "void"
 , "c2" : "completeBatch(ProducerBatch;ProduceResponse.PartitionResponse;long;long)"
 , "c3" : "14"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00669"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#669"
 , "c1" : "String"
 , "c2" : "formatErrMsg(ProduceResponse.PartitionResponse)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00675"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#675"
 , "c1" : "void"
 , "c2" : "reenqueueBatch(ProducerBatch;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00681"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#681"
 , "c1" : "void"
 , "c2" : "completeBatch(ProducerBatch;ProduceResponse.PartitionResponse)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00691"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#691"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;ProduceResponse.PartitionResponse;boolean)"
 , "c3" : "16"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00746"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#746"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;RuntimeException;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00754"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#754"
 , "c1" : "void"
 , "c2" : "failBatch(ProducerBatch;RuntimeException;Function<Integer,RuntimeException>;boolean)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00776"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#776"
 , "c1" : "boolean"
 , "c2" : "canRetry(ProducerBatch;ProduceResponse.PartitionResponse;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00788"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#788"
 , "c1" : "void"
 , "c2" : "sendProduceRequests(Map<Integer,List<ProducerBatch>>;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00796"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c1" : "void"
 , "c2" : "sendProduceRequest(long;int;short;int;List<ProducerBatch>)"
 , "c3" : "8"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00856"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#856"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00860"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#860"
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
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File246Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=246&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN617315.return" , "java.util.HashMap.put@POLYN620675.value"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00214]"
 , "c3" : ["java.util.HashMap.get@POLYN617315.return" , "---java.util.HashMap.get@POLYN617315" , "org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303929.inflightBatchList"]
 , "c4" : "//QC-JAVCWE099[00214] In org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303929[00214] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00217]"
 , "c3" : ["org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303929.inflightBatchList" , "---java.util.HashMap.put@POLYN620675" , "java.util.HashMap.put@POLYN620675.value"]
 , "c4" : "//QC-JAVCWE099[00217] In org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303929[00217] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
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
 , "c4" : "48"
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
 , "c4" : "6"
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
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.producer.internals.Sender.Sender@POLYN299476 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method inFlightBatches arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method maybeRemoveFromInflightBatches arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00160] For method maybeRemoveFromInflightBatches list of called methods Object monObjet|V inFlightBatches_getN301466"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.producer.internals.Sender.maybeRemoveFromInflightBatches@POLYN301352 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method maybeRemoveAndDeallocateBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method getExpiredInflightBatches arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00178] For method getExpiredInflightBatches list of called methods Object monObjet|java.util.Set inFlightBatches_entrySetN302433"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00182] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00183] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00185] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00187] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN302128 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN302128 the MagicNumber/String  ' batch created at ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.producer.internals.Sender.getExpiredInflightBatches@POLYN302128 the MagicNumber/String  ' gets unexpected final state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method addToInflightBatches arguments List&lt;ProducerBatch &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00212] For method addToInflightBatches list of called methods Object monObjet|V inFlightBatches_getN304138"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00214] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.clients.producer.internals.Sender.addToInflightBatches@POLYN303929 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#223"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00223] For method addToInflightBatches arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00223] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.clients.producer.internals.Sender.hasPendingTransactionalRequests@POLYN304854 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00244] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00257] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00270] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Starting Kafka producer I/O thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Beginning shutdown of Kafka producer I/O thread, sending remaining records.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Aborting incomplete transaction due to shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Uncaught error in kafka producer I/O thread: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Aborting incomplete transactional requests due to forced shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Aborting incomplete batches due to forced shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Failed to close network client' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String  'Shutdown of Kafka producer I/O thread has completed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#298"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00298] For method runOnce list of called methods Object monObjet|long sendProducerDataN308338"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String  'Authentication exception while processing transactional request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00331] For method sendProducerData arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00331] For method sendProducerData list of called methods Object monObjet|java.util.List getExpiredInflightBatchesN310922"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00353] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00374] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00390] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  'Requesting metadata update due to unknown leader topics from the batched records: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  'Expired {} batches in accumulator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  'Expiring ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  ' record(s) for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  ' ms has passed since batch creation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  'Nodes with data ready to send: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#423"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00423] For method maybeSendAndPollTransactionalRequest list of called methods Object monObjet|RuntimeException transactionManager_lastErrorN313430|org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler transactionManager_nextRequestN313739"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'Target node {} not ready within request timeout, will retry when node is ready.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'Coordinator not known for {}, will retry {} after finding coordinator.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#465"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00465] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'No nodes available to send requests, will poll and retry when until a node is ready.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#476"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00476] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'Sending transactional request {} to node {} with correlation ID {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#481"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00481] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'Disconnect from {} while trying to send request {}. Going ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  'to back off and retry.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#491"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00491] For method maybeFindCoordinatorAndRetry arguments TransactionManager.TxnRequestHandler  nextRequestHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#491"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00491] The argument nextRequestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#503"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00503] For method maybeAbortBatches arguments RuntimeException  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN317069 the MagicNumber/String  'Aborting producer batches due to fatal error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.clients.producer.internals.Sender.initiateClose@POLYN317438 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.clients.producer.internals.Sender.forceClose@POLYN317707 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#533"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00533] For method awaitNodeReady arguments Node  node|FindCoordinatorRequest.CoordinatorType  coordinatorType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.clients.producer.internals.Sender.awaitNodeReady@POLYN317952 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.clients.producer.internals.Sender.awaitNodeReady@POLYN317952 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#549"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00549] For method handleProduceResponse arguments ClientResponse  response|Map&lt;TopicPartition ,ProducerBatch &gt;  batches|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#549"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00549] For method handleProduceResponse list of called methods Object monObjet|org.apache.kafka.common.requests.RequestHeader response_requestHeaderN318645|int requestHeader_correlationIdN318720|V batches_getN321207"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#549"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00549] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#549"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00549] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String  'Cancelled request with header {} due to node {} being disconnected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#556"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00556] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String  'Disconnected from node %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00559"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String  'Cancelled request {} due to a version mismatch with node {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#564"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00564] In method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String  'Received produce response from node {} with correlation id {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#603"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00603] For method completeBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|long  correlationId|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#603"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00603] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00603"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#603"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00603] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00607"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#607"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00607] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00612] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'Got error produce response in correlation id {} on topic-partition {}, splitting and retrying ({} attempts left). Error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00617] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'Got error produce response with correlation id {} on topic-partition {}, retrying ({} attempts left). Error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00628] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'Received unknown topic or partition error in produce request on partition {}. The ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'topic-partition may not exist or the user may not have Describe access to it' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00650"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'Received invalid metadata error in produce request on partition {} due to {}. Going ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN322027 the MagicNumber/String  'to request metadata update now' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#669"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00669] For method formatErrMsg arguments ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#669"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00669] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324972 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324972 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324972 the MagicNumber/String  '. Error Message: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.clients.producer.internals.Sender.formatErrMsg@POLYN324972 the MagicNumber/String  '%s%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#675"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00675] For method reenqueueBatch arguments ProducerBatch  batch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#675"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00675] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#681"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00681] For method completeBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#681"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00681] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#681"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00681] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00691] For method failBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#691"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00691] For method failBatch list of called methods Object monObjet|V recordErrorMap_getN328482"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#691"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00691] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00692"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#692"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00692] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00711] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  'The producer is not authorized to do idempotent sends' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#712"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00712] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00714"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#714"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00714] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00722"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00722] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00731"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#731"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00731] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00737] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  'Failed to append record because it was part of a batch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00738"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00738] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN326338 the MagicNumber/String  'which had one more more invalid records' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00746] For method failBatch arguments ProducerBatch  batch|RuntimeException  topLevelException|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#754"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00754] For method failBatch arguments ProducerBatch  batch|RuntimeException  topLevelException|Function&lt;Integer ,RuntimeException &gt;  recordExceptions|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#755"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00755] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#760"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00760] In method org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#776"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00776] For method canRetry arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#776"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00776] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#776"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00776] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00780"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00780] In method org.apache.kafka.clients.producer.internals.Sender.canRetry@POLYN330057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#788"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00788] For method sendProduceRequests arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  collated|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#788"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00788] The argument collated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00796] For method sendProduceRequest arguments long  now|int  destination|short  acks|int  timeout|List&lt;ProducerBatch &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00796] For method sendProduceRequest list of called methods Object monObjet|byte apiVersions_maxUsableProduceMagicN331691|byte batch_magicN331915|org.apache.kafka.common.record.MemoryRecords batch_recordsN332220|org.apache.kafka.common.record.MemoryRecords batch_recordsN332376|java.lang.String transactionManager_transactionalIdN333448|org.apache.kafka.common.requests.ProduceRequest.Builder ProduceRequest_forMagicN333534|java.lang.String Integer_toStringN334001|org.apache.kafka.clients.ClientRequest client_newClientRequestN334095"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00796"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#796"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00796] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00810"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00810] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00811"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#811"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00811] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00822"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00822] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#821"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00821] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#833"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00833] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00834"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#834"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00834] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00847] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String  'Sent produce request to {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00860] For method throttleTimeSensor arguments SenderMetricsRegistry  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00860] For method throttleTimeSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor metrics_sensorN334763"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#860"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00860] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00861"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#861"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00861] In method org.apache.kafka.clients.producer.internals.Sender.throttleTimeSensor@POLYN334666 the MagicNumber/String  'produce-throttle-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#883"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00883] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#883"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00883] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00883"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#883"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00883] The argument client is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00887"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00887] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'batch-size' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00891"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#891"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00891] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'queue-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#898"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00898] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'request-time' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00902"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#902"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00902] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'records-per-request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00906] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00909"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#909"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00909] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00912"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#912"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00912] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'record-size' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  1000.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.SenderMetrics@POLYN335672 the MagicNumber/String  'batch-split-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#924"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00924] For method maybeRegisterTopicMetrics arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#924"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00924] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00927] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#927"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00927] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  '.records-per-batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00930] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00937] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00937] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  '.bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00943"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#943"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00943] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00943"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#943"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00943] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  '.compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  '.record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00954"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.maybeRegisterTopicMetrics@POLYN339225 the MagicNumber/String  '.record-errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#962"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00962] For method updateProduceRequestMetrics arguments Map&lt;Integer ,List&lt;ProducerBatch &gt; &gt;  batches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#962"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00962] For method updateProduceRequestMetrics list of called methods Object monObjet|java.lang.String batch_topicPartition_topicN342695"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#962"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00962] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00966] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00968"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#968"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00968] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00972] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00973] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00977] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00978"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#978"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00978] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00982] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00983] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00968"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#968"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00968] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00972] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00973] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00977] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00978"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#978"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00978] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00982] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00983] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00965] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  '.records-per-batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00977] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00977] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  '.bytes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.updateProduceRequestMetrics@POLYN342223 the MagicNumber/String  '.compression-rate' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#997"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00997] For method recordRetries arguments String  topic|int  count"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#997"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00997] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01000"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344439 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01000"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344439 the MagicNumber/String  '.record-retries' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01002"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01002] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordRetries@POLYN344439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1006"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01006] For method recordErrors arguments String  topic|int  count"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1006"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01006] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1009"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01009] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN345063 the MagicNumber/String  'topic.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1009"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01009] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN345063 the MagicNumber/String  '.record-errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1011"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01011] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordErrors@POLYN345063 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1015"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01015] For method recordLatency arguments String  node|long  latency"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1015"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01015] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345687 the MagicNumber/String  'node-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345687 the MagicNumber/String  '.latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.clients.producer.internals.Sender.SenderMetrics.recordLatency@POLYN345687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN317069"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#505"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00505] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeAbortBatches@POLYN317069 the MagicNumber/String 'Aborting producer batches due to fatal error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00299] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#306"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00306] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305 the MagicNumber/String 'Authentication exception while processing transactional request' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00821"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#821"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00821] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#823"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00823] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#833"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00833] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00834"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#834"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00834] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#847"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00847] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00850] In the recursive method org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244 the MagicNumber/String 'Sent produce request to {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Starting Kafka producer I/O thread.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Beginning shutdown of Kafka producer I/O thread, sending remaining records.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#254"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00254] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00263] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00265] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Aborting incomplete transaction due to shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#271"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00271] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Uncaught error in kafka producer I/O thread: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Aborting incomplete transactional requests due to forced shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#282"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00282] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Aborting incomplete batches due to forced shutdown' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Failed to close network client' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#291"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00291] In the recursive method org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098 the MagicNumber/String 'Shutdown of Kafka producer I/O thread has completed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#553"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00553] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String 'Cancelled request with header {} due to node {} being disconnected' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00556"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#556"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00556] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String 'Disconnected from node %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#558"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00558] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00559"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#559"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00559] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String 'Cancelled request {} due to a version mismatch with node {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00564"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#564"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00564] In the recursive method org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465 the MagicNumber/String 'Received produce response from node {} with correlation id {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#436"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00436] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00444] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00445] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00451] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00454] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00456] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'Target node {} not ready within request timeout, will retry when node is ready.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#458"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00458] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00461"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#461"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00461] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'Coordinator not known for {}, will retry {} after finding coordinator.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#463"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00463] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00465] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'No nodes available to send requests, will poll and retry when until a node is ready.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#468"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00468] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00476"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#476"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00476] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00477] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'Sending transactional request {} to node {} with correlation ID {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00481"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#481"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00481] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#483"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00483] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'Disconnect from {} while trying to send request {}. Going ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#484"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00484] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String 'to back off and retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.html#487"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00487] In the recursive method org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/Sender.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
