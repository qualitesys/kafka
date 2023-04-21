console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java 496 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.TransactionManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.TransactionManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00199"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#199"
 , "c1" : "TransactionManager"
 , "c2" : "TransactionManager(LogContext;String;int;long;ApiVersions)"
 , "c3" : "1"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00222"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#222"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "initializeTransactions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00226"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#226"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "initializeTransactions(ProducerIdAndEpoch)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00250"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#250"
 , "c1" : "void"
 , "c2" : "beginTransaction()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00257"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#257"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "beginCommit()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00265"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#265"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "beginAbort()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00277"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#277"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "beginCompletingTransaction(TransactionResult)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00302"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#302"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "sendOffsetsToTransaction(Map&lt;TopicPartition,OffsetAndMetadata&gt;;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00327"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#327"
 , "c1" : "void"
 , "c2" : "maybeAddPartition(TopicPartition)"
 , "c3" : "8"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00348"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#348"
 , "c1" : "RuntimeException"
 , "c2" : "lastError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00352"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#352"
 , "c1" : "boolean"
 , "c2" : "isSendToPartitionAllowed(TopicPartition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00358"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#358"
 , "c1" : "String"
 , "c2" : "transactionalId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00362"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#362"
 , "c1" : "boolean"
 , "c2" : "hasProducerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#366"
 , "c1" : "boolean"
 , "c2" : "isTransactional()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00370"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#370"
 , "c1" : "boolean"
 , "c2" : "hasPartitionsToAdd()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00374"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#374"
 , "c1" : "boolean"
 , "c2" : "isCompleting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00378"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#378"
 , "c1" : "boolean"
 , "c2" : "hasError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00382"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#382"
 , "c1" : "boolean"
 , "c2" : "isAborting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#386"
 , "c1" : "void"
 , "c2" : "transitionToAbortableError(RuntimeException)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00397"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#397"
 , "c1" : "void"
 , "c2" : "transitionToFatalError(RuntimeException)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00407"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#407"
 , "c1" : "boolean"
 , "c2" : "isPartitionAdded(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00412"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#412"
 , "c1" : "boolean"
 , "c2" : "isPartitionPendingAdd(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00422"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#422"
 , "c1" : "ProducerIdAndEpoch"
 , "c2" : "producerIdAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00426"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#426"
 , "c1" : "void"
 , "c2" : "maybeUpdateProducerIdAndEpoch(TopicPartition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00439"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#439"
 , "c1" : "void"
 , "c2" : "setProducerIdAndEpoch(ProducerIdAndEpoch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00449"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#449"
 , "c1" : "void"
 , "c2" : "resetIdempotentProducerId()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00458"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#458"
 , "c1" : "void"
 , "c2" : "resetSequenceForPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00463"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#463"
 , "c1" : "void"
 , "c2" : "resetSequenceNumbers()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00468"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#468"
 , "c1" : "void"
 , "c2" : "requestEpochBumpForPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00473"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#473"
 , "c1" : "void"
 , "c2" : "bumpIdempotentProducerEpoch()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00491"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#491"
 , "c1" : "void"
 , "c2" : "bumpIdempotentEpochAndResetIdIfNeeded()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00510"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#510"
 , "c1" : "Integer"
 , "c2" : "sequenceNumber(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00517"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#517"
 , "c1" : "ProducerIdAndEpoch"
 , "c2" : "producerIdAndEpoch(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00521"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#521"
 , "c1" : "void"
 , "c2" : "incrementSequenceNumber(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00528"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#528"
 , "c1" : "void"
 , "c2" : "addInFlightBatch(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00541"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#541"
 , "c1" : "int"
 , "c2" : "firstInFlightSequence(TopicPartition)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00552"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#552"
 , "c1" : "ProducerBatch"
 , "c2" : "nextBatchBySequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00557"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c1" : "void"
 , "c2" : "removeInFlightBatch(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00563"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#563"
 , "c1" : "int"
 , "c2" : "maybeUpdateLastAckedSequence(TopicPartition;int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00573"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#573"
 , "c1" : "OptionalInt"
 , "c2" : "lastAckedSequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00577"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#577"
 , "c1" : "OptionalLong"
 , "c2" : "lastAckedOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00581"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#581"
 , "c1" : "void"
 , "c2" : "updateLastAckedOffset(ProduceResponse.PartitionResponse;ProducerBatch)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00599"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#599"
 , "c1" : "void"
 , "c2" : "handleCompletedBatch(ProducerBatch;ProduceResponse.PartitionResponse)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00610"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#610"
 , "c1" : "void"
 , "c2" : "maybeTransitionToErrorState(RuntimeException)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00624"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#624"
 , "c1" : "void"
 , "c2" : "handleFailedBatch(ProducerBatch;RuntimeException;boolean)"
 , "c3" : "9"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00665"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#665"
 , "c1" : "void"
 , "c2" : "adjustSequencesDueToFailedBatch(ProducerBatch)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00692"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#692"
 , "c1" : "boolean"
 , "c2" : "hasInflightBatches(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00696"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#696"
 , "c1" : "boolean"
 , "c2" : "hasStaleProducerIdAndEpoch(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00700"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#700"
 , "c1" : "boolean"
 , "c2" : "hasUnresolvedSequences()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00704"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#704"
 , "c1" : "boolean"
 , "c2" : "hasUnresolvedSequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00708"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c1" : "void"
 , "c2" : "markSequenceUnresolved(ProducerBatch)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00718"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#718"
 , "c1" : "void"
 , "c2" : "maybeResolveSequences()"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00757"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#757"
 , "c1" : "boolean"
 , "c2" : "isNextSequence(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00761"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#761"
 , "c1" : "void"
 , "c2" : "setNextSequence(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00765"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#765"
 , "c1" : "boolean"
 , "c2" : "isNextSequenceForUnresolvedPartition(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00770"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#770"
 , "c1" : "TxnRequestHandler"
 , "c2" : "nextRequest(boolean)"
 , "c3" : "8"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00805"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#805"
 , "c1" : "void"
 , "c2" : "retry(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00810"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#810"
 , "c1" : "void"
 , "c2" : "authenticationFailed(AuthenticationException)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00815"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#815"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00824"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#824"
 , "c1" : "Node"
 , "c2" : "coordinator(FindCoordinatorRequest.CoordinatorType)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00835"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#835"
 , "c1" : "void"
 , "c2" : "lookupCoordinator(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00839"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#839"
 , "c1" : "void"
 , "c2" : "setInFlightCorrelationId(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00843"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#843"
 , "c1" : "void"
 , "c2" : "clearInFlightCorrelationId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00847"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#847"
 , "c1" : "boolean"
 , "c2" : "hasInFlightRequest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00852"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#852"
 , "c1" : "boolean"
 , "c2" : "hasFatalError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00857"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#857"
 , "c1" : "boolean"
 , "c2" : "hasAbortableError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00862"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#862"
 , "c1" : "boolean"
 , "c2" : "transactionContainsPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00867"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#867"
 , "c1" : "boolean"
 , "c2" : "hasPendingOffsetCommits()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00871"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#871"
 , "c1" : "boolean"
 , "c2" : "hasPendingRequests()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00876"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#876"
 , "c1" : "boolean"
 , "c2" : "hasOngoingTransaction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00881"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#881"
 , "c1" : "boolean"
 , "c2" : "canRetry(ProduceResponse.PartitionResponse;ProducerBatch)"
 , "c3" : "15"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00951"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#951"
 , "c1" : "boolean"
 , "c2" : "isReady()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00955"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#955"
 , "c1" : "void"
 , "c2" : "handleCoordinatorReady()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00966"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#966"
 , "c1" : "void"
 , "c2" : "transitionTo(State)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00970"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#970"
 , "c1" : "void"
 , "c2" : "transitionTo(State;RuntimeException)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00993"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#993"
 , "c1" : "void"
 , "c2" : "ensureTransactional()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00998"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#998"
 , "c1" : "void"
 , "c2" : "maybeFailWithError()"
 , "c3" : "6"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1015"
 , "c1" : "boolean"
 , "c2" : "maybeTerminateRequestWithError(TxnRequestHandler)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1027"
 , "c1" : "void"
 , "c2" : "enqueueRequest(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01032"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1032"
 , "c1" : "void"
 , "c2" : "lookupCoordinator(FindCoordinatorRequest.CoordinatorType;String)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1051"
 , "c1" : "TxnRequestHandler"
 , "c2" : "addPartitionsToTransactionHandler()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1062"
 , "c1" : "TxnOffsetCommitHandler"
 , "c2" : "txnOffsetCommitHandler(TransactionalRequestResult;Map&lt;TopicPartition,OffsetAndMetadata&gt;;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1085"
 , "c1" : "void"
 , "c2" : "throwIfPendingState(String)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01097"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1097"
 , "c1" : "TransactionalRequestResult"
 , "c2" : "handleCachedTransactionRequestResult(Supplier&lt;TransactionalRequestResult&gt;;State;String)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01122"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1122"
 , "c1" : "boolean"
 , "c2" : "canBumpEpoch()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01130"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1130"
 , "c1" : "void"
 , "c2" : "completeTransaction()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01678"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1678"
 , "c1" : "boolean"
 , "c2" : "isFatalException(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.clients.producer.internals.TransactionManager.this" }
