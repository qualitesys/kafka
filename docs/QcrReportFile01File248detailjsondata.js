console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java 431 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.TransactionManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.TransactionManager" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TransactionManager"
 , "c2" : "TransactionManager(LogContext;String;int;long;ApiVersions)"
 , "c3" : "1"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "initializeTransactions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "initializeTransactions(ProducerIdAndEpoch)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginTransaction()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "beginCommit()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "beginAbort()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "beginCompletingTransaction(TransactionResult)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "sendOffsetsToTransaction(Map<TopicPartition,OffsetAndMetadata>;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeAddPartition(TopicPartition)"
 , "c3" : "8"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "RuntimeException"
 , "c2" : "lastError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSendToPartitionAllowed(TopicPartition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "transactionalId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasProducerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTransactional()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPartitionsToAdd()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isCompleting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isAborting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionToAbortableError(RuntimeException)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionToFatalError(RuntimeException)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPartitionAdded(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPartitionPendingAdd(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerIdAndEpoch"
 , "c2" : "producerIdAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeUpdateProducerIdAndEpoch(TopicPartition)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setProducerIdAndEpoch(ProducerIdAndEpoch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetIdempotentProducerId()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetSequenceForPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetSequenceNumbers()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestEpochBumpForPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bumpIdempotentProducerEpoch()"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bumpIdempotentEpochAndResetIdIfNeeded()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "sequenceNumber(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerIdAndEpoch"
 , "c2" : "producerIdAndEpoch(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "incrementSequenceNumber(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addInFlightBatch(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "firstInFlightSequence(TopicPartition)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ProducerBatch"
 , "c2" : "nextBatchBySequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeInFlightBatch(ProducerBatch)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maybeUpdateLastAckedSequence(TopicPartition;int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "OptionalInt"
 , "c2" : "lastAckedSequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "lastAckedOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateLastAckedOffset(ProduceResponse.PartitionResponse;ProducerBatch)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleCompletedBatch(ProducerBatch;ProduceResponse.PartitionResponse)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeTransitionToErrorState(RuntimeException)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleFailedBatch(ProducerBatch;RuntimeException;boolean)"
 , "c3" : "9"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "adjustSequencesDueToFailedBatch(ProducerBatch)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasInflightBatches(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasStaleProducerIdAndEpoch(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasUnresolvedSequences()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasUnresolvedSequence(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "markSequenceUnresolved(ProducerBatch)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeResolveSequences()"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isNextSequence(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNextSequence(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isNextSequenceForUnresolvedPartition(TopicPartition;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TxnRequestHandler"
 , "c2" : "nextRequest(boolean)"
 , "c3" : "8"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "retry(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "authenticationFailed(AuthenticationException)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Node"
 , "c2" : "coordinator(FindCoordinatorRequest.CoordinatorType)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "lookupCoordinator(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setInFlightCorrelationId(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearInFlightCorrelationId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasInFlightRequest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasFatalError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasAbortableError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "transactionContainsPartition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPendingOffsetCommits()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPendingRequests()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasOngoingTransaction()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canRetry(ProduceResponse.PartitionResponse;ProducerBatch)"
 , "c3" : "15"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isReady()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleCoordinatorReady()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionTo(State)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "transitionTo(State;RuntimeException)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureTransactional()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeFailWithError()"
 , "c3" : "6"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeTerminateRequestWithError(TxnRequestHandler)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enqueueRequest(TxnRequestHandler)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "lookupCoordinator(FindCoordinatorRequest.CoordinatorType;String)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "TxnRequestHandler"
 , "c2" : "addPartitionsToTransactionHandler()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "TxnOffsetCommitHandler"
 , "c2" : "txnOffsetCommitHandler(TransactionalRequestResult;Map<TopicPartition,OffsetAndMetadata>;ConsumerGroupMetadata)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwIfPendingState(String)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "TransactionalRequestResult"
 , "c2" : "handleCachedTransactionRequestResult(Supplier<TransactionalRequestResult>;State;String)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "canBumpEpoch()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeTransaction()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
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
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.clients.producer.internals.TransactionManager.this" }
,
{ "ligne" :  "R1:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.batch" }
,
{ "ligne" :  "R2:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.exception" }
,
{ "ligne" :  "R3:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.adjustSequenceNumbers" }
,
{ "ligne" :  "R4:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384001.exception" }
,
{ "ligne" :  "R5:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001.exception" }
,
{ "ligne" :  "R6:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381422.batch" }
,
{ "ligne" :  "R7:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377234.tp" }
,
{ "ligne" :  "R8:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379605.topicPartition" }
,
{ "ligne" :  "R9:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379605.increment" }
,
{ "ligne" :  "R10:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449.batch" }
,
{ "ligne" :  "R11:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449.response" }
,
{ "ligne" :  "R12:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678.topicPartition" }
,
{ "ligne" :  "R13:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497.topicPartition" }
,
{ "ligne" :  "R14:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN379999.batch" }
,
{ "ligne" :  "R15:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN392805.request" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 (R0 in line [00586],R1 in line [00586],R2 in line [00586],R3 in line [00586])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384001 (R0 in line [00572],R4 in line [00572])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 (R0 in line [00369],R5 in line [00369])" }
,
{ "ligne" : "S0:currentState==State.ABORTING_TRANSACTION" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 (R0 in line [00586],R1 in line [00586],R2 in line [00586],R3 in line [00586])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381422 (R0 in line [00519],R6 in line [00519])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN387710 (R0 in line [00654])" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 (R0 in line [00586],R1 in line [00586],R2 in line [00586],R3 in line [00586])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377234 (R0 in line [00440],R7 in line [00440])" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379605 (R0 in line [00489],R8 in line [00489],R9 in line [00489])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN379239 (R0 in line [00480])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150076" }
 ]
 } }
,
{ "sequence" : { "noseq" : "4" , "pas" : [
{ "ligne" : "S4:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449 (R0 in line [00561],R10 in line [00561],R11 in line [00561])" }
,
{ "ligne" : "S4:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN381714" }
 ]
 } }
,
{ "sequence" : { "noseq" : "5" , "pas" : [
{ "ligne" : "S5:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 (R0 in line [00310],R12 in line [00310])" }
,
{ "ligne" : "S5:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698" }
 ]
 } }
,
{ "sequence" : { "noseq" : "6" , "pas" : [
{ "ligne" : "S6:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497 (R0 in line [00404],R13 in line [00404])" }
,
{ "ligne" : "S6:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151411" }
 ]
 } }
,
{ "sequence" : { "noseq" : "7" , "pas" : [
{ "ligne" : "S7:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN379999 (R0 in line [00496],R14 in line [00496])" }
,
{ "ligne" : "S7:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN149684" }
 ]
 } }
,
{ "sequence" : { "noseq" : "8" , "pas" : [
{ "ligne" : "S8:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN392805 (R0 in line [00767],R15 in line [00767])" }
,
{ "ligne" : "S8:org.apache.kafka.clients.producer.internals.TransactionManager.enqueueRequest@POLYN400803" }
 ]
 } }
,
{ "sequence" : { "noseq" : "9" , "pas" : [
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 (R0 in line [00586],R1 in line [00586],R2 in line [00586],R3 in line [00586])" }
,
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384001 (R0 in line [00572],R4 in line [00572])" }
,
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 (R0 in line [00369],R5 in line [00369])" }
,
{ "ligne" : "S9:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 (R0 in line [00369],R5 in line [00369])" }
,
{ "ligne" : "S9:currentState==State.ABORTING_TRANSACTION" }
 ]
 } }
,
{ "sequence" : { "noseq" : "10" , "pas" : [
{ "ligne" : "S10:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449 (R0 in line [00561],R10 in line [00561],R11 in line [00561])" }
,
{ "ligne" : "S10:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381422 (R0 in line [00519],R6 in line [00519])" }
,
{ "ligne" : "S10:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN387710 (R0 in line [00654])" }
 ]
 } }
,
{ "sequence" : { "noseq" : "11" , "pas" : [
{ "ligne" : "S11:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 (R0 in line [00310],R12 in line [00310])" }
,
{ "ligne" : "S11:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 (R0 in line [00310],R12 in line [00310])" }
,
{ "ligne" : "S11:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698" }
 ]
 } }
,
{ "sequence" : { "noseq" : "12" , "pas" : [
{ "ligne" : "S12:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497 (R0 in line [00404],R13 in line [00404])" }
,
{ "ligne" : "S12:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497 (R0 in line [00404],R13 in line [00404])" }
,
{ "ligne" : "S12:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151411" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "45"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "190"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "64"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "49"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00074] The class TransactionManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN365438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN365438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.clients.producer.internals.TransactionManager.TransactionManager@POLYN365438 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#205"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00205] Lock statement on synchronized method initializeTransactions"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#209"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00209] Lock statement on synchronized method initializeTransactions"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method initializeTransactions arguments ProducerIdAndEpoch  producerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN367201 the MagicNumber/String  'Invoking InitProducerId for the first time in order to acquire a producer ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN367201 the MagicNumber/String  'Invoking InitProducerId with current producer ID and epoch {} in order to bump the epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.clients.producer.internals.TransactionManager.initializeTransactions@POLYN367201 the MagicNumber/String  'initTransactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#233"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00233] Lock statement on synchronized method beginTransaction"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginTransaction@POLYN368370 the MagicNumber/String  'beginTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#240"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00240] Lock statement on synchronized method beginCommit"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginCommit@POLYN368648 the MagicNumber/String  'commitTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#248"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00248] Lock statement on synchronized method beginAbort"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.producer.internals.TransactionManager.beginAbort@POLYN369031 the MagicNumber/String  'abortTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method beginCompletingTransaction arguments TransactionResult  transactionResult"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#260"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00260] The argument transactionResult is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#285"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00285] Lock statement on synchronized method sendOffsetsToTransaction"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method sendOffsetsToTransaction arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#286"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00286] The argument groupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String  'sendOffsetsToTransaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String  'Cannot send offsets if a transaction is not in progress ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String  '(currentState= ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String  'Begin adding offsets {} for consumer group {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00310] Lock statement on synchronized method maybeAddPartition"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method maybeAddPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  'send' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  'Cannot add partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  ' to transaction before completing a call to initTransactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  'Cannot add partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  ' to transaction while in state  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String  'Begin adding new partition {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#335"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00335] Lock statement on synchronized method isSendToPartitionAllowed"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method isSendToPartitionAllowed arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.clients.producer.internals.TransactionManager.isSendToPartitionAllowed@POLYN372818 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.clients.producer.internals.TransactionManager.isTransactional@POLYN373281 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#353"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00353] Lock statement on synchronized method hasPartitionsToAdd"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#357"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00357] Lock statement on synchronized method isCompleting"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#361"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00361] Lock statement on synchronized method hasError"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#365"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00365] Lock statement on synchronized method isAborting"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#369"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00369] Lock statement on synchronized method transitionToAbortableError"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method transitionToAbortableError arguments RuntimeException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#369"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00369] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String  'Skipping transition to abortable error state since the transaction is already being ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String  'aborted. Underlying exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String  'Transiting to abortable error state due to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#380"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00380] Lock statement on synchronized method transitionToFatalError"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#380"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00380] For method transitionToFatalError arguments RuntimeException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#380"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00380] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374487 the MagicNumber/String  'Transiting to fatal error state due to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#390"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00390] Lock statement on synchronized method isPartitionAdded"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#390"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00390] For method isPartitionAdded arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#395"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00395] Lock statement on synchronized method isPartitionPendingAdd"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00395] For method isPartitionPendingAdd arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#404"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00404] Lock statement on synchronized method maybeUpdateProducerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#404"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00404] For method maybeUpdateProducerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497 the MagicNumber/String  'ProducerId of partition {} set to {} with epoch {}. Reinitialize sequence at beginning.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#415"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00415] For method setProducerIdAndEpoch arguments ProducerIdAndEpoch  producerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#415"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00415] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN376007 the MagicNumber/String  'ProducerId set to {} with epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String  'Cannot reset producer state for a transactional producer. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String  'You must either abort the ongoing transaction or reinitialize the transactional producer instead' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00425] In method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String  'Resetting idempotent producer ID. ID and epoch before reset are {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method resetSequenceForPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#440"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00440] Lock statement on synchronized method requestEpochBumpForPartition"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method requestEpochBumpForPartition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377234 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String  'Incremented producer epoch, current producer ID and epoch are now {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#463"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00463] Lock statement on synchronized method bumpIdempotentEpochAndResetIdIfNeeded"
}} 
,
{ "ligne" : {
   "c1" : "00471"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00471] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentEpochAndResetIdIfNeeded@POLYN378378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#473"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00473] In method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentEpochAndResetIdIfNeeded@POLYN378378 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#480"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00480] Lock statement on synchronized method sequenceNumber"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00480] For method sequenceNumber arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#485"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00485] Lock statement on synchronized method producerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#485"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00485] For method producerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#489"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00489] Lock statement on synchronized method incrementSequenceNumber"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#489"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00489] For method incrementSequenceNumber arguments TopicPartition  topicPartition|int  increment"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#489"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00489] For method incrementSequenceNumber list of called methods Object monObjet|Integer sequenceNumberN379723|int DefaultRecordBatch_incrementSequenceN379808|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN379901"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#496"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00496] Lock statement on synchronized method addInFlightBatch"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#496"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00496] For method addInFlightBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#496"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00496] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN379999 the MagicNumber/String  'Can't track batch for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN379999 the MagicNumber/String  ' when sequence is not set.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#503"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00503] Lock statement on synchronized method firstInFlightSequence"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#503"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00503] For method firstInFlightSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#503"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00503] For method firstInFlightSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN380856"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#514"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00514] Lock statement on synchronized method nextBatchBySequence"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#514"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00514] For method nextBatchBySequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#514"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00514] For method nextBatchBySequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN381227"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#516"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00516] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN381109 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#519"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00519] Lock statement on synchronized method removeInFlightBatch"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#519"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00519] For method removeInFlightBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#519"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00519] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#525"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00525] For method maybeUpdateLastAckedSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#525"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00525] For method maybeUpdateLastAckedSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN382009"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#535"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00535] Lock statement on synchronized method lastAckedSequence"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#535"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00535] For method lastAckedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#539"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00539] Lock statement on synchronized method lastAckedOffset"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#539"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00539] For method lastAckedOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00543] For method updateLastAckedOffset arguments ProduceResponse.PartitionResponse  response|ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00543] For method updateLastAckedOffset list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN383191"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#543"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00543] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#543"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00543] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#546"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00546] In method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN382470 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN382470 the MagicNumber/String  'Partition {} keeps lastOffset at {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#561"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00561] Lock statement on synchronized method handleCompletedBatch"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#561"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00561] For method handleCompletedBatch arguments ProducerBatch  batch|ProduceResponse.PartitionResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#561"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00561] For method handleCompletedBatch list of called methods Object monObjet|int maybeUpdateLastAckedSequenceN383575"
}} 
,
{ "ligne" : {
   "c1" : "00561"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#561"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00561] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449 the MagicNumber/String  'ProducerId: {}; Set last ack'd sequence number for topic-partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#572"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00572] Lock statement on synchronized method maybeTransitionToErrorState"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#572"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00572] For method maybeTransitionToErrorState arguments RuntimeException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#586"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00586] Lock statement on synchronized method handleFailedBatch"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#586"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00586] For method handleFailedBatch arguments ProducerBatch  batch|RuntimeException  exception|boolean  adjustSequenceNumbers"
}} 
,
{ "ligne" : {
   "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#586"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00586] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00591"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00591] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 the MagicNumber/String  'Ignoring batch {} with producer id {}, epoch {}, and sequence number {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 the MagicNumber/String  'since the producer is already in fatal error state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00598"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#598"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00598] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596 the MagicNumber/String  'The broker returned {} for topic-partition {} with producerId {}, epoch {}, and sequence number {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#626"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00626] For method adjustSequencesDueToFailedBatch arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#626"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00626] For method adjustSequencesDueToFailedBatch list of called methods Object monObjet|Integer sequenceNumberN386418"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#627"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00627] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00632] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  'producerId: {}, send to partition {} failed fatally. Reducing future sequence numbers by {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00637] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  'Sequence number for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#637"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00637] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  ' is going to become negative: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  'Sequence number for batch with sequence ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  ' for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String  ' is going to become negative: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#654"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00654] Lock statement on synchronized method hasInflightBatches"
}} 
,
{ "ligne" : {
   "c1" : "00654"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#654"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00654] For method hasInflightBatches arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#658"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00658] Lock statement on synchronized method hasStaleProducerIdAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00658"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#658"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00658] For method hasStaleProducerIdAndEpoch arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#662"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00662] Lock statement on synchronized method hasUnresolvedSequences"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#666"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00666] Lock statement on synchronized method hasUnresolvedSequence"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#666"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00666] For method hasUnresolvedSequence arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00670] Lock statement on synchronized method markSequenceUnresolved"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00670] For method markSequenceUnresolved arguments ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00670] For method markSequenceUnresolved list of called methods Object monObjet|int batch_lastSequenceN388452"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#670"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00670] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00673] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String  'Marking partition {} unresolved with next sequence number {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#680"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00680] Lock statement on synchronized method maybeResolveSequences"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00682] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00694] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00698] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00702] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00694"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00694] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'The client hasn't received acknowledgment for some previously ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00695"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#695"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00695] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'sent messages and can no longer retry them. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'It is safe to abort ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'the transaction and continue.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'It isn't safe to continue.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#707"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00707] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'No inflight batches remaining for {}, last ack'd sequence for partition is {}, next sequence is {}. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#708"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00708] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN388965 the MagicNumber/String  'Going to bump epoch and reset sequence numbers.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00719"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#719"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00719] For method isNextSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {
   "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.clients.producer.internals.TransactionManager.isNextSequence@POLYN390665 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#723"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00723] For method setNextSequence arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {
   "c1" : "00723"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#723"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00723] For method setNextSequence list of called methods Object monObjet|org.apache.kafka.clients.producer.internals.TxnPartitionEntry txnPartitionMap_getN391001"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#727"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00727] For method isNextSequenceForUnresolvedPartition arguments TopicPartition  topicPartition|int  sequence"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#732"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00732] Lock statement on synchronized method nextRequest"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#732"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00732] For method nextRequest arguments boolean  hasIncompleteBatches"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#737"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00737] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#738"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00738] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#742"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00742] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#746"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00746] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  'Not sending transactional request {} because we are in an error state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  'Not sending EndTxn for completed transaction since no partitions ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  'or offsets were successfully added' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00761"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#761"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00761] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#762"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00762] In method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String  'Request {} dequeued for sending' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#767"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00767] Lock statement on synchronized method retry"
}} 
,
{ "ligne" : {
   "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#767"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00767] For method retry arguments TxnRequestHandler  request"
}} 
,
{ "ligne" : {
   "c1" : "00767"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#767"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00767] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#772"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00772] Lock statement on synchronized method authenticationFailed"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#772"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00772] For method authenticationFailed arguments AuthenticationException  e"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#777"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00777] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.clients.producer.internals.TransactionManager.close@POLYN393176 the MagicNumber/String  'The producer closed forcefully' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00781"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#781"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00781] In method org.apache.kafka.clients.producer.internals.TransactionManager.close@POLYN393176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#786"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00786] For method coordinator arguments FindCoordinatorRequest.CoordinatorType  type"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#793"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00793] In method org.apache.kafka.clients.producer.internals.TransactionManager.coordinator@POLYN393606 the MagicNumber/String  'Received an invalid coordinator type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#797"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00797] For method lookupCoordinator arguments TxnRequestHandler  request"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#797"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00797] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00801"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#801"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00801] For method setInFlightCorrelationId arguments int  correlationId"
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#824"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00824] Lock statement on synchronized method transactionContainsPartition"
}} 
,
{ "ligne" : {
   "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#824"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00824] For method transactionContainsPartition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#829"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00829] Lock statement on synchronized method hasPendingOffsetCommits"
}} 
,
{ "ligne" : {
   "c1" : "00833"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#833"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00833] Lock statement on synchronized method hasPendingRequests"
}} 
,
{ "ligne" : {
   "c1" : "00838"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#838"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00838] Lock statement on synchronized method hasOngoingTransaction"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#843"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00843] Lock statement on synchronized method canRetry"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#843"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00843] For method canRetry arguments ProduceResponse.PartitionResponse  response|ProducerBatch  batch"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#843"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00843] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#843"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00843] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#853"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00853] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00855"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#855"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00855] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00867"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#867"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00867] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00880"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#880"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00880] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#887"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00887] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00894"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#894"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00894] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00904] In method org.apache.kafka.clients.producer.internals.TransactionManager.canRetry@POLYN395256 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#913"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00913] Lock statement on synchronized method isReady"
}} 
,
{ "ligne" : {
   "c1" : "00918"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#918"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00918] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00921] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00923] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#925"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00925] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCoordinatorReady@POLYN397355 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#928"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00928] For method transitionTo arguments State  target"
}} 
,
{ "ligne" : {
   "c1" : "00929"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#929"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00929] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN397906 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#932"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00932] For method transitionTo arguments State  target|RuntimeException  error"
}} 
,
{ "ligne" : {
   "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#932"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00932] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00934] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00934] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00934] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  'TransactionalId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00934"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00934] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00935"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00935] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  'Invalid transition attempted from state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00936"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00936] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  ' to state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00940"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#940"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00940] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  'Cannot transition to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  ' with a null exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#944"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00944] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00947"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  'Transition from state {} to error state {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00950"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.clients.producer.internals.TransactionManager.transitionTo@POLYN398056 the MagicNumber/String  'Transition from state {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00957"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#957"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00957] In method org.apache.kafka.clients.producer.internals.TransactionManager.ensureTransactional@POLYN399529 the MagicNumber/String  'Transactional method invoked on a non-transactional producer.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00965] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  'Producer with transactionalId '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  '' and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  ' has been fenced by another producer ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  'with the same transactionalId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00969"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  'Producer with transactionalId '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#970"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00970] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  '' and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00970"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#970"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00970] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  ' attempted to produce with an old epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN399698 the MagicNumber/String  'Cannot execute transactional method because we are in an error state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#977"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00977] For method maybeTerminateRequestWithError arguments TxnRequestHandler  requestHandler"
}} 
,
{ "ligne" : {
   "c1" : "00977"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#977"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00977] The argument requestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN400412 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00984] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN400412 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00986"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00986] In method org.apache.kafka.clients.producer.internals.TransactionManager.maybeTerminateRequestWithError@POLYN400412 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#989"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00989] For method enqueueRequest arguments TxnRequestHandler  requestHandler"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#989"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00989] The argument requestHandler is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00990"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#990"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00990] In method org.apache.kafka.clients.producer.internals.TransactionManager.enqueueRequest@POLYN400803 the MagicNumber/String  'Enqueuing transactional request {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#994"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00994] For method lookupCoordinator arguments FindCoordinatorRequest.CoordinatorType  type|String  coordinatorKey"
}} 
,
{ "ligne" : {
   "c1" : "00994"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#994"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00994] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN401052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01000"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN401052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01003"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.clients.producer.internals.TransactionManager.lookupCoordinator@POLYN401052 the MagicNumber/String  'Invalid coordinator type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1024"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01024] For method txnOffsetCommitHandler arguments TransactionalRequestResult  result|Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|ConsumerGroupMetadata  groupMetadata"
}} 
,
{ "ligne" : {
   "c1" : "01025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1025"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01025] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1026"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01026] The argument groupMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01028] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1029"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01029] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1047"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01047] For method throwIfPendingState arguments String  operation"
}} 
,
{ "ligne" : {
   "c1" : "01048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1048"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01048] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1050"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01050] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  'Cannot attempt operation `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1052"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01052] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  'because the previous call to `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1054"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01054] In method org.apache.kafka.clients.producer.internals.TransactionManager.throwIfPendingState@POLYN403527 the MagicNumber/String  'timed out and must be retried' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1059"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01059] For method handleCachedTransactionRequestResult arguments Supplier&lt;TransactionalRequestResult &gt;  transactionalRequestResultSupplier|State  nextState|String  operation"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1060"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01060] The argument transactionalRequestResultSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1066"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01066] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1068"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01068] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  'Cannot attempt operation `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01070] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01071] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  'because the previous call to `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1071"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01071] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  '` ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1072"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01072] In method org.apache.kafka.clients.producer.internals.TransactionManager.handleCachedTransactionRequestResult@POLYN404050 the MagicNumber/String  'timed out and must be retried' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1086"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01086] In method org.apache.kafka.clients.producer.internals.TransactionManager.canBumpEpoch@POLYN405051 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1098"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01098] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN405237 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01099] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN405237 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.clients.producer.internals.TransactionManager.completeTransaction@POLYN405237 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01106] The class TxnRequestHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01118] For method fatalError arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "01123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01123] For method abortableError arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "01128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01128] For method abortableErrorIfPossible arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.abortableErrorIfPossible@POLYN406622 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01137] For method fail arguments RuntimeException  e"
}} 
,
{ "ligne" : {
   "c1" : "01142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1142"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01142] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.reenqueue@POLYN407074 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01153] For method onComplete arguments ClientResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01153] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1168"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01168] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN407395 the MagicNumber/String  'Detected more than one in-flight transactional request.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01159] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN407395 the MagicNumber/String  'Disconnected from {}. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01163] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN407395 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01166] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN407395 the MagicNumber/String  'Received transactional response {} for request {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01172] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.onComplete@POLYN407395 the MagicNumber/String  'Could not execute transactional request for unknown reasons' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01178] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.needsCoordinator@POLYN408802 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01190] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN409097 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01198] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.isEndTxn@POLYN409288 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01203] For method handleResponse arguments AbstractResponse  responseBody"
}} 
,
{ "ligne" : {
   "c1" : "01213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01213] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.InitProducerIdHandler@POLYN409675 the MagicNumber/String  'InitProducerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01233] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.coordinatorType@POLYN410255 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01238] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01247] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.handleResponse@POLYN410481 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01265] In method org.apache.kafka.clients.producer.internals.TransactionManager.InitProducerIdHandler.handleResponse@POLYN410481 the MagicNumber/String  'Unexpected error in InitProducerIdResponse; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01275] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.AddPartitionsToTxnHandler@POLYN412506 the MagicNumber/String  'AddPartitionsToTxn' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01291] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01299] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01300] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01294] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01329] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  'Did not attempt to add partition {} to transaction because other partitions in the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01330] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  'batch had errors.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01336] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  'Could not add partition {} due to unexpected error {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01337] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01353] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  'Could not add partitions to transaction due to errors: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01355] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  'Successfully added partitions {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01357] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413010 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01383] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.FindCoordinatorHandler@POLYN417280 the MagicNumber/String  'FindCoordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01399] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.coordinatorType@POLYN417709 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.coordinatorKey@POLYN417806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1408"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01408] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1426"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[01426] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "01412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01412] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01413] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01414] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01416] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01418] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01431] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  'Discovered {} coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01439"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01439] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  'Could not find a coordinator with type %s with key %s due to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01440] In method org.apache.kafka.clients.producer.internals.TransactionManager.FindCoordinatorHandler.handleResponse@POLYN417900 the MagicNumber/String  'unexpected error: %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1449"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01449] The argument builder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01450] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.EndTxnHandler@POLYN420506 the MagicNumber/String  'EndTxn(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01450] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.EndTxnHandler@POLYN420506 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01466"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1466"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01466] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.isEndTxn@POLYN421001 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01470] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01493] In method org.apache.kafka.clients.producer.internals.TransactionManager.EndTxnHandler.handleResponse@POLYN421095 the MagicNumber/String  'Unhandled error in EndTxnResponse: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01506] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.AddOffsetsToTxnHandler@POLYN423084 the MagicNumber/String  'AddOffsetsToTxn' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01523"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1523"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01523] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01528] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN423717 the MagicNumber/String  'Successfully added partition for consumer group {} to transaction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1533"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01533] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN423717 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1550"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01550] In method org.apache.kafka.clients.producer.internals.TransactionManager.AddOffsetsToTxnHandler.handleResponse@POLYN423717 the MagicNumber/String  'Unexpected error in AddOffsetsToTxnResponse: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01585"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01585] For method handleResponse arguments AbstractResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "01594"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1594"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01594] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01595"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01595] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01587"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01587] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01590"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1590"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01590] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  'Received TxnOffsetCommit response for consumer group {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1602"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01602] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01617"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1617"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01617] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  'Transaction offset Commit failed ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01618] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  'due to consumer group metadata mismatch: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01624"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1624"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01624] In method org.apache.kafka.clients.producer.internals.TransactionManager.TxnOffsetCommitHandler.handleResponse@POLYN426597 the MagicNumber/String  'Unexpected error in TxnOffsetCommitResponse: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01640"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1640"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01640] For method isFatalException arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "01647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01647] The class PendingStateTransition contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00205] Public method initializeTransactions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#240"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00240] Public method beginCommit is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00233] Public method beginTransaction is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00572"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#572"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00572] Public method maybeTransitionToErrorState is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.clients.producer.internals.TransactionManager.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.batch"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.exception"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384596.adjustSequenceNumbers"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384001.exception"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001.exception"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381422.batch"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377234.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R8 : org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379605.topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R9 : org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379605.increment"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R10 : org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449.batch"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R11 : org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383449.response"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R12 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678.topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R13 : org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497.topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R14 : org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN379999.batch"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R15 : org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN392805.request"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN376007"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN382470"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN381109"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00423] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String 'Cannot reset producer state for a transactional producer. ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String 'You must either abort the ongoing transaction or reinitialize the transactional producer instead' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00425"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#425"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00425] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.resetIdempotentProducerId@POLYN376425 the MagicNumber/String 'Resetting idempotent producer ID. ID and epoch before reset are {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.setProducerIdAndEpoch@POLYN376007 the MagicNumber/String 'ProducerId set to {} with epoch {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00449"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#449"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00449] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#450"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00450] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String 'Incremented producer epoch, current producer ID and epoch are now {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#460"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00460] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377434 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00737"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#737"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00737] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00738"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#738"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00738] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#742"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00742] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00746"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#746"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00746] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String 'Not sending transactional request {} because we are in an error state' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#748"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00748] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#754"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00754] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String 'Not sending EndTxn for completed transaction since no partitions ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00755] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String 'or offsets were successfully added' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00761"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#761"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00761] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00762"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#762"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00762] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextRequest@POLYN391370 the MagicNumber/String 'Request {} dequeued for sending' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00371] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String 'Skipping transition to abortable error state since the transaction is already being ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#372"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00372] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String 'aborted. Underlying exception: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00376] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374001 the MagicNumber/String 'Transiting to abortable error state due to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00632] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String 'producerId: {}, send to partition {} failed fatally. Reducing future sequence numbers by {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00636] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00637] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String ' is going to become negative: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#637"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00637] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String 'Sequence number for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#646"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00646] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00647"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#647"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00647] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String 'Sequence number for batch with sequence ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00648] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String ' for partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00648] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.adjustSequencesDueToFailedBatch@POLYN386046 the MagicNumber/String ' is going to become negative: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00546"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#546"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00546] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN382470 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#557"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00557] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.updateLastAckedOffset@POLYN382470 the MagicNumber/String 'Partition {} keeps lastOffset at {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String 'sendOffsetsToTransaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00292] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String 'Cannot send offsets if a transaction is not in progress ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String '-currentState= ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String '-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00296] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.sendOffsetsToTransaction@POLYN370482 the MagicNumber/String 'Begin adding offsets {} for consumer group {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00312] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String 'send' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#316"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00316] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String 'Cannot add partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00317] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String ' to transaction before completing a call to initTransactions' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#319"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00319] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String 'Cannot add partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String ' to transaction while in state  ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN371678 the MagicNumber/String 'Begin adding new partition {} to transaction' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#409"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00409] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375497 the MagicNumber/String 'ProducerId of partition {} set to {} with epoch {}. Reinitialize sequence at beginning.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00516"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#516"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00516] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.nextBatchBySequence@POLYN381109 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#671"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00671] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#673"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00673] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/TransactionManager.java.html#674"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00674] In the recursive method org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN388359 the MagicNumber/String 'Marking partition {} unresolved with next sequence number {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