,
{ "ligne" :  "R1:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.exception" }
,
{ "ligne" :  "R2:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.batch" }
,
{ "ligne" :  "R3:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.exception" }
,
{ "ligne" :  "R4:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.adjustSequenceNumbers" }
,
{ "ligne" :  "R5:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653.exception" }
,
{ "ligne" :  "R6:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.exception" }
,
{ "ligne" :  "R7:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074.batch" }
,
{ "ligne" :  "R8:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.tp" }
,
{ "ligne" :  "R9:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330.topicPartition" }
,
{ "ligne" :  "R10:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.topicPartition" }
,
{ "ligne" :  "R11:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.increment" }
,
{ "ligne" :  "R12:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.batch" }
,
{ "ligne" :  "R13:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.response" }
,
{ "ligne" :  "R14:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457.request" }
,
{ "ligne" :  "R15:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149.topicPartition" }
,
{ "ligne" :  "R16:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651.batch" }
,
{ "ligne" :  "R17:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.batch" }
,
{ "ligne" :  "R18:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.e" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047" }
,
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN407890" }
,
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R0 in line [00397],R1 in line [00397])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.dummymethode_00398" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R0 in line [00624],R2 in line [00624],R3 in line [00624],R4 in line [00624])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R0 in line [00610],R5 in line [00610])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R0 in line [00397],R1 in line [00397])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.dummymethode_00398" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R0 in line [00624],R2 in line [00624],R3 in line [00624],R4 in line [00624])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R0 in line [00610],R5 in line [00610])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R0 in line [00386],R6 in line [00386])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.dummymethode_00388" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R0 in line [00624],R2 in line [00624],R3 in line [00624],R4 in line [00624])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074 (R0 in line [00557],R7 in line [00557])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198" }
 ]
 } }
,
{ "sequence" : { "noseq" : "4" , "pas" : [
{ "ligne" : "S4:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R0 in line [00624],R2 in line [00624],R3 in line [00624],R4 in line [00624])" }
,
{ "ligne" : "S4:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886 (R0 in line [00468],R8 in line [00468])" }
,
{ "ligne" : "S4:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.dummymethode_00469" }
 ]
 } }
,
{ "sequence" : { "noseq" : "5" , "pas" : [
{ "ligne" : "S5:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R0 in line [00327],R9 in line [00327])" }
,
{ "ligne" : "S5:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" }
 ]
 } }
,
{ "sequence" : { "noseq" : "6" , "pas" : [
{ "ligne" : "S6:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257 (R0 in line [00521],R10 in line [00521],R11 in line [00521])" }
,
{ "ligne" : "S6:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN380891 (R0 in line [00510])" }
,
{ "ligne" : "S6:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN151590" }
 ]
 } }
,
{ "sequence" : { "noseq" : "7" , "pas" : [
{ "ligne" : "S7:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 (R0 in line [00599],R12 in line [00599],R13 in line [00599])" }
,
{ "ligne" : "S7:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383366" }
,
{ "ligne" : "S7:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383366.dummymethode_00566" }
 ]
 } }
,
{ "sequence" : { "noseq" : "8" , "pas" : [
{ "ligne" : "S8:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457 (R0 in line [00805],R14 in line [00805])" }
,
{ "ligne" : "S8:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749" }
,
{ "ligne" : "S8:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749.dummymethode_01228" }
 ]
 } }
,
{ "sequence" : { "noseq" : "9" , "pas" : [
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R0 in line [00426],R15 in line [00426])" }
,
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925" }
 ]
 } }
,
{ "sequence" : { "noseq" : "10" , "pas" : [
{ "ligne" : "S10:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651 (R0 in line [00528],R16 in line [00528])" }
,
{ "ligne" : "S10:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198" }
 ]
 } }
,
{ "sequence" : { "noseq" : "11" , "pas" : [
{ "ligne" : "S11:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R0 in line [00708],R17 in line [00708])" }
,
{ "ligne" : "S11:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.dummymethode_00710" }
 ]
 } }
,
{ "sequence" : { "noseq" : "12" , "pas" : [
{ "ligne" : "S12:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635 (R0 in line [00810],R18 in line [00810])" }
,
{ "ligne" : "S12:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.dummymethode_00812" }
 ]
 } }
,
{ "sequence" : { "noseq" : "13" , "pas" : [
{ "ligne" : "S13:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R0 in line [00624],R2 in line [00624],R3 in line [00624],R4 in line [00624])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R0 in line [00610],R5 in line [00610])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R0 in line [00386],R6 in line [00386])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R0 in line [00386],R6 in line [00386])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.dummymethode_00388" }
 ]
 } }
,
{ "sequence" : { "noseq" : "14" , "pas" : [
{ "ligne" : "S14:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R0 in line [00327],R9 in line [00327])" }
,
{ "ligne" : "S14:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R0 in line [00327],R9 in line [00327])" }
,
{ "ligne" : "S14:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" }
 ]
 } }
,
{ "sequence" : { "noseq" : "15" , "pas" : [
{ "ligne" : "S15:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 (R0 in line [00599],R12 in line [00599],R13 in line [00599])" }
,
{ "ligne" : "S15:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074 (R0 in line [00557],R7 in line [00557])" }
,
{ "ligne" : "S15:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198" }
 ]
 } }
,
{ "sequence" : { "noseq" : "16" , "pas" : [
{ "ligne" : "S16:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R0 in line [00426],R15 in line [00426])" }
,
{ "ligne" : "S16:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R0 in line [00426],R15 in line [00426])" }
,
{ "ligne" : "S16:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925" }
 ]
 } }
,
{ "sequence" : { "noseq" : "17" , "pas" : [
{ "ligne" : "S17:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R0 in line [00708],R17 in line [00708])" }
,
{ "ligne" : "S17:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R0 in line [00708],R17 in line [00708])" }
,
{ "ligne" : "S17:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.dummymethode_00710" }
 ]
 } }
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "95"
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
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "190"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "64"
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
 , "c4" : "49"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00199] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN367090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN367090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN367090 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#222"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00222] Lock statement on synchronized method initializeTransactions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#226"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00226] Lock statement on synchronized method initializeTransactions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method initializeTransactions arguments ProducerIdAndEpoch  producerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#226"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00226] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String  'Invoking InitProducerId for the first time in order to acquire a producer ID' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String  'Invoking InitProducerId with current producer ID and epoch {} in order to bump the epoch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String  'initTransactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#250"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00250] Lock statement on synchronized method beginTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginTransaction@POLYN370022 the MagicNumber/String  'beginTransaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#257"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00257] Lock statement on synchronized method beginCommit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginCommit@POLYN370300 the MagicNumber/String  'commitTransaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#265"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00265] Lock statement on synchronized method beginAbort"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginAbort@POLYN370683 the MagicNumber/String  'abortTransaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#277"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00277] For method beginCompletingTransaction arguments TransactionResult  transactionResult"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#277"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00277] The argument transactionResult is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#302"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00302] Lock statement on synchronized method sendOffsetsToTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#302"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00302] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#303"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00303] The argument groupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String  'sendOffsetsToTransaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String  'Cannot send offsets if a transaction is not in progress ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String  '(currentState= ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String  'Begin adding offsets {} for consumer group {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#327"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00327] Lock statement on synchronized method maybeAddPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#327"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00327] For method maybeAddPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  'send' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00333] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  'Cannot add partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  ' to transaction before completing a call to initTransactions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  'Cannot add partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  ' to transaction while in state  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String  'Begin adding new partition {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#352"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00352] Lock statement on synchronized method isSendToPartitionAllowed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#352"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00352] For method isSendToPartitionAllowed arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.clients.producer.internals.TransactionManager.isSendToPartitionAllowed@POLYN374470 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.clients.producer.internals.TransactionManager.isTransactional@POLYN374933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#370"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00370] Lock statement on synchronized method hasPartitionsToAdd"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#374"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00374] Lock statement on synchronized method isCompleting"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#378"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00378] Lock statement on synchronized method hasError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#382"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00382] Lock statement on synchronized method isAborting"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#386"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00386] Lock statement on synchronized method transitionToAbortableError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method transitionToAbortableError arguments RuntimeException  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#386"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00386] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String  'Skipping transition to abortable error state since the transaction is already being ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String  'aborted. Underlying exception: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String  'Transiting to abortable error state due to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#397"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00397] Lock statement on synchronized method transitionToFatalError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method transitionToFatalError arguments RuntimeException  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#397"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00397] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 the MagicNumber/String  'Transiting to fatal error state due to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#407"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00407] Lock statement on synchronized method isPartitionAdded"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00407] For method isPartitionAdded arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#412"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00412] Lock statement on synchronized method isPartitionPendingAdd"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#412"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00412] For method isPartitionPendingAdd arguments TopicPartition  partition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#426"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00426] Lock statement on synchronized method maybeUpdateProducerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00426] For method maybeUpdateProducerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 the MagicNumber/String  'ProducerId of partition {} set to {} with epoch {}. Reinitialize sequence at beginning.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#439"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00439] For method setProducerIdAndEpoch arguments ProducerIdAndEpoch  producerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#439"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00439] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN377659 the MagicNumber/String  'ProducerId set to {} with epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String  'Cannot reset producer state for a transactional producer. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String  'You must either abort the ongoing transaction or reinitialize the transactional producer instead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#453"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00453] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String  'Resetting idempotent producer ID. ID and epoch before reset are {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00458] For method resetSequenceForPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#468"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00468] Lock statement on synchronized method requestEpochBumpForPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#468"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00468] For method requestEpochBumpForPartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00469] In method org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String  'Incremented producer epoch, current producer ID and epoch are now {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#491"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00491] Lock statement on synchronized method bumpIdempotentEpochAndResetIdIfNeeded"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentEpochAndResetIdIfNeeded@POLYN380030 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentEpochAndResetIdIfNeeded@POLYN380030 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#510"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00510] Lock statement on synchronized method sequenceNumber"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#510"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00510] For method sequenceNumber arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#517"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00517] Lock statement on synchronized method producerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#517"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00517] For method producerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#521"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00521] Lock statement on synchronized method incrementSequenceNumber"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00521] For method incrementSequenceNumber arguments TopicPartition  topicPartition|int  increment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00521"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#521"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00521] For method incrementSequenceNumber list of called methods Object monObjet|java.lang.Integer sequenceNumberN381375|int DefaultRecordBatch_incrementSequenceN381460|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN381553"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#528"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00528] Lock statement on synchronized method addInFlightBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#528"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00528] For method addInFlightBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#528"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00528] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651 the MagicNumber/String  'Can't track batch for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00530"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#530"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00530] In method org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651 the MagicNumber/String  ' when sequence is not set.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#541"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00541] Lock statement on synchronized method firstInFlightSequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#541"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00541] For method firstInFlightSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#541"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00541] For method firstInFlightSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN382508"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#552"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00552] Lock statement on synchronized method nextBatchBySequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#552"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00552] For method nextBatchBySequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#552"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00552] For method nextBatchBySequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN382879"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#554"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00554] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN382761 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00557] Lock statement on synchronized method removeInFlightBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00557] For method removeInFlightBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00557] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#563"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00563] For method maybeUpdateLastAckedSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#563"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00563] For method maybeUpdateLastAckedSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN383661"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#573"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00573] Lock statement on synchronized method lastAckedSequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#573"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00573] For method lastAckedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#577"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00577] Lock statement on synchronized method lastAckedOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#577"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00577] For method lastAckedOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#581"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00581] For method updateLastAckedOffset arguments ProduceResponse.PartitionResponse  response|ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#581"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00581] For method updateLastAckedOffset list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN384843"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#581"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00581] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#581"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00581] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00584] In method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN384122 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00595"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN384122 the MagicNumber/String  'Partition {} keeps lastOffset at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#599"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00599] Lock statement on synchronized method handleCompletedBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#599"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00599] For method handleCompletedBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#599"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00599] For method handleCompletedBatch list of called methods Object monObjet|int maybeUpdateLastAckedSequenceN385227"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00599"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#599"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00599] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 the MagicNumber/String  'ProducerId: {}; Set last ack'd sequence number for topic-partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#610"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00610] Lock statement on synchronized method maybeTransitionToErrorState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#610"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00610] For method maybeTransitionToErrorState arguments RuntimeException  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#624"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00624] Lock statement on synchronized method handleFailedBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#624"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00624] For method handleFailedBatch arguments ProducerBatch  batch|RuntimeException  exception|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#624"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00624] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00629"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#629"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00629] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 the MagicNumber/String  'Ignoring batch {} with producer id {}, epoch {}, and sequence number {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00630"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 the MagicNumber/String  'since the producer is already in fatal error state' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 the MagicNumber/String  'The broker returned {} for topic-partition {} with producerId {}, epoch {}, and sequence number {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00664] For method adjustSequencesDueToFailedBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00664"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00664] For method adjustSequencesDueToFailedBatch list of called methods Object monObjet|java.lang.Integer sequenceNumberN388070"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#665"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00665] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  'producerId: {}, send to partition {} failed fatally. Reducing future sequence numbers by {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  'Sequence number for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  ' is going to become negative: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#685"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00685] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  'Sequence number for batch with sequence ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#686"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00686] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  ' for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#686"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00686] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String  ' is going to become negative: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00692"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#692"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00692] Lock statement on synchronized method hasInflightBatches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00692"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#692"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00692] For method hasInflightBatches arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#696"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00696] Lock statement on synchronized method hasStaleProducerIdAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00696"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#696"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00696] For method hasStaleProducerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#700"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00700] Lock statement on synchronized method hasUnresolvedSequences"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#704"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00704] Lock statement on synchronized method hasUnresolvedSequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00704"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#704"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00704] For method hasUnresolvedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00708] Lock statement on synchronized method markSequenceUnresolved"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00708] For method markSequenceUnresolved arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00708] For method markSequenceUnresolved list of called methods Object monObjet|int batch_lastSequenceN390104"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00708] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00709"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#709"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00709] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#711"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00711] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#712"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00712] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String  'Marking partition {} unresolved with next sequence number {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#718"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00718] Lock statement on synchronized method maybeResolveSequences"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#718"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00718] For method maybeResolveSequences list of called methods Object monObjet|java.util.Set partitionsWithUnresolvedSequences_keySetN390743"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00720] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00732] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00736"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00736] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00740] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'The client hasn't received acknowledgment for some previously ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'sent messages and can no longer retry them. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00736"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#736"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00736] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'It is safe to abort ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00737] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'the transaction and continue.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#740"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00740] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'It isn't safe to continue.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00745] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'No inflight batches remaining for {}, last ack'd sequence for partition is {}, next sequence is {}. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00746] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 the MagicNumber/String  'Going to bump epoch and reset sequence numbers.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00757"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#757"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00757] For method isNextSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00758"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#758"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00758] In method org.apache.kafka.clients.producer.internals.TransactionManager.isNextSequence@POLYN392317 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00761"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#761"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00761] For method setNextSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00761"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#761"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00761] For method setNextSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN392653"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#765"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00765] For method isNextSequenceForUnresolvedPartition arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#770"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00770] Lock statement on synchronized method nextRequest"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#770"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00770] For method nextRequest arguments boolean  hasIncompleteBatches"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#775"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00775] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#776"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00776] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00780"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#780"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00780] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#784"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00784] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  'Not sending transactional request {} because we are in an error state' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00792"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#792"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00792] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  'Not sending EndTxn for completed transaction since no partitions ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  'or offsets were successfully added' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00800"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String  'Request {} dequeued for sending' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#805"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00805] Lock statement on synchronized method retry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#805"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00805] For method retry arguments TxnRequestHandler  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#805"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00805] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00810"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#810"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00810] Lock statement on synchronized method authenticationFailed"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00810"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#810"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00810] For method authenticationFailed arguments AuthenticationException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00815"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#815"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00815] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00816"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#816"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00816] In method org.apache.kafka.clients.producer.internals.TransactionManager.close@POLYN394828 the MagicNumber/String  'The producer closed forcefully' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00819"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#819"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00819] In method org.apache.kafka.clients.producer.internals.TransactionManager.close@POLYN394828 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#824"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00824] For method coordinator arguments FindCoordinatorRequest.CoordinatorType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00831"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#831"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00831] In method org.apache.kafka.clients.producer.internals.TransactionManager.coordinator@POLYN395258 the MagicNumber/String  'Received an invalid coordinator type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#835"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00835] For method lookupCoordinator arguments TxnRequestHandler  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00835"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#835"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00835] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00839"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#839"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00839] For method setInFlightCorrelationId arguments int  correlationId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#862"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00862] Lock statement on synchronized method transactionContainsPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#862"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00862] For method transactionContainsPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00867"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#867"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00867] Lock statement on synchronized method hasPendingOffsetCommits"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00871"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#871"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00871] Lock statement on synchronized method hasPendingRequests"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00876"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#876"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00876] Lock statement on synchronized method hasOngoingTransaction"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00881"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#881"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00881] Lock statement on synchronized method canRetry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00881"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#881"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00881] For method canRetry arguments ProduceResponse.PartitionResponse  response|ProducerBatch  batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00881"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#881"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00881] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00881"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#881"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00881] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00891"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#891"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00891] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00893"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00905"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#905"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00905] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#925"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00925] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#932"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00932] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00942"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#942"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00942] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN396908 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00951"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#951"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00951] Lock statement on synchronized method isReady"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00956"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00958"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#958"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00958] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00959"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00959] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00961"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00961] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00962] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#963"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00963] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN399007 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#966"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00966] For method transitionTo arguments State  target"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399558 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#970"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00970] For method transitionTo arguments State  target|RuntimeException  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#970"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00970] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  'TransactionalId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00973] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  'Invalid transition attempted from state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00974"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#974"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00974] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  ' to state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00978"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#978"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00978] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  'Cannot transition to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  ' with a null exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00986] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  'Transition from state {} to error state {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00988"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String  'Transition from state {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00995"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#995"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00995] In method org.apache.kafka.clients.producer.internals.TransactionManager.ensureTransactional@POLYN401181 the MagicNumber/String  'Transactional method invoked on a non-transactional producer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01003"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  'Producer with transactionalId '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  '' and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  ' has been fenced by another producer ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01005"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1005"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01005] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  'with the same transactionalId' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1007"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01007] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  'Producer with transactionalId '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  '' and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01008] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  ' attempted to produce with an old epoch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01010] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350 the MagicNumber/String  'Cannot execute transactional method because we are in an error state' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1015"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01015] For method maybeTerminateRequestWithError arguments TxnRequestHandler  requestHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1015"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01015] The argument requestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN402064 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN402064 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN402064 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1027"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01027] For method enqueueRequest arguments TxnRequestHandler  requestHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1027"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01027] The argument requestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.clients.producer.internals.TransactionManager.enqueueRequest@POLYN402455 the MagicNumber/String  'Enqueuing transactional request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1032"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01032] For method lookupCoordinator arguments FindCoordinatorRequest.CoordinatorType  type|String  coordinatorKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1032"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01032] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1035"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01035] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String  'Invalid coordinator type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1062"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01062] For method txnOffsetCommitHandler arguments TransactionalRequestResult  result|Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1063"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01063] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1064"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01064] The argument groupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1066"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1067"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1085"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01085] For method throwIfPendingState arguments String  operation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1086"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01086] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01088] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  'Cannot attempt operation  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  'because the previous call to  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1092"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01092] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN405179 the MagicNumber/String  'timed out and must be retried' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1097"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01097] For method handleCachedTransactionRequestResult arguments Supplier&lt;TransactionalRequestResult &gt;  transactionalRequestResultSupplier|State  nextState|String  operation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1097"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01097] For method handleCachedTransactionRequestResult list of called methods Object monObjet|V transactionalRequestResultSupplier_getN406486"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1098"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01098] The argument transactionalRequestResultSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01104] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01106] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01108] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  'Cannot attempt operation  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01108] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  'because the previous call to  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  '  ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01110] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN405702 the MagicNumber/String  'timed out and must be retried' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01124] In method org.apache.kafka.clients.producer.internals.TransactionManager.canBumpEpoch@POLYN406703 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN406889 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01137] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN406889 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN406889 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01156] For method fatalError arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01161] For method abortableError arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01166] For method abortableErrorIfPossible arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01168] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.abortableErrorIfPossible@POLYN408274 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01175] For method fail arguments RuntimeException  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1180"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01180] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01181] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.reenqueue@POLYN408726 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01191] For method onComplete arguments ClientResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1191"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01191] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1206"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01206] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01193] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String  'Detected more than one in-flight transactional request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01197] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String  'Disconnected from {}. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01201] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01204] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String  'Received transactional response {} for request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01210] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String  'Could not execute transactional request for unknown reasons' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01216] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.needsCoordinator@POLYN410454 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01228] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01236] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.isEndTxn@POLYN410940 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01241] For method handleResponse arguments AbstractResponse  responseBody"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.InitProducerIdHandler@POLYN411327 the MagicNumber/String  'InitProducerId' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01271] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.coordinatorType@POLYN411907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01276] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01276] For method handleResponse list of called methods Object monObjet|Errors initProducerIdResponse_errorN412300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01285] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.handleResponse@POLYN412133 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01303] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.handleResponse@POLYN412133 the MagicNumber/String  'Unexpected error in InitProducerIdResponse; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01313] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.AddPartitionsToTxnHandler@POLYN414158 the MagicNumber/String  'AddPartitionsToTxn' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1329"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01329] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1329"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01329] For method handleResponse list of called methods Object monObjet|java.util.Map addPartitionsToTxnResponse_errorsN414866"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01337] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01338] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01332] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01367] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  'Did not attempt to add partition {} to transaction because other partitions in the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01368] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  'batch had errors.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01369] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01374] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  'Could not add partition {} due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01375] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01391] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  'Could not add partitions to transaction due to errors: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01393] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  'Successfully added partitions {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01395] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01421] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.FindCoordinatorHandler@POLYN418932 the MagicNumber/String  'FindCoordinator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01437] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.coordinatorType@POLYN419361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01442] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.coordinatorKey@POLYN419458 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1446"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01446] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1446"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01446] For method handleResponse list of called methods Object monObjet|V coordinators_getN420188"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01464"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1464"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[01464] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01450] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01451] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01452] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01454] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01456] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01469] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  'Discovered {} coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01477] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  'Could not find a coordinator with type %s with key %s due to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01478] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String  'unexpected error: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01487"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1487"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01487] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01488] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.EndTxnHandler@POLYN422158 the MagicNumber/String  'EndTxn(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01488] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.EndTxnHandler@POLYN422158 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01504] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.isEndTxn@POLYN422653 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01508] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01508] For method handleResponse list of called methods Object monObjet|Errors endTxnResponse_errorN422914"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01531] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.handleResponse@POLYN422747 the MagicNumber/String  'Unhandled error in EndTxnResponse: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01544] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.AddOffsetsToTxnHandler@POLYN424736 the MagicNumber/String  'AddOffsetsToTxn' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1561"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01561] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01566] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String  'Successfully added partition for consumer group {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1571"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01571] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01588] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String  'Unexpected error in AddOffsetsToTxnResponse: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01623] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01623] For method handleResponse list of called methods Object monObjet|java.util.Map txnOffsetCommitResponse_errorsN428510"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01632] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01633"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1633"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01633] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01625] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1628"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01628] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  'Received TxnOffsetCommit response for consumer group {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1640"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01640] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01655] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  'Transaction offset Commit failed ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01656] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  'due to consumer group metadata mismatch: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01662] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String  'Unexpected error in TxnOffsetCommitResponse: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1678"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01678] For method isFatalException arguments Errors  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00222] Public method initializeTransactions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00257] Public method beginCommit is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00250] Public method beginTransaction is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#610"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00610] Public method maybeTransitionToErrorState is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.clients.producer.internals.TransactionManager.this"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.adjustSequenceNumbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653.exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074.batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R8 : org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.tp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R9 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330.topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R10 : org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R11 : org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.increment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R12 : org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R13 : org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R14 : org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457.request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R15 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149.topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R16 : org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651.batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R17 : org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.batch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R18 : org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN377659"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN384122"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN382761"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01193] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String 'Detected more than one in-flight transactional request.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01197] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String 'Disconnected from {}. Will retry.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01201] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01204] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String 'Received transactional response {} for request {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01210] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN409047 the MagicNumber/String 'Could not execute transactional request for unknown reasons' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00451] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String 'Cannot reset producer state for a transactional producer. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00452] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String 'You must either abort the ongoing transaction or reinitialize the transactional producer instead' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#453"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00453] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN378077 the MagicNumber/String 'Resetting idempotent producer ID. ID and epoch before reset are {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00440] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN377659 the MagicNumber/String 'ProducerId set to {} with epoch {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00477] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00478] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String 'Incremented producer epoch, current producer ID and epoch are now {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#488"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00488] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN379086 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01332] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1367"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01367] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String 'Did not attempt to add partition {} to transaction because other partitions in the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01368] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String 'batch had errors.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1369"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01369] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01374] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String 'Could not add partition {} due to unexpected error {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01375] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1391"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01391] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String 'Could not add partitions to transaction due to errors: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01393] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String 'Successfully added partitions {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01395] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00388] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String 'Skipping transition to abortable error state since the transaction is already being ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String 'aborted. Underlying exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 the MagicNumber/String 'Transiting to abortable error state due to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00670] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String 'producerId: {}, send to partition {} failed fatally. Reducing future sequence numbers by {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00674] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00675] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String ' is going to become negative: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#675"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00675] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String 'Sequence number for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#684"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00684] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#685"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00685] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String 'Sequence number for batch with sequence ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#686"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00686] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String ' for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#686"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00686] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN387698 the MagicNumber/String ' is going to become negative: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01450] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1451"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01451] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 'Group coordinator lookup failed: Invalid response containing more than a single coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1452"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01452] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 'Group coordinator lookup failed: Invalid response containing more than a single coordinator' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01454"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1454"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01454] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01456] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01469"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1469"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01469] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 'Discovered {} coordinator {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1477"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01477] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 'Could not find a coordinator with type %s with key %s due to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1478"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01478] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN419552 the MagicNumber/String 'unexpected error: %s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1625"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01625] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01628"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1628"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01628] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String 'Received TxnOffsetCommit response for consumer group {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1640"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01640] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01655"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1655"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01655] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String 'Transaction offset Commit failed ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01656"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1656"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01656] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String 'due to consumer group metadata mismatch: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1662"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01662] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN428249 the MagicNumber/String 'Unexpected error in TxnOffsetCommitResponse: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#305"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00305] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String 'sendOffsetsToTransaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#309"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00309] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String 'Cannot send offsets if a transaction is not in progress ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00310] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String '-currentState= ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00310] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN372134 the MagicNumber/String 'Begin adding offsets {} for consumer group {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00775"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#775"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00775] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#776"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00776] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00780"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#780"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00780] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#784"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00784] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String 'Not sending transactional request {} because we are in an error state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#786"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00786] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00792"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#792"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00792] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String 'Not sending EndTxn for completed transaction since no partitions ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#793"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00793] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String 'or offsets were successfully added' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#799"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00799] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00800"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#800"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00800] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN393022 the MagicNumber/String 'Request {} dequeued for sending' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01566] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String 'Successfully added partition for consumer group {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1571"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01571] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01588"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1588"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01588] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN425369 the MagicNumber/String 'Unexpected error in AddOffsetsToTxnResponse: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1035"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01035] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1038"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01038] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01041] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN402704 the MagicNumber/String 'Invalid coordinator type: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00234] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String 'Invoking InitProducerId for the first time in order to acquire a producer ID' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String 'Invoking InitProducerId with current producer ID and epoch {} in order to bump the epoch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00247] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN368853 the MagicNumber/String 'initTransactions' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#329"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00329] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String 'send' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#333"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00333] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String 'Cannot add partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String ' to transaction before completing a call to initTransactions' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#336"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00336] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String 'Cannot add partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00337] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String ' to transaction while in state  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00341] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 the MagicNumber/String 'Begin adding new partition {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#584"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00584] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN384122 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00595"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#595"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00595] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN384122 the MagicNumber/String 'Partition {} keeps lastOffset at {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00972] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00972] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String ': ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00972] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String 'TransactionalId ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00972] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#973"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00973] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String 'Invalid transition attempted from state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00974"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#974"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00974] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String ' to state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00978"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#978"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00978] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00979] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String ' with a null exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#979"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00979] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String 'Cannot transition to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#982"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00982] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#985"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00985] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#986"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00986] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String 'Transition from state {} to error state {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00988"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#988"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00988] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN399708 the MagicNumber/String 'Transition from state {} to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 the MagicNumber/String 'ProducerId of partition {} set to {} with epoch {}. Reinitialize sequence at beginning.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00554"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#554"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00554] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN382761 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00709"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#709"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00709] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00711"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#711"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00711] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00712] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 the MagicNumber/String 'Marking partition {} unresolved with next sequence number {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
